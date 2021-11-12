import mongoose, { Mongoose } from 'mongoose';
import bcrypt from 'bcrypt';
import config from 'config';

export interface UserDocument extends mongoose.Document {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<Boolean>;
}

const userSchema = new mongoose.Schema(
  //schema of the model
  {
    email: {type: String, required: true, unique: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true,},
    password: {type: String, required: true},
  },
  //adds timestamps during creation
  {
    timestamps: true,
  }
);

userSchema.pre('save', async (next) => {
  let user = this as unknown as UserDocument;

  if (!user.isModified('password')) {
    return next();
  }

  //hashing the password
  const salt = await bcrypt.genSalt(config.get<number>('salt'));
  const hash = await bcrypt.hashSync(user.password, salt);

  user.password = hash;

  return next();

});

userSchema.methods.comparePassword =  async (candidatePassword: string): Promise<Boolean> => {
  const user = this as unknown as UserDocument;

  const isSame = await bcrypt.compare(candidatePassword, user.password);

  if (isSame) {
    return true;
  }

  return false;
} 



userSchema.method

const UserModel = mongoose.model('User', userSchema);

export default UserModel;