/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, ChangeDetectorRef } from '@angular/core';
var FormioLoader = /** @class */ (function () {
    function FormioLoader(cdr) {
        this.cdr = cdr;
        this.loading = true;
    }
    /**
     * @param {?} loading
     * @return {?}
     */
    FormioLoader.prototype.setLoading = /**
     * @param {?} loading
     * @return {?}
     */
    function (loading) {
        this.loading = loading;
        this.cdr.detectChanges();
    };
    FormioLoader.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    FormioLoader.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    return FormioLoader;
}());
export { FormioLoader };
if (false) {
    /** @type {?} */
    FormioLoader.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    FormioLoader.prototype.cdr;
}
