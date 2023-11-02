import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import PertanyaanRoute from "./routes/PertanyaanRoute.js"

const app = express();
const port = 8000;

// Konfigurasi CORS untuk mengizinkan akses dari domain tertentu
const corsOptions = {
    origin: 'https://dempstershaferjurusan.vercel.app',
    methods: 'GET, POST, PUT,PATCH, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(UserRoute);
app.use(PertanyaanRoute);
app.listen(port, () => {
    console.log('App dijalankan di port', port)
});
app.get('/', (req, res) => {
    res.send("Express on vercel")
})

export default app