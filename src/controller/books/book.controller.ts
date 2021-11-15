import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';
import BookModel from '../../models/book.model';
import log from '../../logger/index';

const createBook = (req: Request, res: Response, next: NextFunction) => {
  let { author, title } = req.body;

  const book = new BookModel({
    _id: new mongoose.Types.ObjectId(),
    author,
    title,
  });

  return book.save()
    .then(result => {
      return res.status(201).json({
        book: result
      })
    })
    .catch((error: any) => {
      let errMessage = res.status(500).json({
        message: error.message,
        error,
      })

      return errMessage;
    })
}

const deleteBook = (req: Request, res: Response, next: NextFunction) => {
  let { id } = req.params;

  return BookModel.deleteOne({
    id
  })
  .then(result => {
    return res.status(201).json({
      book: result
    })
  })
  .catch((error: any) => {
    let errMessage = res.status(500).json({
      message: error.message,
      error,
    })

    return errMessage;
  })
};

const updateBook = (req: Request, res: Response, next: NextFunction) => {
  let { title } = req.body;
  let { id } = req.params;

  return BookModel.updateOne(
    {
      "_id": id,
    },
    {
      $set: { "title": title },
      $currentDate: { lastModified: true }
    },
  )
  .then((results) => {
    let data = res.status(201).json({
      books: results,
    });

    return data;
  })
  .catch((error: any) => {
    let errMessage = res.status(500).json({
      message: error.message,
      error,
    })

    return errMessage;
  });
};

const getAllBooks = (req: Request, res: Response, next: NextFunction) => {
  BookModel.find()
    .exec()
    .then((results) => {
      let data = res.status(200).json({
        books: results,
        count: results.length
      });

      return data;
    })
    .catch((error: any) => {
      let errMessage = res.status(500).json({
        message: error.message,
        error,
      })

      return errMessage;
    })
}

export default {
  getAllBooks,
  createBook,
  deleteBook,
  updateBook
}