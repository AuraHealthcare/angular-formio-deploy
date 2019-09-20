/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createCustomElement } from '@angular/elements';
import { Components } from 'formiojs';
import { createCustomFormioComponent } from './create-custom-component';
/**
 * @param {?} options
 * @param {?} angularComponent
 * @param {?} injector
 * @return {?}
 */
export function registerCustomFormioComponent(options, angularComponent, injector) {
    /** @type {?} */
    var complexCustomComponent = createCustomElement(angularComponent, { injector: injector });
    customElements.define(options.selector, complexCustomComponent);
    Components.setComponent(options.type, createCustomFormioComponent(options));
}
/**
 * @param {?} options
 * @param {?} angularComponent
 * @param {?} formioClass
 * @param {?} injector
 * @return {?}
 */
export function registerCustomFormioComponentWithClass(options, angularComponent, formioClass, injector) {
    /** @type {?} */
    var complexCustomComponent = createCustomElement(angularComponent, { injector: injector });
    customElements.define(options.selector, complexCustomComponent);
    Components.setComponent(options.type, formioClass);
}
