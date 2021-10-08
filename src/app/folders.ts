import { Folder } from "./Folder"
import { LinkItem } from "./link-item"

export const FOLDERS: Folder[] = [
    {
        dirId: "df1",
        elementId: "cf1",
        name: "About Me",
        links: [
            new LinkItem("df1-li1", "cf1-li1", "GitHub", "https://github.com/scottmcdonald1"),
            new LinkItem("df1-li2", "cf1-li2", "LinkedIn", "https://www.linkedin.com/in/scott-mcdonald-0303/"),
        ],
    },
    {
        dirId: "df2",
        elementId: "cf2",
        name: "Projects",
        links: [
            new LinkItem("df2-li1", "cf2-li1", "Bookbase", "https://bookbase-app.herokuapp.com/"),
            new LinkItem("df2-li2", "cf2-li2", "Trash Doodles", "https://www.trashdoodles.com/"),
        ]
    },
]