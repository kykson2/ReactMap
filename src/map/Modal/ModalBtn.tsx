import { FunctionComponent, useState } from "react";
import Modal from "./Modal";

const ModalBtn: FunctionComponent = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = (): void => {
        return modalOpen ? setModalOpen(false) : setModalOpen(true);
    };

    return (
        <div>
            {modalOpen && <Modal />}
            <button
                type="button"
                className="fixed bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleOpenModal}
            >
                더보기
            </button>
        </div>
    );
};

export default ModalBtn;
