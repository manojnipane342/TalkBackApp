import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { ContactComponent } from './components/contact/contact.component';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { GameComponent } from './components/game/game.component';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SignupComponent } from './components/signup/signup.component';
import { TestComponent } from './components/test/test.component';

export const routes : Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login' , component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'home', component:HomeComponent},
  {path:'help', component:HelpComponent},
  {path:'game', component:GameComponent},
  {path:'app',component:AppComponent},
  {path:'default',component:DefaultLayoutComponent},
  {path:'contact',component:ContactComponent},
  {path:'test',component:TestComponent},
  {path:'resetPassword',component:ResetPasswordComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'chat',component:ChatComponent},
  {path:'**' , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
