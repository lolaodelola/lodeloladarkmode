const toggleColourModeBtn = document.getElementById("colourModeBtn");
const currentColourMode = localStorage.getItem("colourMode");
const sysIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

getSavedColourMode(currentColourMode);
getColourModeBtnText(currentColourMode, sysIsDark);

toggleColourModeBtn.addEventListener("click", function () {
    toggleColourMode(sysIsDark);
    setAndSaveColourMode();
});

function getSavedColourMode(savedMode) {
    if (localStorage.getItem("overRideSysColour") == "true") {
        document.body.classList.remove('systemDarkPreference');
        document.body.classList.toggle(savedMode);
    }
}

function getColourModeBtnText(mode, currentSysIsDark) {
    if((mode == "dark") || (currentSysIsDark && mode != "light")){
        assignColourModeBtnTextLight();
    } else {
        assignColourModeBtnTextDark();
    }
}

function toggleColourMode(currentSysIsDark) {
    const isUsingSystemColours = document.body.classList.contains('systemColourPreference');
    const isDark = (isUsingSystemColours && currentSysIsDark) || document.body.classList.contains('dark');

    document.body.classList.remove('systemDarkPreference');
    document.body.classList.toggle('dark', !isDark);
}

function setAndSaveColourMode() {
    let colourMode;
    if (document.body.classList.contains("dark")) {
        colourMode = "dark";
        assignColourModeBtnTextLight();
    } else {
        colourMode = "light";
        assignColourModeBtnTextDark();
    }
    localStorage.setItem("colourMode", colourMode);
    localStorage.setItem("overRideSysColour", "true")
}

function assignColourModeBtnTextLight() {
    toggleColourModeBtn.innerText = "Go Light 🌞"
}

function assignColourModeBtnTextDark() {
    toggleColourModeBtn.innerText = "Go Dark 🌚"
}
