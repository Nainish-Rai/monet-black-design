export interface MenuItemCTA {
  primary?: string;
  secondary?: string;
}

export interface SubMenuItem {
  title: string;
  href: string;
  description?: string;
  image?: string;
  cta?: MenuItemCTA;
}

export interface MenuItem {
  title: string;
  name: string;
  items?: SubMenuItem[];
}
