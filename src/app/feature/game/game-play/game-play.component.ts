import {ChangeDetectionStrategy, Component} from '@angular/core';
import {GameService} from "../../../shared/game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamePlayComponent {
  constructor(
    public game: GameService,
    private router: Router
  ) {
  }

  public onPlayersMove(matches: number): void {
    this.game.onMove(matches, 'player')
  }

  public onPlayAgain(): void {
    this.game.setSettings()
  }

  public onChangeSettings(): void {
    this.router.navigateByUrl('home/begin')
  }
}
