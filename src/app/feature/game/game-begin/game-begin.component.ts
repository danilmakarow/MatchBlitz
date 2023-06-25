import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {GameService} from "../../../shared/game.service";
import {Router} from "@angular/router";
import {GameConf} from "../../../shared/interfaces/gameConfiguration.interface";

@Component({
  selector: 'app-game-begin',
  templateUrl: './game-begin.component.html',
  styleUrls: ['./game-begin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameBeginComponent {
  public matchAmount: number = 15;
  public pickAmount: number = 3;
  public startsPlayer: boolean = true;

  constructor(
    private snackBar: MatSnackBar,
    private game: GameService,
    private router: Router
    ) {
    if(game.settingsConfiguration){
      const savedSettings = game.settingsConfiguration;

      this.matchAmount = savedSettings.matchAmount;
      this.pickAmount = savedSettings.pickLimit[savedSettings.pickLimit.length - 1];
      this.startsPlayer = savedSettings.startsPlayer
    }
  }

  public onStart(): void {
    // checking that maximum pick amount is twice bigger than general amount of matches
    if(this.matchAmount/(this.pickAmount * 2) < 1)
      this.snackBar.open('General amount of Matches cant be smaller than doubled amount of Matches to take', 'ok')
    else {
      const conf = this.createConfObject()

      this.game.setSettings(conf)
      this.router.navigateByUrl('home/play')
    }
  }

  public onReset(): void {
    this.matchAmount = 15;
    this.pickAmount = 3;
    this.startsPlayer = true
  }

  private createConfObject(): GameConf {
    const pickArr = Array.from(
      { length: this.pickAmount },
      (_, index) => index + 1
    );

    return  {
      startsPlayer: this.startsPlayer,
      matchAmount: this.matchAmount,
      pickLimit: pickArr
    }
  }
}
