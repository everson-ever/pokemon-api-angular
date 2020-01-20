import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	private baseUrl: string = 'https://pokeapi.co/api/v2';

	constructor() {}

	public getBaseUrl(): string {
		return this.baseUrl;
	}
}
