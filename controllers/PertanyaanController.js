import Pertanyaan from "../models/PertanyaanModel.js";

export const getPertanyaan = async function (req, res) {
    try {
        const response = await Pertanyaan.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


