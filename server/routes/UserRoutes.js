import express from "express";
import multer from 'multer';
import { createUser , getUsers} from "../controller/userController.js";

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({storage});

router.post('/submit', upload.array('images', 10),createUser);
router.get('/dashboard', getUsers);

export default router;
