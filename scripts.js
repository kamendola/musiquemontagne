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

    //prep for grid
    document.querySelectorAll('main div.default>p:first-of-type>img').forEach(($img) => {
        $img.parentNode.classList.add('bg-image');
        $img.parentNode.style.backgroundImage=`url('${$img.getAttribute('src')}')`;
        const $overlay=document.createElement('div');
        $overlay.classList.add('overlay');
        Array.from($img.parentNode.parentNode.children).forEach(($e) => {
            if (!$e.classList.contains('bg-image')) {
                $overlay.appendChild($e.cloneNode(true));
                $e.remove();
            }
        });
        $img.parentNode.parentNode.appendChild($overlay);
        $img.remove();
    });

}

window.addEventListener('DOMContentLoaded', (event) => {
    decoratePage()
});