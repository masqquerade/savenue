import { FC } from "react";

import "./Carousel.style.css";
import { IPhoto } from "../../static_data/photo_interface";

interface ICarousel {
    photos: IPhoto[];
};

const Carousel: FC<ICarousel> = ({ photos }) => {
    return (
        <div className="carousel_container">
            {
                photos.map(p => {
                    return (
                        <div className="img_wrapper">
                            <img src={p.url}/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Carousel;
