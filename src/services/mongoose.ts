import mongoose from 'mongoose';
import { Db } from 'mongodb';
import config from '../config/config';

export default async (): Promise<Db> => {
  const connection = await mongoose.connect(config.mongodb.databaseURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  return connection.connection.db;
};