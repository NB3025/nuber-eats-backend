

import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CreateAccountInput, CreateAccountOutput } from "./dtos/create-account.dto";
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

    @Mutation(returns => CreateAccountOutput)
    createAccount(@Args('input') createAccountInput:CreateAccountInput){}
}