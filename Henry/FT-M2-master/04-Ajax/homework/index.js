function MostrarAmigos() {
    let lista = $('#lista');
    lista.empty();  //vacia la lista cada vez q clickeo para refrescar
    $.get('http://localhost:5000/amigos', resp => {
        for (let i = 0; i < resp.length; i++) {
            let listed = `<li>${resp[i].name}</li>`;
            lista.append(listed);
        }
    })
}

$('#boton').click(MostrarAmigos)    // REFACTORY, MOVI TODO EL CONTENIDO A MOSTRAR AMIGOS PARA PODER LLAMARLA EN DELETE Y PODER REFRESCAR LA LISTA AUTOMATICAMENTE


$('#search').click(() => {              // USAR LOS # PARA LOS ID
    let inputvalue = $('input').val();   // USAR PARA LA BUSQUEDA 
    $.get(`http://localhost:5000/amigos/${inputvalue}`, response => {
        console.log(response);
        $('#amigo').text(response.name);   // PARA EL SPAN

    })
})


$('#delete').click(() => {
let inputborrar = $('#inputDelete').val();
$.ajax({
    url : `http://localhost:5000/amigos/${inputborrar}`,
    type : 'DELETE',
    succes : () => {
        $('#success').text('amigo borrado');
        
    }
    
})
MostrarAmigos();
})






// fetch = LA API FETCH SIRVE PARA HACER Request. PERO RETORNA UNA PROMESA.

// fetch('url', {
// method: get         ----------> es para .get
// })    
//   .then(response => response.json())
//   .then(data => {
//      todo el codigo
// }) 

// funciona igual que jquery
