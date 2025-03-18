//your JS code here. If required.
// Function to apply saved preferences
function applyPreferences() {
    const fontSize = getCookie("fontsize") || "16px";
    const fontColor = getCookie("fontcolor") || "#000000";

    document.documentElement.style.setProperty("--fontsize", fontSize);
    document.documentElement.style.setProperty("--fontcolor", fontColor);

    document.getElementById("fontsize").value = parseInt(fontSize);
    document.getElementById("fontcolor").value = fontColor;
}

// Function to save preferences in cookies
function savePreferences(event) {
    event.preventDefault();

    const fontSize = document.getElementById("fontsize").value + "px";
    const fontColor = document.getElementById("fontcolor").value;

    setCookie("fontsize", fontSize, 30);
    setCookie("fontcolor", fontColor, 30);

    applyPreferences();
}

// Function to set a cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${d.toUTCString()}; path=/`;
}

// Function to get a cookie by name
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) return value;
    }
    return null;
}

// Apply preferences on page load
applyPreferences();

// Event listener for form submission
document.querySelector("form").addEventListener("submit", savePreferences);

