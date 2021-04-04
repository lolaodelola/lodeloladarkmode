document.getElementById("year").innerHTML = new Date().getFullYear();

const toggleColourModeBtn = document.getElementById("colourModeBtn");
const sysIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const currentColourMode = localStorage.getItem("colourMode");
let colourMode;
setSavedColourMode(currentColourMode);
setColourModeBtnText(currentColourMode);

toggleColourModeBtn.addEventListener("click", function () {
    toggleColourMode(sysIsDark);
    localStorage.setItem("colourMode", colourMode);
});

function setSavedColourMode(mode) {
    if (mode == "dark") {
        document.body.classList = "dark";
    } else if (mode == "light") {
        document.body.classList = "light";
    }
}

function setColourModeBtnText(mode) {
    if(mode == "dark"){
        assignColourModeBtnTextLight();
    } else {
        assignColourModeBtnTextDark();
    }
}

function toggleColourMode(systemColourMode) {
    if (systemColourMode) {
        setBodyClassLight();
        if(document.body.classList.value == "light"){
            assignColourModeBtnTextDark();
            assignColourModeLight();
        } else {
            assignColourModeBtnTextLight();
            assignColourModeDark();
        }
    } else {
        setBodyClassDark();
        if(document.body.classList.value == "dark"){
            assignColourModeBtnTextLight();
            assignColourModeDark();
        } else {
            assignColourModeBtnTextDark();
            assignColourModeLight();
        }
    }
}

function setBodyClassLight() {
    document.body.classList.remove("dark");
    document.body.classList.toggle("light");
}

function setBodyClassDark() {
    document.body.classList.remove("light");
    document.body.classList.toggle("dark");
}

function assignColourModeLight() {
    colourMode = "light"
}

function assignColourModeDark() {
    colourMode = "dark"
}

function assignColourModeBtnTextLight() {
    toggleColourModeBtn.innerText = "Go Light 🌞"
}

function assignColourModeBtnTextDark() {
    toggleColourModeBtn.innerText = "Go Dark 🌚"
}