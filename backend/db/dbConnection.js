import mongoose from "mongoose";
const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "tastebite",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error);
      process.exit(1); // Exit the process with failure
    });
};

export default dbConnection;