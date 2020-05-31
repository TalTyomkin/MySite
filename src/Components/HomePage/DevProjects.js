import React from "react";
import Project from "./Project.js";
import youtubeThamnail from "../../Assets/youtubeThamnail.jpg";
import MemoryThamnail from "../../Assets/MemoryThamnail.png";
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
                        projectImg={youtubeThamnail}
                        thamnail={youtubeThamnail}
                    />
                </div>
                <div className={"designProRight"}>
                    <Project
                        title={devProjects.projects.dev.memoryGame.title}
                        description={devProjects.projects.dev.memoryGame.description}
                        projectImg={youtubeThamnail}
                        thamnail={MemoryThamnail}
                    />
                </div>
            </div>
        </div>
    )
}

export default DevProjects