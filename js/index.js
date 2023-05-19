// document.addEventListener('DOMContentLoaded', function () {
//   var filterContainer = document.querySelector('.filter-container');
//   var filterizr = new Filterizr(filterContainer);
// });
const options = {
  callbacks: {
    onFilteringStart: function () {
      const filterBtnList = document.querySelector('.filter');
      filterBtnList.addEventListener('click', cardsFilter);
      function cardsFilter(evt) {
        if (evt.target.nodeName !== 'BUTTON') {
          return;
        }
        removeActivClass();
        addActiveClass(evt);
      }
    },
  },
  gutterPixels: 30,
};
const filterizr = new Filterizr('.filter-container', options);

function addActiveClass(evt) {
  evt.target.classList.add('filter__btn--is_active');
}

function removeActivClass() {
  const filterBtnArr = document.querySelectorAll('.filter__btn');

  [...filterBtnArr].map((btn) => {
    btn.classList.remove('filter__btn--is_active');
  });
}
