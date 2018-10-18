import { Airport } from "./airport.model";

export class Order {
    id: number;
    duration: number;
    origin: Airport;
    destination: Airport;
}
