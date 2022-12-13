var elDocRow = document.querySelector(".contener");

for (var list of pokemons) {
    var imgBox = document.createElement("div");
    imgBox.setAttribute("class", "imgBox");
    var pokemonId = document.createElement("h4");
    pokemonId.setAttribute("class", "card-id");
    pokemonId.textContent = `${list.id}.`;
    var pokemonName = document.createElement("h3");
    pokemonName.setAttribute("class", "pokemon-Name");
    pokemonName.textContent = list.name;
    var pokemonImg = document.createElement("img");
    pokemonImg.setAttribute("src", list.img);
    pokemonImg.setAttribute("alt", "pokemon img");
    var pokemonHeight = document.createElement("p");
    pokemonHeight.setAttribute("class", "pokemon-height");
    pokemonHeight.textContent = `Height: ${list.height}`;
    var pokemonWeight = document.createElement("p");
    pokemonWeight.setAttribute("class", "pokemon-weight");
    pokemonWeight.textContent = `Weight: ${list.weight}`;
    var pokemonSpawnTime = document.createElement("p");
    pokemonSpawnTime.setAttribute("class", "pokemon-spawn-time");
    pokemonSpawnTime.textContent = `Spawn time: ${list.spawn_time}`;
    var pokemonEgg = document.createElement("p");
    pokemonEgg.setAttribute("class", "pokemon-Egg");
    pokemonEgg.textContent = `Egg: ${list.egg}`;
    var card2 = document.createElement("div");
    card2.setAttribute("class","my_card p-3 m-3 text-center col-3 rounded");

    imgBox.appendChild(pokemonImg);
    card2.appendChild(pokemonId);
    card2.append(pokemonImg);
    card2.appendChild(pokemonName);
    card2.appendChild(pokemonWeight);
    card2.appendChild(pokemonHeight);
    card2.appendChild(pokemonEgg)
    card2.appendChild(pokemonSpawnTime);

    elDocRow.appendChild(card2);
}
