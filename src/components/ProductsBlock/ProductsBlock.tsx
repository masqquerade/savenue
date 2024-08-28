import "./ProductsBlock.style.css";

import Input from "../Input/Input";
import Item from "../Item/Item";

import { FC, useMemo, useState } from "react";
import { IItem } from "../../static_data/items";
import { Link } from "react-router-dom";

interface IProductBlock {
    items: IItem[];
};

const ProductsBlock: FC<IProductBlock> = ({ items }) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [color, setColor] = useState<string>("");
    const [size, setSize] = useState<string>("");
    const [brand, setBrand] = useState<string>("");

    const sortedItems = useMemo(() => {
        return items.filter(i => i.Title.includes(inputValue))
                    .filter(i => {
                        if (!color) {
                            return i;
                        }
                        else {
                            return i.Colors.includes(color)
                        }
                    })
                    .filter(i => {
                        if (!size) {
                            return i;
                        }
                        else {
                            return i.Sizes.includes(parseInt(size));
                        };
                    })
                    .filter(i => {
                        if (!brand) {
                            return i;
                        }
                        else {
                            return i.Brands.includes(brand);
                        }
                    })
    }, [items, inputValue, color, brand, size]);

    return (
        <div>
            <Input 
                onInputChange={setInputValue} 
                onBrandChange={setBrand}
                onColorChange={setColor}
                onSizeChange={setSize}
                placeholder="Пошук товару"
            />

            <div className="products_block">
               {
               sortedItems.length ? 
                sortedItems.map(i => {
                    return (
                        <Link to={`/item?id=${i.Item_id}`} style={{textDecoration: "none", margin: "0"}} key={i.Item_id}>
                            <Item Item_id={i.Item_id} ImgURL={i.ImgURL} Title={i.Title} Colors={i.Colors} Price={i.Price} Sizes={i.Sizes} Brands={i.Brands}/>
                        </Link>
                    )
                })
               : <div className="nothing_wrapper">Нічого не знайдено :(</div>
            }
               
            </div>
        </div>
    );
};

export default ProductsBlock;