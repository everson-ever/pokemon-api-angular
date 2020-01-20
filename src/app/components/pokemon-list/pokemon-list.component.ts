import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
	selector: 'app-pokemon-list',
	templateUrl: './pokemon-list.component.html',
	styleUrls: [ './pokemon-list.component.css' ]
})
export class PokemonListComponent implements OnInit {
	public pokemons: Array<any> = [];
	public pokemon: Array<any> = [];
	public offSet: number = 0;
	public loading: boolean = false;

	constructor(private pokemonService: PokemonService) {}

	ngOnInit() {
		this.findAll();
	}

	public findAll(): void {
		this.loading = true;
		this.pokemonService.findAll(this.offSet).subscribe((data) => {
			this.pokemons = data.results;
			this.loading = false;
		});
	}

	public findOne(url: string): void {
		this.pokemonService.findOne(url).subscribe((data) => {
			this.pokemon = data;
		});
	}

	public after(): void {
		this.offSet += 7;
		this.findAll();
	}

	public before(): void {
		if (!(this.offSet === 0)) {
			this.offSet -= 7;
			this.findAll();
		}
	}
}
