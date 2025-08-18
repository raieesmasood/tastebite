import app from "./app.js";

const PORT = process.env.PORT || 6000;
app.listen(PORT || 6000, () => {
  console.log(`Server is running on port ${PORT || 6000}`);
});