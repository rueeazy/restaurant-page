import { pageLoad } from "./page-load";
import { aboutLoad } from './about-load';

// Loads Home Page
pageLoad.loadPage();

//Changes tab color to current page (home)
const navHome = document.querySelector('[data-list = "0"]')
navHome.style.color = "#FF0000";

//Clears center content
const clearContents = () => {
    let container = document.querySelector('#center-container')
    container.querySelectorAll('*').forEach(n => n.remove());
}

// Adds event listener to each tab
const tabSwitching = () => {
    let links = document.querySelectorAll('[data-list');
    links.forEach(link => {
        link.addEventListener('click', handleClick);
    });
}

//handles click event to switch tab
const handleClick = (e) => {
    clearContents();
    if(e.target.id == "li-0") {
        pageLoad.loadMain();
    } else if(e.target.id == "li-1") {
        aboutLoad.aboutContainer();
    } else {
    }
}

tabSwitching();