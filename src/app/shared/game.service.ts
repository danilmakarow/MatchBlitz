import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AiService} from "./ai.service";
import {GameConf} from "./interfaces/gameConfiguration.interface";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public currentMove!: 'AI' | 'player' | 'end';
  public matchAmount!: number;
  public pickLimit!: number[];

  public playersMatches: number = 0;
  public aiMatches: number = 0;

  public winner: 'AI' | 'player' | null = null;

  public settingsConfiguration! : GameConf;

  constructor(
    private snackBar: MatSnackBar,
    private ai: AiService,
  ) { }

  public onMove(matches: number, move: string): void {
    if (matches > this.matchAmount) {
      this.snackBar.open('You can`t take more matches than pile has', 'ok');
      return;
    }

    this.calculateMatches(matches, move);

    if (this.matchAmount === 0)
      this.endGame()
    else
      this.switchTurn();

    if(this.currentMove === 'AI')
      this.aiMove()
  }

  public endGame(): void {
    this.winner = this.playersMatches % 2 === 0 ? 'player' : 'AI';
    this.currentMove = 'end';
  }

  public setSettings(conf?: GameConf): void {
    if(conf)
      this.settingsConfiguration = conf;

    this.matchAmount = this.settingsConfiguration.matchAmount;
    this.pickLimit = this.settingsConfiguration.pickLimit;
    this.currentMove = this.settingsConfiguration.startsPlayer ? 'player' : 'AI';

    this.aiMatches = this.playersMatches = 0;

    if(this.currentMove === 'AI')
      this.aiMove()
  }

  public switchTurn(): void {
    this.currentMove = this.currentMove === 'AI' ? 'player' : "AI"
  }

  private calculateMatches(matches: number, move: string): void {
    this.matchAmount -= matches;

    if (move === 'player')
      this.playersMatches += matches
    else
      this.aiMatches += matches
  }

  private aiMove(): void {
    this.onMove(
      this.ai.calculateMove(this.matchAmount, this.pickLimit, this.aiMatches),
      'AI'
    );
  }
}
