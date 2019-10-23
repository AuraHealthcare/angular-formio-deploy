import { ChangeDetectorRef } from '@angular/core';
export declare class FormioLoader {
    private cdr;
    loading: boolean;
    constructor(cdr: ChangeDetectorRef);
    setLoading(loading: boolean): void;
}
