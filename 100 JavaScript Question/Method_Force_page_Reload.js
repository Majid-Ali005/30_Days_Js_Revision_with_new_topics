// redirect.js

// 1. Using location.href
// Assigns a new URL to the current window, causing the browser to navigate to it.
location.href = "http://google.com";

// 2. Using window.location
// Similar to location.href, just another syntax.
window.location = "http://example.com";

// 3. Using window.location.assign()
// Explicitly loads a new document. Same effect as location.href.
window.location.assign("http://w3schools.com");

// 4. Using window.location.replace()
// Replaces the current page with a new one without adding to the browser's history.
window.location.replace("http://github.com");

// 5. Using window.open()
// Opens a new window or tab (depending on browser settings) with the specified URL.
window.open("http://stackoverflow.com", "_self"); // "_self" targets the current window