"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SakeApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class SakeApi extends runtime.BaseAPI {
    /**
     * お酒の詳細を取得
     */
    getSakeDetailRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.sakeId === null || requestParameters.sakeId === undefined) {
                throw new runtime.RequiredError('sakeId', 'Required parameter requestParameters.sakeId was null or undefined when calling getSakeDetail.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sakeDetail/{sakeId}`.replace(`{${"sakeId"}}`, encodeURIComponent(String(requestParameters.sakeId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SakeDetailFromJSON)(jsonValue));
        });
    }
    /**
     * お酒の詳細を取得
     */
    getSakeDetail(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getSakeDetailRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * 酒一覧情報を取得
     */
    getSakeListRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sakeList`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.SakeFromJSON));
        });
    }
    /**
     * 酒一覧情報を取得
     */
    getSakeList(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getSakeListRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * 検索後 酒一覧情報を取得
     */
    searchSakeListRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.keyword === null || requestParameters.keyword === undefined) {
                throw new runtime.RequiredError('keyword', 'Required parameter requestParameters.keyword was null or undefined when calling searchSakeList.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sakeList/{keyword}`.replace(`{${"keyword"}}`, encodeURIComponent(String(requestParameters.keyword))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.SakeFromJSON));
        });
    }
    /**
     * 検索後 酒一覧情報を取得
     */
    searchSakeList(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.searchSakeListRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.SakeApi = SakeApi;
//# sourceMappingURL=SakeApi.js.map