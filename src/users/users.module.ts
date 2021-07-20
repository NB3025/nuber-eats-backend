import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './eitities/user.entity';
import { Verification } from './eitities/verification.entity';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
    imports:[TypeOrmModule.forFeature([User, Verification])],
    providers:[UsersResolver, UsersService],
    exports:[UsersService],
})
export class UsersModule {}
