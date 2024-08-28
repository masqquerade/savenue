import "./InfoPage.style.css";

import Button from "../../components/Button/Button";

import timegif from "../../static/gif_time.webp"
import { useNavigate } from "react-router-dom";

const InfoPage = () => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(-1);
        return;
    };

    return (
        <div className="info_wrapper">
            <div className="main_content">
                <h1 className="info_title">
                    Знижка до <span style={{color: "#2DED29"}}>40%</span> на честь початку навчального року
                </h1>

                <div className="info_desc">
                    На честь нового навчального року ми проводимо розпродаж великої кількості взуття. Знижка може досягати 40%. Все взуття зі знижкою відзначається спеціальним знаком.
                    Також можна відсортувати список кросівок для показу лише акційних пар.
                </div>
            </div>

            <div className="gif_wrapper">
                <img src={timegif} style={{maxWidth: "30vw"}}/>
            </div>

            <div className="btn_wrapper">
                <Button content="Зрозумiло!" clickHandler={onClickHandler}/>
            </div>
        </div>
    );
};

export default InfoPage;