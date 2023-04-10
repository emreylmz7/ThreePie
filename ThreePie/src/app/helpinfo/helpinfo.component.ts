import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helpinfo',
  templateUrl: './helpinfo.component.html',
  styleUrls: ['./helpinfo.component.scss']
})
export class HelpinfoComponent implements OnInit {
  searchTerm = '';
  questions: string[] = ['Soru 1', 'Soru 2', 'Soru 3'];
  answers: string[] = ['Cevap 1', 'Cevap 2', 'Cevap 3'];

  constructor() { }

  ngOnInit(): void {
  }
  preventSubmit(event: Event) {
    event.preventDefault();
  }

  toggleAnswer(index: number) {
   
    this.answers[index] = this.answers[index] === 'hidden' ? 'visible' : 'hidden';
  }

  getAnswerVisibility(answer: string) {
    return answer === 'visible';
}

}
