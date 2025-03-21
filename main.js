/* ============== CORE JS ============== */
const inputFilter = document.querySelector("header input");
const cards = document.querySelectorAll(".cards li");
inputFilter.addEventListener("input", filterCards);

function filterCards() {
  if( inputFilter.value !== '' ) {
    for (let card of cards) {
      let title = card.querySelector('h2');
      title = title.textContent.toLowerCase();
      let filterText = inputFilter.value.toLowerCase();
      if( !title.includes(filterText) ) {
          card.style.display = "none";
          console.log(title, filterText);
        } else {
            card.style.display = "block";
            console.log(title, filterText);
        }
    }
  } else {
    for( let card of cards ){
        card.style.display = "block";
    }
  };
};
