import { Injectable } from '@angular/core';
import {GameService} from "./game.service";

@Injectable({
  providedIn: 'root'
})
export class AiService {

  constructor(
  ) { }

  public calculateMove(allMatches: number, pick: number[], currentMatches: number): number {
    // removes possibility to take more matches than in pile
    pick = pick.filter(matches => matches <= allMatches);

    // checks is it possible to win and end the game
    if(allMatches <= pick[pick.length - 1]) {
      for (let index = pick.length - 1; index >= 0; index--) {
        if(allMatches - pick[index] === 0 && (currentMatches + pick[index]) % 2 === 0)
          return pick[index]
      }
    }

    // returns the smaller amount of matches to keep ai's matches even
    for (let matchesToTake of pick) {
      if ((currentMatches + matchesToTake) % 2 === 0) {
        return matchesToTake;
      }
    }

    // if previous algorithms hasnt find optimal amount of matches, returns minimal
    return pick[0];
  }
}
