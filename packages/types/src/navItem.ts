export interface NavItem {
    name: string;
    href: string;
    icon?: Object;
    current: boolean;
    children?: NavItemChild[];
}

export interface NavItemChild {
    name: string;
    href: string;
    current?: boolean;
}
