import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import PertanyaanRoute from "./routes/PertanyaanRoute.js"

const app = express();
const port = 8000;

// Konfigurasi CORS untuk mengizinkan akses dari domain tertentu
// const corsOptions = {
//     origin: 'https://dempstershaferjurusan.vercel.app',
//     methods: 'GET, POST, PUT,PATCH, DELETE',
//     allowedHeaders: 'Content-Type, Authorization',
// };
// app.use(cors(corsOptions));
// Middleware untuk mengizinkan semua domain (atau Anda dapat menentukan domain tertentu)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Mengizinkan semua domain
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
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