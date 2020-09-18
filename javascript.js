/*----------------------------------BARRA FIXA AO ROLAR-------------------------------------*/

window.onscroll = function(){fixarBarraDeNavegação()}
function fixarBarraDeNavegação(){

    var barraFixa = document.querySelector('.barraFixa')
    if(document.documentElement.scrollTop > 105 && window.innerWidth > 700){
        barraFixa.style.display = 'flex'
        barraFixa.style.position = 'fixed'
        barraFixa.style.top = 0
        barraFixa.style.left = 0
        barraFixa.style.right = 0
        barraFixa.style.overflow = 'hidden'
        barraFixa.style.zIndex = 999
}
    else{barraFixa.style.display = 'none'
    document.querySelector(".containersubtópicosFixo").style.display = "none"
}
}

/*------------------------------------------SUBMENU----------------------------------------------*/

function displayFixo(){ //Faz o submenu da barra fixa funcionar
    document.querySelector(".containersubtópicosFixo").style.display = "flex"
    document.querySelector(".containersubtópicosFixo").style.position = "fixed"
    document.querySelector(".containersubtópicosFixo").style.top = "50px"
    document.querySelector(".containersubtópicosFixo").style.right = "31%"
}

function display(){ //faz o submenu da barra inicial funcionar
    if(window.innerWidth > 700){ //resolve o bug dela aparecer no modo mobile
    document.querySelector(".containersubtópicos").style.display = "flex"
    document.querySelector(".containersubtópicos").style.position = "absolute"
    document.querySelector(".containersubtópicos").style.top = "77px"
    document.querySelector(".containersubtópicos").style.right = "25%"
    }
}
var contador = 0
function displayMobile(){ //faz o submenu mobile funcionar
    if(window.innerWidth < 700){
        contador++
        if(contador % 2 !== 0){ //O submenu mobile só funciona clicando, então esta função faz com que ele apareça ao clicar...
            document.querySelector(".containerSubMobile").style.display = 'flex'
        }
    else {document.querySelector(".containerSubMobile").style.display = 'none'} //...e suma ao clicar novamente
    } 
}

function hide(){ //faz com que, ao tirar o mouse do submenu, ele suma
    document.querySelector(".containersubtópicos").style.display = "none"
    document.querySelector(".containersubtópicosFixo").style.display = 'none'
}

var subtópicoMobile =  document.querySelectorAll('.subtópicoMobile')

subtópicoMobile.forEach(subtópico => {subtópico.addEventListener('click', fecharMenu)})
function fecharMenu(){ 
    var checkbox = document.getElementById('barraMenu')
    checkbox.checked = false //faz com que, ao clicar em algum dos subtópicos, o menu suba
    document.querySelector('.containerSubMobile').style.display = 'none' //resolve o bug do submenu não ficar visível ao menu subir
    contador++ //resolve o bug de ter que clicar duas vezes da próxima vez que for abrir o submenu
}


/*---------------------------------------------------------ROLA PARA A SECTION ESPECÍFICA-------------------------------------------------------------------*/

const menu = document.querySelectorAll('.item') //Pega todos os items com a classe "item" e colocar na variável "menu"
menu.forEach(paraCadaitem =>{paraCadaitem.addEventListener('click', ScrollToId)}) //Executa uma função para cada item que foi selecionado e posto na variável "menu".
//O nome do parâmentro do array é "paraCadaItem" e foi colocado um EvenetListener com a função de click para capturar todo click feito nessses items e executar a função "scrolltoid"
function ScrollToId(event){ //O parâmetro nos mostra que houve um evento de mouse e apresenta uma série de métodos.    
    event.preventDefault() //Essa função impede que o javascript execute uma função padrão do evento clicado. Neste caso, um <a> é clcado e esta função
    //previne que o html coloque o valor do href na URL e bloqueia que a página vá para a seção com o id que está no href    
    //var checkbox = document.getElementById('barraMenu') //Pegar o checkbox do botão de menu na versão mobile    
    //checkbox.checked = false //Sempre que, na versão mobile, uma opção for clicada, o checkbox é desmarcado e o menu sobe automaticamente    
    document.getElementById('icone').src = "img/iconeMenu.png" //Ao clicar em alguma opção de navegação do menu mobile, o ícone de menu que está um "X", volta a ser 3 barras horizontais
    const items = event.target //especifica um dos métodos que quero utilizar no evento de mouse. Este método mostra qual foi o elemento html que foi clicado    
    const id = items.getAttribute('href') //Estou pegando o valor do atributo href , que é um id, do elemento que  foi clicado e colocando na constante "id" para colocar o id dos elementos como parâmetro    
    
    if(id !== "#Serviços"){var checkbox = document.getElementById('barraMenu') //Pegar o checkbox do botão de menu na versão mobile    
    checkbox.checked = false} //Sempre que, na versão mobile, uma opção for clicada, o checkbox é desmarcado e o menu sobe automaticamente
    const section = document.querySelector(id).offsetTop //Como disse acima, estou colocando o valor do href, que é um id, como parâmetro para que o query peque a section com o id específico.
    //a propriedade offsetTop retorna quantos píxels o topo do elemento está do topo da página, ou seja, em que altura do documento o elemento está localizado.    
    window.scroll({top: section - 50, behavior: "smooth"}) //este método do window rola para as coordenadas ditas no parâmetro. Neste caso, o parâmetro foi um objeto
    //com o top sendo igual ao valor que foi retornado pelo offsetTop da localização do elemento menos 50 píxels. O behavior smooth é para a rolagem ser suave.
}

