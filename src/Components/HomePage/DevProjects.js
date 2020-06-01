import React from "react";
import Project from "./Project.js";
import youtubeThamnail from "../../Assets/youtubeThamnail.jpg";
import MemoryThamnail from "../../Assets/MemoryThamnail.png";
import { Button } from 'reactstrap';
import "../HomePage/HomePageCss/DevProjects.css"

const DevProjects = ({devProjects}) => {
    let style = {
        background:"#525062",
        marginRight: "1.5vw",
    }
    let memoryGamUrl = 'https://cool-memory-game.herokuapp.com';
    let youtubeUrl = 'https://youtubetyn.herokuapp.com/'
    
    let openNewWindow = url => window.open(url);
    return(
        <div id={"devProjects"}>
            <div id={"devContainer"}>
                <h1 className={"title"} id={"devProjectsTitle"}>{devProjects.h1Titles.devProjects}</h1>
                <div id={"devPro1"}>
                    <Project
                        title={devProjects.projects.dev.youtube.title}
                        description={devProjects.projects.dev.youtube.description}
                        project={<iframe src={youtubeUrl} title="Youtube" frameBorder="0" height="458vh" width="100%"></iframe>}
                        thamnail={youtubeThamnail}
                        modalSize="xl"
                        newWindowBtn={<Button size="ms" onClick={() => openNewWindow(youtubeUrl)} style={style}>Open site in a new window</Button>}
                    />
                </div>
                <div className={"designProRight"}>
                    <Project
                        title={devProjects.projects.dev.memoryGame.title}
                        description={devProjects.projects.dev.memoryGame.description}
                        project={<iframe src={memoryGamUrl} title="Memory Game" frameBorder="0" height="455vh" width="100%"></iframe>}
                        thamnail={MemoryThamnail}
                        modalSize="xl"
                        newWindowBtn={<Button size="ms" onClick={() => openNewWindow(memoryGamUrl)} style={style}>Open site in a new window</Button>}                    />
                </div>
            </div>
        </div>
    )
}

export default DevProjects