
var artigos = [
  {
    titulo: "A Batcaverna",
    descricao: "Curiosidades sobre a Batcaverna!",
    imagem: "https://static.wikia.nocookie.net/the-lego-batman-movie/images/a/a8/The_Batcave.png"
  },
  {
    titulo: "Vilões em Lego",
    descricao: "Coringa, Arlequina e muitos outros vilões em Lego!",
    imagem: "https://hype.my/wp-content/uploads/2017/01/batman-lego-movie.jpeg"
  },
  {
    titulo: "Heróis aliados",
    descricao: "Robin, Batgirl e toda a Liga da Justiça em Lego!",
    imagem: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABX22eQkAjt_KkCBVEc-lTf_b4g66felyflvkrF7HyqSe_SgCAiwZUV54L5-mnj7M7_BaJvH_dP0WVEb3Yo4wrOCOXM5EQAnC6woz.jpg?r=d3c"
  }
];


var container = document.getElementById("artigos-container");


for (var i = 0; i < artigos.length; i++) {
  var artigo = artigos[i];

 
  var col = document.createElement("div");
  col.className = "col-sm-6 col-md-4";

  
  var cardHTML = "";
  cardHTML += "<div class='card text-light h-100'>";
  cardHTML += "<img src='" + artigo.imagem + "' class='card-img-top' alt='" + artigo.titulo + "'>";
  cardHTML += "<div class='card-body'>";
  cardHTML += "<h3 class='card-title'>" + artigo.titulo + "</h3>";
  cardHTML += "<p class='card-text'>" + artigo.descricao + "</p>";
  cardHTML += "</div></div>";

  
  col.innerHTML = cardHTML;

  
  container.appendChild(col);
}
