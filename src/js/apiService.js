const API_KEY = '23237261-94e774dc3474a501c481a5592';
const BASE_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=${API_KEY}&`;
// "q=что_искать&page=номер_страницы'

function fetchPhotos(searchQuery) {
    return fetch(`BASE_URL/q=${searchQuery}`)
}
