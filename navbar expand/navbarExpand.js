
// select the element that is your navigation
const nav = document.getElementById('mainNav')

// Select the button that will expand the navigation
const navExpandButton = document.querySelector('#nav-expand-button')


// create a function to tell the 
// browser what to do when the button is clicked
function handleClick() {
    
    // toggle a class of 'open' on the nav element, this will 
    // change the visual style to `display: flex;` from `display: none;`
    nav.classList.toggle('open')
    
    // set the attribute of 'aria-expanded' to the opposite of what it currently is
    nav.setAttribute('aria-expanded', !eval(nav.getAttribute('aria-expanded')))

};

// tell the browser to listen for a click event 
// and to run "handleClick" when it is clicked
navExpandButton.addEventListener('click', handleClick)