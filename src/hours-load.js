const hoursLoad = (() => {
    const hoursContainer = () => {
        const centerContainer = document.querySelector('#center-container');
        let centerBox = document.createElement('div');
        centerBox.classList.add('hours-container');
        centerContainer.appendChild(centerBox);
        addText(centerBox);
    }

    const addText = (centerBox) => {
        let tabHeader = document.createElement('h1');
        tabHeader.classList.add('tab-header');
        tabHeader.id = 'tab-header';
        tabHeader.textContent = "Hours";
        centerBox.appendChild(tabHeader);

        let para = document.createElement('p');
        para.classList.add('hours-text-content');
        para.id = 'hours-text-content';
        para.textContent = "Open Daily 11:30am–8pm"
        centerBox.appendChild(para);
    }

    return {
        hoursContainer
    }
})();

export { hoursLoad }