import { BehaviorSubject } from 'rxjs';
export declare class CustomTagsService {
    private _tags;
    tags$: BehaviorSubject<string[]>;
    addCustomTag(tag: string): void;
}
