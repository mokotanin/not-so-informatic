// ==UserScript==
// @name         hanza!
// @namespace    http://tampermonkey.net/
// @version      dev
// @description  tmtc
// @author       mokotanin
// @match        https://0680066c.moodle.monbureaunumerique.fr/*
// @match        https://0680066c.index-education.net/pronote/*
// @match        https://0680066c.index-education.net/pronote/*
// @match        blank.org
// @match        https://example.com/
// @grant        none
// @icon         https://i.pinimg.com/736x/1e/ff/b6/1effb6eed9521a79cb31005bc0a64291.jpg
// ==/UserScript==

(async () => {
  const FONT_URL =
    "https://raw.githubusercontent.com/ryanoasis/nerd-fonts/master/patched-fonts/NerdFontsSymbolsOnly/SymbolsNerdFont-Regular.ttf";

  const CACHE_NAME = "nerd-font-icons-v1";

  const cache = await caches.open(CACHE_NAME);

  let response = await cache.match(FONT_URL);

  if (!response) {
    console.log("downloading font...");

    response = await fetch(FONT_URL);

    if (!response.ok) {
      throw new Error(`failed to download font: ${response.status}`);
    }

    await cache.put(FONT_URL, response.clone());

    console.log("font cached.");
  } else {
    console.log("using cached font.");
  }

  const fontData = await response.arrayBuffer();

  const font = new FontFace("NerdIcons", fontData);

  await font.load();

  document.fonts.add(font);

  console.log("icons loaded.");

  init();
})();

