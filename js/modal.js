import blockScrolled from './blockScrolled.js'
const { enableScrolled, disableScrolled } = blockScrolled;

export default function modal() {
    const openModal = () => {
        modalElem.classList.remove('hidden');
        disableScrolled();
    }
    const closeModal = () => {
        modalElem.classList.add('hidden');
        enableScrolled();
    }
    const moreElems = document.querySelectorAll('.more');
    const modalElem = document.querySelector('.modal');

    moreElems.forEach(moreElem => {
        moreElem.addEventListener('click', openModal)
    })
    modalElem.addEventListener('click', e => {
        const target = e.target;
        if (target.classList.contains('overlay') ||
            target.classList.contains('modal__close')) {
            closeModal()
        }
    });
}