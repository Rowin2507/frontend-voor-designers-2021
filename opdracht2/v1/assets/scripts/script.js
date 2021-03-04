var body = document.querySelector('body');


// SETTINGS DROPDOWN --------------------------------------------------------------------------------------
var settingsOverlay = document.querySelector('main section:nth-of-type(1) > ul > li > ul');

// OPEN SETTINGS DROPDOWN (CLICK)
var settingsButtonOpen = document.querySelector('main section:nth-of-type(1) > ul > li > button');
var settingsButtonOpenText = document.querySelector('main section:nth-of-type(1) > ul > li > button span');
settingsButtonOpen.addEventListener("click", settingsOverlayToggle);

function settingsOverlayToggle() {
    settingsOverlay.classList.toggle('visible');
    settingsButtonOpen.classList.toggle('dropdown-visible');
    settingsButtonOpenText.textContent == 'Instellingen' ? settingsButtonOpenText.textContent = 'Sluiten' : settingsButtonOpenText.textContent = 'Instellingen'; 
}

// OPEN SETTINGS DROPDOWN (SPACEBAR)
// https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
body.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 32) {
        settingsOverlayToggle();
        event.preventDefault();
        return;
    }
});



// DARKMODE TOGGLE SLIDER --------------------------------------------------------------------------------------
var toggleDarkmode = document.querySelector('.toggle-slider.darkmode input');
toggleDarkmode.addEventListener("click", toggleDarkmodeAppearance);

function toggleDarkmodeAppearance() {
    if (toggleDarkmode.checked == true){
        document.querySelector('body').classList.add('darkmode');
    } else {
        document.querySelector('body').classList.remove('darkmode');
    }
}

// DARKMODE TOGGLE SLIDER (D-key)
// https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
body.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 68) {
        if (toggleDarkmode.checked == true){
            toggleDarkmode.checked = false;
        } else {
            toggleDarkmode.checked = true;
        }
        toggleDarkmodeAppearance();
        return;
    }
});



// TEXT SIZE SLIDER --------------------------------------------------------------------------------------
var textSizeRange = document.querySelector('main section:nth-of-type(1) > ul > li > ul > li input[type="range"]');
textSizeRange.addEventListener("input", textSizeSlider);

function textSizeSlider() {
    var textSizeRangeValue = textSizeRange.value;

    // CHANGE CSS VARIABLE
    // https://css-tricks.com/updating-a-css-variable-with-javascript/
    let root = document.documentElement;
    root.style.setProperty('--font-size', textSizeRangeValue + "px");
}

// // MOVE SLIDER LEFT (ARROW LEFT)
// // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
// body.addEventListener("keydown", event => {
//     if (event.isComposing || event.keyCode === 37) {
//         textSizeRange.stepDown(2);
//         return;
//     } else if (event.isComposing || event.keyCode === 39) {
//         textSizeRange.stepUp(2);
//         return;
//     }
// });
