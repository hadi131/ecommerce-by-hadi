import mongoose from "mongoose";

export default function dbConnect() {
  if (mongoose.connection.readystate >= 1) {
    return;
  }
  mongoose.connect(process.env.DB_URL);
}
