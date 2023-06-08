import { P as Pokemons } from "./pokemons-b36eb3b0.js";
import "./main-681d088f.js";
const juegoPokemon = {
  template: `
  <h1>Administración de incidencias</h1>
  <h2 class="mt-5">Pokemons</h2>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>Created</th>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Pokedex</th>
        <th>Imagen</th>
      </tr>
    </thead>
    <tbody id="pokemon">
    
    </tbody>
  </table>

      `,
  script: async () => {
    const pokemons = await Pokemons.getAll();
    let tabla = "";
    for (const pokemon of pokemons) {
      tabla += `<tr id="${pokemon.id}">
        <td>${pokemon.created_at}</td>
        <td>${pokemon.nombre}</td>
        <td>${pokemon.tipo}</td>
        <td>${pokemon.pokedex}</td>
        <td style="width: 200px;"><img class="w-100" src="${pokemon.imagen}" alt="Pokemon"></td>
        </tr>`;
    }
    const tablaPokemon = document.querySelector("#pokemon");
    tablaPokemon.innerHTML = tabla;
  }
};
export {
  juegoPokemon as default
};
