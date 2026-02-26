import express from "express";
import axios from "axios";
import ejs from "ejs";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get("/", async(req, res) => {
  try {
    const response = await axios.get("https://opentdb.com/api.php?amount=10");

    const first = response.data.results[0];
    const question =  first.question;
    const answer = first.correct_answer;
    const difficulty = first.difficulty;
    const category = first.category;
    
    
    res.render("index.ejs", {
      question: question,
      answer: answer,
      difficulty: difficulty,
      category: category
    })
  } catch (error) {
    console.error(error.message);
    res.render("index.ejs", {
      question: question,
      answer: answer,
      difficulty: difficulty,
      category: category
    })
  }
});









app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})