import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  // preserves your original filename when you save with multer
  // storage services like cloudinary will change those filenames on save
  filename: (req, file, cb) => {
    const fileName = file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

export default upload;
