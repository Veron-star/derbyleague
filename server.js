const express = require("express");

const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}

connectDb();

app.use('/api/auth', auth);
app.use("/api/users", users); //---mount the new api imported above


app.get("/*" , (req,res)=>{res.sendFile(path.join(__dirname,"index.html"));   });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
