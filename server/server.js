let express = require("express");
let graphqlHTTP = require("express-graphql");
let { buildSchema } = require("graphql");
let cors = require("cors");

// Construct a schema, using GraphQL schema language
let schema = buildSchema(`
  type User {
    id: String!
    nickname: String!
    avatar: String!
  }
  type Post {
    id: String!
    user: User!
    caption: String!
    image: String!
  }
  type Query {
    user(id: String): User!
    post (user_id: String, post_id: String): Post!
    posts(user_id: String): [Post]

  }
  `);

  // Maps id to User object
let userslist = {
  a: {
    id: "a",
    nickname: "Avi",
    avatar: "https://scontent-yyz1-1.cdninstagram.com/vp/7b9dddd1cea6521ae7be34ef2f90388b/5D03868B/t51.2885-19/s320x320/19429576_102520130378340_6357794372636901376_a.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com"
  },
  b: {
    id: "b",
    nickname: "Hugo",
    avatar:
      "https://tcdn.couchsurfing.com/LlfXa-GC0NTcX1C76_pZG_0r3Kw=/200x200/smart/https://s3.amazonaws.com/ht-images.couchsurfing.com/u/2258959/934fa9e7-d957-408d-9cb2-2dd1a5cd1063"
  }
};

let postslist = {
  a: {
    a: {
      id: "a",
      user: userslist["a"],
      caption: "Hello World!",
      image: "https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2018/europeslostf.jpg"
    },
    b: {
      id: "b",
      user: userslist["a"],
      caption: "Hi Back!",
      image:
        "https://greatergood.berkeley.edu/images/uploads/Forest_in_Japan.jpg"
    },
    c: {
      id: "c",
      user: userslist["a"],
      caption: "Painting!",
      image: "https://cdn-images-1.medium.com/max/2000/1*Q-HDPr7BWjvYnpy3ZKIAWw.jpeg"
    },
    d: {
      id: "d",
      user: userslist["b"],
      caption: "Forests",
      image: "https://c.tadst.com/gfx/750w/forest-day.jpg"
    }
  }
};

// The root provides a resolver function for each API endpoint
let root = {
  user: function({ id }) {
    return userslist[id];
  },
  post: function({ user_id , post_id }) {
    return postslist[user_id][post_id];
  },
  posts: function({ user_id }){
    return Object.values(postslist[user_id]);
  }
};

let app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
// set application port
app.listen(4000);
console.log("Running a GraphQL API server at localhost:4000/graphql");
