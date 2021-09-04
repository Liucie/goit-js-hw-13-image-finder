import './sass/main.scss';
import { refs } from './js/refs.js';
import photoCardTpl from'./templates/photo__card.hbs'

refs.searchForm.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(e) {
    e.preventDefault();
    const query = e.currentTarget.elements.query.value;
    fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&per_page=12&key=23237261-94e774dc3474a501c481a5592`)
        .then(result => result.json())
        .then(data => console.log(data));
}
