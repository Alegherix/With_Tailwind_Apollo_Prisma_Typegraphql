import {
  Arg,
  Ctx,
  Field,
  ID,
  InputType,
  Mutation,
  ObjectType,
  Resolver,
} from 'type-graphql';

@InputType()
class UserInput {
  @Field((_type) => String)
  email!: string;

  @Field((_type) => String)
  name!: string;
}

@ObjectType()
class User {
  @Field((_type) => ID)
  id!: number;

  @Field((_type) => String)
  email!: string;

  @Field((_type) => String)
  name!: string;
}

@Resolver(User)
export class UserResolver {
  @Mutation((_returns) => User)
  async createUser(@Arg('input') input: UserInput, @Ctx() ctx) {
    return await ctx.prisma.user.create({
      data: {
        email: input.email,
        name: input.name,
      },
    });
  }
}
