import './sass/main.scss';
import { refs } from './js/refs.js';
import PhotosApiService from './js/apiService';
import renderMarkup from "./js/renderMarkup.js";

// import photoCardTpl from'./templates/photo__card.hbs'
// console.log(refs.gallery)

const photosApiService = new PhotosApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreButton.addEventListener('click', fetchPhotos)

function onSearch(e) {
    e.preventDefault();

    // photosApiService.query = e.currentTarget.elements.query.value;
    photosApiService.query = refs.input.value;
    photosApiService.resetPage();
    refs.gallery.innerHTML = "";
    fetchPhotos();
    refs.loadMoreButton.classList.remove("is-hidden");
    refs.loadMoreButton.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
    });
}
function fetchPhotos() {
    refs.loadMoreButton.setAttribute("disabled", "disabled");
    photosApiService.fetchPhotos()
        .then(photos => renderMarkup(photos))
        .then(() => refs.loadMoreButton.scrollIntoView({
            behavior: 'auto',
            block: 'end',
        }));
    refs.loadMoreButton.removeAttribute("disabled", "disabled");
}

// function onLoadMore(e) {
//     e.preventDefault();

//     photosApiService.fetchPhotos()
//         .then(photos => renderMarkup(photos))
//         .then(() => refs.loadMoreButton.scrollIntoView({
//             behavior: 'smooth',
//             block: 'end',
//         }));
// }


// refs.loadMoreButton.addEventListener('click', autoScrolling);


// function onSearchFormSubmit(e) {
//     e.preventDefault();
//     const query = e.currentTarget.elements.query.value;
//     fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&per_page=12&key=23237261-94e774dc3474a501c481a5592`)
//         .then(result => result.json())
//         .then(data => renderMarkup(data.hits));
// }
// function renderMarkup(arr) {
//     const galleryMarkup = arr
//         .map((obj) => createGalleryItem(obj))
//         .join('');
//     refs.gallery.insertAdjacentHTML ('afterbegin', galleryMarkup)
// };

// function createGalleryItem(obj) {
//     return `<li class = "gallery-item">${photoCardTpl(obj)}</li>`
