import { FC } from "react";

import IndexPage from "../pages/IndexPage/IndexPage";
import InfoPage from "../pages/InfoPage/InfoPage";
import BasketPage from "../pages/BasketPage/BasketPage";
import ItemPage from "../pages/ItemPage/ItemPage";

interface Route {
    path: string;
    Component: FC;
};

export const routes: Route[] = [
    {
        path: "/",
        Component: IndexPage,
    },
    {
        path: "/info",
        Component: InfoPage,
    },
    {
        path: "/basket",
        Component: BasketPage,
    },
    {
        path: "/item",
        Component: ItemPage,
    },
];