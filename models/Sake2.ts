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
 * @interface Sake2
 */
export interface Sake2 {
    /**
     * 
     * @type {number}
     * @memberof Sake2
     */
    sKId: number;
    /**
     * 
     * @type {string}
     * @memberof Sake2
     */
    sKName: string;
    /**
     * 
     * @type {number}
     * @memberof Sake2
     */
    sKPrice: number;
    /**
     * 
     * @type {number}
     * @memberof Sake2
     */
    sKTaste: number;
    /**
     * 
     * @type {string}
     * @memberof Sake2
     */
    sKTName: string;
    /**
     * 
     * @type {string}
     * @memberof Sake2
     */
    sKImgFilePath: string;
}

/**
 * Check if a given object implements the Sake2 interface.
 */
export function instanceOfSake2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sKId" in value;
    isInstance = isInstance && "sKName" in value;
    isInstance = isInstance && "sKPrice" in value;
    isInstance = isInstance && "sKTaste" in value;
    isInstance = isInstance && "sKTName" in value;
    isInstance = isInstance && "sKImgFilePath" in value;

    return isInstance;
}

export function Sake2FromJSON(json: any): Sake2 {
    return Sake2FromJSONTyped(json, false);
}

export function Sake2FromJSONTyped(json: any, ignoreDiscriminator: boolean): Sake2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sKId': json['SK_id'],
        'sKName': json['SK_name'],
        'sKPrice': json['SK_price'],
        'sKTaste': json['SK_taste'],
        'sKTName': json['SKT_name'],
        'sKImgFilePath': json['SK_img_file_path'],
    };
}

export function Sake2ToJSON(value?: Sake2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'SK_id': value.sKId,
        'SK_name': value.sKName,
        'SK_price': value.sKPrice,
        'SK_taste': value.sKTaste,
        'SKT_name': value.sKTName,
        'SK_img_file_path': value.sKImgFilePath,
    };
}

