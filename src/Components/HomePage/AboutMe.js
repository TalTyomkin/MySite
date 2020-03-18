import React from "react";
import "../HomePage/HomePageCss/AboutMe.css";

const AboutMe = ({aboutMe}) => {
    return(
        <div id={"aboutMe"}>
            <h1 className={"title"} id={"aboutMeTitle"}>{aboutMe.h1Titles.aboutMe}</h1>
            {aboutMe.aboutMeText}
        </div>
    )
}

export default AboutMe