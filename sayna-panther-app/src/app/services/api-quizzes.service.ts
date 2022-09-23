import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiQuizzesService {

  constructor(private http: HttpClient) { }

  getQuizzes() {
    return this.http.get<any>('http://localhost:3000/quizzes').pipe(map((res) => {
      return res;
    }));
  }
}
