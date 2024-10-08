import mongoose from "mongoose";
import colors from "colors";
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `connected to mongodb database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(error.bgRed.white);
  }
};

export default connectDb;
