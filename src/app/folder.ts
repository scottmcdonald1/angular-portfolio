import { LinkItem } from "./link-item";

export class Folder {
    id: string;
    name: string;
    links: LinkItem[];

    constructor(id: string, name: string, links: LinkItem[]) {
        this.id = id;
        this.name = name;
        this.links = links;
    }
}