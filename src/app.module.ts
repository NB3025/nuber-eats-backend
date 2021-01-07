import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath: process.env.NODE_ENV == "dev" ? ".env.dev" : "env.test"
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "NB",
      password: "password",
      database: "nuber-eats",
      synchronize: true,
      logging: true,
    }),
    RestaurantsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
