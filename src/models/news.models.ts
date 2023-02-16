import { Articles } from "./articles.models";

export interface News {
    status : string;
    totalResult : number;
    articles : Articles[];
}