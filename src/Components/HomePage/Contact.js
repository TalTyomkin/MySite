import React,{useState} from "react";
import "../HomePage/HomePageCss/Contact.css";
import Linkdin from "../../Assets/LinkedinIcon.png";
import Github from "../../Assets/GithubIcon.png";
import { Link } from "react-scroll";

const Contact = ({contact}) => {

return(
        <div id={"contact"}>
            <h1 className={"title"} id={"contactTitle"}>{contact.h1Titles.contact}</h1>
            <div id={"contactContainer"}>
                <h5 id={"subTitlt"}>{contact.contact.textContent}</h5>
                <div id={"detailsAndBtns"}>
                    <div id={"contactDatails"}>
                        <a>{contact.contact.phone}</a>
                        <a>{contact.contact.eMail}</a>
                    </div>
                    <div id={"socialBtns"}>
                        <div id={"btnContainer"}>
                            <a href={"https://www.linkedin.com/in/tal-tyomkin-368a8286/"} id={"btn"} target="blank">
                                <img id={"inIcon"} src={Linkdin} />
                                <span className={"btnText"}>Linkdin</span>
                            </a>
                        </div>
                        <div id={"btnContainer"}>
                            <a href={"https://github.com/"} id={"btn"} target="blank">
                            <img id={"inIcon"} src={Github} />
                            <span className={"btnText"}>Github</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact