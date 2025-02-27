interface MenuItem {
    id: number;
    page:string;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}[];

const menu_data: MenuItem[] = [
    {
        id: 1,
        page:"nav_1",
        has_dropdown: false,
        title: "Ecosystem",
        link: "/#ecosystemSection",
    },
    {
        id: 2,
        page:"nav_1",
        has_dropdown: false,
        title: "Tokenomics",
        link: "/#tokenomicsSection",
    },
    {
        id: 3,
        page:"nav_1",
        has_dropdown: false,
        title: "Whitepaper",
        link: "/#whitepaperSection",
    },
    {
        id: 4,
        page:"nav_1",
        has_dropdown: false,
        title: "Win $3M",
        link: "/#win3mSection",
    },
    {
        id: 5,
        page:"nav_1",
        has_dropdown: false,
        title: "RoadMap",
        link: "/#roadMap",
    },
    {
        id: 6,
        page:"nav_1",
        has_dropdown: false,
        title: "FAQs",
        link: "/#faqSection",
    }
];
export default menu_data;
