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
    addActiveClass(evt);
    return makeClearFilter();
  }
  removeActivClass();
  addActiveClass(evt);
  makeClearFilter();
  makeFilter(cards, filterItem);
}

function makeClearFilter() {
  [...cards].map(
    (card) => {
      card.style.display = 'block';
    }
    // card.removeAttribute('hidden')
  );
}

function makeFilter(cards, filter) {
  [...cards]
    .filter((card) => card.dataset.item !== filter)
    .map((card) => {
      card.style.display = 'none';
      // card.setAttribute('hidden', true);
    });
}

function removeActivClass() {
  [...filterBtnArr].map((btn) => {
    btn.classList.remove('filter__btn--is_active');
  });
}

function addActiveClass(evt) {
  evt.target.classList.add('filter__btn--is_active');
}
