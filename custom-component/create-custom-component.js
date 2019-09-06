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
import { clone, isNil } from 'lodash';
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
                if (customComponentOptions.extraValidators) {
                    _this.validators = _this.validators.concat(customComponentOptions.extraValidators);
                }
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
                    return customComponentOptions.emptyValue || null;
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
                info.type = customComponentOptions.selector;
                info.changeEvent = 'valueChange';
                info.attr = __assign({}, info.attr, { class: info.attr.class.replace('form-control', 'form-control-custom-field') // remove the form-control class as the custom angular component may look different
                 });
                return info;
            };
            /**
             * @param {?} state
             * @return {?}
             */
            CustomComponent.prototype.build = /**
             * @param {?} state
             * @return {?}
             */
            function (state) {
                state = state || {};
                this.calculatedValue = state.calculatedValue;
                this.createElement();
                /** @type {?} */
                var labelAtTheBottom = this.component.labelPosition === 'bottom';
                if (!labelAtTheBottom) {
                    this.createLabel(this.element);
                }
                this.createInput(this.element);
                if (labelAtTheBottom) {
                    this.createLabel(this.element);
                }
                this.createDescription(this.element);
                // Disable if needed.
                if (this.shouldDisable) {
                    this.disabled = true;
                }
                // Bind the custom options and the validations to the Angular component's inputs (flattened)
                for (var key in this.component.customOptions) {
                    if (this.component.customOptions.hasOwnProperty(key)) {
                        this._customAngularElement[key] = this.component.customOptions[key];
                    }
                }
                for (var key in this.component.validate) {
                    if (this.component.validate.hasOwnProperty(key)) {
                        this._customAngularElement[key] = this.component.validate[key];
                    }
                }
                // Restore the value.
                this.restoreValue();
                // Attach the refresh on events.
                this.attachRefreshOn();
                this.autofocus();
                this.attachLogic();
            };
            /**
             * @param {?} container
             * @return {?}
             */
            CustomComponent.prototype.createInput = /**
             * @param {?} container
             * @return {?}
             */
            function (container) {
                /** @type {?} */
                var input = (/** @type {?} */ (this.ce(this.info.type, this.info.attr)));
                this.setInputMask(input);
                /** @type {?} */
                var inputGroup = this.addInputGroup(input, container);
                this.addPrefix(input, inputGroup);
                this.addInput(input, inputGroup || container);
                this.addSuffix(input, inputGroup);
                this.errorContainer = container;
                this.setInputStyles(inputGroup || input);
                this._customAngularElement = input;
                return inputGroup || input;
            };
            Object.defineProperty(CustomComponent.prototype, "defaultValue", {
                get: /**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var defaultValue = this.emptyValue;
                    if (!isNil(this.component.defaultValue)) {
                        defaultValue = this.component.defaultValue;
                    }
                    if (this.component.customDefaultValue && !this.options.preview) {
                        defaultValue = this.evaluate(this.component.customDefaultValue, { value: '' }, 'value');
                    }
                    // Clone so that it creates a new instance.
                    return clone(defaultValue);
                },
                enumerable: true,
                configurable: true
            });
            return CustomComponent;
        }(BaseComponent)),
        _a.editForm = customComponentOptions.editForm || BaseComponent.editForm,
        _a;
}
