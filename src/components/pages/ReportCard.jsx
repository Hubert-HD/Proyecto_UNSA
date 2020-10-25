import React from "react";

import "../../styles/libretaApp.scss";

import { LibretaProvider } from "../../context/LibretasContext";
import Libreta from "../organisms/Libreta";



const ReportCard = () => {

    return (
        <LibretaProvider>
            <Libreta />
        </ LibretaProvider>
    )
}

export default ReportCard;