import { Subject } from "rxjs/Subject";
import { CompleterItem } from "../components/completer-item";
import { CompleterData } from "./completer-data";
export declare abstract class CompleterBaseData extends Subject<CompleterItem[]> implements CompleterData {
    protected _searchFields: string;
    protected _titleField: string;
    protected _descriptionField: string;
    protected _imageField: string;
    private formatterFunction;
    constructor();
    abstract search(term: string): void;
    cancel(): void;
    searchFields(searchFields: string): this;
    titleField(titleField: string): this;
    descriptionField(descriptionField: string): this;
    imageField(imageField: string): this;
    convertToItem(data: any): CompleterItem;
    responseFormatter(formatterFunction: Function): void;
    protected extractMatches(data: any[], term: string): any[];
    protected extractTitle(item: any): any;
    protected extractValue(obj: any, key: string): any;
    protected processResults(matches: string[]): CompleterItem[];
    private executeFormatterFunction(data);
}
