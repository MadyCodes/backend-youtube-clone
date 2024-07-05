import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "/.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`server started on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("error connecting to db", err);
  });

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Err", error);
//     });

//     app.listen(process.env.PORT, () => {
//         console.log(`App is running on port ${process.env.PORT}`);
//     })
//   } catch (error) {
//     console.error("ERROR", error);
//     throw error;
//   }
// })();
export default connectDB;
