import { Position } from './Position';
import { Orientation } from './Orientation';

export interface Location {
    location_id?: number
    name: string
    position?: Position
    orientation?: Orientation
}