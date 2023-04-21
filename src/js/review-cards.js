const {reviewData} = window;


document.addEventListener("DOMContentLoaded", function () {
    let grid = document.querySelector("#card-grid");
    populate_cards();

    function populate_cards() {
      for (let i = 0; i < reviewData.length; i++) {
        // create card element + set class & id attribute + append to card-grid
        let card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("id", 'review_0' + (i+1));
        grid.appendChild(card);

        // create name element + set class + append to card
        let name = document.createElement("name");
        name.innerHTML = reviewData[i].name;
        name.classList.add("card-name");
        card.appendChild(name);

        // create date element + set class + append to card
        let date = document.createElement("date");
        date.innerHTML = reviewData[i].date;
        date.classList.add("card-date");
        card.appendChild(date);

        // create content element + set class attribute + append to card
        let content = document.createElement("p");
        content.classList.add("content");
        content.innerText = reviewData[i].review_content;
        card.appendChild(content);

        // create rating element + set class attribute + append to card
        let rating = document.createElement("rating");
        rating.classList.add("rating");
        rating.innerText = reviewData[i].rating;
        card.appendChild(rating);

        console.log(card);
        }
        
    }
    return grid;
});

