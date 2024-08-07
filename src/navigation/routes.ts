import { FC } from "react";

import IndexPage from "../pages/IndexPage";

interface Route {
    path: string;
    Component: FC;
};

export const routes: Route[] = [
    {
        path: "/",
        Component: IndexPage,
    }
];