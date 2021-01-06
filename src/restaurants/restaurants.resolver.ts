import { Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entitiy';

@Resolver()
export class RestaurantResolver {
    @Query(returns => Restaurant)
    myRestaurant() {
        return true;
    }
}