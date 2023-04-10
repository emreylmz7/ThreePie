import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpinfoComponent } from './helpinfo/helpinfo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainprofilComponent } from './mainprofil/mainprofil.component';
import { MessageComponent } from './message/message.component';
import { ProfilComponent } from './profil/profil.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'home',component:HomeComponent},
  { path:'message',component:MessageComponent},
  { path:'profilsettings',component:ProfilComponent},
  { path:'profil',component:MainprofilComponent},
  { path:'signup',component:SignupComponent},
  { path:'help',component:HelpinfoComponent},
  { path:'login',component:LoginComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
