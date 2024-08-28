import { FC, useState } from "react";
import Banner from "../../components/Banner/Banner";
import ActiveBtn from "../../components/ActiveBtn/ActiveBtn";
import ProductsBlock from "../../components/ProductsBlock/ProductsBlock";

import "./IndexPage.style.css"
import hp from "../../static/headphones.svg"
import cart from "../../static/cart.svg"
import { retrieveLaunchParams, useUtils } from "@telegram-apps/sdk-react";
import { Link } from "react-router-dom";
import { useGetAllItems } from "../../hooks/useGetAllItems";
import { IItem } from "../../static_data/items";

const CONTACT_URL = "https://t.me/rommmmmmmmmmmmmmmmmmaaaaaa";

const IndexPage: FC = () => {
    const [items, setItems] = useState<IItem[]>([]);
    const { initDataRaw, initData } = retrieveLaunchParams();

    const utils = useUtils();
    useGetAllItems(initDataRaw!, setItems)

    const getHelpBtnHandler = () => {
        utils.openTelegramLink(CONTACT_URL);
    };

    const openBasketHandler = () => {
        // TODO
    };

    return (
        <div className="indexPage__container">
            <Banner/>

            <div className="active_btn__wrapper">
                <ActiveBtn icon={hp} title="Зв'язок із консультантом" bgColor="#24202A" clickHandler={getHelpBtnHandler}/>
                <Link to="/basket" style={{textDecoration: "none"}}>
                    <ActiveBtn icon={cart} title="Кошик" bgColor="#181818" clickHandler={openBasketHandler}/>
                </Link>
            </div>

            <div className="products_block_wrapper">
                <ProductsBlock items={items!}/>
            </div>
        </div>
    );
};

export default IndexPage;