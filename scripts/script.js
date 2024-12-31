// dialog id
const localbtn = document.querySelector("#local")
const localModal = document.querySelector("#modalLocal")

localbtn.addEventListener("click",()=>{
    localModal.innerHTML = ``;
    const modalDiv = document.createElement("div")

    const closeModal = document.createElement('button');
    closeModal.setAttribute('id', 'close-modal');
    closeModal.innerHTML = '❌';
    localModal.appendChild(closeModal);

    const address = document.createElement("p")
    const map = document.createElement("iframe")
    map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d774.9835653687868!2d-45.895352859152034!3d-23.28098542740808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdb57acb1828db%3A0x6322cffe32940114!2sAla%20Cidade%20Jardim%20-%20A%20igreja%20de%20Jesus%20Cristo%20dos%20santos%20dos%20ultimos%20dias!5e0!3m2!1sen!2sbr!4v1735671459853!5m2!1sen!2sbr")
    map.setAttribute("width","400")
    map.setAttribute("height","500")
    map.setAttribute("loading","lazy")
    map.setAttribute("referrerpolicy","no-referrer-when-downgrade")

    modalDiv.setAttribute("class","modalDiv")

    address.textContent ="R. Honorato, 222 - Colonial, São José dos Campos"

    modalDiv.appendChild(address)
    modalDiv.appendChild(map)

    localModal.appendChild(modalDiv)

    localModal.showModal()
    closeModal.addEventListener("click", ()=>{
        localModal
        localModal.close()
    })
})

// gifts

const list = document.querySelector("#gifts");
const url = "https://raw.githubusercontent.com/EmanuelBatixta/convite_casamento/refs/heads/main/gifts.json"

async function fetchProducts() {
    try {
        const response = await fetch(url); 
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
