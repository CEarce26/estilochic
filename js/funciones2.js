    document.addEventListener('keyup', e=>{
    if (e.target.matches('#buscador')) {
        document.querySelectorAll('.articulos').forEach(fruta=> {
            fruta.textContent.toLowerCase().includes(e.target.value)
            ? fruta.classList.remove('filtro')
            : fruta.classList.add('filtro');
        });
    }
});


$(document).ready(function()
{

$("#buscador").on("click",function()
    {
        $(".articulo-pong").css("display","inline-block");
    });
});