/**
 * sangaku
 * 産学連携のAPIです
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */
/// <reference path="../custom.d.ts" />
import { Configuration } from "./configuration";
/**
 *
 * @export
 */
export declare const COLLECTION_FORMATS: {
    csv: string;
    ssv: string;
    tsv: string;
    pipes: string;
};
/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}
/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}
/**
 *
 * @export
 * @class BaseAPI
 */
export declare class BaseAPI {
    protected basePath: string;
    protected fetch: FetchAPI;
    protected configuration: Configuration;
    constructor(configuration?: Configuration, basePath?: string, fetch?: FetchAPI);
}
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export declare class RequiredError extends Error {
    field: string;
    name: "RequiredError";
    constructor(field: string, msg?: string);
}
/**
 *
 * @export
 */
export type Breweries = Array<BreweryPlace>;
/**
 *
 * @export
 * @interface BreweryDetail
 */
export interface BreweryDetail {
    /**
     *
     * @type {number}
     * @memberof BreweryDetail
     */
    bId: number;
    /**
     *
     * @type {string}
     * @memberof BreweryDetail
     */
    bName: string;
    /**
     *
     * @type {string}
     * @memberof BreweryDetail
     */
    bAddress: string;
    /**
     *
     * @type {string}
     * @memberof BreweryDetail
     */
    bDescription: string;
    /**
     *
     * @type {string}
     * @memberof BreweryDetail
     */
    bMail: string;
    /**
     *
     * @type {string}
     * @memberof BreweryDetail
     */
    bTel: string;
    /**
     *
     * @type {string}
     * @memberof BreweryDetail
     */
    bImgFilePath: string;
    /**
     *
     * @type {SakeList2}
     * @memberof BreweryDetail
     */
    sakeList: SakeList2;
}
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
 *
 * @export
 * @interface BreweryPlace
 */
export interface BreweryPlace {
    /**
     *
     * @type {number}
     * @memberof BreweryPlace
     */
    bId: number;
    /**
     *
     * @type {string}
     * @memberof BreweryPlace
     */
    bName: string;
    /**
     *
     * @type {number}
     * @memberof BreweryPlace
     */
    pNumber: number;
    /**
     *
     * @type {string}
     * @memberof BreweryPlace
     */
    bImgFilePath: string;
    /**
     *
     * @type {string}
     * @memberof BreweryPlace
     */
    pCampName: string;
}
/**
 *
 * @export
 * @interface Error
 */
export interface Error {
    /**
     *
     * @type {number}
     * @memberof Error
     */
    code: number;
    /**
     *
     * @type {string}
     * @memberof Error
     */
    message: string;
}
/**
 *
 * @export
 * @interface Sake
 */
export interface Sake {
    /**
     *
     * @type {number}
     * @memberof Sake
     */
    sKId: number;
    /**
     *
     * @type {string}
     * @memberof Sake
     */
    sKName: string;
    /**
     *
     * @type {number}
     * @memberof Sake
     */
    sKPrice: number;
    /**
     *
     * @type {number}
     * @memberof Sake
     */
    sKTaste: number;
    /**
     *
     * @type {string}
     * @memberof Sake
     */
    sKTName: string;
    /**
     *
     * @type {string}
     * @memberof Sake
     */
    sKImgFilePath: string;
}
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
 *
 * @export
 * @interface SakeDetail
 */
export interface SakeDetail {
    /**
     *
     * @type {number}
     * @memberof SakeDetail
     */
    sKId: number;
    /**
     *
     * @type {string}
     * @memberof SakeDetail
     */
    sKName: string;
    /**
     *
     * @type {number}
     * @memberof SakeDetail
     */
    sKPrice: number;
    /**
     *
     * @type {string}
     * @memberof SakeDetail
     */
    sKDescription: string;
    /**
     *
     * @type {string}
     * @memberof SakeDetail
     */
    sKImgFilePath: string;
    /**
     *
     * @type {BreweryInfo}
     * @memberof SakeDetail
     */
    breewry?: BreweryInfo;
}
/**
 *
 * @export
 */
export type SakeList = Array<Sake>;
/**
 *
 * @export
 */
export type SakeList2 = Array<Sake2>;
/**
 * BreweryApi - fetch parameter creator
 * @export
 */
