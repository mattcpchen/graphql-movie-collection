import {
  GraphQLSchema,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString
} from 'graphql';
import gqlHandlers from './_handlers';
import MovieType from './types/movie-type';





const queryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type',
  fields: {
    initAllMovies: {
      type: new GraphQLList(MovieType),
      args: {
        curYearWeek: { type: GraphQLString },
        myMovieIds: { type:new GraphQLList(GraphQLString) },
        curPath: { type: GraphQLString }
      },
      resolve: (_, args) => gqlHandlers.initAllMovies(args.curYearWeek, args.myMovieIds, args.curPath)
    },
    searchMoviesByCategory: {
      type: new GraphQLList(MovieType),
      args: {
        category: { type:new GraphQLNonNull(GraphQLString) }
      },
      resolve: (_, args) => gqlHandlers.searchMoviesByCategory(args.category)
    },
    displayMyCollection: {
      type: new GraphQLList(MovieType),
      resolve: () => gqlHandlers.displayMyCollection()
    }
  }
});


const mutationType = new GraphQLObjectType({
  name: 'MutationType',
  description: 'The root mutation type',
  fields: {
    addToCollection: {
      type: new GraphQLList(MovieType),
      args: {
        id: { type:new GraphQLNonNull(GraphQLID) }
      },
      resolve: (_, args) => {
        return gqlHandlers.addToCollection(args.id);
      }
    },
    removeFromCollection: {
      type: new GraphQLList(MovieType),
      args: {
        id: { type:new GraphQLNonNull(GraphQLID) }
      },
      resolve: (_, args) => {
        return gqlHandlers.removeFromCollection(args.id);
      }
    }
  }
});






const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
});

module.exports = schema;