/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createCustomElement } from "@angular/elements";
import { Formio } from 'formiojs';
import { createCustomFormioComponent } from "./create-custom-component";
/**
 * @param {?} options
 * @param {?} component
 * @param {?} injector
 * @return {?}
 */
export function registerCustomFormioComponent(options, component, injector) {
    /** @type {?} */
    var complexCustomComponent = createCustomElement(component, { injector: injector });
    customElements.define(options.selector, complexCustomComponent);
    Formio.Components.setComponent(options.type, createCustomFormioComponent(options));
}
