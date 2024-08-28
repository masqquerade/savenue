import { FC } from "react";
import "./Button.style.css";

interface IButton {
    content: string;
    clickHandler: () => void;
};

const Button: FC<IButton> = ({ content, clickHandler }) => {
    return (
        <div className="btn_wrapper" onClick={clickHandler}>
            <div className="content_wrapper">
                {content}
            </div>
        </div>
    );
};

export default Button;