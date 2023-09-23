import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { deleteImage, uploadImage } from "../controllers/upload";
import cloudinary from "../configs/cloudinary"
const router = express.Router();

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "UploadImage",
        format: ["jpg", "png", "gif"],
    },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.array("images",2), uploadImage);
router.delete("/:publicId", deleteImage);

export default router;