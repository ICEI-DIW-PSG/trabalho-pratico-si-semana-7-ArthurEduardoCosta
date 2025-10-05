// Lista de artigos (JSON simples)
var artigos = [
  {
    id: 1,
    titulo: "A Batcaverna",
    descricao: "Curiosidades sobre a Batcaverna!",
    imagem: "https://static.wikia.nocookie.net/the-lego-batman-movie/images/a/a8/The_Batcave.png"
  },
  {
    id: 2,
    titulo: "Vilões em Lego",
    descricao: "Coringa, Arlequina e muitos outros vilões em Lego!",
    imagem: "https://hype.my/wp-content/uploads/2017/01/batman-lego-movie.jpeg"
  },
  {
    id: 3,
    titulo: "Heróis aliados",
    descricao: "Robin, Batgirl e toda a Liga da Justiça em Lego!",
    imagem: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABX22eQkAjt_KkCBVEc-lTf_b4g66felyflvkrF7HyqSe_SgCAiwZUV54L5-mnj7M7_BaJvH_dP0WVEb3Yo4wrOCOXM5EQAnC6woz.jpg?r=d3c"
  }
];

// Verifica se a página é index.html ou detalhes.html
var containerArtigos = document.getElementById("artigos-container");
var containerDetalhes = document.getElementById("detalhes-container");

// Se for a página inicial (monta os cards)
if (containerArtigos) {
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
    cardHTML += "<a href='detalhes.html?id=" + artigo.id + "' class='btn btn-batman'>Ver Detalhes</a>";
    cardHTML += "</div></div>";

    col.innerHTML = cardHTML;
    containerArtigos.appendChild(col);
  }
}

// Se for a página de detalhes
if (containerDetalhes) {
  // Pega o ID da URL
  var params = new URLSearchParams(window.location.search);
  var id = parseInt(params.get("id"));

  // Procura o artigo com esse ID
  var artigoSelecionado = null;
  for (var i = 0; i < artigos.length; i++) {
    if (artigos[i].id === id) {
      artigoSelecionado = artigos[i];
      break;
    }
  }

  // Mostra o conteúdo se encontrou o artigo
  if (artigoSelecionado) {
    var conteudo = "";
    conteudo += "<h1 class='text-warning'>" + artigoSelecionado.titulo + "</h1>";
    conteudo += "<img src='" + artigoSelecionado.imagem + "' class='img-fluid rounded mb-4' alt='" + artigoSelecionado.titulo + "'>";
    conteudo += "<p class='lead'>" + artigoSelecionado.descricao + "</p>";
    containerDetalhes.innerHTML = conteudo;
  } else {
    containerDetalhes.innerHTML = "<p>Artigo não encontrado!</p>";
  }
}
