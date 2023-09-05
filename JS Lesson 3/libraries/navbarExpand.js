export function handleClick(nav = document.getElementById('nav')) {
    nav.classList.toggle('open')
    const expandedState = nav.getAttribute('aria-expanded')
    nav.setAttribute('aria-expanded', !eval(expandedState))
};
