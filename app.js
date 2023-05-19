const css = document.documentElement.style;

// Barre espace qui change de slide :
document.addEventListener("keypress", function(e) {
    console.log(e)
    if (e.code === "Space") {
        window.scrollBy(0, window.innerHeight);
    };
});

// Navigation qui disparait :
let timeoutID;

function opacityNav() {
    if (window.scrollY !== 0) {
        css.setProperty('--navBarOpacity', "0")
    }
}

function resetTimer() {
    css.setProperty('--navBarOpacity', "1")
    clearTimeout(timeoutID)
    timeoutID = setTimeout(opacityNav, 2500)
}
document.addEventListener("mousemove", resetTimer)
// document.addEventListener("keypress", resetTimer)

let oldScrollValue = 0

document.addEventListener("scroll", function() {
    if (window.scrollY < 50) {
        resetTimer()
    } else if (oldScrollValue > window.scrollY) {
        resetTimer() 
    }
    oldScrollValue = window.scrollY
})