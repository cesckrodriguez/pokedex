var url = `https://pokeapi.co/api/v2/pokemon/nombre/?offset=0&limit=1154`;



async function traerDatos(urlBuscar){
    const respuestaApi = await fetch(urlBuscar);
    const respuestaApiJson = await respuestaApi.json();
    return respuestaApiJson;
}




async function Buscar(){
    const pokemon = document.getElementById("Buscar-pokemon").value
    var urlPokemones = `https://pokeapi.co/api/v2/pokemon/${pokemon}/?offset=0&limit=1154`;
    var resultado = await traerDatos(urlPokemones);
    console.log(pokemon);

    urlPokemones = resultado.forms[0].url
    console.log(urlPokemones);
    
    resultado = await traerDatos(urlPokemones);
    console.log(resultado);

    pintarCards(resultado);

}

async function pintarCards(ficha){
    const container = document.getElementById("cartas");
    container.innerHTML = "";
    container.innerHTML = `<div class="card" style="width: 18rem;">
    <img src=${ficha.sprites.front_default} class="card-img-top" alt=${ficha.pokemon.name} style="heigth= 100%">
    <div class="card-body">
      <h5 class="card-title">${ficha.pokemon.name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
}


async function All(url){
    var link ="https://pokeapi.co/api/v2/pokemon"
    if(url){
      link = url;
    }
    var respuesta = await traerDatos(link);
    console.log(respuesta)
    
    var lista = respuesta.results;
    var container = document.getElementById("cartas");
    container.classList.add("gridway")
    container.innerHTML= "";

    lista.forEach( async(elemento, indice, arreglo)=>{
        link = elemento.url;

        ficha= await traerDatos(link);
       // console.log(ficha)

        container.innerHTML += `<div class="card" style="width: 18rem;">
        <img src=${ficha.sprites.front_default} class="card-img-top" alt=${ficha.name} style="heigth= 100%">
        <div class="card-body">
          <h5 class="card-title">${ficha.name} </h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
      console.log(respuesta.next)  

       if(respuesta.next){
        const next = document.getElementById("next");
        next.classList.remove("oculto");
       }
    })
}
link ="https://pokeapi.co/api/v2/pokemon"
var next = document.getElementById("next");
next.addEventListener("onclick", siguiente);

 async function siguiente(){
  
  var respuestaApi =await fetch(link);
  var respuesta = await respuestaApi.json()
  urltodos= respuesta.next;
  All(respuesta.next)
}


var keypress = document.getElementById("Buscar-pokemon");
keypress.addEventListener("keyup", (event)=>{
 try {
   Buscar(event.target.value);
 } catch (error) {
  console.log("no se encuentra el pokemon")
 }
});




































// console.log("Este es un pokedex");


// var URI = "https://pokeapi.co/api/v2/gender/";



// async function traerDatos(especificacion){
//     const respuestaApi = await fetch(URI);
//     //console.log(respuestaApi);
//     const respuestaApiJson = await respuestaApi.json();
//     //console.log(respuestaApiJson);

//     const female = respuestaApiJson.results;
//     // console.log(female);
//     // console.log(female[0]);
//     // console.log(female[0].url);

//     const datosnexpPage = await fetch(female[0].url);
//     console.log(datosnexpPage);

//     const datosnexpPagejson = await datosnexpPage.json()
//     console.log(datosnexpPagejson);
//     const listaPok = datosnexpPagejson.pokemon_species_details;

//     console.log(listaPok    );   
    

//     const contenedor = document.getElementById("galeria");
//     contenedor.innerHTML = "";

//     listaPok.forEach((elemento, indice, arreglo) => {
//         contenedor.innerHTML += `<div class="card" style="width: 18rem;">
//         <img src="hembra.jpg" class="card-img-top" alt="pokemon Hembra">> 
//         <div class="card-body">
//           <h5 class="card-title">${elemento.pokemon_species.name} </h5>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>`
//        // console.log(elemento.name);
//        // console.log(indice)
//     });
// }





// /*function Buscar(){
//     const nombre = document.getElementById("Buscar-pokemon").value;
//     console.log(nombre);
// }*/

// /*function Buscar_desplegable(){
//     const genero = document.getElementById("Barra").value;
//     console.log(genero);
//     traerDatos(genero);
// }*/