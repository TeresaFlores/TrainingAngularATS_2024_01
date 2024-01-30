// sample-data.ts
import { ComboCategory, SnackCategory } from 'src/app/models/enums.defs';
import { MovieTheater, Room, Movie, Snack, Combo, InventoryItem, Ticket } from 'src/app/models/theater.defs';
import { seatingMockData } from './seating';


export const movieTheater: MovieTheater = {
    name: 'HAVCinema',
    openingTime: '10:00', // Using string for simplicity, you might want to use a Date object
    closingTime: '23:59', // Using string for simplicity, you might want to use a Date object
    rooms: [
        { name: 'Room 1', capacity: 108, seatingLayout: seatingMockData[0] },
        { name: 'Room 2', capacity: 96, seatingLayout: seatingMockData[1] },
        { name: 'Room 3', capacity: 72, seatingLayout: seatingMockData[2] }
    ],
    movies: [
        {
            title: "Inception",
            rating: 8.8,
            duration: 148,
            categories: ["Science Fiction", "Action", "Mystery"]
        },
        {
            title: "The Shawshank Redemption",
            rating: 9.3,
            duration: 142,
            categories: ["Drama"]
        },
        {
            title: "The Dark Knight",
            rating: 9.0,
            duration: 152,
            categories: ["Action", "Crime", "Drama"]
        },
        {
            title: "Pulp Fiction",
            rating: 8.9,
            duration: 154,
            categories: ["Crime", "Drama"]
        },
        {
            title: "The Godfather",
            rating: 9.2,
            duration: 175,
            categories: ["Crime", "Drama"]
        },
        {
            title: "Schindler's List",
            rating: 8.9,
            duration: 195,
            categories: ["Biography", "Drama", "History"]
        },
        {
            title: "Forrest Gump",
            rating: 8.8,
            duration: 142,
            categories: ["Drama", "Romance"]
        },
        {
            title: "The Matrix",
            rating: 8.7,
            duration: 136,
            categories: ["Action", "Sci-Fi"]
        },
        {
            title: "The Lord of the Rings: The Fellowship of the Ring",
            rating: 8.8,
            duration: 178,
            categories: ["Action", "Adventure", "Drama"]
        },
        {
            title: "The Silence of the Lambs",
            rating: 8.6,
            duration: 118,
            categories: ["Crime", "Drama", "Thriller"]
        }
    ],
    snacks: [
        {
            item: {
                name: SnackCategory.Popcorn, price: 70
            },
            quantity: 100
        },
        {
            item: {
                name: SnackCategory.Soda, price: 50
            },
            quantity: 150
        },
        {
            item: {
                name: SnackCategory.Candy, price: 35
            },
            quantity: 120
        },
        {
            item: {
                name: SnackCategory.Chips, price: 45
            },
            quantity: 100
        },
        {
            item: {
                name: SnackCategory.Chocolate, price: 35
            },
            quantity: 150
        },
        {
            item: {
                name: SnackCategory.Nachos, price: 60
            },
            quantity: 120
        },
        {
            item: {
                name: SnackCategory.Pretzels, price: 50
            },
            quantity: 100
        },
        {
            item: {
                name: SnackCategory.IceCream, price: 50
            },
            quantity: 150
        },
        {
            item: {
                name: SnackCategory.HotDog, price: 50
            },
            quantity: 120
        },
        {
            item: {
                name: SnackCategory.FruitCup, price: 80
            },
            quantity: 150
        },
    ] as InventoryItem<Snack>[],
    tickets: [] as Ticket[], // Initialize with an empty array
};