import type { AppBarDto } from "../model/AppBarDto";

export const APPBAR_MENU = [
    {
        to: "/",
        title: "Home",
        active: true,
        children: []
    },
    {
        to: "/about",
        title: "About",
        active: false,
        children: []
    },
    {
        to: "/contact",
        title: "Contact",
        active: false,
        children: []
    },
    {
        to: "/services",
        title: "Services",
        active: false,
        children: []
    },
] as AppBarDto[]
