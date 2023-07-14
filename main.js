const getPokemonPikachu = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/25/`);

    let pikachu = await response.json();
    console.log(pikachu);
    let GambarPokemon = pikachu.sprites.front_default;
    console.log(GambarPokemon);
    let level = pikachu.id;
    let tipes = pikachu.types[0].type.name;
    let pika = pikachu.name;
    isidata(GambarPokemon, level, tipes, pika);
  } catch (error) {
    console.log(error);
    return;
  }
};

function isidata(GambarPokemon, level, tipes, pika) {
  let img = document.getElementById("gambar");
  img.src = GambarPokemon;

  let power = document.querySelector(".container .nomor");
  power.innerHTML = level;

  let identity = document.querySelector(".container .nama");
  identity.innerHTML = pika;

  let tipe = document.querySelector(".container .ability");
  tipe.innerHTML = tipes;
}
