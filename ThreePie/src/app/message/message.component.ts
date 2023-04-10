import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})

export class MessageComponent implements OnInit {
  messages = [
    { sender: 'Kullanıcı 1', timestamp: '3 dakika önce', subject: 'Merhaba, nasılsın?', body: 'Merhaba, ben iyiyim, sen nasılsın?', selected: false,  user: { avatar: 'https://via.placeholder.com/50x50' }},
    { sender: 'Kullanıcı 2', timestamp: '1 saat önce', subject: 'Re: Merhaba, nasılsın?', body: 'İyiyim, teşekkür ederim.' , selected: false ,  user: { avatar: 'https://via.placeholder.com/50x50' }},
    { sender: 'Kullanıcı 3', timestamp: '2 saat önce', subject: 'İş teklifleri', body: 'Merhaba, şirketimizin yeni ürünleri hakkında daha fazla bilgi edinmek ister misiniz?' , selected: false, user: { avatar: 'https://via.placeholder.com/50x50' } }
  ];
  selectedMessage: any;
  constructor() { }

  ngOnInit(): void {
  }

  showDetails(message: any) {
    this.selectedMessage = message;
    this.messages.forEach(m => m.selected = false);
    message.selected = true;

  }


}
