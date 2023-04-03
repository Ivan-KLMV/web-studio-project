const filterBtnList = document.querySelector('.filter');
const filterBtnArr = document.querySelectorAll('.filter__btn');
const listOfCards = document.querySelector('.projects');
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
    makeClearFilter();
    return;
  }
  removeActivClass();
  addActiveClass(evt);
  makeClearFilter();
  makeFilter(cards, filterItem);
}

// function showCards() {
//   [...cards].map((card) => card.classList.add('show'));
// }

function makeClearFilter() {
  listOfCards.style.columnGap = '30px';

  [...cards].map((card) => {
    card.classList.remove('hide');
    card.style.margin = 0;
  });
}

function makeFilter(cards, filter) {
  const filteredElements = [...cards].filter(
    (card) => card.dataset.item === filter
  );
  const lastIndex = filteredElements.length - 1;
  listOfCards.style.columnGap = 0;

  [...cards]
    .filter((card) => card.dataset.item !== filter)
    .map((card) => {
      card.classList.add('hide');
    });

  if (listOfCards.getBoundingClientRect().width <= 480) {
    listOfCards.style.gap = 0;
    listOfCards.style.display = '-webkit-box';
    filteredElements.forEach((el) => (el.style.marginBottom = '30px'));
    return;
  }

  if (filteredElements.length === 2) {
    filteredElements[0].style.marginRight = '15px';
    filteredElements[lastIndex].style.marginLeft = '15px';
    return;
  }

  if (
    filteredElements.length > 2 &&
    listOfCards.getBoundingClientRect().width >= 1100
  ) {
    filteredElements[0].style.marginRight = '15px';
    filteredElements[lastIndex].style.marginLeft = '15px';

    const middleElements = filteredElements.splice(1, lastIndex - 1);
    middleElements.forEach((el) => {
      el.style.marginRight = '15px';
      el.style.marginLeft = '15px';
      console.log(listOfCards.getBoundingClientRect().width);
      return;
    });
  }

  if (listOfCards.getBoundingClientRect().width > 480) {
    filteredElements.forEach((el, i) => {
      if (i % 2 === 0) {
        console.log(el);
        el.style.margin = 0;
        el.style.marginRight = '15px';
      }

      if (i % 2 !== 0) {
        console.log(el);
        el.style.margin = 0;
        el.style.marginLeft = '15px';
      }
    });
    return;
  }
}

function removeActivClass() {
  [...filterBtnArr].map((btn) => {
    btn.classList.remove('filter__btn--is_active');
  });
}

function addActiveClass(evt) {
  evt.target.classList.add('filter__btn--is_active');
}