/*-----------------------------------MUDA A LOGO PARA A VERSÃO MOBILE E RESOLVE OS BUGS DA BARRA--------------------------------------------------------------------------------------------------------*/
 
window.onresize = function(){MudarLogo()}
window.onload = function(){MudarLogo()}
function MudarLogo(){
    var barraFixa = document.querySelector('.barraFixa')
    if(window.innerWidth < 700){
        document.getElementById('logo').src = 'img/logo1.png'
        barraFixa.style.display = 'none' //A barra de navegação na versão mobile não aciona sozinha ao redimensionar a tela
    }
    else{document.getElementById('logo').src = 'img/logo.png'
        if(document.getElementById('menu').getBoundingClientRect().top <= -105){ //evita que a barra de navegação esteja visível se a página carregar
            barraFixa.style.display = 'flex' //A barra de navgeação fixa da versão desktop não desaparece ao redimensionar a tela
            barraFixa.style.position = 'fixed'
            barraFixa.style.top = 0
            barraFixa.style.left = 0
            barraFixa.style.right = 0
            barraFixa.style.overflow = 'hidden'
            barraFixa.style.zIndex = 999
        }
    }
}
 
/*-----------------------------------MUDA O ÍCONE DO MENU AO ABRIR E AO FECHAR--------------------------------------------------------------------------------------------------------*/

function mudarIcone(){
    var menu = document.getElementById('barraMenu')
    var icone = document.getElementById('icone')
    if(menu.checked){
        icone.src = "img/iconeMenu.png"
    }
    else{icone.src = "img/iconeFechar.png"}
}

/*-----------------------------------SETA IMAGEM PRO MODAL AO CLICAR--------------------------------------------------------------------------------------------------------*/

var imagemModal = document.querySelector('#imagemModal')
var modal = document.querySelector('.modal')
var imagensDaGaleria = document.querySelectorAll('.fotosDaGaleria')
imagensDaGaleria.forEach(imagem => {imagem.addEventListener('click', setarModal)})
function setarModal(){
    imagemModal.src = this.src
    modal.style.display = 'flex'
}

function fecharModal(){
    modal.style.display = 'none'
}

/*---------------------------------------PASSA PARA A PRÓXIMA IMAGEM AO CLICAR NOS BOTÕES VIRTUAIS E DO TECLADO--------------------------------------------------------------------------------------------------------*/

var fotosDaGaleria = ['galeria/galeria1.jpg', 'galeria/galeria2.jpg', 'galeria/galeria3.jpg', 'galeria/galeria4.jpg', 'galeria/galeria5.jpg'
, 'galeria/galeria6.jpg', 'galeria/galeria7.jpg', 'galeria/galeria8.jpg', 'galeria/galeria9.jpg', 'galeria/galeria10.jpg', 'galeria/galeria11.jpg', 'galeria/galeria12.jpg'
, 'galeria/galeria13.jpg', 'galeria/galeria14.jpg', 'galeria/galeria15.jpg', 'galeria/galeria16.jpg']
//Colocar todas os endereços das fotos num array
var botões = document.querySelectorAll('.botões') //
imagensDaGaleria.forEach(foto => {foto.addEventListener('click', qualFoto)}) //para cada foto clicada, chamar a funçao "qualFoto"
botões.forEach(botão => {botão.addEventListener('click', next)}) //para cada botão virtual clicado, chamar a função "next"
window.onkeydown = next //para cada tecla pressionada, chamar a função next
var indice; //declaração da variável global "indice"

function qualFoto(){ 
    source = this.getAttribute('src') //esta função puxa a src específica da foto que foi clicada
    indice = fotosDaGaleria.indexOf(source) //E procura o índice da src no array, retornando seu valor
    }

function next(e){
    if(this.id =='botãoDaDireita' || e.which == 39){ //Se o id do botão pressionado for o da direita ou se o código da tecla pressionada for o 39 (seta direita), executar
        ++indice // somar um ao índice
        if(indice <= 15){document.querySelector('#imagemModal').src = fotosDaGaleria[indice]} //se o índice for menor ou igual à 15, que é a última foto, pegar a source da foto com este índice e passar pro modal
        else{indice = 0; document.querySelector('#imagemModal').src = fotosDaGaleria[indice]} //se passar de 15, setar o índice para 0 para que haja um looping e voltando para a foto inicial
    }
    else if(e.which == 37 || this.id =='botãoDaEsquerda'){--indice //se a tecla pressionada for a seta da esquerda ou o botão da esquerda diminuir 1 do índice
        if(indice >= 0){ //se o índice for maior ou igual à 0, os índices vão diminuindo e as fotos voltam
        document.querySelector('#imagemModal').src = fotosDaGaleria[indice]}
        else{indice = 15 //caso contrário, o índice é setado para 15 que é a última foto, criando um looping também
        document.querySelector('#imagemModal').src = fotosDaGaleria[indice]}
        }
}

