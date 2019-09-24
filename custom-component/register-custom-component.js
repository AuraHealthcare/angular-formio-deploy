/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createCustomElement } from '@angular/elements';
import { Components } from 'formiojs';
import { createCustomFormioComponent } from './create-custom-component';
import { CustomTagsService } from './custom-tags.service';
/**
 * @param {?} tag
 * @param {?} injector
 * @return {?}
 */
export function registerCustomTag(tag, injector) {
    injector.get(CustomTagsService).addCustomTag(tag);
}
/**
 * @param {?} options
 * @param {?} angularComponent
 * @param {?} injector
 * @return {?}
 */
export function registerCustomFormioComponent(options, angularComponent, injector) {
    registerCustomTag(options.selector, injector);
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
    registerCustomTag(options.selector, injector);
    /** @type {?} */
    var complexCustomComponent = createCustomElement(angularComponent, { injector: injector });
    customElements.define(options.selector, complexCustomComponent);
    Components.setComponent(options.type, formioClass);
}
