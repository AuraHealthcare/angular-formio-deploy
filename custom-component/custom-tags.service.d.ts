import { BehaviorSubject } from 'rxjs';
export declare class CustomTagsService {
    _tags: string[];
    tags$: BehaviorSubject<string[]>;
    addCustomTag(tag: string): void;
}
