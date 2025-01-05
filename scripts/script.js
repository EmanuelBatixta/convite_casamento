// dialog id
const localbtn = document.querySelector("#local")
const localModal = document.querySelector("#modalLocal")

if (localModal) {
    localbtn.addEventListener("click", () => {
        localModal.innerHTML = ``;
        const modalDiv = document.createElement("div");
    
        const closeModal = document.createElement("button");
        closeModal.setAttribute("id", "close-modal");
        closeModal.innerHTML = "❌";
    
        const address = document.createElement("p");
        const map = document.createElement("iframe");
        const info = document.createElement("p");
    
        const txt = "R. Honorato, 222 - Colonial, São José dos Campos";
    
        map.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d774.9835653687868!2d-45.895352859152034!3d-23.28098542740808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdb57acb1828db%3A0x6322cffe32940114!2sAla%20Cidade%20Jardim%20-%20A%20igreja%20de%20Jesus%20Cristo%20dos%20santos%20dos%20ultimos%20dias!5e0!3m2!1sen!2sbr!4v1735671459853!5m2!1sen!2sbr"
        );

        map.setAttribute("width", "350");
        map.setAttribute("height", "500");
        map.setAttribute("loading", "lazy");
        map.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    
        modalDiv.setAttribute("class", "modalDiv");
        address.textContent = txt;
        address.setAttribute("class", "endereço");
        info.textContent = "Clique para copiar o endereço";
    
        modalDiv.appendChild(address);
        modalDiv.appendChild(info);
        modalDiv.appendChild(map);
        modalDiv.appendChild(closeModal);
    
        localModal.appendChild(modalDiv);
    
        localModal.showModal();
    
        // Função para copiar o texto ao clicar no botão usando a API Clipboard
        info.addEventListener("click", async () => {
            try {
            await navigator.clipboard.writeText(txt);
            alert("Endereço copiado: " + txt);
            } catch (err) {
            console.error("Erro ao copiar texto: ", err);
            }
        });
    
        closeModal.addEventListener("click", () => {
            localModal.close();
        });
    });
}

// galeria
const galeriabtn = document.querySelector("#galeria")
const galeriaModal = document.querySelector("#picturesList")

const imagens = ["01","02","03","04","05"]

function setImages(){
    let imgList = []
    imagens.forEach(item =>{
        const imagem = document.createElement("img")
        imagem.setAttribute("class","slider")
        imagem.setAttribute("alt","imagem do casal")
        imagem.setAttribute("src",`images/stories/casal${item}.jpg`)
        imagem.setAttribute("loading",`lazy`)
        imgList.push(imagem)
    })
    imgList[0].classList.add("on")
    return imgList
}

if(galeriabtn){
    galeriabtn.addEventListener("click", ()=>{
        galeriaModal.innerHTML = ``;
        //cabeçalho
        const modalDiv = document.createElement("div");
        const closeModal = document.createElement("button");
        closeModal.setAttribute("id", "close-modal");
        closeModal.innerHTML = "✘";
        
        const img = document.createElement("img")
        img.setAttribute("src","images/casal.png")
        img.setAttribute("alt","profile")
        img.setAttribute("id","profile")
        modalDiv.setAttribute("id","headerFiles")
        
        const name = document.createElement("p")
        name.innerHTML= "<strong>Emanuel & Joyce</strong>"
        
        const pictures = document.createElement("div");
        pictures.setAttribute("class","pictures")
    
        modalDiv.appendChild(img)
        modalDiv.appendChild(name)
        modalDiv.appendChild(closeModal)

        const prev = document.createElement('span');
        const next = document.createElement('span');
        prev.setAttribute("id","prev")
        next.setAttribute("id","next")
        prev.innerHTML = `‹`
        next.innerHTML = `›`

        const imgList = setImages();
        imgList.forEach(img => pictures.appendChild(img));
        pictures.appendChild(prev)
        pictures.appendChild(next)

        galeriaModal.appendChild(modalDiv)
        galeriaModal.appendChild(pictures)
        galeriaModal.showModal();
    
        closeModal.addEventListener("click", () => {
            galeriaModal.close();
        });


        // stories
         
        const slider = document.querySelectorAll('.slider');
        let currentSlide = 0;

        function hideSlider() {
            slider.forEach(item => item.classList.remove('on'))
        }

        function showSlider() {
            slider[currentSlide].classList.add('on')
        }

        function nextSlider() {
            hideSlider()
            if(currentSlide === slider.length -1) {
                currentSlide = 0
            } else {
                currentSlide++
            }
            showSlider()
        }

        function prevSlider() {
            hideSlider()
            if(currentSlide === 0) {
                currentSlide = slider.length -1
            } else {
                currentSlide--
            }
            showSlider()
        }

        next.addEventListener('click', nextSlider)
        prev.addEventListener('click', prevSlider)
    })
}
