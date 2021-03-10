# Frontend voor Designers - opdracht 2: Een interactie uitwerken voor verschillende gebruikers input

Werk een functionaliteit uit die je kunt bedienen met 'click' en nog een user interactie, zoals het toetsenbord, tab, dubbel click, swipe, long press, <del>force touch</del>, of iets anders ... Werk je ontwerp uit in HTML, CSS en Javascript om te kunnen testen in een [browser](https://en.m.wikipedia.org/wiki/List_of_web_browsers).

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).


# Carspotter
Een kleine opdracht om een settingspanel te maken op een foto overzichtspagina.
<ul>
  <li>
    <a href="https://rowin2507.github.io/frontend-voor-designers-2021/opdracht2/v1/" target="_blank">Link naar opdracht (v1)</a>
  </li>
</ul>

## Interface
Ik heb gekozen om een moderne interface te maken die de content centraal stelt. Om er toch nog een eigen identiteit aan te geven heb ik de site een naam te geven (Carspotter) en een eigen stijl. Het paneel met de instellingen is zowel subtiel als toch aanwezig genoeg om op te vallen. Het idee is dat het een soort pop-up menu is dat over de content heen gepostioneer wordt.

De elementen in deze pop-up zijn ook modern gehouden en passen bij de algehele stijl van de website. Ik heb geprobeerd om meerdere triggers te maken voor de verschillende functies. Zo heb ik checkboxes gebruikt (met de vorm van een toggle slider) om de darkmode functie toe te passen en de compacte versie in te schakelen. Ook heb ik een slider gebruikt om de lettergrootte te wijzigen. Daarnaast kunnen alle functies d.m.v. keyboard shortcuts (aangegeven achter de functie naam in het grijs) ook nog worden uitgevoerd.

De gebruiker blijft te allen tijde in controle en kan op verschillende manieren dus deze functies uitvoeren: zowel door de muis (click Event) te gebruiken als het toetsenbord (Keydown Event) - aangegeven door de grijze indicatoren achter de functie naam in het settings menu. 

## Code
In dit stukje code is te zien hoe ik aan de checkbox input een functie bind om de darkmode in te schakelen op de website. Door te klikken op deze checkbox (toggle), wordt er een functie uitgevoerd. In deze functie wordt in eerste instantie gekeken of de checkbox is aangevinkt of niet. Indien dit waar is, geeft die de class "darkmode" mee aan de body. Indien dit niet waar is, dan wordt deze class verwijderd van de body.

```
// DARKMODE TOGGLE SLIDER
var toggleDarkmode = document.querySelector('.toggle-slider.darkmode input');
toggleDarkmode.addEventListener("click", toggleDarkmodeAppearance);

function toggleDarkmodeAppearance() {
    if (toggleDarkmode.checked == true){
        body.classList.add('darkmode');
    } else {
        body.classList.remove('darkmode');
    }
}
```

Naast het click Event te hebben gebruik, heb ik ook gebruik gemaakt van keydown. Door de "D" toets in te drukken, wordt er gekeken of de checkbox is aangevinkt. Indien dat juist blijkt te zijn, wordt de checbox weer uitgevinkt. Indien dit niet juist blijk te zijn, wordt de checbox wel aangevinkt. In beide gevallen wordt de functie uitgevoerd om de class toe te voegen of te verwijderen van de body.

```
// DARKMODE TOGGLE SLIDER (D-key)
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
```

fgfg

```
// TEXT SIZE SLIDER
var textSizeRange = document.querySelector('main section:nth-of-type(1) > ul > li > ul > li input[type="range"]');
textSizeRange.addEventListener("input", textSizeSlider);

function textSizeSlider() {
    var textSizeRangeValue = textSizeRange.value;

    // CHANGE CSS VARIABLE
    root.style.setProperty('--font-size', textSizeRangeValue + 'px');
}
```

## Bronnen
<ul>
  <li>
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event" target="_blank">https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event</a>
  </li>
  <li>
    <a href="https://css-tricks.com/updating-a-css-variable-with-javascript/" target="_blank">https://css-tricks.com/updating-a-css-variable-with-javascript/</a>
  </li>
</ul>
  
