export class LinkItem {
    linkIndex: number;
    folderIndex: number;
    dirId: string;
    elementId: string;
    name: string;
    url: string;

    constructor(linkIndex: number, folderIndex: number, name: string, url: string) {
        this.linkIndex = linkIndex;
        this.folderIndex = folderIndex;
        this.dirId = "df" + folderIndex + "-li" + linkIndex;
        this.elementId = "cf" + folderIndex + "-li" + linkIndex;;
        this.name = name;
        this.url = url;
    }
}