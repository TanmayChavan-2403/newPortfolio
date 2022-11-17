import React, { useRef, useState } from 'react';
import Home from './components/home.js';
import Menu from './components/menu.js';
import Todo from './components/todo.js';
import Hobbies from './components/hobbies.js';
import Project from './components/project.js';
import ContactMe from './components/contactMe.js';
import Certificates from './components/certificates.js';
import style from './stylesheets/home.module.css';
import cubeStyle from './components/cube/cube.module.css';

function App() {
    // Flags to check if the component are toggled or not.
    let [isMenuTogg, setMenuToggle] = useState(false)
    let [prevToggComp, setPrevToggComp] = useState("")
    let [anyComponentToggled, setanyComponentToggled] = useState(false)

    // Component dimention states
    let [height2, setHeight2] = useState({height: "0%"})
    let [menuWidth, setWidth] = useState({width: "0%"})
    let [menuHeight, setHeight] = useState({height: "0%"})
    let [hobbyDimension, setHobbyDimension ] = useState({right: "-100%"})
    let [projectDimension, setProjectDimension] = useState({right: "-100%"})
    let [todosDimension, setTodosDimension] = useState({right: "-100%"})
    let [certifDimension, setCertifDimension] = useState({right: "-100%"})
    let [contactDimension, setContactDimension] = useState({right: "-100%"})


    let [menuStyle, setMenuStyle] = useState({pointerEvents: "None"})
    let [scale, setScale] = useState({prop1: 'scale(0)',
        prop2: 'scale(0)',
        prop3: 'scale(0)',
        prop4: 'scale(0)',
        prop5: 'scale(0)',
        prop6: 'scale(0)'})

    const animateMenu = (props) => {
        if (!isMenuTogg){
            setMenuToggle(!isMenuTogg)
            setWidth({width: "100%"})
            setHeight({height: "100%"})
            setHeight2({height: "41%"})
            setMenuStyle({pointerEvents: "all"})
            setTimeout(() => {
                for (let i = 1; i <= 6; i ++){
                    setTimeout(() => {
                        let key = `prop${i}`;
                        setScale(prev => ({...prev, [key]: 'scale(1)'}));
                    }, 50*i)
                }
            }, 500)

        } else {
            for (let i = 1; i <= 6; i ++){
                let key = `prop${i}`;
                setScale(prev => ({...prev, [key]: 'scale(0)'}));
            }
            setTimeout(() => {
                setMenuToggle(!isMenuTogg)
                setWidth({width: "0%"})
                setHeight({height: "0%"})
                setHeight2({height: "0%"})
                setMenuStyle({pointerEvents: "None"})
            }, 300)
            
        }
    }

    const animateComponent = async (component) => {
        animateMenu();
        // When the requested comp is HOME and we don't have any component already toggled
        if (component === 'HOME' && !anyComponentToggled) return
        // When clicked on same comp which is already toggled, then just close the menu
        if (component === prevToggComp) return

        // If their isn't any component toggled before
        if (!anyComponentToggled){
            toggle(component)
        } else {
            toggle(prevToggComp, false)

            // Logic checking if we have to toggle another component
            await setanyComponentToggled(false)
            if (component !== 'HOME'){
                toggle(component)
            } else {
                setPrevToggComp("")
            }

        }
    }

    const toggle = (component, toggle=true) => {
        setanyComponentToggled(true);
        setPrevToggComp(component);
        setTimeout(() => {
            switch(component){
                case 'Projects':
                    toggle ? setProjectDimension({right: "0%"}) : setProjectDimension({right: "-100%"})
                    break
                case 'Contact Me':
                    toggle ? setContactDimension({right: "0%"}) : setContactDimension({right: "-100%"})
                    break
                case "Certifications":
                    toggle ? setCertifDimension({right: "0%"}) : setCertifDimension({right: "-100%"})
                    break
                case "Todo's":
                    toggle ? setTodosDimension({right: "0%"}) : setTodosDimension({right: "-100%"})
                    break
                case 'Hobbies':
                    toggle ? setHobbyDimension({right: "0%"}) : setHobbyDimension({right: "-100%"});
                    break
                default:
                    console.log('Something went wrong');
            }
        }, 700)
    }

    return (
        <React.Fragment>
            <Home animate={animateMenu}/>
            <Menu menuStyle={menuStyle} scale={scale} width={menuWidth} height={menuHeight}
                  animate={animateMenu} height2={height2} animateComponent={animateComponent} />
            <Hobbies width={hobbyDimension} />
            <Project width={projectDimension} />
            <Todo width={todosDimension}/>
            <ContactMe width={contactDimension}/>
            <Certificates width={certifDimension} />
        </React.Fragment>
    );
}

export default App;

