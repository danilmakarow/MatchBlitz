import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {GameService} from "../../../shared/game.service";
import {Router} from "@angular/router";

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
  }

  public onStart(): void {
    // checking that maximum pick amount is twice bigger than general amount of matches
    if(this.matchAmount/(this.pickAmount * 2) < 1)
      this.snackBar.open('General amount of Matches cant be smaller than doubled amount of Matches to take', 'ok')
    else {
      const pickArr = Array.from(
        { length: this.pickAmount },
        (_, index) => index + 1);

      this.game.setSettings(this.matchAmount, pickArr, this.startsPlayer)
      this.router.navigateByUrl('home/play')
    }
  }

  public onReset(): void {
    this.matchAmount = 15;
    this.pickAmount = 3;
    this.startsPlayer = true
  }
}
