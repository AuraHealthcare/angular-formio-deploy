(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angularFormio', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['angular-formio'] = {}, global.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormioLoader = /** @class */ (function () {
        function FormioLoader() {
            this.loading = true;
        }
        FormioLoader.decorators = [
            { type: core.Injectable },
        ];
        return FormioLoader;
    }());

    exports.FormioLoader = FormioLoader;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
