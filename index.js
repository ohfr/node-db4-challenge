const express = require("express");

const server = express();

const PORT = process.env.PORT || 5000;

const recipeRoute = require("./Routes/recipeRoute");

server.use(express.json());

server.use("/api/recipes", recipeRoute);

server.use((err, req, res, next) => {
    console.log("Error:", err)
  
    res.status(500).json({
      message: "Something went wrong",
    })
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});