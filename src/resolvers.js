const books = [];
export default {
  Query: {
    books: () => books,
  },

  Mutation: {
    createBook(parent, args, context) {
      const book = {
        title: args.title,
        author: args.author,
      };
      books.push(book);
      return book;
    },
  },
};
