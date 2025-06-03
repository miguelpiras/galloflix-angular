import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://api.themoviedb.org/3';
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTMxYmU1ZmM0YTUzMGQxOGMxNDllYmZmNDZkMzY1MyIsIm5iZiI6MTc0NzA5NTAxOC4zNjgsInN1YiI6IjY4MjI4ZGVhNzUyYWJiYmJmODVhMmU4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oEzSiJlegIVs7hxea5-TLv7kKjzHFr0jyGIxNlOuWxA'
    }
  };

  // Dados para o Banner - Midias em destaque da semana
  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/all/week?language=pt-br`, this.options);
  }

  // Filmes em Destaque do Dia
  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/movie/day?language=pt-br`, this.options);
  }

  // Séries em Destaque do Dia
  trendingSerieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/tv/day?language=pt-br`, this.options);
  }

  // Filmes de Ação Populares
  popularActionMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?language=pt-br&with_genres=28&sort_by=popularity.desc`, this.options);
  }

  // --- Área de Detalhes
  // Buscar Detalhes da Mídia
  mediaDetails(type: any, value: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${type}/${value}?language=pt-br`, this.options);
  }
  // Buscar os Trailers da Mídia
  mediaTrailers(type: any, value: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${type}/${value}/videos?language=pt-br`, this.options);
  }
  // Buscar o Elenco da Mídia
  mediaCast(type: any, value: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${type}/${value}/credits?language=pt-br`, this.options);
  }
}

