import { Position } from './Position';
import { Orientation } from './Orientation';

export interface Goal {
    goal_id: number
    position: Position
    orientation: Orientation
    status: string
}