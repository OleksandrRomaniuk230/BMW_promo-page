export default () => {
    const featureLinkElements = document.querySelectorAll('.feature__link');
    const featureSubElems = document.querySelectorAll('.feature-sub');

    for (let i = 0; i < featureLinkElements.length; i++) {

        featureLinkElements[i].addEventListener('click', () => {
            if (featureLinkElements[i].classList.contains('feature__link_active')) {
                featureLinkElements[i].classList.remove('feature__link_active');
                featureSubElems[i].classList.add('hidden');
            } else {
                for (let j = 0; j < featureLinkElements.length; j++) {
                    featureLinkElements[j].classList.remove('feature__link_active');
                }
                for (let j = 0; j < featureSubElems.length; j++) {
                    featureSubElems[j].classList.add('hidden');
                }
                featureLinkElements[i].classList.add('feature__link_active');
                featureSubElems[i].classList.remove('hidden');
            }
        });
    }

};