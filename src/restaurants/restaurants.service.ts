import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Restaurant } from "./entities/restaurant.entitiy";


@Injectable()
export class RestaurantServcie {

    constructor(
        @InjectRepository(Restaurant)
        private readonly restaurants: Repository<Restaurant>,
    ) { }

    getAll(): Promise<Restaurant[]> {
        return this.restaurants.find();
    }

}
