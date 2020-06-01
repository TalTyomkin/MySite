import React,{useState} from "react";
import "../HomePage/HomePageCss/Project.css";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';

const Project = ({title,description,project,thamnail,modalSize, newWindowBtn}) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return(
        <div className={"project"}>
            <button onClick={toggle} className={"projectBtn"}>
                <img src={thamnail} id={"projectLink"}/>
                <div className={"projecDescription"}>
                    <h5 className={"descriptionTitle"}>{title}</h5>
                    {description}
                </div>
            </button>
            <Modal className={"model"} isOpen={modal} toggle={toggle} size={modalSize} returnFocusAfterClose={false} >
                    <ModalHeader className="modalHeader" style={{background:"rgb(239, 238, 243)"}}>
                        <span id="modalTitle">{title}</span>
                        <Button id="close" close onClick={toggle} />
                    </ModalHeader>
                    <ModalBody className="modelBody">
                        {project}
                    </ModalBody>
                    <ModalFooter style={{background:"rgb(239, 238, 243)"}}>
                        {newWindowBtn}
                    </ModalFooter>
            </Modal>
        </div>
    )
}

export default Project