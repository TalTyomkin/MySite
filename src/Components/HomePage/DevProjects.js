import React from "react";
import Project from "./Project.js";
import youtubeThamnail from "../../Assets/youtubeThamnail.jpg";
import MemoryThamnail from "../../Assets/MemoryThamnail.png";
import { Button } from 'reactstrap';
import "../HomePage/HomePageCss/DevProjects.css"

const DevProjects = ({devProjects}) => {
    return(
        <div id={"devProjects"}>
            <div id={"devContainer"}>
                <h1 className={"title"} id={"devProjectsTitle"}>{devProjects.h1Titles.devProjects}</h1>
                <div id={"devPro1"}>
                    <Project
                        title={devProjects.projects.dev.youtube.title}
                        description={devProjects.projects.dev.youtube.description}
                        project={<img src={youtubeThamnail} id={"imgWidh"}/>}
                        thamnail={youtubeThamnail}
                        modalSize="xl"
                        newWindowBtn={<Button id="modelBtn" style={{background:"#525062"}}>Open site in a new window</Button>}
                    />
                </div>
                <div className={"designProRight"}>
                    <Project
                        title={devProjects.projects.dev.memoryGame.title}
                        description={devProjects.projects.dev.memoryGame.description}
                        project={<iframe src="https://cool-memory-game.herokuapp.com" title="Memory Game" frameBorder="0" height="465vh" width="100%"></iframe>}
                        thamnail={MemoryThamnail}
                        modalSize="xl"
                        newWindowBtn={<Button id="modelBtn" style={{background:"#525062"}}>Open site in a new window</Button>}
                    />
                </div>
            </div>
        </div>
    )
}

export default DevProjects