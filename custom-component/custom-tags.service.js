/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
var CustomTagsService = /** @class */ (function () {
    function CustomTagsService() {
        this._tags = [];
        this.tags$ = new BehaviorSubject([]);
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
        this._tags.push(tag);
        this.tags$.next(this._tags);
    };
    CustomTagsService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ CustomTagsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CustomTagsService_Factory() { return new CustomTagsService(); }, token: CustomTagsService, providedIn: "root" });
    return CustomTagsService;
}());
export { CustomTagsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomTagsService.prototype._tags;
    /** @type {?} */
    CustomTagsService.prototype.tags$;
}
