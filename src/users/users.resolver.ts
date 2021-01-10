

import { Resolver, Query } from "@nestjs/graphql";
import { User } from "./eitities/user.entity";
import { UsersService } from "./users.service";

@Resolver(of => User)
export class UsersResolver {
    constructor(
        private readonly usersService: UsersService
    ) { }

    @Query(retruns => Boolean)
    hi() {
        return true;
    }
}