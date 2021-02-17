// DRAG SORTING ITEMS - WITH AUTO REARRANGE --------------------------------------------------------------------------------------
// https://codepen.io/fitri/pen/VbrZQm


// ENABLE DRAG SORTING IN DEFINED ELEMENT WITH CLASS (drag-sort-enable)
function enableDragSort(listClass) {
    const sortableLists = document.getElementsByClassName(listClass);
    Array.prototype.map.call(sortableLists, (list) => {enableDragList(list)});
}

// ENABLE DRAGGING OF CHILDREN FROM LIST (ul) > ASSIGN FUNCTION PER ITEM
function enableDragList(list) {
    Array.prototype.map.call(list.children, (item) => {enableDragItem(item)});
}

// ENABLE DRAGGING PER ITEM OF LIST
function enableDragItem(item) {
    item.setAttribute('draggable', true)
    item.ondrag = handleDrag;
    item.ondragend = handleDrop;
}

// WHEN DRAGGING IS ACTIVE > ADD CLASSES & REORDER ITEMS
function handleDrag(item) {
    const selectedItem = item.target,
        list = selectedItem.parentNode,
        x = event.clientX,
        y = event.clientY;

    // ADD CLASSES
    selectedItem.classList.add('drag-sort-active');
    document.querySelector('main section:nth-of-type(2) > ul').classList.add('unfocus');

    // REORDER ITEMS
    let swapItem = document.elementFromPoint(x, y) === null ? selectedItem : document.elementFromPoint(x, y);
    if (list === swapItem.parentNode) {
        swapItem = swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
        list.insertBefore(selectedItem, swapItem);
    }
}

// WHEN DRAGGING ENDS > REMOVE CLASSES 
function handleDrop(item) {
    item.target.classList.remove('drag-sort-active');
    document.querySelector('main section:nth-of-type(2) > ul').classList.remove('unfocus');
}

// RUN FUNCTION IN ELEMENT WITH CLASS
(()=> {enableDragSort('drag-sort-enable')})();



// PREVENT DEFAULT DRAG & DROP ANIMATION IN BROWSER --------------------------------------------------------------------------------------
// https://stackoverflow.com/questions/42991709/how-to-disable-dragend-animation-in-html5/51697038#51697038
document.addEventListener('dragover', function(e) { e.preventDefault(); });



// EXPORT PLAYLIST OVERLAY --------------------------------------------------------------------------------------
var exportPlaylistoverlay = document.querySelector('main section:nth-of-type(3)');

// SHOW EXPORT PLAYLIST OVERLAY
var exportPlaylistButton = document.querySelector('footer > button');
exportPlaylistButton.addEventListener("click", exportPlaylistShow);

function exportPlaylistShow() {
    exportPlaylistoverlay.classList.add('visible');
}


// HIDE EXPORT PLAYLIST OVERLAY
var exportPlaylistCloseButton = document.querySelector('main section:nth-of-type(3) button');
exportPlaylistCloseButton.addEventListener("click", exportPlaylistHide);

function exportPlaylistHide() {
    exportPlaylistoverlay.classList.remove('visible');
}



// PLAYLIST CONTENT/INFO SCROLL ANIMATION --------------------------------------------------------------------------------------
// https://webdesign.tutsplus.com/tutorials/simple-fade-effect-on-scroll--cms-35166
function playlistContentScroll() {
    var playlistInfo = document.querySelector('main section:nth-of-type(1)');
    var playlistInfoContentH2 = document.querySelector('main section:nth-of-type(1) h2');
    var playlistInfoContentUL = document.querySelector('main section:nth-of-type(1) ul');
    var playlistInfoContentP = document.querySelector('main section:nth-of-type(1) p');
    var playlistContent = document.querySelector('main section:nth-of-type(2)');
    var playlistImage = document.querySelector('main section:first-of-type > img');
    const checkpoint = 231;
    var playlistInfoCurrentHeight = playlistInfo.clientHeight;

    // WHEN SCROLLING IN PLAYLIST CONTENT
    playlistContent.addEventListener("scroll", () => {
        const currentScroll = playlistContent.scrollTop;

        // IF SCROLL DISTANCE IS LESS THAN CHECKPOINT
        if (currentScroll <= checkpoint) {
            opacity = 1 - (currentScroll * 1.5) / checkpoint;
            opacityFast = 1 - (currentScroll * 2.35) / checkpoint;
            opacityHalf = 0.65 - (currentScroll * 2.5) / checkpoint;
            playlistInfoHeight = playlistInfoCurrentHeight - currentScroll;
            playlistInfoContentTransform = currentScroll;
            playlistImageTransform = 1 - currentScroll / checkpoint;
            playlistH2Transform = 1 - ((currentScroll / checkpoint) * 0.25);
        } else {
            opacity = 0;
            opacityFast = 0;
            opacityHalf = 0;
            playlistInfoHeight = 116;
            playlistInfoContentTransform = checkpoint;
        }
        // ANIMATE HTML ELEMENTS
        playlistImage.style.opacity = opacityFast;
        playlistImage.style.transform = 'scale(' + playlistImageTransform + ') translateY(-' + (playlistInfoContentTransform * 0.35) + 'px)';
        playlistInfo.style.height = playlistInfoHeight + 'px';
        playlistInfoContentH2.style.transform = 'translateY(-' + (playlistInfoContentTransform * 0.7) + 'px) scale(' + playlistH2Transform + ')';
        playlistInfoContentUL.style.transform = 'translateY(-' + playlistInfoContentTransform + 'px)';
        playlistInfoContentUL.style.opacity = opacity;
        playlistInfoContentP.style.transform = 'translateY(-' + (playlistInfoContentTransform * 0.75) + 'px)';
        playlistInfoContentP.style.opacity = opacityHalf;
    });
}
playlistContentScroll(); 