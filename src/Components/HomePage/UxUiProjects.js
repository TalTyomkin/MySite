import React from "react";
import Project from "./Project.js";
import "../HomePage/HomePageCss/UxUiProjects.css";
import Samsung from "../../Assets/Samsung.png";
import Nipendo from "../../Assets/Nipendo.png";
import PayKey from "../../Assets/PayKey.png";
import FacebookCampaignAds from "../../Assets/FacebookCampaignAds.png";
import SamaungThamnail from "../../Assets/SamaungThamnail.png";
import NipendoThammail from "../../Assets/NipendoThammail.png";
import PayKeyThammail from "../../Assets/PayKeyThammail.png";
import FacebookThammail from "../../Assets/FacebookThammail.png";


const UxUiProjects = ({uxUiProjectes}) => {
    return(
        <div id={"uxUiProjects"}>
            <div id={"projectContainer"}>
                <h1 className={"title"} id={"uxUiProjectsTitle"}>{uxUiProjectes.h1Titles.uxUiProjectes}</h1>
                <div className={"designProRight"}>
                    <Project
                        title={uxUiProjectes.projects.uxUi.design1.title}
                        description={uxUiProjectes.projects.uxUi.design1.description}
                        project={<img src={Samsung} id={"imgWidh"}/>}
                        thamnail={SamaungThamnail}
                        modalSize="lg"
                    />
                </div>
                <div className={"designProleft"}>
                    <Project
                        title={uxUiProjectes.projects.uxUi.design2.title}
                        description={uxUiProjectes.projects.uxUi.design2.description}
                        project={<img src={Nipendo} id={"imgWidh"}/>}
                        thamnail={NipendoThammail}
                        modalSize="lg"
                    />
                </div>
                <div className={"designProRight"}>
                    <Project
                        title={uxUiProjectes.projects.uxUi.design3.title}
                        description={uxUiProjectes.projects.uxUi.design3.description}
                        project={<img src={PayKey} id={"imgWidh"}/>}
                        thamnail={PayKeyThammail}
                        modalSize="lg"
                    />
                </div>
                <div className={"designProleft"}>
                    <Project
                        title={uxUiProjectes.projects.uxUi.design4.title}
                        description={uxUiProjectes.projects.uxUi.design4.description}
                        project={<img src={FacebookCampaignAds} id={"imgWidh"}/>}
                        thamnail={FacebookThammail}
                        modalSize="lg"
                    />
                </div>
            </div>
        </div>
    )
}

export default UxUiProjects