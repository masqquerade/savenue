import { FC } from "react";
import "./ItemPage.style.css";

import { useParams, useSearchParams } from "react-router-dom";
import { useGetItemById } from "../../hooks/useGetItemById";
import { retrieveLaunchParams } from "@telegram-apps/sdk-react";

import Carousel from "../../components/Carousel/Carousel";
import { useGetItemPhotos } from "../../hooks/useGetItemPhotos";

import img1 from "../../static/snakes.jpg"
import img2 from "../../static/testImg.png"

const ItemPage: FC = () => {
    const { initDataRaw } = retrieveLaunchParams();
    const [UrlsearchParams] = useSearchParams();

    const item = useGetItemById(UrlsearchParams.get("id")!, initDataRaw!);

    return (
        <div>
            {
                item == undefined ? <div>Loading</div> :
                <div className="item_wrapper">
                    <Carousel photos={[{url: img1}, {url: img2},{url: img1}, {url: img2}]}/>
                </div>
            }
        </div>
    );
};

export default ItemPage;