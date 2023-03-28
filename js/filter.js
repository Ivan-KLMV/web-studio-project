const filterBtnList = document.querySelector('.filter');
const filterBtnArr = document.querySelectorAll('.filter__btn');
const cards = document.querySelectorAll('.projects__item');

filterBtnList.addEventListener('click', cardsFilter);

function cardsFilter(evt) {
  const filterItem = evt.target.dataset.filter;

  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  if (filterItem === 'all') {
    removeActivClass();
    evt.target.classList.add('filter__btn--is_active');
    return makeClearFilter();
  }
  removeActivClass();
  evt.target.classList.add('filter__btn--is_active');
  makeClearFilter();
  [...cards]
    .filter((card) => card.dataset.item !== filterItem)
    .map((card) => {
      card.setAttribute('hidden', true);
    });
}

function makeClearFilter() {
  [...cards].map((card) => card.removeAttribute('hidden'));
}

function removeActivClass() {
  [...filterBtnArr].map((btn) => {
    btn.classList.remove('filter__btn--is_active');
  });
}
