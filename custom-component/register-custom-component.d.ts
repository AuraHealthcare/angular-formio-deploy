import { Injector, Type } from '@angular/core';
import { BaseComponent } from 'formiojs';
import { FormioCustomComponentInfo } from '../formio.common';
export declare function registerCustomFormioComponent(options: FormioCustomComponentInfo, angularComponent: Type<any>, injector: Injector): void;
export declare function registerCustomFormioComponentWithClass(options: FormioCustomComponentInfo, angularComponent: Type<any>, formioClass: typeof BaseComponent, injector: Injector): void;
