import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
	providedIn: 'root'
})
export class PokemonService {
	constructor(private apiService: ApiService, private http: HttpClient) {}

	public findAll(offset: number): Observable<any> {
		return this.http.get<any>(`${this.apiService.getBaseUrl()}/pokemon?offset=${offset}&limit=7`);
	}

	public findOne(url: string): Observable<any> {
		return this.http.get<any>(url);
	}
}
