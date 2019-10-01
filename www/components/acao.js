// This is a JavaScript file

$(document).on("click", "#listarPizza", function(){

  $(location).attr("href", "listar.html");
});

$(document).on("click", "#editarPizza", function(){

  $(location).attr("href", "editar.html");
})

$(document).on("click", "#cancelarEditar", function(){

  $(location).attr('href', 'listar.html');
})
