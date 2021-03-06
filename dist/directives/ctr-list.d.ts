import "rxjs/add/observable/timer";
import { ChangeDetectorRef, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { CtrCompleter, CompleterList } from "./ctr-completer";
import { CompleterData } from "../services/completer-data";
import { CompleterItem } from "../components/completer-item";
export declare class CtrListContext {
    results: CompleterItem[];
    searching: boolean;
    searchInitialized: boolean;
    isOpen: boolean;
    constructor(results: CompleterItem[], searching: boolean, searchInitialized: boolean, isOpen: boolean);
}
export declare class CtrList implements OnInit, CompleterList {
    private completer;
    private templateRef;
    private viewContainer;
    private cd;
    ctrListMinSearchLength: number;
    ctrListPause: number;
    ctrListAutoMatch: boolean;
    ctrListAutoHighlight: boolean;
    private _dataService;
    private term;
    private searchTimer;
    private clearTimer;
    private ctx;
    private _initialValue;
    constructor(completer: CtrCompleter, templateRef: TemplateRef<CtrListContext>, viewContainer: ViewContainerRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    dataService: CompleterData;
    initialValue: any;
    search(term: string): void;
    clear(): void;
    open(): void;
    isOpen(open: boolean): void;
    private _clear();
    private searchTimerComplete(term);
    private handleError(error);
    private refreshTemplate();
    private getBestMatchIndex();
}
