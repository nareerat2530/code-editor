import { ActionType } from "../action-types";
import { Cells, CellTypes } from "../cell";

export type Direction = "up" | "down";
export interface MoveCallAction {
  type: ActionType.MOVE_CELL;
  payload: {
    id: string;
    direction: Direction;
  };
}

export interface DeteteCellAction {
  type: ActionType.DELETE_CELL;
  payload: string;
}

export interface InserCellAfterAction {
  type: ActionType.INSERT_CELL_AFTER;
  payload: {
    id: string | null;
    type: CellTypes;
  };
}

export interface UpdateCellAction {
  type: ActionType.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  };
}
export interface BundleStartAction {
  type: ActionType.BUNDLE_START;
  payload: {
    cellId: string;
  };
}
export interface BundleCompleteAction {
  type: ActionType.BUNDLE_COMPELETE;
  payload: {
    cellId: string;
    bundle: {
      code: string;
      err: string;
    };
  };
}
export interface FetchCellAction {
  type: ActionType.FETCH_CELLS;
}
export interface FetchCellsCompleteAction {
  type: ActionType.FETCH_CELLS_COMPLETE;
  payload: Cells[];
}

export interface FetchCellErrorAction {
  type: ActionType.FETCH_CELLS_ERROR;
  payload: string;
}

export interface SaveCellsErrorAction {
  type: ActionType.SAVE_CELLS_ERROR;
  payload: string;
}

export type Action =
  | MoveCallAction
  | DeteteCellAction
  | InserCellAfterAction
  | UpdateCellAction
  | BundleStartAction
  | BundleCompleteAction
  | FetchCellsCompleteAction
  | FetchCellAction
  | FetchCellErrorAction
  | SaveCellsErrorAction;
