import { FC, useEffect, useMemo } from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { routes } from "../navigation/routes";

import {
    bindMiniAppCSSVars,
    bindViewportCSSVars,
    initNavigator,
    postEvent,
    useMiniApp,
    useThemeParams,
    useViewport
} from "@telegram-apps/sdk-react";

import { useIntegration } from "@telegram-apps/react-router-integration";

const App: FC = () => {
    postEvent("web_app_setup_swipe_behavior", {allow_vertical_swipe: false});

    const miniApp = useMiniApp();

    miniApp.setHeaderColor("#2B2B2B")

    const themeParams = useThemeParams();
    const vp = useViewport();

    useEffect(() => {
        return bindMiniAppCSSVars(miniApp, themeParams);
    }, [miniApp, themeParams]);

    useEffect(() => {
        if (vp) {
            return bindViewportCSSVars(vp);
        }
    }, [vp]);

    const navigator = useMemo(() => initNavigator("app-navigation-state"), []);
    const [location, reactNavigator] = useIntegration(navigator);

    useEffect(() => {
        navigator.attach();
        return () => navigator.detach();
    }, [navigator]);

    return (
        <Router location={location} navigator={reactNavigator}>
            <Routes>
                {
                    routes.map(route => <Route key={route.path} {...route}/>)
                }
                <Route path="*" element={<Navigate to={"/"}/>}/>
            </Routes>
        </Router>
    );
};

export default App;