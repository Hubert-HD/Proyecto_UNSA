import React from "react";

import "../../styles/libretaApp.scss";

import Table from "../atoms/Table";
import { LibretaProvider } from "../../context/LibretaContext";
import Modal from "../organisms/Modal";
import Action from "../organisms/Action";


const ReportCard = () => {

    return (
        <LibretaProvider>
            <div class="libreta">
                <Table />
                <Action />
                <Modal />
            </div>
        </LibretaProvider>
    )
}

export default ReportCard;