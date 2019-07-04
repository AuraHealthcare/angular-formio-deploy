var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Components, Utils as FormioUtils } from 'formiojs';
/** @type {?} */
var BaseComponent = Components.components.base;
/**
 * @param {?} customComponentOptions
 * @return {?}
 */
export function createCustomFormioComponent(customComponentOptions) {
    var _a;
    return _a = /** @class */ (function (_super) {
            __extends(CustomComponent, _super);
            function CustomComponent(component, options, data) {
                var _this = _super.call(this, component, options, data) || this;
                _this.component = component;
                _this.id = FormioUtils.getRandomComponentId();
                _this.type = customComponentOptions.type;
                return _this;
            }
            Object.defineProperty(CustomComponent.prototype, "defaultSchema", {
                get: /**
                 * @return {?}
                 */
                function () {
                    return CustomComponent.schema();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(CustomComponent.prototype, "emptyValue", {
                get: /**
                 * @return {?}
                 */
                function () {
                    return '';
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(CustomComponent, "builderInfo", {
                get: /**
                 * @return {?}
                 */
                function () {
                    return {
                        title: customComponentOptions.title,
                        group: customComponentOptions.group,
                        icon: customComponentOptions.icon,
                        weight: customComponentOptions.weight,
                        documentation: customComponentOptions.documentation,
                        schema: CustomComponent.schema(),
                    };
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @return {?}
             */
            CustomComponent.schema = /**
             * @return {?}
             */
            function () {
                return BaseComponent.schema(__assign({}, customComponentOptions.schema, { type: customComponentOptions.type }));
            };
            /**
             * @return {?}
             */
            CustomComponent.prototype.elementInfo = /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var info = _super.prototype.elementInfo.call(this);
                info.type = 'input';
                info.changeEvent = 'click';
                return info;
            };
            /**
             * @return {?}
             */
            CustomComponent.prototype.build = /**
             * @return {?}
             */
            function () {
                this.element = _super.prototype.ce.call(this, 'div', { class: 'form-group formio-component ' + customComponentOptions.extraClasses });
                this.element.id = this.id;
                _super.prototype.createLabel.call(this, this.element);
                /** @type {?} */
                var customElement = (/** @type {?} */ (_super.prototype.ce.call(this, customComponentOptions.selector)));
                /** @type {?} */
                var _self = this;
                customElement.addEventListener('valueChange', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    console.log('valueChange', event.detail); // TODO: Remove
                    _self._value = event.detail;
                }));
                this._customElement = customElement;
                for (var key in this.component.customOptions) {
                    if (this.component.customOptions.hasOwnProperty(key)) {
                        customElement[key] = this.component.customOptions[key];
                    }
                }
                this.element.appendChild(customElement);
                ((/** @type {?} */ (this.element))).component = this;
            };
            /**
             * @return {?}
             */
            CustomComponent.prototype.getValue = /**
             * @return {?}
             */
            function () {
                return this._value;
            };
            /**
             * @param {?} value
             * @return {?}
             */
            CustomComponent.prototype.setValue = /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                console.log('setValue', value); // TODO: Remove
                this._value = value;
                this._customElement.setAttribute('value', value);
                return true;
            };
            return CustomComponent;
        }(BaseComponent)),
        _a.editForm = customComponentOptions.editForm || BaseComponent.editForm,
        _a;
}
