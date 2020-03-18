import React,{useContext} from "react";
import "../HomePage/HomePageCss/HomePage.css";
import AboutMe from "./AboutMe.js";
import DevProjects from "./DevProjects.js";
import UxUiProjects from "./UxUiProjects.js";
import Contact from "./Contact.js";
import{Context} from "../StoreProvider/StoreProvider.js";
import Menu from '../Menu/Menu';

const HomePage = () => {
    const store = useContext(Context);
    
    return(
        <div className={"homePage"}>
            <Menu />
            <AboutMe aboutMe={store.homePage} />
            <DevProjects devProjects={store.homePage} />
            <UxUiProjects uxUiProjectes={store.homePage} />
            <Contact contact={store.homePage} />
        </div>
    )
}

export default HomePage