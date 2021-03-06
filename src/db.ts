import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/Chatbot3", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as any);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error: void) => console.log("❌ DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
