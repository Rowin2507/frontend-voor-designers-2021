var body = document.querySelector('body');
let root = document.documentElement;

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
    if (event.isComposing || event.key === ' ') {
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
        body.classList.add('darkmode');
    } else {
        body.classList.remove('darkmode');
    }
}

// DARKMODE TOGGLE SLIDER (D-key)
// https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
body.addEventListener("keydown", event => {
    if (event.isComposing || event.key === 'd') {
        if (toggleDarkmode.checked == true){
            toggleDarkmode.checked = false;
        } else {
            toggleDarkmode.checked = true;
        }
        toggleDarkmodeAppearance();
        return;
    }
});



// COLUMNS TOGGLE SLIDER --------------------------------------------------------------------------------------
var toggleColumns = document.querySelector('main section:nth-of-type(1) > ul > li > ul > li:nth-of-type(2) > ul');
toggleColumns.addEventListener("click", toggleColumnsAmount);
var toggleColumnsValue = document.querySelector('main section:nth-of-type(1) > ul > li > ul > li:nth-of-type(2) > ul li:nth-of-type(2)');

function toggleColumnsAmount() {
    body.classList.toggle('less-columns');
    toggleColumnsValue.textContent == '3' ? toggleColumnsValue.textContent = '4' : toggleColumnsValue.textContent = '3'; 
}

// COLUMNS TOGGLE SLIDER (K-key)
// https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
body.addEventListener("keydown", event => {
    if (event.isComposing || event.key === 'k') {
        toggleColumnsAmount();
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
    root.style.setProperty('--font-size', textSizeRangeValue + 'px');
}

// MOVE SLIDER LEFT & RIGHT (ARROW LEFT & RIGHT)
// https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
body.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 37) {
        textSizeRange.stepDown(1);
        textSizeSlider();
        return;
    } else if (event.isComposing || event.keyCode === 39) {
        textSizeRange.stepUp(1);
        textSizeSlider();
        return;
    }
});



// COMPACT TOGGLE SLIDER --------------------------------------------------------------------------------------
var toggleCompact = document.querySelector('.toggle-slider.compact input');
toggleCompact.addEventListener("click", toggleCompactAppearance);

function toggleCompactAppearance() {
    if (toggleCompact.checked == true){
        body.classList.add('compact');
        root.style.setProperty('--image-height', '75px');
    } else {
        body.classList.remove('compact');
        root.style.setProperty('--image-height', '215px');
    }
}

// COMPACT TOGGLE SLIDER (C-key)
// https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
body.addEventListener("keydown", event => {
    if (event.isComposing || event.key === 'c') {
        if (toggleCompact.checked == true){
            toggleCompact.checked = false;
        } else {
            toggleCompact.checked = true;
        }
        toggleCompactAppearance();
        return;
    }
});