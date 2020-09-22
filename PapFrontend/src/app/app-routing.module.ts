import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameSettingsComponent } from './game-settings/game-settings.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';


const routes: Routes = [
  {
    path: '',
    component: WelcomeScreenComponent,
    data: null,
  },
  {
    path: 'settings',
    component: GameSettingsComponent,
    data: null,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
