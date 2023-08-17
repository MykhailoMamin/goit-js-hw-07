import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector(".gallery");
ulEl.addEventListener("click", onGalleryClick);

const createMarkupGallery = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`
  )
  .join("");

ulEl.insertAdjacentHTML("beforeend", createMarkupGallery);

function onGalleryClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const lightbox = new SimpleLightbox(".ulEl a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
