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
                        modalSize="xl"
                    />
                </div>
                <div className={"designProRight"}>
                    <Project
                        title={devProjects.projects.dev.memoryGame.title}
                        description={devProjects.projects.dev.memoryGame.description}
                        project={<iframe src="https://cool-memory-game.herokuapp.com" title="Memory Game" frameborder="0" height="500vh" width="100%"></iframe>}
                        thamnail={MemoryThamnail}
                        modalSize="xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default DevProjects