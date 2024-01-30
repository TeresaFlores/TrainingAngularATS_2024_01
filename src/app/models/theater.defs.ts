import { SeatingCol } from "./enums.defs";

export interface MovieTheater {
    name: string;
    openingTime: string;
    closingTime: string;
    rooms: RoomWithSeating[];
    movies: Movie[];
    snacks: InventoryItem<Snack>[];
    combos?: InventoryItem<Combo>[];
    tickets: Ticket[];
}
export interface RoomWithSeating extends Room {
    seatingLayout: Seat[][];
}

export interface Seat {
    number: number;
}

export interface Seating {
    room: number;
    rows: { [key: string]: Row[] };
}

export interface Row {
    idx: number;
    col: SeatingCol;
    sold: boolean;
}
export interface Room {
    name: string;
    capacity: number;
}

export interface Movie {
    title: string;
    rating: number;
    duration: number;
    categories: string[];
}

export interface Snack {
    name: string;
    price: number;
}

export interface Combo {
    name: string;
    items: Snack[];
    price: number;
}

export interface InventoryItem<T> {
    item: T;
    quantity: number;
}
export interface Ticket {
    movie: Movie;
    room: Room;
    showTime: string;
    seatNumber: number;
    snacks: InventoryItem<Snack>[];
    combos: InventoryItem<Combo>[];
}