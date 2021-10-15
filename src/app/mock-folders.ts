import { Folder } from "./classes/Folder"
import { LinkItem } from "./classes/LinkItem"

export const FOLDERS: Folder[] = [
    {
        index: 1,
        dirId: "df1",
        elementId: "cf1",
        name: "About Me",
        links: [
            new LinkItem(0, 1, 5, "GitHub", "https://github.com/scottmcdonald1"),
            new LinkItem(1, 1, 5, "LinkedIn", "https://www.linkedin.com/in/scott-mcdonald-0303/"),
            new LinkItem(2, 1, 5, "GitHub", "https://github.com/scottmcdonald1"),
            new LinkItem(3, 1, 5, "LinkedIn", "https://www.linkedin.com/in/scott-mcdonald-0303/"),
            new LinkItem(4, 1, 5, "LinkedIn", "https://www.linkedin.com/in/scott-mcdonald-0303/"),
        ],
    },
    {
        index: 2,
        dirId: "df2",
        elementId: "cf2",
        name: "Projects",
        links: [
            new LinkItem(0, 2, 2, "Bookbase", "https://bookbase-app.herokuapp.com/"),
            new LinkItem(1, 2, 2, "Trash Doodles", "https://www.trashdoodles.com/"),
        ]
    },
]