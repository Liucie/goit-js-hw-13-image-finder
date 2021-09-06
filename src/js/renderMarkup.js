import { refs } from './refs.js';
import photoCardTpl from'../templates/photo__card.hbs'

export default function renderMarkup(data) {
    const galleryMarkup = data.hits
        .map((obj) => createGalleryItem(obj))
        .join('');
    refs.gallery.insertAdjacentHTML ('beforeend', galleryMarkup)
};

function createGalleryItem(obj) {
    return `<li class = "gallery-item">${photoCardTpl(obj)}</li>`
};