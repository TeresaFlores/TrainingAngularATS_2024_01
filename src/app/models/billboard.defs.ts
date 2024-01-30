export interface Movie {
    id: string;
    title: string;
    rating: number;
    duration: number;
    functions: Function[];
}

export interface BillboardData {
    openingTime: number;
    closingTime: number;
    movies: Movie[];
}

export interface Function {
    id: string;
    movieId: string;
    start: number;
    end: number;
    room: number;
}