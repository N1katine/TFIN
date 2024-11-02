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

function openModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function openModal2() {
const modal = document.getElementById('myModal2');
modal.style.display = 'block';
}

function closeModal() {
    const modal1 = document.getElementById('myModal');
    const modal2 = document.getElementById('myModal2');
  
    if (modal1) {
      modal1.style.display = 'none';
    }
  
    if (modal2) {
      modal2.style.display = 'none';
    }
  }

function post() {
    alert("Produto postado!");
    closeModal();
}

function post() {
    alert("Produto pronto para retirada!");
    closeModal();
}

window.onclick = function (event) {
const modal = document.getElementById('myModal');
if (event.target == modal) {
    modal.style.display = 'none';
}
};