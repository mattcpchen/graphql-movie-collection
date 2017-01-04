import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt ,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean
} from 'graphql';


const MovieType = new GraphQLObjectType({
  name: 'movie',
  description: 'This is the basic movie type',
  fields: {
    id: { type: GraphQLID },
    category: { type:GraphQLString },
    title: { type:GraphQLString },
    overview: { type:GraphQLString },
    backdrop_path: { type:GraphQLString },
    poster_path: { type:GraphQLString },
    popularity: { type:GraphQLFloat },
    vote_count: { type:GraphQLInt },
    vote_average: { type:GraphQLFloat },
    release_date: { type:GraphQLString },
    thumb_url: { type:GraphQLString },
    image_url: { type:GraphQLString },
    added: { type:GraphQLBoolean }
  }
});


module.exports = MovieType;