(function init() {
  "use strict";

  // md parser
  function markdownToHTML(md) {
    let html = md
      .replace(/^##### (.*$)/gim, "<h3>$1</h3>")
      .replace(/^## (.*$)/gim, "<h2>$1</h2>")
      .replace(/^# (.*$)/gim, "<h1>$1</h1>")
      .replace(/\*\*(.*?)\*\*/gim, "<b>$1</b>")
      .replace(/\*(.*?)\*/gim, "<i>$1</i>")
      .replace(/`(.*?)`/gim, "<code>$1</code>")
      .replace(/\n/g, "<br>");

    return html;
  }

  // Texte en Markdown
  let TXT = localStorage.getItem("TXT") || "bonsoir";
  let message = `${TXT}`;

  // popup
  const popupBox = document.createElement("div");

  popupBox.id = "myPopupBox";
  popupBox.style.position = "fixed";
  popupBox.style.top = "20px";
  popupBox.style.right = "20px";
  popupBox.style.bottom = "80px";
  popupBox.style.background = "rgba(0,0,0,0.4)";
  popupBox.style.color = "white";
  popupBox.style.padding = "15px 20px";
  popupBox.style.borderRadius = "12px";
  popupBox.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
  popupBox.style.zIndex = "999999";
  popupBox.style.fontFamily = "sans-serif";
  popupBox.style.fontSize = "14px";
  popupBox.style.width = "300px";
  popupBox.style.maxHeight = "600px";
  popupBox.style.overflow = "visible"; // allow inner area to scroll while keeping absolute children visible
  popupBox.style.display = "none";
  popupBox.style.opacity = "0";
  popupBox.style.transition = "opacity 0.3s ease";
  popupBox.style.scrollBehavior = "smooth";

  document.body.appendChild(popupBox);

  // internal container
  const contentInner = document.createElement("div");

  contentInner.id = "contentInner";
  contentInner.style.overflowY = "auto";
  contentInner.style.maxHeight = "calc(100% - 20px)";
  contentInner.style.width = "100%";

  // content
  const messageContent = document.createElement("div");

  messageContent.id = "messageContent";
  messageContent.innerHTML = markdownToHTML(message);

  contentInner.appendChild(messageContent);
  popupBox.appendChild(contentInner);

  // edit
  const editBtn = document.createElement("div");

  editBtn.id = "editButton";
  editBtn.style.position = "absolute";
  editBtn.style.left = "8px";
  editBtn.style.bottom = "8px";
  editBtn.innerText = "\uf020";
  editBtn.style.fontFamily = "NerdIcons";
  editBtn.style.width = "30px";
  editBtn.style.height = "30px";
  editBtn.style.lineHeight = "30px";
  editBtn.style.textAlign = "center";
  editBtn.style.background = "rgba(0,0,0,0.6)";
  editBtn.style.color = "rgba(255,255,255,0.6)";
  editBtn.style.borderRadius = "6px";
  editBtn.style.cursor = "pointer";
  editBtn.style.overflowY = "auto";
  editBtn.style.display = "none";
  editBtn.style.opacity = "0";
  editBtn.style.transition = "opacity 0.25s ease";
  editBtn.style.paddingLeft = "0px";
  editBtn.style.zIndex = "1000000";

  popupBox.appendChild(editBtn);

  // edit box
  const editBox = document.createElement("div");

  editBox.id = "myEditBox";
  editBox.style.position = "fixed";
  editBox.style.top = "20px";
  editBox.style.right = "375px";
  editBox.style.bottom = "80px";
  editBox.style.background = "rgba(0,0,0,0.4)";
  editBox.style.color = "white";
  editBox.style.padding = "15px 20px";
  editBox.style.borderRadius = "12px";
  editBox.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
  editBox.style.zIndex = "1000001";
  editBox.style.fontFamily = "sans-serif";
  editBox.style.fontSize = "14px";
  editBox.style.width = "300px";
  editBox.style.maxHeight = "600px";
  editBox.style.overflow = "visible"; // allow inner area to scroll while keeping absolute children visible
  editBox.style.display = "none";
  editBox.style.opacity = "0";
  editBox.style.transition = "opacity 0.3s ease";
  editBox.style.scrollBehavior = "smooth";
  editBox.style.boxSizing = "border-box";

  document.body.appendChild(editBox);

  // close edit box
  const closeEditBtn = document.createElement("div");

  closeEditBtn.innerText = "\uea76";
  closeEditBtn.style.position = "absolute";
  closeEditBtn.style.top = "8px";
  closeEditBtn.style.right = "8px";
  closeEditBtn.style.width = "25px";
  closeEditBtn.style.height = "25px";
  closeEditBtn.style.lineHeight = "25px";
  closeEditBtn.style.textAlign = "center";
  closeEditBtn.style.cursor = "pointer";
  closeEditBtn.style.fontSize = "14px";
  closeEditBtn.style.fontFamily = "NerdIcons";

  editBox.appendChild(closeEditBtn);

  // textarea
  const editTextarea = document.createElement("textarea");

  editTextarea.value = TXT;
  editTextarea.style.width = "100%";
  editTextarea.style.height = "calc(100% - 50px)";
  editTextarea.style.minHeight = "300px";
  editTextarea.style.marginTop = "35px";
  editTextarea.style.boxSizing = "border-box";
  editTextarea.style.resize = "none";
  editTextarea.style.background = "rgba(0,0,0,0.1)";
  editTextarea.style.color = "white";
  editTextarea.style.border = "1px solid rgba(255,255,255,0.2)";
  editTextarea.style.borderRadius = "8px";
  editTextarea.style.padding = "10px";
  editTextarea.style.outline = "none";
  editTextarea.style.fontFamily = "sans-serif";
  editTextarea.style.fontSize = "14px";

  editBox.appendChild(editTextarea);

  // save button
  const saveBtn = document.createElement("button");

  saveBtn.innerText = "\ueb4a";
  saveBtn.style.position = "absolute";
  saveBtn.style.left = "5px";
  saveBtn.style.bottom = "5px";
  saveBtn.style.background = "rgba(0,0,0,0.05)";
  saveBtn.style.color = "rgba(255,255,255,0.6)";
  saveBtn.style.border = "none";
  saveBtn.style.borderRadius = "6px";
  saveBtn.style.padding = "7px";
  saveBtn.style.cursor = "pointer";
  saveBtn.style.fontFamily = "NerdIcons";

  editBox.appendChild(saveBtn);

  let btnVisible = false;

  editBtn.addEventListener("click", () => {
    btnVisible = !btnVisible;

    if (btnVisible) {
      editTextarea.value = TXT;

      editBox.style.display = "block";

      setTimeout(() => {
        editBox.style.opacity = "1";
      }, 10);
    } else {
      editBox.style.opacity = "0";

      setTimeout(() => {
        editBox.style.display = "none";
      }, 300);
    }
  });

  closeEditBtn.addEventListener("click", () => {
    btnVisible = false;

    editBox.style.opacity = "0";

    setTimeout(() => {
      editBox.style.display = "none";
    }, 300);
  });

  saveBtn.addEventListener("click", () => {
    let newTXT = editTextarea.value;

    if (newTXT !== null) {
      TXT = newTXT;

      localStorage.setItem("TXT", TXT); // cache

      message = `${TXT}`;

      messageContent.innerHTML = markdownToHTML(message);

      btnVisible = false;

      editBox.style.opacity = "0";

      setTimeout(() => {
        editBox.style.display = "none";
      }, 300);
    }
  });

  // ²
  let visible = false;

  document.addEventListener("keydown", (e) => {
    if (e.key === "²") {
      visible = !visible;

      if (visible) {
        popupBox.style.display = "block";

        setTimeout(() => {
          popupBox.style.opacity = "1";
        }, 10);

        editBtn.style.display = "block";

        setTimeout(() => {
          editBtn.style.opacity = "1";
        }, 10);
      } else {
        popupBox.style.opacity = "0";

        setTimeout(() => {
          popupBox.style.display = "none";
        }, 300);

        editBtn.style.opacity = "0";

        setTimeout(() => {
          editBtn.style.display = "none";
        }, 300);

        btnVisible = false;

        editBox.style.opacity = "0";

        setTimeout(() => {
          editBox.style.display = "none";
        }, 300);
      }
    }
  });

  // scroll invisible (fonctionnement douteux)
  const style = document.createElement("style");

  style.textContent = `
        #myPopupBox::-webkit-scrollbar { display: none; }
        #myPopupBox h1 { font-size: 18px; margin: 5px 0; }
        #myPopupBox h2 { font-size: 16px; margin: 5px 0; }
        #myPopupBox h3 { font-size: 14px; margin: 5px 0; }
        #myPopupBox ul { padding-left: 20px; }
        .nerd-icon {
            font-family: "NerdIcons";
            font-style: normal;
            font-weight: normal;
        }
    `;

  document.head.appendChild(style);

  // icon bottom right
  const imgBox = document.createElement("div");

  imgBox.style.position = "fixed";
  imgBox.style.bottom = "20px";
  imgBox.style.right = "20px";
  imgBox.style.width = "30px";
  imgBox.style.height = "30px";
  imgBox.style.overflow = "hidden";
  imgBox.style.zIndex = "999998";
  imgBox.style.cursor = "pointer";

  const img = document.createElement("img");

  img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC2pD7hvIuBvgGjji7ymspmnZdJybQVtozgA&s";

  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";

  imgBox.appendChild(img);

  document.body.appendChild(imgBox);

  imgBox.addEventListener("click", () => {
    imgBox.style.display = "none";
  });
})();
