// Simula um Banco de Dados
const listaImoveis = [
  {
    id: 1,
    titulo: "Apto 3 dorm. Papicu",
    descricao:
      "Lindo apartamento de 3 dormitórios localizado num dos melhores bairros de Fortaleza.",
    valor: 500.000,
    area: "90",
    quartos: "3",
    tipo: "apartamento", // apto,casa,terreno
    localizacao: "Av. Santos Dummont, Papicu",
    venda_aluguel: "venda", // Aluguel
    finalidade: "residencial", // Comercial
    fotos: [
      "https://id725a57.s3.amazonaws.com/fotos/i00035801.jpeg",
      "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://img.freepik.com/fotos-premium/uma-casa-branca-encantadora-com-um-telhado-vermelho-brilhante-e-uma-janela-azul_1258321-339.jpg?w=360",
      " https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://pixabay.com/pt/photos/zurich-opera-house-zurique-su%C3%AD%C3%A7a-2213766/",
    ],
    status: true,
  },
];

// Percorre a lista
listaImoveis.forEach((imovel) => {
  // console.log(imovel);


// Cria o card imovel

const cardImovel = document.createElement("article");
cardImovel.classList.add("imovel");
document.querySelector("#imoveis").appendChild(cardImovel);

// Foto
const divFoto = document.createElement("div");
divFoto.classList.add("foto");
cardImovel.appendChild(divFoto); // Adiciona a foto no card

const img = document.createElement("img");
img.setAttribute('src', imovel.fotos[0]);
divFoto.appendChild(img);

//Conteudo

const divConteudo = document.createElement("div");
divConteudo.classList.add("conteudo");
cardImovel.appendChild(divConteudo); // Adiciona o conteudo no card

const titulo = document.createElement("h3");
titulo.textContent = imovel.titulo;
divConteudo.appendChild(titulo);

const descricao = document.createElement("p");
descricao.textContent = imovel.titulo;
divConteudo.appendChild(descricao);

// Info
const divInfo = document.createElement("div");
divInfo.classList.add("info");
cardImovel.appendChild(divInfo); // Adiciona a info no card

const divDados = document.createElement("div");
divInfo.appendChild(divDados);

    const localizacao = document.createElement("span");
    localizacao.textContent = imovel.localizacao;
    divDados.appendChild(localizacao);

    const quartos = document.createElement("span");
    quartos.textContent = imovel.quartos;
    divDados.appendChild(quartos);

    const area = document.createElement("span");
    area.textContent = imovel.area;
    divDados.appendChild(area);

const divValor = document.createElement("div");
divValor.textContent = `R$ ${imovel.valor.toFixed(2)}`;
divInfo.appendChild(divValor);
})

// {
//   /* <article class="imovel">
// <div class="foto"></div>
// <div class="conteudo-card">
//   <h3>titulo</h3>
//   <p>descricao</p>
// </div>
// <div class="info">
//   <div>
//     <span>localizacao</span>
//     <span>quartos</span>
//     <span>area</span>
//   </div>
//   <div>valor</div>
// </div>
// </article> */
// }
