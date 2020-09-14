const menuLoad = (() => {
    const menuContainer = () => {
        const centerContainer = document.querySelector('#center-container');
        let centerBox = document.createElement('div');
        centerBox.classList.add('menu-container');
        centerContainer.appendChild(centerBox);
        addText(centerBox);
    }

    const addText = (centerBox) => {
        let tabHeader = document.createElement('h1');
        tabHeader.classList.add('tab-header');
        tabHeader.id = 'tab-header';
        tabHeader.textContent = "Menu";
        centerBox.appendChild(tabHeader);

        let para = document.createElement('p');
        para.classList.add('menu-text-content');
        para.id = 'menu-text-content';
        para.textContent = "Located in Seabright, Akira Santa Cruz prides itself on its fresh fish combined with bold flavorings. A casual sushi experience mixed with hip vibes and wonderful local art. Please join us at the original Akira Sushi!"
        centerBox.appendChild(para);
    }

    return {
        menuContainer
    }
})();

export { menuLoad }