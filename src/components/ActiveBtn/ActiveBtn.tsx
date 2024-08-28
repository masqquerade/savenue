import { FC } from "react";

import "./ActiveBtn.style.css";

interface IActiveBtn {
    icon: string;
    title: string;
    bgColor: string;
    clickHandler: () => void;
};

const ActiveBtn: FC<IActiveBtn> = ({ icon, title, bgColor, clickHandler }) => {
    return (
        <div className="acbtn_container" style={{"backgroundColor": bgColor}} onClick={clickHandler}>
            <div className="acbtn_content">
                <div className="img_wrapper">
                    <img src={icon}/>
                </div>
                <div className="title_wrapper">
                    { title }
                </div>
            </div>
        </div>
    );
};

export default ActiveBtn;