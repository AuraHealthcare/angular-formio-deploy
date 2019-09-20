import { OnInit, OnChanges, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { FormioAppConfig } from '../../formio.config';
import { FormioForm, FormioOptions } from '../../formio.common';
import { FormBuilder } from 'formiojs';
import { CustomTagsService } from '../../custom-component/custom-tags.service';
export declare class FormBuilderComponent implements OnInit, OnChanges, OnDestroy {
    private config;
    private customTags;
    ready: Promise<object>;
    readyResolve: any;
    formio: any;
    builder: FormBuilder;
    componentAdding: boolean;
    form?: FormioForm;
    options?: FormioOptions;
    formbuilder?: any;
    noeval?: boolean;
    change?: EventEmitter<object>;
    builderElement?: ElementRef<any>;
    constructor(config: FormioAppConfig, customTags: CustomTagsService);
    ngOnInit(): void;
    setInstance(instance: any): any;
    setDisplay(display: String): any;
    buildForm(form: any): any;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
}
