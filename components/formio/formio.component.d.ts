import { OnInit } from '@angular/core';
import { FormioLoader } from '../loader/formio.loader';
import { FormioAppConfig } from '../../formio.config';
import { FormioBaseComponent } from '../../FormioBaseComponent';
import { CustomTagsService } from '../../custom-component/custom-tags.service';
export declare class FormioComponent extends FormioBaseComponent implements OnInit {
    customTags: CustomTagsService;
    loader: FormioLoader;
    config: FormioAppConfig;
    noeval?: boolean;
    constructor(customTags: CustomTagsService, loader: FormioLoader, config: FormioAppConfig);
    ngOnInit(): void;
    getRenderer(): any;
}
