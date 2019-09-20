/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var CustomTagsService = /** @class */ (function () {
    function CustomTagsService() {
        this.tags = [];
    }
    /**
     * @param {?} tag
     * @return {?}
     */
    CustomTagsService.prototype.addCustomTag = /**
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        this.tags.push(tag);
    };
    CustomTagsService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ CustomTagsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CustomTagsService_Factory() { return new CustomTagsService(); }, token: CustomTagsService, providedIn: "root" });
    return CustomTagsService;
}());
export { CustomTagsService };
if (false) {
    /** @type {?} */
    CustomTagsService.prototype.tags;
}
