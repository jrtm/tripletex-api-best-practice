(function() {
  console.log("hello world");

  const chromes = document.querySelectorAll("[data-chrome-title]");

  for (let i = 0; i < chromes.length; i++) {
    const chrome = chromes[i];
    const title = chrome.getAttribute("data-chrome-title").trim();
    const url = chrome.getAttribute("data-chrome-url").trim();
    const content = chrome.innerHTML;
    const bg = chrome.getAttribute("data-chrome-background").trim();

    const template = document.getElementById("chrome-template").cloneNode(true);
    const tplTitle = template.querySelector(".chrome--pagetitle-text");
    const tplUrl = template.querySelector(".chrome--urlfield");
    const tplContent = template.querySelector(".chrome--content");
    template.removeAttribute("id");
    template.removeAttribute("style");

    const m = /^(\w+:\/\/)([^\/]+)(\/.+)?$/.exec(url);
    if (m) {
      tplUrl.innerHTML =
        m[1] +
        '<span class="chrome--urlfield-hostname">' +
        m[2] +
        "</span>" +
        (m[3] || "");
    } else {
      tplUrl.innerText = url;
    }

    tplTitle.innerText = title;
    tplContent.innerHTML = content;
    if (bg) tplContent.style.backgroundColor = bg;

    chrome.outerHTML = template.outerHTML;

    console.log("Found Chrome:", title, url);
  }
})();
