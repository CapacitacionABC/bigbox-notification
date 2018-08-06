(function(){

$.bigbox = function( opciones, callback ){

	opciones = $.extend({

		fa: "far fa-thumbs-up",
		titulo: undefined,
		contenido: undefined,
		boton: "Aceptar"

	}, opciones );

	if( opciones.titulo === undefined ){
		alert('El titulo es necesario');
		return;
	}

	if( opciones.contenido === undefined ){
		alert('El contenido es necesario');
		return;
	}

	var contenido = "";

		contenido = '<div class="bigBox-fondo"></div>'


	contenido = ""
	contenido += '<div class="bigBox-contenedor" align="center">'
	contenido += '<div class="bigBox-cerrar"><i class="fas fa-times"></i></div>'
	contenido += '<div class="bigBox-circulo"><i class="'+ opciones.fa +' fa-3x"></i></div>'
	contenido += '<div class="bigBox-contenido">'
	contenido += '<span class="bigBox-titulo">'+ opciones.titulo +'</span>'
	contenido += '<span class="bigBox-texto">'+ opciones.contenido +'</span>'
	contenido += '</div>'
	contenido += '<button class="bigBox-boton">'+ opciones.boton +'</button>'
	contenido += '</div>'



	$("body").append( contenido );

	animar_entrada();


	// funcion del boton cerrar
	$(".bigBox-cerrar").on("click", function(){
		animar_salida();

		if( typeof callback == 'function' ){
			callback("boton");
			
		}
	});


	// funcion del boton principal
	$(".bigBox-boton").on("click", function(){
		animar_salida();

		if( typeof callback == 'function' ){
			callback("boton-cerrar");
			
		}
	});



	// animar la entrada
	function animar_entrada(){
		var $fondo = $(".bigBox-fondo");
		var $bigbox = $(".bigBox-contenedor");

		var anchoP = $(window).width();
		var altoP = $(window).height();


		var anchoB = $bigbox.width();
		var altoB = $bigbox.height();

		$bigbox.css({
			top: ( altoP /2 ) - ( altoB /2 ),
			left: ( anchoP /2 ) - ( anchoB /2 )
	
		})


		$fondo.show();
		$bigbox.show();

		var tl = new TimelineMax();
			tl.to( $fondo, 0.5, { opacity: 0.3 } )
			  .to( $bigbox, 0.5, { opacity: 1 }, "-=0.5" )
			  .from( $bigbox, 0.8, { y: "-=20", ease: Bounce.easeOut }, "-=0.5" );
	}

	function animar_salida(){
		var $fondo = $(".bigBox-fondo");
		var $bigbox = $(".bigBox-contenedor");

		var tl = new TimelineMax();
			tl.to( $fondo, 0.5, { opacity: 0} )
			  .to( $bigbox, 0.5, { opacity: 0, onComplete:remover_bigbox }, "-=0.3" )
	}

	function remover_bigbox(){
		var $fondo = $(".bigBox-fondo");
		var $bigbox = $(".bigBox-contenedor");

		$fondo.remove();
		$bigbox.remove();
	}

};




})();