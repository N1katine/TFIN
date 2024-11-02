const mockdata = [
    {
        img: "../imgs/menu/naturais.png",
        doador: "Lucas Lopes",
        validade: "20/11/2024",
        produto: "Hamburguer",
        categoria: "Lanches",
        descricao: "X-Tudo",
        localizacao: "R. Santo Ângelo, 79 - Parque São Jorge"
    },
    {
        img: "../imgs/menu/naturais.png",
        doador: "Lucas Lopes",
        validade: "20/11/2024",
        produto: "Hamburguer",
        categoria: "Lanches",
        descricao: "X-Tudo",
        localizacao: "R. Santo Ângelo, 79 - Parque São Jorge"
    },
    {
        img: "../imgs/menu/naturais.png",
        doador: "Lucas Lopes",
        validade: "20/11/2024",
        produto: "Hamburguer",
        categoria: "Lanches",
        descricao: "X-Tudo",
        localizacao: "R. Santo Ângelo, 79 - Parque São Jorge"
    },
    {
        img: "../imgs/menu/naturais.png",
        doador: "Lucas Lopes",
        validade: "20/11/2024",
        produto: "Hamburguer",
        categoria: "Lanches",
        descricao: "X-Tudo",
        localizacao: "R. Santo Ângelo, 79 - Parque São Jorge"
    },
    {
        img: "../imgs/menu/naturais.png",
        doador: "Lucas Lopes",
        validade: "20/11/2024",
        produto: "Hamburguer",
        categoria: "Lanches",
        descricao: "X-Tudo",
        localizacao: "R. Santo Ângelo, 79 - Parque São Jorge"
    },
    {
        img: "../imgs/menu/naturais.png",
        doador: "Lucas Lopes",
        validade: "20/11/2024",
        produto: "Hamburguer",
        categoria: "Lanches",
        descricao: "X-Tudo",
        localizacao: "R. Santo Ângelo, 79 - Parque São Jorge"
    },
    {
        img: "../imgs/menu/naturais.png",
        doador: "Lucas Lopes",
        validade: "20/11/2024",
        produto: "Hamburguer",
        categoria: "Lanches",
        descricao: "X-Tudo",
        localizacao: "R. Santo Ângelo, 79 - Parque São Jorge"
    },
    {
        img: "../imgs/menu/naturais.png",
        doador: "Lucas Lopes",
        validade: "20/11/2024",
        produto: "Hamburguer",
        categoria: "Lanches",
        descricao: "X-Tudo",
        localizacao: "R. Santo Ângelo, 79 - Parque São Jorge"
    },
    {
        img: "../imgs/menu/naturais.png",
        doador: "Lucas Lopes",
        validade: "20/11/2024",
        produto: "Hamburguer",
        categoria: "Lanches",
        descricao: "X-Tudo",
        localizacao: "R. Santo Ângelo, 79 - Parque São Jorge"
    },
    {
        img: "../imgs/menu/naturais.png",
        doador: "Lucas Lopes",
        validade: "20/11/2024",
        produto: "Hamburguer",
        categoria: "Lanches",
        descricao: "X-Tudo",
        localizacao: "R. Santo Ângelo, 79 - Parque São Jorge"
    },
    {
        img: "../imgs/menu/naturais.png",
        doador: "Lucas Lopes",
        validade: "20/11/2024",
        produto: "Hamburguer",
        categoria: "Lanches",
        descricao: "X-Tudo",
        localizacao: "R. Santo Ângelo, 79 - Parque São Jorge"
    },
    {
        img: "../imgs/menu/naturais.png",
        doador: "Lucas Lopes",
        validade: "20/11/2024",
        produto: "Hamburguer",
        categoria: "Lanches",
        descricao: "X-Tudo",
        localizacao: "R. Santo Ângelo, 79 - Parque São Jorge"
    },
    {
        img: "../imgs/menu/naturais.png",
        doador: "Lucas Lopes",
        validade: "20/11/2024",
        produto: "Hamburguer",
        categoria: "Lanches",
        descricao: "X-Tudo",
        localizacao: "R. Santo Ângelo, 79 - Parque São Jorge"
    },
    {
        img: "../imgs/menu/naturais.png",
        doador: "Lucas Lopes",
        validade: "20/11/2024",
        produto: "Hamburguer",
        categoria: "Lanches",
        descricao: "X-Tudo",
        localizacao: "R. Santo Ângelo, 79 - Parque São Jorge"
    },
]

window.addEventListener("load", initialLoad)
function initialLoad() {
    const productsContainer = document.getElementById("products")
    let products = []
    mockdata.map((item) => {
        products += `<div class="product">
                        <h2>Doador: ${item.doador}</h2>
                        <h3>Validade: (${item.validade})</h3>
                        <img src="${item.img}" alt="product" />
                            <div class="product-info">
                                <h3>Nome: ${item.produto}</h3>
                                <p>Descrição: ${item.descricao}</p>
                                <p>Localização: (${item.localizacao})</p>
                            </div>
                            <div class="button-container">
                                <button class="stock-button">Rejeitar</button>
                                <button class="stock-button2">Aceitar</button>
                            </div>
                    </div>`

    })
    productsContainer.innerHTML = products
}

function filterList() {
    const input = document.querySelector(".search-bar input");
    const filter = input.value.toLowerCase();
    const items = document.querySelectorAll(
        ".category-item, .recommended-item"
    );
    items.forEach((item) => {
        const text = item.querySelector("p").textContent.toLowerCase();
        if (text.includes(filter)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}