export declare const BreweryApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     * 酒造所の詳細情報を取得
     * @param {any} id 酒造所詳細の情報を取得するためのID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBreweryDetail(id: any, options?: any): FetchArgs;
    /**
     * 酒造所一覧を取得
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBreweryList(options?: any): FetchArgs;
    /**
     * 検索後 酒造所一覧を取得
     * @param {any} keyword 検索欄に入力されたキーワード
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchBreweryList(keyword: any, options?: any): FetchArgs;
};
/**
 * BreweryApi - functional programming interface
 * @export
 */
export declare const BreweryApiFp: (configuration?: Configuration) => {
    /**
     * 酒造所の詳細情報を取得
     * @param {any} id 酒造所詳細の情報を取得するためのID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBreweryDetail(id: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<BreweryDetail>;
    /**
     * 酒造所一覧を取得
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBreweryList(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Breweries>;
    /**
     * 検索後 酒造所一覧を取得
     * @param {any} keyword 検索欄に入力されたキーワード
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchBreweryList(keyword: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Breweries>;
};
/**
 * BreweryApi - factory interface
 * @export
 */
export declare const BreweryApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     * 酒造所の詳細情報を取得
     * @param {any} id 酒造所詳細の情報を取得するためのID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBreweryDetail(id: any, options?: any): Promise<BreweryDetail>;
    /**
     * 酒造所一覧を取得
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBreweryList(options?: any): Promise<Breweries>;
    /**
     * 検索後 酒造所一覧を取得
     * @param {any} keyword 検索欄に入力されたキーワード
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchBreweryList(keyword: any, options?: any): Promise<Breweries>;
};
/**
 * BreweryApi - object-oriented interface
 * @export
 * @class BreweryApi
 * @extends {BaseAPI}
 */
export declare class BreweryApi extends BaseAPI {
    /**
     * 酒造所の詳細情報を取得
     * @param {any} id 酒造所詳細の情報を取得するためのID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BreweryApi
     */
    getBreweryDetail(id: any, options?: any): Promise<BreweryDetail>;
    /**
     * 酒造所一覧を取得
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BreweryApi
     */
    getBreweryList(options?: any): Promise<Breweries>;
    /**
     * 検索後 酒造所一覧を取得
     * @param {any} keyword 検索欄に入力されたキーワード
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BreweryApi
     */
    searchBreweryList(keyword: any, options?: any): Promise<Breweries>;
}
/**
 * SakeApi - fetch parameter creator
 * @export
 */
export declare const SakeApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     * お酒の詳細を取得
     * @param {any} sakeId 詳細情報を取得したいお酒のID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSakeDetail(sakeId: any, options?: any): FetchArgs;
    /**
     * 酒一覧情報を取得
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSakeList(options?: any): FetchArgs;
    /**
     * 検索後 酒一覧情報を取得
     * @param {any} keyword 検索単語
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSakeList(keyword: any, options?: any): FetchArgs;
};
/**
 * SakeApi - functional programming interface
 * @export
 */
export declare const SakeApiFp: (configuration?: Configuration) => {
    /**
     * お酒の詳細を取得
     * @param {any} sakeId 詳細情報を取得したいお酒のID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSakeDetail(sakeId: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<SakeDetail>;
    /**
     * 酒一覧情報を取得
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSakeList(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<SakeList>;
    /**
     * 検索後 酒一覧情報を取得
     * @param {any} keyword 検索単語
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSakeList(keyword: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<SakeList>;
};
/**
 * SakeApi - factory interface
 * @export
 */
export declare const SakeApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     * お酒の詳細を取得
     * @param {any} sakeId 詳細情報を取得したいお酒のID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSakeDetail(sakeId: any, options?: any): Promise<SakeDetail>;
    /**
     * 酒一覧情報を取得
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSakeList(options?: any): Promise<SakeList>;
    /**
     * 検索後 酒一覧情報を取得
     * @param {any} keyword 検索単語
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSakeList(keyword: any, options?: any): Promise<SakeList>;
};
/**
 * SakeApi - object-oriented interface
 * @export
 * @class SakeApi
 * @extends {BaseAPI}
 */
export declare class SakeApi extends BaseAPI {
    /**
     * お酒の詳細を取得
     * @param {any} sakeId 詳細情報を取得したいお酒のID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SakeApi
     */
    getSakeDetail(sakeId: any, options?: any): Promise<SakeDetail>;
    /**
     * 酒一覧情報を取得
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SakeApi
     */
    getSakeList(options?: any): Promise<SakeList>;
    /**
     * 検索後 酒一覧情報を取得
     * @param {any} keyword 検索単語
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SakeApi
     */
    searchSakeList(keyword: any, options?: any): Promise<SakeList>;
}