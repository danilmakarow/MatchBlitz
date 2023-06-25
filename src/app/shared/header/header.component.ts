import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from "@angular/router";
import {GameService} from "../game.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(
    public router: Router,
    public game: GameService) {
  }
}
