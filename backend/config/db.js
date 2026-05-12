import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://sowjanya:sowjumongo123@cluster0.kxttfnx.mongodb.net/food-del'
    )
    .then(() => console.log('DB Connected'));
};
