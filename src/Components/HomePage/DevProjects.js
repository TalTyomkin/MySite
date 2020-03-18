import React from "react";
import Project from "./Project.js";
import youtubeThamnail from "../../Assets/youtubeThamnail.jpg";
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
            </div>
        </div>
    )
}

export default DevProjects