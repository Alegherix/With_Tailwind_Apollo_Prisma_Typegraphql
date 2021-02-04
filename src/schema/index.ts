import { buildSchemaSync, Resolver, Query } from 'type-graphql';
import { UserResolver } from './hello';

@Resolver()
class DummyResolver {
  @Query((_returns) => String)
  hello() {
    return 'Nice to meet you!';
  }
}

export const schema = buildSchemaSync({
  resolvers: [DummyResolver, UserResolver],
  emitSchemaFile: process.env.NODE_ENV === 'development',
});
