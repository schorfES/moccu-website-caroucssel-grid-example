import {Carousel} from 'caroucssel';

const el = document.querySelector('.slider');
const carousel = new Carousel(el, {
	hasPagination: true,
    paginationClassName: 'pagination',
    paginationLabel: ({index}) => `${index + 1}.`,
    paginationTitle: ({index}) => `Jump to ${index + 1}. item`,
    paginationTemplate: ({className, pages, label, title}) =>
        `<div class="${className}">
            ${pages.map((page, index) =>
                `<button title="${title({index})}">${label({index})}</button>`
            ).join('')}
        </div>`
});