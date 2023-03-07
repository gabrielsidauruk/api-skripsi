import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import PertanyaanRoute from "./routes/PertanyaanRoute.js"


const app = express();
const port = 8000;


app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(PertanyaanRoute);
app.listen(port, () => {
    console.log('App dijalankan di port', port)
});
app.get("/", (req, res) => {
    res.send("hello from express")
})

export default app