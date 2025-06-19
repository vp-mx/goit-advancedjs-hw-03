import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import { createGalleryCardTemplate } from "./js/render-functions";
import { fetchPhotosByQuery } from "./js/pixabay-api";

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');

let simplelightbox = new SimpleLightbox('.gallery-card a', {
    captionsData: 'alt',
    captionDelay: 250,
});

const onSearchFormSubmit = event => {
    event.preventDefault();

    const inputValue = event.currentTarget.elements.user_query.value.trim();

    if (inputValue === '') {
        iziToast.error({
            message: "Search value should not be empty!",
            position: "topRight",
        });
        return;
    }

    const searchParams = new URLSearchParams({
        key: "50950053-db3558a1af50bab2399c0c009",
        q: inputValue,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

    galleryEl.innerHTML = '';
    loaderEl.classList.remove('is-hidden');

    fetchPhotosByQuery(searchParams)
        .then(photos => {
            loaderEl.classList.add('is-hidden');
            if (photos.total === 0) {
                iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight",
                });
                galleryEl.innerHTML = '';
                return;
            }
            galleryEl.innerHTML = createGalleryCardTemplate(photos.hits);
            simplelightbox.refresh();
        })
        .catch((error) => {
            loaderEl.classList.add('is-hidden');
            iziToast.error({
                message: "An error occurred. Please try again!",
                position: "topRight",
            });
        });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);