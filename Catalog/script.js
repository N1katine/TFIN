const mockdata = [
  {
    id: 1,
    img: "../imgs/menu/naturais.png",
    doador: "Estevao Bonavetnura",
    validade: "12/12/2024",
    produto: "Pizza",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 2,
    img: "../imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 3,
    img: "../imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 4,
    img: "../imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 5,
    img: "../imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 6,
    img: "../imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 7,
    img: "../imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 8,
    img: "../imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 9,
    img: "../imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 10,
    img: "../imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 11,
    img: "../imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 12,
    img: "../imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 13,
    img: "../imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 14,
    img: "../imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
];

let currentProduct = null;

function initialLoad() {
  if (!localStorage.getItem("mockdata")) {
    localStorage.setItem("mockdata", JSON.stringify(mockdata));
  }
  const productsContainer = document.getElementById("products");
  let productsHTML = "";

  const data = JSON.parse(localStorage.getItem("mockdata"));
  data.forEach((product) => {
    productsHTML += `
          <div class="product" onclick="openModal2(${product.id})">
            <img src="${product.img}" alt="product" />
            <div class="product-info">
              <h2>${product.produto}</h2>
              <p>${product.descricao}</p>
              <p>${product.doador}</p>
              <p>${product.validade}</p>
              <p>${product.categoria}</p>
              <p>${product.localizacao}</p>
            </div>
          </div>
        `;
  });

  productsContainer.innerHTML = productsHTML;

  const recommendedContainer = document.getElementById("recommended-items");
  let recommendedHTML = "";
  const recommendedData = data
    .slice()
    .sort((a, b) => new Date(a.validade) - new Date(b.validade));

  recommendedData.forEach((product) => {
    recommendedHTML += `
          <div class="recommended-item" onclick="openModal2(${product.id})">
            <img src="${product.img}" alt="product" />
            <div class="product-info">
              <h2>${product.produto}</h2>
              <p>${product.descricao}</p>
              <p>${product.validade}</p>
            </div>
          </div>
        `;
  });

  recommendedContainer.innerHTML = recommendedHTML;
}

window.addEventListener("load", initialLoad);

function filterList() {
  const input = document.querySelector(".search-bar input");
  const filter = input.value.toLowerCase();
  const items = document.querySelectorAll(".category-item, .recommended-item");
  items.forEach((item) => {
    const text = item.querySelector("p").textContent.toLowerCase();
    if (text.includes(filter)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}

function openModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function openModal2(id) {
  const modal2 = document.getElementById("myModal2");
  const modalBodyRetirada = document.getElementById("modal-body-retirada");

  const data = JSON.parse(localStorage.getItem("mockdata"));
  currentProduct = data.find((product) => product.id === id);

  modalBodyRetirada.innerHTML = `
            <div class="product-section2">
                    <div class="product-image2">
                        <div class="recommended-item">
                            <img src="${currentProduct.img}" alt="product" style="object-fit: contain; box-shadow: none;" />
                            <div class="product-info">
                                <h2>${currentProduct.produto}</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="product-info">
                    <div class="input-group">
                        <label for="name">Doador</label>
                        <h3>${currentProduct.doador}</h3>
                    </div>
                    <div class="input-group">
                        <label for="validade">Validade</label>
                        <h3>${currentProduct.validade}</h3>
                    </div>
                    <div class="input-group">
                        <label for="categoria">Categoria</label>
                        <h3>${currentProduct.categoria}</h3>
                    </div>
                    <div class="input-group">
                        <label for="descricao">Descrição</label>
                        <h3>${currentProduct.descricao}</h3>
                    </div>
                    <div class="input-group">
                        <label for="localizacao">Endereço</label>
                        <h3>${currentProduct.localizacao}</h3>
                    </div>
                </div>
    `;
  modal2.style.display = "block";
}

function closeModal() {
  const modal1 = document.getElementById("myModal");
  const modal2 = document.getElementById("myModal2");

  if (modal1) {
    modal1.style.display = "none";
  }

  if (modal2) {
    modal2.style.display = "none";
  }
}

function post() {
  localStorage.setItem(
    "mockdata",
    JSON.stringify(
      JSON.parse(localStorage.getItem("mockdata")).filter(
        (product) => product.id !== currentProduct.id
      )
    )
  );
  initialLoad();
  closeModal();
}

window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
