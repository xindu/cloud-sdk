/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */

import {
  ClassDeclarationStructure,
  PropertyDeclarationStructure,
  StructureKind
} from 'ts-morph';
import {
  getComplexTypeFieldDescription,
  getComplexTypePropertyDescription
} from '../typedoc';
import { VdmComplexType, VdmProperty } from '../vdm-types';
import {
  getGenericParameters,
  createPropertyFieldInitializer
} from '../generator-utils';

export function fieldTypeClass(
  complexType: VdmComplexType
): ClassDeclarationStructure {
  return {
    kind: StructureKind.Class,
    name: `${complexType.fieldType}<EntityT extends Entity>`,
    extends: `ComplexTypeField<EntityT, ${complexType.typeName}>`,
    isExported: true,
    properties: properties(complexType),
    docs: [getComplexTypeFieldDescription(complexType)],
    ctors: [
      {
        parameters: [
          {
            name: 'fieldName',
            type: 'string'
          },
          {
            name: 'fieldOf',
            type: `ConstructorOrField<EntityT, ${complexType.typeName}>`
          }
        ],
        docs: [
          `\nCreates an instance of ${complexType.fieldType}.\n\n@param fieldName - Actual name of the field as used in the OData request.\n@param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.`
        ],
        statements: [`super(fieldName, fieldOf, ${complexType.typeName});`]
      }
    ]
  };
}

function properties(
  complexType: VdmComplexType
): PropertyDeclarationStructure[] {
  return complexType.properties.map((prop: VdmProperty) =>
    property(prop, complexType)
  );
}

function property(
  prop: VdmProperty,
  complexType: VdmComplexType
): PropertyDeclarationStructure {
  return {
    kind: StructureKind.Property,
    name: prop.instancePropertyName,
    type: `${prop.fieldType}<${getGenericParameters('EntityT', prop)}>`,
    initializer: createPropertyFieldInitializer(prop, 'this'),
    docs: [getComplexTypePropertyDescription(prop, complexType.typeName)]
  };
}
