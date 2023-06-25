import {ChangeDetectionStrategy, Component} from '@angular/core';
import {GameService} from "../../../shared/game.service";

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamePlayComponent {
  constructor(
    public game: GameService
  ) {
  }

  onPlayersMove(matches: number): void {
    this.game.onMove(matches, 'player')
  }
}
