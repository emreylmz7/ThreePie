import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  loginForm!: FormGroup;
  loggedIn!: true;
  




  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { 

  

    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
      

    })
  }

  logIn() {
    this._http.get<any>("http://localhost:3000/signup").subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if (user) {
        alert("Giriş Başarılı");
        this.loginForm.reset();
        this.loggedIn = true;
        this.router.navigate(['home'])
      } else {
        alert("Kullanıcı Bulunamadı")
      }
    },err => {
      alert("Hata")
    }


    )

  }
}