window.addEventListener('load', init);

function init() {
    const cards = document.getElementsByClassName('card_item');
    const modal = document.getElementById('modal');
    const wrapper = document.getElementById('wrapper');
    const close = document.getElementById('close');
    this.addEventListener('click', e => {
        const classList = e.target.parentNode.classList;
        if ((classList.contains('container') || classList.contains('btn_close') ||
            classList.contains('btn_confirm'))) {            
            if (classList.contains('btn_confirm')) {
                const price = document.getElementsByClassName('modal_content')[0].children[3].textContent;
                alert(`Confirmed by price ${price.split('/')[0]}`);
            }
            closeModal();
        }
    }, false);
    for (const card of cards) {
        card.addEventListener('click', () => {
            close.addEventListener('click', closeModal);
            openModal(card.innerHTML);
        });
    }

    function closeModal() {
        wrapper.classList.add('modal_wrapper__hidden');
        modal.classList.add('modal_card__hidden');
    }

    function openModal(html) {
        wrapper.classList.remove('modal_wrapper__hidden');
        modal.classList.remove('modal_card__hidden');
        modal.children[1].innerHTML = html;
    }
}