import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entitiy';
import { RestaurantResolver } from './restaurants.resolver';
import { RestaurantServcie } from './restaurants.service';

@Module({
    imports: [TypeOrmModule.forFeature([Restaurant])],
    providers:[RestaurantResolver, RestaurantServcie],
})
export class RestaurantsModule {}
