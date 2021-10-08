import { LinkItem } from "./link-item";

export interface Folder {
    dirId: string;
    elementId: string;
    name: string;
    links: LinkItem[];
}