import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameComponent} from "./feature/game/game.component";
import {GamePlayComponent} from "./feature/game/game-play/game-play.component";
import {GameBeginComponent} from "./feature/game/game-begin/game-begin.component";

const routes: Routes = [
  { path: 'home', redirectTo: 'home/begin', pathMatch: 'full'},
  { path: 'home', component: GameComponent, children: [
      { path: 'begin', component: GameBeginComponent,},
      { path: 'play', component: GamePlayComponent},
    ]
  },
  { path: '**', redirectTo: 'home/begin', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
