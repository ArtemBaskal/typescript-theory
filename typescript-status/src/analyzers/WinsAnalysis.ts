import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResults } from "../MatchResults";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    let wins = 0;
    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResults.HomeWins) {
        wins++;
      } else if (match[2] === this.team && match[5] === MatchResults.AwayWins) {
        wins++;
      }
    }
    return `Team ${this.team} won ${wins}`;
  }
}
