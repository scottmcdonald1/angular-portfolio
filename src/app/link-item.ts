export class LinkItem {
    dirId: string;
    elementId: string;
    name: string;
    url: string;

    constructor(dirId: string, elementId: string, name: string, url: string) {
        this.dirId = dirId;
        this.elementId = elementId;
        this.name = name;
        this.url = url;
    }
}