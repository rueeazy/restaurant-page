const contactLoad = (() => {
    const contactContainer = () => {
        const centerContainer = document.querySelector('#center-container');
        let centerBox = document.createElement('div');
        centerBox.classList.add('contact-container');
        centerContainer.appendChild(centerBox);
        addText(centerBox);
    }

    const addText = (centerBox) => {
        let tabHeader = document.createElement('h1');
        tabHeader.classList.add('tab-header');
        tabHeader.id = 'tab-header';
        tabHeader.textContent = "Contact Us";
        centerBox.appendChild(tabHeader);

        let para = document.createElement('p');
        para.classList.add('contact-text-content');
        para.id = 'contact-text-content';
        para.textContent = "(831) 600-7093"
        centerBox.appendChild(para);
    }

    return {
        contactContainer
    }
})();

export { contactLoad }