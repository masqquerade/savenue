import { useEffect, useState } from "react";
import { IItem } from "../static_data/items";

export const useGetItemById = (id: string, initDataRaw: string): IItem | undefined => {
    const [item, setItem] = useState<IItem>();

    useEffect(() => {
        fetch(`http://localhost:8080/api/get-item?id=${id}`, {
            method: "POST",
            headers: {
                Authorization: `tma ${initDataRaw}`,
            },
        })
        .then(res => {
            res.json().then(json => setItem(json));
        })
    }, []);

    return item;
};