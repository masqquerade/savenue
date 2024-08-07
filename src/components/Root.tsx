import { SDKProvider, retrieveLaunchParams } from "@telegram-apps/sdk-react";
import App from "./App";

import "./index.css";

const Root = () => {
    const initData = retrieveLaunchParams();

    if (['macos', 'tdesktop', 'weba', 'web', 'webk'].includes(initData.platform)) {
        return (
            <SDKProvider>
                <App />
            </SDKProvider>
        );
    } else {
        document.body.classList.add('mobile-body');

        return (
            <SDKProvider>
                <div className='mobile-wrap'>
                    <div className="mobile-content">
                        <App />
                    </div>
                </div>
            </SDKProvider>
        )
    }
};

export default Root;