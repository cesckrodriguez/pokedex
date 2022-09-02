
console.log("Este es un pokedex");


var URI = "https://pokeapi.co/api/v2/gender/";



async function traerDatos(especificacion){
    const respuestaApi = await fetch(URI);
    //console.log(respuestaApi);
    const respuestaApiJson = await respuestaApi.json();
    //console.log(respuestaApiJson);

    const female = respuestaApiJson.results;
    console.log(female);
    console.log(female[0]);
    console.log(female[0].url);

    const datosnexpPage = await fetch(female[0].url);
    console.log(datosnexpPage);

    const datosnexpPagejson = await datosnexpPage.json()
    console.log(datosnexpPagejson);
    console.log(datosnexpPagejson.id);
    console.log(datosnexpPagejson.name);

    const contenedor = document.getElementById("galeria");
    contenedor.innerHTML = "";

    female.forEach((elemento, indice, arreglo) => {
        contenedor.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="hembra.jpg" class="card-img-top" alt="pokemon Hembra">> 
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
       // console.log(elemento.name);
       // console.log(indice)
    });
}





/*function Buscar(){
    const nombre = document.getElementById("Buscar-pokemon").value;
    console.log(nombre);
}*/

/*function Buscar_desplegable(){
    const genero = document.getElementById("Barra").value;
    console.log(genero);
    traerDatos(genero);
}*/