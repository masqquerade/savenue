import "./Input.style.css"

import search  from "../../static/search.svg";
import React, { FC, useEffect, useState } from "react";

import Select from "../Select/Select";

import { Colors as ColorsTable } from "../../static_data/colors";
import { Brands as BrandsTable } from "../../static_data/brands";
import { Sizes as SizesTable } from "../../static_data/sizes";

interface IInput {
    onInputChange: React.Dispatch<React.SetStateAction<string>>;
    onColorChange: React.Dispatch<React.SetStateAction<string>>;
    onBrandChange: React.Dispatch<React.SetStateAction<string>>;
    onSizeChange: React.Dispatch<React.SetStateAction<string>>;
    placeholder: string;
};

const Input: FC<IInput> = ({
    onInputChange, 
    onColorChange, 
    onBrandChange, 
    onSizeChange,
    placeholder,
}) => {
    return (
        <div className="wrapper">
            <div className="input_wrapper">
                <img src={search}/>
                <input type="text" className="input" onChange={(e) => onInputChange(e.target.value)} placeholder={placeholder}/>
            </div>

            <div className="sort_menu_wrapper">
                <Select<string> items={ColorsTable} preselected="Колiр" onChange={onColorChange}/>
                <Select<string> items={SizesTable} preselected="Розмiр" onChange={onSizeChange}/>
                <Select<string> items={BrandsTable} preselected="Бренд" onChange={onBrandChange}/>
            </div>
        </div>
    );
};

export default Input;