/// <reference path="./custom.d.ts" />
// tslint:disable
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

import * as url from "url";
import * as isomorphicFetch from "isomorphic-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "/".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
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
export class BaseAPI {
    protected configuration: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = isomorphicFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 */
export type Breweries = Array<BreweryPlace>
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
export type SakeList = Array<Sake>
/**
 * 
 * @export
 */
export type SakeList2 = Array<Sake2>
/**
 * BreweryApi - fetch parameter creator
 * @export
 */
export const BreweryApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 酒造所の詳細情報を取得
         * @param {any} id 酒造所詳細の情報を取得するためのID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBreweryDetail(id: any, options: any = {}): FetchArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getBreweryDetail.');
            }
            const localVarPath = `/breweryDetail/{B_id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 酒造所一覧を取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBreweryList(options: any = {}): FetchArgs {
            const localVarPath = `/breweryList`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 検索後 酒造所一覧を取得
         * @param {any} keyword 検索欄に入力されたキーワード
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchBreweryList(keyword: any, options: any = {}): FetchArgs {
            // verify required parameter 'keyword' is not null or undefined
            if (keyword === null || keyword === undefined) {
                throw new RequiredError('keyword','Required parameter keyword was null or undefined when calling searchBreweryList.');
            }
            const localVarPath = `/breweryList/{keyword}`
                .replace(`{${"keyword"}}`, encodeURIComponent(String(keyword)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BreweryApi - functional programming interface
 * @export
 */
export const BreweryApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 酒造所の詳細情報を取得
         * @param {any} id 酒造所詳細の情報を取得するためのID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBreweryDetail(id: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<BreweryDetail> {
            const localVarFetchArgs = BreweryApiFetchParamCreator(configuration).getBreweryDetail(id, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 酒造所一覧を取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBreweryList(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Breweries> {
            const localVarFetchArgs = BreweryApiFetchParamCreator(configuration).getBreweryList(options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 検索後 酒造所一覧を取得
         * @param {any} keyword 検索欄に入力されたキーワード
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchBreweryList(keyword: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Breweries> {
            const localVarFetchArgs = BreweryApiFetchParamCreator(configuration).searchBreweryList(keyword, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * BreweryApi - factory interface
 * @export
 */
export const BreweryApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 酒造所の詳細情報を取得
         * @param {any} id 酒造所詳細の情報を取得するためのID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBreweryDetail(id: any, options?: any) {
            return BreweryApiFp(configuration).getBreweryDetail(id, options)(fetch, basePath);
        },
        /**
         * 酒造所一覧を取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBreweryList(options?: any) {
            return BreweryApiFp(configuration).getBreweryList(options)(fetch, basePath);
        },
        /**
         * 検索後 酒造所一覧を取得
         * @param {any} keyword 検索欄に入力されたキーワード
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchBreweryList(keyword: any, options?: any) {
            return BreweryApiFp(configuration).searchBreweryList(keyword, options)(fetch, basePath);
        },
    };
};

/**
 * BreweryApi - object-oriented interface
 * @export
 * @class BreweryApi
 * @extends {BaseAPI}
 */
export class BreweryApi extends BaseAPI {
    /**
     * 酒造所の詳細情報を取得
     * @param {any} id 酒造所詳細の情報を取得するためのID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BreweryApi
     */
    public getBreweryDetail(id: any, options?: any) {
        return BreweryApiFp(this.configuration).getBreweryDetail(id, options)(this.fetch, this.basePath);
    }

    /**
     * 酒造所一覧を取得
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BreweryApi
     */
    public getBreweryList(options?: any) {
        return BreweryApiFp(this.configuration).getBreweryList(options)(this.fetch, this.basePath);
    }

    /**
     * 検索後 酒造所一覧を取得
     * @param {any} keyword 検索欄に入力されたキーワード
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BreweryApi
     */
    public searchBreweryList(keyword: any, options?: any) {
        return BreweryApiFp(this.configuration).searchBreweryList(keyword, options)(this.fetch, this.basePath);
    }

}
/**
 * SakeApi - fetch parameter creator
 * @export
 */
export const SakeApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * お酒の詳細を取得
         * @param {any} sakeId 詳細情報を取得したいお酒のID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSakeDetail(sakeId: any, options: any = {}): FetchArgs {
            // verify required parameter 'sakeId' is not null or undefined
            if (sakeId === null || sakeId === undefined) {
                throw new RequiredError('sakeId','Required parameter sakeId was null or undefined when calling getSakeDetail.');
            }
            const localVarPath = `/sakeDetail/{sakeId}`
                .replace(`{${"sakeId"}}`, encodeURIComponent(String(sakeId)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 酒一覧情報を取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSakeList(options: any = {}): FetchArgs {
            const localVarPath = `/sakeList`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 検索後 酒一覧情報を取得
         * @param {any} keyword 検索単語
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchSakeList(keyword: any, options: any = {}): FetchArgs {
            // verify required parameter 'keyword' is not null or undefined
            if (keyword === null || keyword === undefined) {
                throw new RequiredError('keyword','Required parameter keyword was null or undefined when calling searchSakeList.');
            }
            const localVarPath = `/sakeList/{keyword}`
                .replace(`{${"keyword"}}`, encodeURIComponent(String(keyword)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SakeApi - functional programming interface
 * @export
 */
export const SakeApiFp = function(configuration?: Configuration) {
    return {
        /**
         * お酒の詳細を取得
         * @param {any} sakeId 詳細情報を取得したいお酒のID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSakeDetail(sakeId: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<SakeDetail> {
            const localVarFetchArgs = SakeApiFetchParamCreator(configuration).getSakeDetail(sakeId, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 酒一覧情報を取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSakeList(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<SakeList> {
            const localVarFetchArgs = SakeApiFetchParamCreator(configuration).getSakeList(options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 検索後 酒一覧情報を取得
         * @param {any} keyword 検索単語
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchSakeList(keyword: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<SakeList> {
            const localVarFetchArgs = SakeApiFetchParamCreator(configuration).searchSakeList(keyword, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * SakeApi - factory interface
 * @export
 */
export const SakeApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * お酒の詳細を取得
         * @param {any} sakeId 詳細情報を取得したいお酒のID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSakeDetail(sakeId: any, options?: any) {
            return SakeApiFp(configuration).getSakeDetail(sakeId, options)(fetch, basePath);
        },
        /**
         * 酒一覧情報を取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSakeList(options?: any) {
            return SakeApiFp(configuration).getSakeList(options)(fetch, basePath);
        },
        /**
         * 検索後 酒一覧情報を取得
         * @param {any} keyword 検索単語
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchSakeList(keyword: any, options?: any) {
            return SakeApiFp(configuration).searchSakeList(keyword, options)(fetch, basePath);
        },
    };
};

/**
 * SakeApi - object-oriented interface
 * @export
 * @class SakeApi
 * @extends {BaseAPI}
 */
export class SakeApi extends BaseAPI {
    /**
     * お酒の詳細を取得
     * @param {any} sakeId 詳細情報を取得したいお酒のID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SakeApi
     */
    public getSakeDetail(sakeId: any, options?: any) {
        return SakeApiFp(this.configuration).getSakeDetail(sakeId, options)(this.fetch, this.basePath);
    }

    /**
     * 酒一覧情報を取得
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SakeApi
     */
    public getSakeList(options?: any) {
        return SakeApiFp(this.configuration).getSakeList(options)(this.fetch, this.basePath);
    }

    /**
     * 検索後 酒一覧情報を取得
     * @param {any} keyword 検索単語
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SakeApi
     */
    public searchSakeList(keyword: any, options?: any) {
        return SakeApiFp(this.configuration).searchSakeList(keyword, options)(this.fetch, this.basePath);
    }

}
