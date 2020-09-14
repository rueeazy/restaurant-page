const pageLoad = (() => {
    window.contentContainer = document.querySelector('#content');
    const mainContainer = () => {
        window.main = document.createElement('div');
        main.classList.add('main');
        contentContainer.appendChild(main);
    }

    const navbar = () => {
        window.nav = document.createElement('nav');
        nav.classList.add('navbar');
        nav.id = "navbar"
        main.appendChild(nav);

        window.logo = document.createElement('div');
        logo.id = "akira";
        logo.innerText = "Akira";
        nav.appendChild(logo);

        window.sushi = document.createElement('h1');
        sushi.id = "sushi";
        sushi.innerText = "Sushi";
        logo.appendChild(sushi);

        window.ul = document.createElement('ul');
        ul.classList.add('links');
        ul.id = 'links';
        nav.appendChild(ul);
        

        for(let i = 0; i < 5; i++) {
        let li = document.createElement('li');
        li.id = `li-${i}`;
        li.setAttribute('data-list', `${i}`);
        ul.appendChild(li);
        }

        let home = document.querySelector('#li-0');
        home.innerText = 'Home';
        let about = document.querySelector('#li-1');
        about.innerText = 'About';
        let menu = document.querySelector('#li-2');
        menu.innerText = 'Menu';
        let hours = document.querySelector('#li-3');
        hours.innerText = 'Hours';
        let contact= document.querySelector('#li-4');
        contact.innerText = 'Contact Us';
    }

    const centerContainer = () => {
        let centerContainer = document.createElement('div');
        centerContainer.classList.add('center-container');
        centerContainer.id = 'center-container';
        main.appendChild(centerContainer);

        let header = document.createElement('div');
        header.classList.add('header');
        header.id = "header";
        header.innerText = "Akira Sushi";
        centerContainer.appendChild(header);

        let lowerText = document.createElement('div');
        lowerText.classList.add('lower-text');
        lowerText.id = "lower-text";
        lowerText.innerText = "Beer. Wine. Sake.";
        centerContainer.appendChild(lowerText);
    }

    const loadPage = () => {
        mainContainer();
        navbar();
        centerContainer();
    }

    const loadMain = () => {
        const centerContainer = document.querySelector('#center-container');
        let header = document.createElement('div');
        header.classList.add('header');
        header.id = "header";
        header.innerText = "Akira Sushi";
        centerContainer.appendChild(header);

        let lowerText = document.createElement('div');
        lowerText.classList.add('lower-text');
        lowerText.id = "lower-text";
        lowerText.innerText = "Beer. Wine. Sake.";
        centerContainer.appendChild(lowerText);
    }

    
    return {
        loadPage,
        loadMain
    }
})();

export {
    pageLoad
}