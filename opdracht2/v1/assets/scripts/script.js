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
        event.preventDefault();
        settingsOverlayToggle();
        return;
    }
});



// DARKMODE TOGGLE SLIDER --------------------------------------------------------------------------------------
var toggleDarkmode = document.querySelector('.toggle-slider input');
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


