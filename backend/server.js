const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());



const { Schema } = mongoose;
const authorSchema = new Schema(
    {
        image: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

mongoose.set('strictQuery', false);
const Authors = mongoose.model("authors", authorSchema);

const PORT = process.env.PORT;
const DB = process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD)
mongoose.connect(DB, (err) => {
    console.log(err);
    if (!err) {
        console.log("Connected");
        app.listen(PORT, () => {
            console.log(`Port:${PORT}`);
        })
    }
})

app.get("/authors", (req, res) => {
    Authors.find({}, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.status(500).json({ message: err })
        }
    })
})

app.get("/authors/:id", (req, res) => {
    const { id } = req.params;
    Authors.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
                res.status(200)
            } else {
                res.status(404).json({ message: "Not Found" })
            }
        } else {
            res.status(500).json(
                { message: err }
            )
        }
    })
})

app.post("/authors", async (req, res) => {
    const user = req.body
    try {
        await Authors.create(user)
        res.status(200).json({
            message: "success"
        })
    } catch (error) {
        console.log(error);
    }
})

app.delete("/authors/:id", (req, res) => {
    const { id } = req.params;
    Authors.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("Successfully DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
})

