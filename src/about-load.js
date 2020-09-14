const aboutLoad = (() => {
    const aboutContainer = () => {
        const centerContainer = document.querySelector('#center-container');
        let centerBox = document.createElement('div');
        centerBox.classList.add('about-container');
        centerContainer.appendChild(centerBox);
        addText(centerBox);
    }

    const addText = (centerBox) => {
        let tabHeader = document.createElement('h1');
        tabHeader.classList.add('tab-header');
        tabHeader.id = 'tab-header';
        tabHeader.textContent = "About Us";
        centerBox.appendChild(tabHeader);

        let para = document.createElement('p');
        para.classList.add('about-text-content');
        para.id = 'about-text-content';
        para.textContent = " Akira Santa Cruz opened in February 2012 right in the thick of midtown. Akira prides itself on the quality of its fresh fish! Having an amazing customer base allows us to bring you quality product every day. Come in and let our chefs make you a custom omakase or chirashi donburi for a more tradition taste, or choose from over a hundred roll combinations with bold and magnificent flavorings. Chefs in the kitchen prepare our salmon teriyaki, skirt steak and hamachi kama, all very popular grill items. Come in for lunch and enjoy sushi lunch specials and bento boxes. Best deal around! Not to mention our 2 happy hours we have daily! We also specialize in Japanese saké and beer from all over the region. Come in and cheers us at Akira Santa Cruz! Kanpai!"
        centerBox.appendChild(para);
    }

    return {
        aboutContainer
    }
})();

export { aboutLoad }