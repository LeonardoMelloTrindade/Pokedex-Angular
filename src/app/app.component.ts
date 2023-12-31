import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShowPokemonComponent } from './components/show-pokemon/show-pokemon.component';
import { pokedex } from './data/pokemons';
import { TypePokemonService } from './services/typePokemon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ShowPokemonComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pokedex = pokedex
  constructor(private typePokemonService: TypePokemonService) {}

  tipos: string[] = [
    "Todos",
    "Normal",
    "Fogo",
    "Água",
    "Planta",
    "Elétrico",
    "Gelo",
    "Lutador",
    "Voador",
    "Veneno",
    "Terra",
    "Pedra",
    "Inseto",
    "Fantasma",
    "Aço",
    "Psíquico",
    "Noturno",
    "Dragão",
    "Fada",
    "Místico"
]

getTypePokemon(type: string) {
  this.typePokemonService.updateSelectedType(type);
}

}
