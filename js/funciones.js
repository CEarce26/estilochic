$(document).ready(function()
{

	/*alert("hola")*/

	$(".bot").hide();
	$(".muchachas").show();

	
	$(".ninos").on("click",function()
	{
		$(".ninitos").show();
		$(".muchachas").hide();
		$(".muchachos").hide();
		$(".belle").hide();
	});
	
	$(".mujeres").on("click",function()
	{
		$(".muchachas").show();
		$(".muchachos").hide();
		$(".belle").hide();
		$(".ninitos").hide();
	});

	$(".hombres").on("click",function()
	{
		$(".muchachos").show();
		$(".muchachas").hide();
		$(".belle").hide();
		$(".ninitos").hide();
	});

	$(".belleza").on("click",function()
	{
		$(".belle").show();
		$(".ninitos").hide();
		$(".muchachos").hide();
		$(".muchachas").hide();
	});




	$(".ahora").on("click",function()
	{
		var texto1 = $(".nombre").val()
		var texto2 = $(".comentario").val()

		alert(texto1 + " " + texto2)

		$(".publi").html("de:"+texto1+"<br>"+"comentario:"+texto2)

	});

	  const signUpButton = document.getElementById("signUp");
     const signInButton = document.getElementById("signIn");
     const container = document.getElementById("container");

      signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
   });

      signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
   });


      

      const btnCart = document.querySelector('.container-icon')
		const containerCartProducts = document.querySelector('.container-cart-products')

		btnCart.addEventListener('click', () => {
   	containerCartProducts.classList.toggle('hidden-cart')
	});

		$(".list-product").hide()

		$(".busca").on("click",function()
		{
 				alert("hola")
		});



	

});