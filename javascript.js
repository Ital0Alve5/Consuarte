
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
        barraFixa.style.zIndex = 999}
    else{barraFixa.style.display = 'none'}

}
/*---------------------------------------------------------ROLA PARA A SECTION ESPECÍFICA-------------------------------------------------------------------*/

const menu = document.querySelectorAll('.item') //Pega todos os items com a classe "item" e colocar na variável "menu"

menu.forEach(paraCadaitem =>{paraCadaitem.addEventListener('click', ScrollToId)}) //Executa uma função para cada item que foi selecionado e posto na variável "menu".
//O nome do parâmentro do array é "paraCadaItem" e foi colocado um EvenetListener com a função de click para capturar todo click feito nessses items e executar a função "scrolltoid"

function ScrollToId(event){ //O parâmetro nos mostra que houve um evento de mouse e apresenta uma série de métodos.
    
    event.preventDefault() //Essa função impede que o javascript execute uma função padrão do evento clicado. Neste caso, um <a> é clcado e esta função
    //previne que o html coloque o valor do href na URL e bloqueia que a página vá para a seção com o id que está no href
    
    var checkbox = document.getElementById('barraMenu') //Pegar o checkbox do botão de menu na versão mobile
    
    checkbox.checked = false //Sempre que, na versão mobile, uma opção for clicada, o checkbox é desmarcado e o menu sobe automaticamente
    
    const items = event.target //especifica um dos métodos que quero utilizar no evento de mouse. Este método mostra qual foi o elemento html que foi clicado
    
    const id = items.getAttribute('href') //Estou pegando o valor do atributo href , que é um id, do elemento que  foi clicado e colocando na constante "id" para colocar o id dos elementos como parâmetro
    
    const section = document.querySelector(id).offsetTop //Como disse acima, estou colocando o valor do href, que é um id, como parâmetro para que o query peque a section com o id específico.
    //a propriedade offsetTop retorna quantos píxels o topo do elemento está do topo da página, ou seja, em que altura do documento o elemento está localizado.
    
    window.scroll({top: section - 50, behavior: "smooth"}) //este método do window rola para as coordenadas ditas no parâmetro. Neste caso, o parâmetro foi um objeto
    //com o top sendo igual ao valor que foi retornado pelo offsetTop da localização do elemento menos 50 píxels. O behavior smooth é para a rolagem ser suave.
}

/*-------------------------------------------------------------------------------------------------------------------------------------------*/
