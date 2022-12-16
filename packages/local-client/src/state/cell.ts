export type CellTypes = "code" | "text";
export interface Cells {
    id: string ;
    type: CellTypes;
    content: string;
}