import { FC } from "react";

import "./ActiveBtn.style.css";

interface IActiveBtn {
    icon: string;
    title: string;
    bgColor: string;
};

const ActiveBtn: FC<IActiveBtn> = ({ icon, title, bgColor }) => {
    return (
        <div className="acbtn_container" style={{"backgroundColor": bgColor}}>
            <div className="acbtn_content">
                <img src={icon}/>
                <div className="title_wrapper">
                    { title }
                </div>
            </div>
        </div>
    );
};

export default ActiveBtn;