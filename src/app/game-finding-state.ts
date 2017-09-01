export enum FindGameState {
  INITIAL,
  FINDING,
  FOUND,
}

export class GameFindingState {
  state: FindGameState;
}
