import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainprofil',
  templateUrl: './mainprofil.component.html',
  styleUrls: ['./mainprofil.component.scss']
})
export class MainprofilComponent implements OnInit {
  profileImageUrl: string = 'https://via.placeholder.com/150';

  constructor() { }

  ngOnInit(): void {
  }
  changeProfileImage() {
    this.profileImageUrl = 'https://picsum.photos/150';
  }
}
