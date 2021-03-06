/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */

import { MapType, createLogger } from '@sap-cloud-sdk/util';
import { toStaticPropertyFormat } from '../../util';
import {
  Constructable,
  EdmTypeField,
  OneToOneLink,
  Link,
  ComplexTypeField,
  CollectionField,
  EntityBase,
  ComplexTypeNamespace,
  isComplexTypeNameSpace,
  EdmTypeShared,
  isEdmType
} from '../common';
import { PropertyMetadata } from '../v2';

const logger = createLogger({
  package: 'core',
  messageContext: 'entity-serializer'
});

// eslint-disable-next-line valid-jsdoc
/**
 * @experimental This is experimental and is subject to change. Use with caution.
 */
export function entitySerializer(tsToEdm) {
  /**
   * Converts an instance of an entity class into a JSON payload to be sent to an OData service.
   *
   * @param entity - An instance of an entity.
   * @param entityConstructor - The constructor function of that entity.
   * @returns JSON.
   */
  function serializeEntity<EntityT extends EntityBase>(
    entity: EntityT,
    entityConstructor: Constructable<EntityT>
  ): MapType<any> {
    return {
      ...serializeEntityNonCustomFields(entity, entityConstructor),
      ...entity.getCustomFields()
    };
  }

  function serializeField(field: any, fieldValue: any): any {
    if (fieldValue === null || fieldValue === undefined) {
      return null;
    }
    if (field instanceof EdmTypeField) {
      return tsToEdm(fieldValue, field.edmType);
    }
    if (field instanceof OneToOneLink) {
      return serializeEntityNonCustomFields(fieldValue, field._linkedEntity);
    }
    if (field instanceof Link) {
      return fieldValue.map(linkedEntity =>
        serializeEntityNonCustomFields(linkedEntity, field._linkedEntity)
      );
    }
    if (field instanceof ComplexTypeField) {
      if (field._complexType) {
        return serializeComplexType(fieldValue, field._complexType);
      }
      return serializeComplexTypeFieldLegacy(field, fieldValue);
    }
    if (field instanceof CollectionField) {
      return serializeCollection(fieldValue, field._fieldType);
    }
  }

  /**
   * Converts an instance of an entity class into a JSON payload to be sent to an OData service, ignoring custom fields.
   *
   * @param entity - An instance of an entity.
   * @param entityConstructor - The constructor function of that entity.
   * @returns JSON.
   */
  function serializeEntityNonCustomFields<EntityT extends EntityBase>(
    entity: EntityT,
    entityConstructor: Constructable<EntityT>
  ): MapType<any> {
    if (!entity) {
      return {};
    }
    return Object.keys(entity).reduce((serialized, key) => {
      const field = entityConstructor[toStaticPropertyFormat(key)];
      const fieldValue = entity[key];

      const serializedValue = serializeField(field, fieldValue);

      if (typeof serializedValue === 'undefined') {
        logger.warn(
          `Could not serialize value for unknown field: ${field}. Skipping field.`
        );
        return serialized;
      }

      return { ...serialized, [field._fieldName]: serializedValue };
    }, {});
  }

  // TODO: get rid of this function in v2.0
  function serializeComplexTypeFieldLegacy<EntityT extends EntityBase>(
    complexTypeField: ComplexTypeField<EntityT>,
    fieldValue: any
  ): any {
    logger.warn(
      'It seems that you are using an outdated OData client. To make this warning disappear, please regenerate your client using the latest version of the SAP Cloud SDK generator.'
    );
    return Object.entries(complexTypeField)
      .filter(
        ([propertyKey, propertyValue]) =>
          (propertyValue instanceof EdmTypeField ||
            propertyValue instanceof ComplexTypeField) &&
          typeof fieldValue[propertyKey] !== 'undefined'
      )
      .reduce(
        (complexTypeObject, [propertyKey, propertyValue]) => ({
          ...complexTypeObject,
          [propertyValue._fieldName]:
            propertyValue instanceof EdmTypeField
              ? tsToEdm(fieldValue[propertyKey], propertyValue.edmType)
              : serializeComplexTypeFieldLegacy(
                  propertyValue,
                  fieldValue[propertyKey]
                )
        }),
        {}
      );
  }

  function serializeComplexTypeProperty(
    propertyValue: any,
    propertyMetadata: PropertyMetadata
  ): any {
    if (propertyMetadata.isCollection) {
      return serializeCollection(propertyValue, propertyMetadata.type);
    }

    if (isComplexTypeNameSpace(propertyMetadata.type)) {
      return serializeComplexType(propertyValue, propertyMetadata.type);
    }

    return tsToEdm(propertyValue, propertyMetadata.type);
  }

  function serializeComplexType<
    ComplexTypeNamespaceT extends ComplexTypeNamespace<any>
  >(fieldValue: any, complexType: ComplexTypeNamespaceT): any {
    return complexType._propertyMetadata
      .map(property => ({
        ...(typeof fieldValue[property.name] !== 'undefined' && {
          [property.originalName]: serializeComplexTypeProperty(
            fieldValue[property.name],
            property
          )
        })
      }))
      .reduce(
        (complexTypeObject, property) => ({
          ...complexTypeObject,
          ...property
        }),
        {}
      );
  }

  function serializeCollection<
    FieldT extends EdmTypeShared<'any'> | Record<string, any>
  >(fieldValue: any[], fieldType: FieldT) {
    if (isEdmType(fieldType)) {
      return fieldValue.map(val => tsToEdm(val, fieldType));
    }
    if (isComplexTypeNameSpace(fieldType)) {
      return fieldValue.map(val => serializeComplexType(val, fieldType));
    }
  }

  return {
    serializeEntity,
    serializeComplexType,
    serializeEntityNonCustomFields
  };
}
