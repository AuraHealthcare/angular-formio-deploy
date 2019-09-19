import { OnInit } from '@angular/core';
import { FormioLoader } from '../loader/formio.loader';
import { FormioAppConfig } from '../../formio.config';
import { FormioBaseComponent } from '../../FormioBaseComponent';
export declare class FormioComponent extends FormioBaseComponent implements OnInit {
    loader: FormioLoader;
    config: FormioAppConfig;
    noeval?: boolean;
    constructor(loader: FormioLoader, config: FormioAppConfig);
    ngOnInit(): void;
    getRenderer(): any;
}
