import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entitiy';
import { RestaurantServcie } from './restaurants.service';

@Resolver(of => Restaurant)
export class RestaurantResolver {
    constructor(private readonly restaurantService: RestaurantServcie){}

    @Query(returns => [Restaurant])
    restaurants(): Promise<Restaurant[]> {
        return this.restaurantService.getAll();
    }

    @Mutation(returns => Boolean)
    createRestaurant(@Args() createRestaurantDto: CreateRestaurantDto): boolean {
        console.log(createRestaurantDto);
        return true;
    }

}