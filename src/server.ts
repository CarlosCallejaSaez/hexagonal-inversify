import mongoose from 'mongoose';
import { app } from './app';

const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://0.0.0.0:27017/hexagonal-architecture';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });
