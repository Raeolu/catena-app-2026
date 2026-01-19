function update() {
    document.querySelectorAll('.page').forEach(page => {
        page.hidden = (page.id !== currentPage) ? 'hidden' : null;
    });

    pages[currentPage].update();

    console.log("Updated");
}

function init() {
    for (let pageKey in pages) {
        if (pages[pageKey].init) {
            pages[pageKey].init();
        }
    }
}


function createTemplate(object, templateId) {
    const template = document.getElementById(templateId);
    const clone = template.content.cloneNode(true);

    for (let elementToFill of clone.querySelectorAll('[data-fill]')) {
        const key = elementToFill.getAttribute('data-fill');

        const value = object[key];

        if (value === undefined || value === null) {
            elementToFill.innerHTML = `<span class="error">${key}</span>`;
        } else if (typeof value === 'function') {
            elementToFill.innerHTML = value(object);
        } else {
            elementToFill.innerHTML = value;
        }
    }

    return clone;
}