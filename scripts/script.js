// gifts

const list = document.querySelector("#gifts");

async function fetchProducts() {
    try {
        const response = await fetch('../gifts.json'); 
        const products = await response.json(); 
        return products; 
    } catch (error) { 
        console.error('Erro ao carregar o arquivo JSON:', error);
    } 
}

async function showList() {
    const gifts = await fetchProducts();

    gifts.forEach(gift => {
        const card = document.createElement("div")
        const name = document.createElement("p")
        const price = document.createElement("p")
        const img = document.createElement("img")
        const btn = document.createElement("a")

        img.setAttribute("loading","lazy")
        img.setAttribute("alt", gift.nome)
        img.setAttribute("src", gift.img)

        name.textContent = gift.nome
        price.innerHTML = `Por <h2>R$ ${gift.valor}</h2>`
        btn.innerHTML = `Presentear <img src="images/market.svg" loading="lazy" alt="cart">`
        
        card.setAttribute("class","item")
        price.setAttribute("id","price")

        card.appendChild(img)
        card.appendChild(name)
        card.appendChild(price)
        card.appendChild(btn)

        list.appendChild(card)
    });
}

showList();
