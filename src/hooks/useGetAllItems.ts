import { useEffect } from "react";
import { IItem } from "../static_data/items";

export const useGetAllItems = (initDataRaw: string, setItems: React.Dispatch<React.SetStateAction<IItem[]>>) => {
    useEffect(() => {
        fetch("http://localhost:8080/api/get-items", {
            method: "POST",
            headers: {
                Authorization: `tma ${initDataRaw}`,
            },
        })
        .then(res => res.json())
        .then(json => setItems(json))
    }, []);
};