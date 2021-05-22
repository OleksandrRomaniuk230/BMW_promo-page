export default function tabs() {
    const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
    const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');
    const tabsTitleElems = document.querySelectorAll('[data-tabs-title]');
    for (const tab of tabsHandlerElems) {
        tab.addEventListener('click', () => {
            tabsHandlerElems.forEach(item => {
                item.classList.toggle('design-list__item_active');
            })
            tabsFieldElems.forEach(item => {
                item.classList.toggle('hidden');
            })
            tabsTitleElems.forEach(item => {
                item.classList.toggle('hidden');
            })
        })
    }
}