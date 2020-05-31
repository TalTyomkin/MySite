import React,{useState} from "react";
import "../HomePage/HomePageCss/Project.css";
import { Modal, ModalBody } from 'reactstrap';

const Project = ({title,description,project,thamnail,modalSize}) => {

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
                <ModalBody className={"modelBody"}>
                    {project}
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Project