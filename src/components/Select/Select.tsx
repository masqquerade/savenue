import { FC } from "react";
import "./Select.style.css";

interface SelectItem {
    value: string;
    name: string;
};

interface ISelect<T> {
    items: SelectItem[];
    preselected: string;
    onChange: React.Dispatch<React.SetStateAction<T>>;
};

const Select = <T,>({ items, preselected, onChange }: ISelect<T>) => {
    return (
        <select className="select_container" onChange={(e) => onChange(e.target.value as T)}>
            <option className="option_item_preselected option_item" value="">{preselected}</option>
            {items.map(v => {
                return (
                    <option key={v.value} className="option_item" value={v.value}>{v.name}</option>  
                );
            })}
        </select>
    );
};

export default Select;