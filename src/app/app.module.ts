import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { GameComponent } from './feature/game/game.component';
import { GameBeginComponent } from './feature/game/game-begin/game-begin.component';
import { GamePlayComponent } from './feature/game/game-play/game-play.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSliderModule} from "@angular/material/slider";
import {FormsModule} from "@angular/forms";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {GameService} from "./shared/game.service";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTooltipModule} from "@angular/material/tooltip";
import {AiService} from "./shared/ai.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameComponent,
    GameBeginComponent,
    GamePlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSliderModule,
    FormsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  providers: [
    GameService,
    AiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
