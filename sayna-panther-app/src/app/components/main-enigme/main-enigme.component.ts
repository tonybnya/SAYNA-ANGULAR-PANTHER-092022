import { Component, OnInit } from '@angular/core';
import { ApiQuizzesService } from 'src/app/services/api-quizzes.service';

@Component({
  selector: 'app-main-enigme',
  templateUrl: './main-enigme.component.html',
  styleUrls: ['./main-enigme.component.scss']
})
export class MainEnigmeComponent implements OnInit {
  public data: any

  constructor(private api: ApiQuizzesService) { }

  ngOnInit(): void {
    this.api.getQuizzes().subscribe((res: any) => { 
      this.data = res;
    });
  }
}