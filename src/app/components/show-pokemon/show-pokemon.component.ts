import { Component, OnInit } from '@angular/core';
import { pokedex, Pokemon, PokemonWithType } from '../../data/pokemons';
import { CommonModule } from '@angular/common';
import { TypePokemonService } from '../../services/typePokemon.service';

@Component({
  selector: 'app-show-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-pokemon.component.html',
  styleUrls: ['./show-pokemon.component.css'],
})
export class ShowPokemonComponent implements OnInit {
  pokedex = pokedex;
  typePokedex: PokemonWithType[] = [];
  selectedType: string = '';

  constructor(private typePokemonService: TypePokemonService) {}

  getImgPokemon = (numberPokedex: number) => {
    const baseUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`;
    const image = `${baseUrl}${numberPokedex}.png`;
    return image;
  };

  changeShowPokemon(type: string) {
    console.log(type)
    if (type === 'Todos') {
      this.typePokedex = pokedex;
    } else {
      this.typePokedex = pokedex.filter(
        (pokemon, index, array) => pokemon.type === type
      );
    }
    console.log(this.typePokedex)
    return this.typePokedex;
  }

  ngOnInit() {
    this.typePokemonService.selectedType$.subscribe((type) => {
      this.selectedType = type;
    });
  }
}
