function DescrevendoLetra(params) {
    
}
function escrevendoLetra() {    
    function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }

const titulo = document.querySelector('.digitando');
ativaLetra(titulo);
}
escrevendoLetra();



function menuMobol() {
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria');


    ativaMenu.addEventListener('click', ()=>{
        ativaMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    })
}
menuMobol();


function sobreMim(){
    const divExperiencia = document.querySelectorAll('.experience_content div');
    const liExperiencia = document.querySelectorAll('.experience_content ul li');

    const divEducation = document.querySelectorAll('.education_content div');
    const liEducation = document.querySelectorAll('.education_content ul li');
    
    // Inicializando o primeiro elemento de cada lista como 'ativo'
    divExperiencia[0].classList.add('ativo');
    liExperiencia[0].classList.add('ativo');
    divEducation[0].classList.add('ativo');
    liEducation[0].classList.add('ativo');

    function slideShowExperiencia(index) {
        divExperiencia.forEach((div) => {
            div.classList.remove('ativo');
        });
        liExperiencia.forEach((botao) => {
            botao.classList.remove('ativo');
        });
        divExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');
    }

    function slideShowEducation(index) {
        divEducation.forEach((div) => {
            div.classList.remove('ativo');
        });
        liEducation.forEach((botao) => {
            botao.classList.remove('ativo');
        });
        divEducation[index].classList.add('ativo');
        liEducation[index].classList.add('ativo');
    }

    liExperiencia.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShowExperiencia(index);
        });
    });

    liEducation.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShowEducation(index);
        });
    });
}

sobreMim();


const listAll = document.querySelectorAll('.projects_storage ul li');
const buttomGeral = document.querySelectorAll('.projects_models ul li');
const buttomAll = document.querySelectorAll('.projects_models .all');


function removeClick(index){
    buttomGeral.forEach((item)=>{
        item.classList.remove('.active');
    });
    buttomGeral[index].classList.add('.active')
}

buttomGeral.forEach((item, index)=>{
    item.addEventListener('click',()=>{
        removeClick(index);
    })
    
})

function showList(list, buttom = "all"){
    list.forEach((item) =>{
        item.classList.remove('active')
    });
    if(buttom == 'html'){
        list[0].classList.add('active');
        list[1].classList.add('active');
    }
    if(buttom == 'Java'){
        list[2].classList.add('active');
        list[3].classList.add('active');
    }
    if(buttom == 'webSite'){
        list[4].classList.add('active');
        list[5].classList.add('active');
        list[6].classList.add('active');
        list[7].classList.add('active');
    }
    if(buttom == 'all'){
        list[0].classList.add('active');
        list[1].classList.add('active');
        list[2].classList.add('active');
        list[3].classList.add('active');
        list[4].classList.add('active');
        list[5].classList.add('active');
        list[6].classList.add('active');
        list[7].classList.add('active');
    }
}

buttomGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButtom = e.target
        if(currentButtom.classList.contains('all')){
            showList(listAll)
        }
        if(currentButtom.classList.contains('html')){
            showList(listAll, "html")
        }
        if(currentButtom.classList.contains('Java')){
            showList(listAll, "Java")
        }
        if(currentButtom.classList.contains('webSite')){
            showList(listAll, "webSite")
        }
        if(currentButtom.classList.contains('all')){
            showList(listAll, "all")
        }
    })
})