let container = document.querySelector(".players-grid");
let imgOne = "https://cdn-img.staticzz.com/img/jogadores/new/90/33/759033_jayden_oosterwolde_20250726200546.png";
let imgTwo = "https://www.fifarosters.com/assets/players/fifa25/faces/276602.png";
let imgThree = "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p257186.png?padding=0.7";
let imgFour = "https://cdn-img.staticzz.com/img/jogadores/new/83/41/748341_luka_sucic_20260412001937.png";
let imgFive = "https://images.fifaindex.com/fc26/players/216388.png";
let imgSix = "https://www.fifarosters.com/assets/players/fifa22/faces/195864.png";
let imgSeven = "https://www.fifarosters.com/assets/players/fifa23/faces/216320.png";
let imgEight = "https://www.fifarosters.com/assets/players/fifa24/faces/264422.png";

let playerArr = [
  {
    id: 1,
    name: "Osterwolde",
    position: "CB",
    overall_ratings: 76,
    player_stats: {
      pac: 88,
      sho: 42,
      pas: 64,
      dri: 72,
      def: 75,
      phy: 81,
    },
    age: 24,
    img: imgOne,
  },
  {
    id: 2,
    name: "Osterwolde",
    position: "CB",
    overall_ratings: 72,
    player_stats: {
      pac: 88,
      sho: 42,
      pas: 64,
      dri: 72,
      def: 75,
      phy: 81,
    },
    age: 24,
    img: imgTwo,
  },
  {
    id: 3,
    name: "Osterwolde",
    position: "CB",
    overall_ratings: 76,
    player_stats: {
      pac: 88,
      sho: 42,
      pas: 64,
      dri: 72,
      def: 75,
      phy: 81,
    },
    age: 24,
    img: imgThree,
  },
  {
    id: 4,
    name: "Osterwolde",
    position: "CB",
    overall_ratings: 76,
    player_stats: {
      pac: 88,
      sho: 42,
      pas: 64,
      dri: 72,
      def: 75,
      phy: 81,
    },
    age: 24,
    img: imgFour,
  },
  {
    id: 5,
    name: "Osterwolde",
    position: "CB",
    overall_ratings: 76,
    player_stats: {
      pac: 88,
      sho: 42,
      pas: 64,
      dri: 72,
      def: 75,
      phy: 81,
    },
    age: 24,
    img: imgFive,
  },
  {
    id: 6,
    name: "Osterwolde",
    position: "CB",
    overall_ratings: 76,
    player_stats: {
      pac: 88,
      sho: 42,
      pas: 64,
      dri: 72,
      def: 75,
      phy: 81,
    },
    age: 24,
    img: imgSix,
  },
  {
    id: 7,
    name: "Osterwolde",
    position: "CB",
    overall_ratings: 76,
    player_stats: {
      pac: 88,
      sho: 42,
      pas: 64,
      dri: 72,
      def: 75,
      phy: 81,
    },
    age: 24,
    img: imgSeven,
  },
  {
    id: 8,
    name: "Osterwolde",
    position: "CB",
    overall_ratings: 76,
    player_stats: {
      pac: 88,
      sho: 42,
      pas: 64,
      dri: 72,
      def: 75,
      phy: 81,
    },
    age: 24,
    img: imgEight,
  },
];

// steps to create an element or tag in js and add it to html
// step 1: create the element or tag
// let newEl =  document.createElement("h1")
// // step 2: give the new element created a class name (optional)
// newEl.classList.add("olastyle")
// // step 3: create the content you want to add to the new element
// let el_content = "i was just created in js, hurrraaaayyy!!!!"
// // step 4: add the content to the new eleemnt
// newEl.innerHTML = el_content
// // step 5: append the new element to the html
// container.appendChild(newEl)

// function to create player card
function createCard(player) {
  let card = document.createElement("article");
  card.classList.add("player-card");
  let card_content = `
            <div class="card-background"></div>

            <div class="player-header">
              <span class="player-rating"> ${player.overall_ratings} </span>

              <span class="player-position"> ${player.position} </span>
            </div>

            <div class="player-image-container">
              <img
                src= ${player.img}
                alt="player"
                class="player-image"
              />
            </div>

            <h2 class="player-name">${player.name}</h2>

            <div class="player-stats">
              <div class="stat">
                <span class="stat-label">PAC</span>
                <span class="stat-value">${player.player_stats.pac}</span>
              </div>

              <div class="stat">
                <span class="stat-label">SHO</span>
                <span class="stat-value">${player.player_stats.sho}</span>
              </div>

              <div class="stat">
                <span class="stat-label">PAS</span>
                <span class="stat-value">${player.player_stats.pas}</span>
              </div>

              <div class="stat">
                <span class="stat-label">DRI</span>
                <span class="stat-value">${player.player_stats.dri}</span>
              </div>

              <div class="stat">
                <span class="stat-label">DEF</span>
                <span class="stat-value">${player.player_stats.def}</span>
              </div>

              <div class="stat">
                <span class="stat-label">PHY</span>
                <span class="stat-value">${player.player_stats.phy}</span>
              </div>
            </div>

            <div class="player-meta">
              <span class="player-country"> </span>

              <span class="player-age">${player.age} years</span>
            </div>

`;

  card.innerHTML = card_content;
  container.appendChild(card);
}

playerArr.map((player) => {
    return createCard(player);
})

