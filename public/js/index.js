/**
 * New node file
 */
$(document).ready(function(){
	// todo lo que se debe hacer cuando la página ya cargo
	obtenerFotos().done(function(respuesta){
		var galeria = $('#gallery');
		
		$.each(respuesta, function(index,value){
			var image = $('<img>',{src:value.photo_path, alt:value.place});
			galeria.append(image);
		});
	});
	
});

function obtenerFotos(){
	
	return $.ajax({
		url:"http://localhost:3000/photos",
		type:"get"
	});
}

