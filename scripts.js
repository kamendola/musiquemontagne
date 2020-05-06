function decoratePage() {
    // add class using first word in first heading to every main>div.default
    document.querySelectorAll('main>div.default').forEach(($div) => {
        const $heading=Array.from($div.children).find(($el) => $el.tagName.match(/^H[0-6]$/)?true:false);
        const label=$heading?$heading.innerText.split(' ')[0].toLowerCase().replace(/[^0-9a-z]/gi, ''):'';
        if (label) $div.classList.add(label);
    });

    //doctor up the svgs
    document.querySelectorAll('svg.icon use').forEach(($use) => {
        $use.setAttribute('href', '/icons.svg#'+$use.getAttribute('href').substring(7).split('.svg')[0]);
    })
}

window.addEventListener('DOMContentLoaded', (event) => {
    decoratePage()
});