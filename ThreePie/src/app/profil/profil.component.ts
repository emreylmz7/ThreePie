import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  boxes: any[][] = [
    [
      { icon: 'fa-info-circle', title: 'Başlık 1', content: 'İçerik 1' },
      { icon: 'fa-exclamation-circle', title: 'Başlık 2', content: 'İçerik 2' },
      { icon: 'fa-question-circle', title: 'Başlık 3', content: 'İçerik 3' },
    ],
    [
      { icon: 'fa-info-circle', title: 'Başlık 4', content: 'İçerik 4' },
      { icon: 'fa-exclamation-circle', title: 'Başlık 5', content: 'İçerik 5' },
      { icon: 'fa-question-circle', title: 'Başlık 6', content: 'İçerik 6' },
    ],
    [
      { icon: 'fa-info-circle', title: 'Başlık 7', content: 'İçerik 7' },
      { icon: 'fa-exclamation-circle', title: 'Başlık 8', content: 'İçerik 8' },
      { icon: 'fa-question-circle', title: 'Başlık 9', content: 'İçerik 9' },
    ],
  ];

  constructor() {}

  ngOnInit(): void {}
}
