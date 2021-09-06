
const API_KEY = '23237261-94e774dc3474a501c481a5592';
const BASE_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=${API_KEY}`;

export default class PhotosApiService{
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    fetchPhotos() {
        const url = `${BASE_URL}&q=${this.searchQuery}&page=${this.page}`;
        return fetch(url)
            .then(responce => responce.json())
          .then((photos) => {
            this.incrementPage();
        return photos;
        })
    }
    incrementPage() {
    this.page += 1;
  }

    resetPage() {
    this.page = 1;
  }

    get query() {
    return this.searchQuery;
  }

    set query(newQuery) {
    this.searchQuery = newQuery;
  }
}