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

}
