//1. This is the server. The routes are stored here. Continue to database.sql for part2.

const express = require("express");
const app = express();
const cors = require('cors');
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES
//4.Whenever creating something in postgress you must use the INSERT INTO command."INSERT INTO table_name(column) VALUES(yourvalues)"
//$1 is basically a variable that is defined in the array [] that follows. Below for example is ("INSERT INTO todo (description) VALUES($1) RETURNING *",
         //[description]
         //); 
//create a todo

app.post("/todos", async(req,res) => {
    try{
        const {description} = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",
         [description]
         );

        res.json(newTodo.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
})

//get all todos

app.get("/todos", async(req, res) => {
try{
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows)
} catch (err) {
    console.error(err.message)
}

})

//get a todo

app.get("/todos/:id", async (req, res) => {
try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])

    res.json(todo.rows[0]);
} catch (err) {
    console.error(err.message)
}
})

//update a todo

app.put("/todos/:id", async(req, res) =>{
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]
        );

        res.json("Todo was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//delete a todo

app.delete("/todos/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
            id
        ]);
        res.json("Todo was deleted!")
    } catch (err) {
        console.log(err.message)
    }
});


app.listen(5000, () => {
    console.log("server has started on port 5000")
})