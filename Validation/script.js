window.addEventListener("load", initialLoad);
function initialLoad() {
  const data = JSON.parse(localStorage.getItem("mockdata"));
  const productsContainer = document.getElementById("products");
  let products = [];
  data.map((item) => {
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
                                <button onclick="reject(${item.id})" class="stock-button">Rejeitar</button>
                            </div>
                    </div>`;
  });
  productsContainer.innerHTML = products;
}

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

const reject = (id) => {
  const data = JSON.parse(localStorage.getItem("mockdata"));
  const newData = data.filter((item) => item.id !== id);
  localStorage.setItem("mockdata", JSON.stringify(newData));
  initialLoad();
};
