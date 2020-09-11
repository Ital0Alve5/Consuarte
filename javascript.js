
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
/*---------------------------------------------------------------------------------------*/
