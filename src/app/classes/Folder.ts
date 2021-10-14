import { LinkItem } from "./LinkItem";

export interface Folder {
    index: number;
    dirId: string;
    elementId: string;
    name: string;
    links: LinkItem[];
}