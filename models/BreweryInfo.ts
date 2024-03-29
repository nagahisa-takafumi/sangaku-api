/* tslint:disable */
/* eslint-disable */
/**
 * sangaku
 * 産学連携のAPIです
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BreweryInfo
 */
export interface BreweryInfo {
    /**
     * 
     * @type {number}
     * @memberof BreweryInfo
     */
    bId: number;
    /**
     * 
     * @type {string}
     * @memberof BreweryInfo
     */
    bName: string;
    /**
     * 
     * @type {string}
     * @memberof BreweryInfo
     */
    bAddress: string;
    /**
     * 
     * @type {string}
     * @memberof BreweryInfo
     */
    bMail: string;
    /**
     * 
     * @type {string}
     * @memberof BreweryInfo
     */
    bDescription: string;
}

/**
 * Check if a given object implements the BreweryInfo interface.
 */
export function instanceOfBreweryInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "bId" in value;
    isInstance = isInstance && "bName" in value;
    isInstance = isInstance && "bAddress" in value;
    isInstance = isInstance && "bMail" in value;
    isInstance = isInstance && "bDescription" in value;

    return isInstance;
}

export function BreweryInfoFromJSON(json: any): BreweryInfo {
    return BreweryInfoFromJSONTyped(json, false);
}

export function BreweryInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BreweryInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bId': json['B_id'],
        'bName': json['B_name'],
        'bAddress': json['B_address'],
        'bMail': json['B_mail'],
        'bDescription': json['B_description'],
    };
}

export function BreweryInfoToJSON(value?: BreweryInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'B_id': value.bId,
        'B_name': value.bName,
        'B_address': value.bAddress,
        'B_mail': value.bMail,
        'B_description': value.bDescription,
    };
}

