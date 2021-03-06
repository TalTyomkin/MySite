import React,{useState,useEffect} from "react";
import "../HomePage/HomePageCss/Project.css";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';
import Loader from "react-loader-spinner";

const Project = ({title,projectUrl,description,project,thamnail,modalSize, newWindowBtn}) => {

    let [modal, setModal] = useState(false);
    let [isLoading, setIsLoading] = useState();
    console.log('isLoading',isLoading)
    
    let loader = async(projectUrl) => {
        setIsLoading(null);
        let response = await fetch(projectUrl,{mode: 'no-cors'});
        let commits = await response.text();
        setTimeout(() => {
            setIsLoading(commits ? commits : {})
        },3000)
    } 
    const toggle = () => setModal(!modal);

    const click = () => {
        if (project.type === "img"){
            toggle();
            setTimeout(() => {
                setIsLoading({})
            },2000)
        } else{
            toggle();
            loader(projectUrl);
        }
    }

    return(
        <div className={"project"}>
            <button onClick={click} className={"projectBtn"}>
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
                        {!isLoading ? <Loader
                                        className="loder"
                                        type="Circles"
                                        color="#525062"
                                        height={100}
                                        width={100}
                                        style={{margin:"16vh"}}
                                        timeout={3000} /> : project}
                    </ModalBody>
                    <ModalFooter style={{background:"rgb(239, 238, 243)"}}>
                        {newWindowBtn}
                    </ModalFooter>
            </Modal>
        </div>
    )
}

export default Project