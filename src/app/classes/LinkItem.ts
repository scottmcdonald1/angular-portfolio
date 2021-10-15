export class LinkItem {
    index: number;
    folderIndex: number;
    folderCount: number;
    dirId: string;
    elementId: string;
    name: string;
    url: string;

    constructor(index: number, folderIndex: number, folderCount: number, name: string, url: string) {
        this.index = index;
        this.folderIndex = folderIndex;
        this.folderCount = folderCount;
        this.dirId = "df" + folderIndex + "-li" + index;
        this.elementId = "cf" + folderIndex + "-li" + index;;
        this.name = name;
        this.url = url;
    }

    getLeftStyling(index: number, n: number):string {
        let posX = getPositionX(index, n);
        let left: number = ((350 / 2) + posX);
        return `${left}px`;
    } 
      
    getTopStyling(index: number, n: number):string {
        let posY = getPositionY(index, n);
        let top: number = ((350 / 2) - posY);
        return `${top}px`
    }

    getTransitionDelay(index: number):string {
        let delay = index / 10;
        return `${delay}s`;
    }    
}


function getPositionX(index: number, n: number):number {
    let theta: number = generate(index, n);
    let posX: number = Math.round(200 * (Math.sin(theta)));
    return posX;
}

function getPositionY(index: number, n: number):number {
    let theta: number = generate(index, n);
    let posX: number = Math.round(200 * (Math.cos(theta)));
    return posX;
}

function generate(index: number, n: number):number {
    let frags = 360/n;
    let theta: number = ((frags/180) * index * Math.PI);

    return theta;
}