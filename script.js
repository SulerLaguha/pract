let header_button = document.querySelector(".mobile_icon");
header_button.addEventListener("click", function () {
    let header = document.querySelector("header");
    if (header.classList.contains("open")) {
        close_popup();
    } else {
        header.classList.add("open");
        header_button.querySelector("img").src = "cancel.png";
        header_button.querySelector("img").alt = "Закрыть меню";
    }
});
function close_popup() {
    let header = document.querySelector("header");
    header.classList.remove("open");
    header_button.querySelector("img").src = "align-left.png";
    header_button.querySelector("img").alt = "Меню";
}
document.querySelector("#grid").addEventListener("click", close_popup, false);
document.querySelector("header .popup").addEventListener("click", function(e) {
    if (e.target.tagName === 'A') {
        close_popup();
    }
}, false);
document.querySelector("#show_add_photo").addEventListener("click", function () {
    document.querySelector("#add_new_photo").classList.add("open");
});
document.querySelector("#show_add_photo_1").addEventListener("click", function () {
    document.querySelector("#add_new_photo").classList.add("open");
});
document.querySelector("#cancel").addEventListener("click", function () {
    document.querySelector("#add_new_photo").classList.remove("open");
    document.querySelector("#new_photo_src").classList.remove("error");
    document.querySelector("#new_photo_text").classList.remove("error");
});
document.querySelector("#add_photo").addEventListener("click", function () {
    let srcInput = document.querySelector("#new_photo_src");
    let textInput = document.querySelector("#new_photo_text");
    let src = srcInput.value.trim();
    let text = textInput.value.trim();
    srcInput.classList.remove("error");
    if (src) {
        let new_photo_div = document.createElement("div");
        new_photo_div.classList.add("photo");
        let new_img = document.createElement("img");
        new_img.src = src;
        new_img.alt = text || "Изображение";
        let new_p = document.createElement("p");
        new_p.innerText = text || "Фотография";
        new_photo_div.append(new_img);
        new_photo_div.append(new_p);
        document.querySelector("#grid").prepend(new_photo_div);
        srcInput.value = "";
        textInput.value = "";
        document.querySelector("#add_new_photo").classList.remove("open");
        new_photo_div.addEventListener("click", open_photo, false);
    } else {
        srcInput.classList.add("error");
        srcInput.focus();
    }
});
function open_photo() {
    let src = this.querySelector("img").src;
    let popup_photo = document.querySelector("#popup_photo");
    popup_photo.querySelector("img").src = src;
    popup_photo.classList.add("open");
}
let photos = document.querySelectorAll(".photo");
for (let photo of photos) {
    photo.addEventListener("click", open_photo, false);
}
document.querySelector("#popup_photo").addEventListener("click", function () {
    this.classList.remove("open");
});