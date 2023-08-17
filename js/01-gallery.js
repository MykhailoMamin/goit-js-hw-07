import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulRef = document.querySelector(".gallery");
ulRef.addEventListener("click", onImageClick);

const createGalleryMarkup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
  )
  .join("");

ulRef.insertAdjacentHTML("beforeend", createGalleryMarkup);

function onImageClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  ulRef.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
