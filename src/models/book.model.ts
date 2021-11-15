import { Schema, model } from "mongoose";
import BookDocument from "../interfaces/book.interface";

const BookSchema: Schema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    extraInformation: {type: String}
  },
  {
    timestamps: true,
  }
);

const BookModel = model<BookDocument>('Book', BookSchema);

BookSchema.post<BookDocument>('deleteOne', function () {
  this.extraInformation = 'This book has been deleted!';
});



export default BookModel;