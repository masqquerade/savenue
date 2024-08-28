import { FC } from "react";
import "./Item.style.css";
import { IItem } from "../../static_data/items";

const Item: FC<IItem> = ({ ImgURL, Title, Colors, Price, Item_id }) => {
    const parseColors = (): string => {
        let colorsStr = "";
        
        Colors.forEach((c, i) => {
            if (i !=  Colors.length - 1) {
                colorsStr += (c + " & ")
            } else {
                colorsStr += c
            }
        })
        
        return colorsStr;
    };

    return (
        <div className="item_wrapper">
            <div className="img_wrapper">
                <img src={`http://${ImgURL}`}/>
            </div>
            
            <div className="item_info">
                <div className="item_title">
                    {Title}
                </div>
                <div className="item_color">
                    {parseColors()}
                </div>
                <div className="item_price">
                    {Price} ₴
                </div>
            </div>
        </div>
    );
};

export default Item;