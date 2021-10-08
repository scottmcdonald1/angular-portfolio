import { Folder } from "./Folder"
import { LinkItem } from "./link-item"

export const FOLDERS: Folder[] = [
    {
        id: "cf1",
        name: "About Me",
        links: [
            new LinkItem("cf1-li1", "GitHub", "https://github.com/scottmcdonald1"),
            new LinkItem("cf1-li2", "LinkedIn", "https://www.linkedin.com/in/scott-mcdonald-0303/"),
        ],
    },
    {
        id: "cf2",
        name: "Projects",
        links: [
            new LinkItem("cf2-li1", "Bookbase", "https://bookbase-app.herokuapp.com/"),
            new LinkItem("cf2-li2", "Trash Doodles", "https://www.trashdoodles.com/"),
        ]
    },
]