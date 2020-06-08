import React,{useState} from "react";

export const Context = React.createContext();
export const Provider = Context.Provider;

const StoreProvider = (props) => {
    const [store,setStore] = useState({
        homePage:{
            h1Titles:{
                aboutMe:"The short version...",
                devProjects:"Dev Projects",
                uxUiProjectes:"UX UI Projects",
                contact:"Say what's up...",
            },
            aboutMeText:<p id={"text"}>
                My name is Tal Tyomkin and in the past years I worked as a product designer.<br/>
                By being a part of the "product" team, I worked alongside developers<br/>
                and was always curious about learning the code as well.<br/>
                Recently, I've graduated from the "Netcraft Academy" a Front-End developer course,<br/>
                and now, I can apply my designs as well.<br/>
                This site is the first of many steps I plan to take in the DEV world.<br/>
                I've added some designs that I made over the years and<br/>
                some development projects from the "NetCraft" curriculum.<br/>
                Planning to add some more over time ...</p>,
            projects:{
                dev:{
                    youtube:{
                        title:"YouTube website development",
                        description:<p>In this project, I built the YouTube site.<br/>
                            I created requests for YouTube servers and pulled the content directly into my "Mongo" database.<br/>
                            The client-side was built in "React" and designed using "Style Component" (the project was built within the Netcraft curriculum).</p>,
                    },
                    memoryGame:{
                        title:"Cool Memory game",
                        description:<p>A cool memory game, built in Vanilla Javascript.<br/>
                        In this project, I used DOM and CSS manipulations,
                        As well as LOCAL STORAGE for saving the game results.</p>,
                    }
                },
                uxUi:{
                    design1:{
                        title:"Samsung theme store",
                        description:`Samsung lets its users to purchase themes
                         which change the entire look and feel of the phone
                          (background, buttons, colors, etc).`,
                    },
                    design2:{
                        title:"Nipendo Supplier Cloud",
                        description:`A new level of "Buyer-Supplier"collaboration.
                        Nipendo allows buyer organizations to streamline "Procure-to-Pay"
                        processes across their entire supplier ecosystem.`,
                    },
                    design3:{
                        title:"'InnoBank',PayKey demo app",
                        description:`"InnoBank" is a generic bank that was created and developed
                        into a full demo application, to serve as a customer service tool.`,
                    },
                    design4:{
                        title:"Facebook campaign ads",
                        description:`A collection of Facebook  posts that I've designed in my roles as a designer.`,
                    },
                },
            },
            contact:{
                textContent:"Feel free to find me via:",
                phone:"Phone:054-6196573",
                eMail:"Email:betbet11@gmail.com",
            },
        },
    })
    return(
        <>
            <Provider value={store}>{props.children}</Provider>
        </>
    )
}

export default StoreProvider