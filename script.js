var outputGridElem;

var portfolioCollection = [
  {
    "image": "bowlleaf.png",
    "color": "#8E8A54",
    "title": "Abstracts",
    "description": "Assignment: Photograph abstracts of a common object. Only allowing for abstract images, this exercise should force you to see deeper into an image. Turn the images black & white."
  },
  {
    "image": "bowlcenter.png",
    "color": "#8E8A54",
    "title": "Abstracts",
    "description": "Assignment: Photograph abstracts of a common object. Only allowing for abstract images, this exercise should force you to see deeper into an image. Turn the images black & white."
  },
  { 
   "image": "Travelsmap.png",
    "color": "#8E8A54",
    "title": "Travels Interactive Map: Ecuador",
    "description": "My project showcases an immersive, interactive map delineating my first-ever trip to my ancestral land—a personalized itinerary of significant destinations. Each clickable icon on the map unveils intriguing insights about some of the pinned locations. The map's flexibility enables seamless zooming to explore specific spots while harmonizing the experience with an evocative soundtrack, capturing the essence of Cuenca, my father's cherished hometown. My foremost ambition is to offer a window into the rich tapestry of Ecuador, spotlighting the quaint yet captivating city of Cuenca for a deeper understanding. link~https://editor.p5js.org/lav6879/full/a8_T98pGF"
  },
  { 
   "image": "maisonmargielaS24.png",
    "color": "#8E8A54",
    "title": "Maison Margiela Artinsinal Collection",
    "description": "I made a responsive website to explore the makeup, designs, and set designs of the Maison Margiela Artisinal Collection. This website uses media quieres to work on computers and mobile devices. It is written in html and css. link~https://lav6879.github.io/MediaQueriesMM24/index.html"
  },
  { 
   "image": "dataviz.png",
    "color": "#8E8A54",
    "title": "Sugar Content in Sodas",
    "description": "My project is a Data Visualization, to display how much sugar is in the most popular sodas. I got inspiration for this project from my dad because he has a soda-drinking problem and I'm concerned for his health with all the sugar he drinks. So I'm hoping to raise awareness on this issue since the size of the cans can be so deceiving. My goal with this project was to visually represent the issue hence why the cans look significantly shorter than the stacks of sugar cubes. I wanted users to be able to see the sugar contents once they hover over any given can and if they wanted to see all of the sugar contents displayed side by side, they could use the reveal all button. link~https://editor.p5js.org/lav6879/full/0_P5_9IXg"
  }
];

document.addEventListener("DOMContentLoaded", function() {
  outputGridElem = document.getElementById("portfolio");

  portfolioCollection.forEach(item => {
    createProjectPreview(item);
  });
});

function createProjectPreview(incomingJSON) {
  var newPreviewElement = document.createElement("div");
  newPreviewElement.classList.add("project-preview");
  newPreviewElement.style.backgroundColor = incomingJSON.color;

  var newPreviewThumbnail = document.createElement("img");
  newPreviewThumbnail.classList.add("thumbnail");
  newPreviewThumbnail.src = incomingJSON.image;
  newPreviewThumbnail.alt = incomingJSON.title;

  var newPreviewTitle = document.createElement("h3");
  newPreviewTitle.classList.add("preview-title");
  newPreviewTitle.innerText = incomingJSON.title;

  var newPreviewDescription = document.createElement("p");
  newPreviewDescription.classList.add("preview-description");
  newPreviewDescription.innerText = incomingJSON.description;

  newPreviewElement.appendChild(newPreviewThumbnail);
  newPreviewElement.appendChild(newPreviewTitle);
  newPreviewElement.appendChild(newPreviewDescription);

  outputGridElem.appendChild(newPreviewElement);
};

