import React, { forwardRef, useImperativeHandle, useState } from 'react';
import "./style.scss";


const DropDownModal = forwardRef((props, ref) => {

    const {content} = props;

    const [showModal, setShowModal] = useState(true);

    const handleShowModal = () => setShowModal(true); 

    const handleHideModal = () => setShowModal(false);

    useImperativeHandle(ref, () => ({
        showModal: handleShowModal,
        hileModal: handleHideModal
    }))

    return (
        showModal &&
        <div className='drop-down' onMouseLeave={handleHideModal}>
            <div className="drop-down__inner">
                {content}
            </div>
        </div>
    );
});

export default DropDownModal;