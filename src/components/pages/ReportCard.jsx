import React, { useContext } from "react";

import "../../styles/libretaApp.scss";

import Table from "../atoms/Table";
import ButtonGrid from "../molecules/ButtonGrid";
import { LibretaProvider, LibretaContext } from "../../context/LibretaContext";
import Modal from "../organisms/Modal";


const ReportCard = () => {

    return (
        <LibretaProvider>
            <div class="libreta">
                <div class="libreta__content">
                    <Table />
                </div>
                <ButtonGrid/>
            </div>
            <Modal></Modal>
            
        </LibretaProvider>
    )
}

export default ReportCard;