import { Document } from 'mongoose';

export default interface BookDocument extends Document {
  title: string;
  author: string;
  extraInformation: string;
}
