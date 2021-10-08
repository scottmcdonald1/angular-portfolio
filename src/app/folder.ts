import { LinkItem } from "./link-item";

export interface Folder {
    id: string;
    name: string;
    links: LinkItem[];
}