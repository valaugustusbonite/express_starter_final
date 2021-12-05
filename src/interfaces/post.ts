import { Document } from 'mongoose';

export default interface IPost extends Document {
  id: string;
  title: string;
  subtitle: string;
  body: string;
}