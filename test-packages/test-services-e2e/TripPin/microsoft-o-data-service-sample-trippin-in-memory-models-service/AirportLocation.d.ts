import { City, CityField } from './City';
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, Entity, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core/v4';
/**
 * AirportLocation
 */
export interface AirportLocation {
    /**
     * Address.
     * @nullable
     */
    address?: string;
    /**
     * City.
     * @nullable
     */
    city?: City;
}
/**
 * @deprecated Since v1.6.0. Use [[AirportLocation.build]] instead.
 */
export declare function createAirportLocation(json: any): AirportLocation;
/**
 * AirportLocationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AirportLocationField<EntityT extends Entity> extends ComplexTypeField<EntityT, AirportLocation> {
    /**
     * Representation of the [[AirportLocation.address]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    address: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AirportLocation.city]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    city: CityField<EntityT>;
    /**
     * Creates an instance of AirportLocationField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT, AirportLocation>);
}
export declare namespace AirportLocation {
    /**
     * Metadata information on all properties of the `AirportLocation` complex type.
     */
    const _propertyMetadata: PropertyMetadata[];
    /**
     * Type reference to the according complex type.
     */
    const _complexType: AirportLocation;
    /**
     * @deprecated Since v1.25.0. Use [[deserializeComplexType]] instead.
     */
    function build(json: {
        [keys: string]: FieldType | City;
    }): AirportLocation;
}
//# sourceMappingURL=AirportLocation.d.ts.map