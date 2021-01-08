import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateRestaurantDto } from "./dtos/create-restaurant.dto";
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

    createRestaurant(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant>{
        // const newRestaurant = new Restaurant();
        // newRestaurant.name = createRestaurantDto.name
        const newRestaurant = this.restaurants.create(createRestaurantDto)
        return this.restaurants.save(newRestaurant)
    }
}
