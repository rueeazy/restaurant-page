import { pageLoad } from "./page-load";
import { aboutLoad } from './about-load';
import { menuLoad } from './menu-load';
import { hoursLoad } from './hours-load';
import { contactLoad } from './contact-load';

// Loads Home Page
pageLoad.loadPage();

//Changes tab color to current page (home)
const navHome = document.querySelector('[data-list = "0"]')
navHome.style.color = "#FF0000";

// Resets tab colors
const tabReset = () => {
    const navItems = document.querySelectorAll('[data-list]');
    navItems.forEach(item => {
        item.style.color = '#FFFFFF';
    })
}

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
    tabReset();
    if(e.target.id == "li-0") {
        let navHome = document.querySelector('[data-list = "0"]')
        navHome.style.color = "#FF0000";
        pageLoad.loadMain();
    } else if(e.target.id == "li-1") {
        let aboutHome = document.querySelector('[data-list = "1"]')
        aboutHome.style.color = "#FF0000";
        aboutLoad.aboutContainer();
    } else if(e.target.id == "li-2") {
        let menuHome = document.querySelector('[data-list = "2"]')
        menuHome.style.color = "#FF0000";
        menuLoad.menuContainer();
    } else if(e.target.id == "li-3") {
        let hoursHome = document.querySelector('[data-list = "3"]')
        hoursHome.style.color = "#FF0000";
        hoursLoad.hoursContainer();
    } else if(e.target.id == "li-4") {
        let contactHome = document.querySelector('[data-list = "4"]')
        contactHome.style.color = "#FF0000";
        contactLoad.contactContainer();
    }
}

tabSwitching();