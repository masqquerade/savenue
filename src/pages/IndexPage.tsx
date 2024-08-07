import { FC } from "react";
import Banner from "../components/Banner/Banner";
import ActiveBtn from "../components/ActiveBtn/ActiveBtn";

import "./IndexPage.style.css"
import hp from "../static/headphones.svg"
import cart from "../static/cart.svg"

const IndexPage = () => {
    return (
        <div className="indexPage__container">
            <Banner/>

            <div className="active_btn__wrapper">
                <ActiveBtn icon={hp} title="Зв'язок із консультантом" bgColor="#24202A"/>
                <ActiveBtn icon={cart} title="Зв'язок із консультантом" bgColor="#181818"/>
            </div>
        </div>
    );
};

export default IndexPage;