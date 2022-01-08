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
                className="fixed bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-32 right-1/2 transform translate-x-1/2 bottom-5 rounded text-center z-30"
                onClick={handleOpenModal}
            >
                {modalOpen ? <>돌아가기</> : <>주변 축구팀</>}
            </button>
        </div>
    );
};

export default ModalBtn;
