import { OnInit, NgZone } from '@angular/core';
import { FormioLoader } from '../loader/formio.loader';
import { FormioAppConfig } from '../../formio.config';
import { FormioBaseComponent } from '../../FormioBaseComponent';
import { CustomTagsService } from '../../custom-component/custom-tags.service';
export declare class FormioComponent extends FormioBaseComponent implements OnInit {
    ngZone: NgZone;
    loader: FormioLoader;
    config: FormioAppConfig;
    customTags?: CustomTagsService;
    noeval?: boolean;
    constructor(ngZone: NgZone, loader: FormioLoader, config: FormioAppConfig, customTags?: CustomTagsService);
    ngOnInit(): void;
    getRenderer(): any;
}
