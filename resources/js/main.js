const categories = [
  { id: 1, title: "President" },
  { id: 2, title: "Secretary" },
  { id: 3, title: "Organizer" },
];

const candidates = [
  {
    id: 1,
    name: "Samuel Larbi Danquah",
    category: "President",
    imgSrc: "./resources/images/sam.png",
  },
  {
    id: 2,
    name: "Benjamin Blay",
    category: "President",
    imgSrc: "./resources/images/ben.png",
  },
  {
    id: 3,
    name: "Alice Ansah",
    category: "Secretary",
    imgSrc: "./resources/images/alice.png",
  },
  {
    id: 4,
    name: "Tryphena Oduro",
    category: "Secretary",
    imgSrc: "./resources/images/tryph.png",
  },
  {
    id: 5,
    name: "Stella Otoo",
    category: "Organizer",
    imgSrc: "./resources/images/stella.png",
  },
  {
    id: 6,
    name: "Adjoa Adubea",
    category: "Organizer",
    imgSrc: "./resources/images/ajoa.png",
  },
];

// Create the category div for each category
categories.forEach((category) => {
  const categoryDIV = document.createElement("div");
  categoryDIV.className = "category";

  // Category title
  const categoryTitle = document.createElement("h3");
  categoryTitle.innerText = category.title;
  categoryTitle.className = "category-name";

  candidates.forEach((candidate) => {
    const candidateDiv = document.createElement("div");
    candidateDiv.className = "candidate";

    const img = document.createElement("img");
    img.src = candidate.imgSrc;

    candidateDiv.innerText = candidate.name;

    candidateDiv.insertBefore(img, candidateDiv.childNodes[0]);

    if (candidate.category === category.title) {
      categoryDIV.appendChild(candidateDiv);
    }

    // Highlight candidate on click
    candidateDiv.addEventListener("click", function () {
      const parent = this.parentNode;
      this.classList.add("selected");
      parent.childNodes.forEach((child) => {
        if (child !== this) {
          child.classList.remove("selected");
        }
      });
    });
  });

  // Append the children of the div
  categoryDIV.insertBefore(categoryTitle, categoryDIV.childNodes[0]);

  document.getElementById("content").appendChild(categoryDIV);
});

// Get all selected candidates
const content = document.getElementById("content");
const voteBtn = document.getElementById("vote");
const categoriesDivs = document.querySelectorAll(".category");

voteBtn.addEventListener("click", () => {
  if (document.querySelectorAll(".selected").length < categories.length) {
    document.querySelector(".error").style.display = "block";
  } else {
    // When the submit button is clicked, get all the selected votes
    document.querySelectorAll(".selected").forEach((selected) => {
      document.querySelector(".error").style.display = "none";

      console.log(selected.innerText);
    });
  }
});
