import('./bootstrap').then(({ mount }) => {

    const rootEl = document.getElementById('root');

    const rootElementIsFound = !!rootEl;
    if (rootElementIsFound) {
        mount(rootEl);
    }

});

export {};