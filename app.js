import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Resolve __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the "Notes" directory exists
const notesDir = path.join(__dirname, "Notes");
if (!fs.existsSync(notesDir)) {
	fs.mkdirSync(notesDir, { recursive: true });
}

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, notesDir);
	},
	filename: (req, file, cb) => {
		const date = new Date().getMilliseconds();
		cb(null, `${date}-${file.originalname}`);
	},
});
const fileFilter = (req, file, cb) => {
	const allowedMimeTypes = [
		"application/pdf", // PDF
		"application/msword", // Word (.doc)
		"application/vnd.openxmlformats-officedocument.wordprocessingml.document", // Word (.docx)
		"text/plain", // Text files
	];
	if (allowedMimeTypes.includes(file.mimetype)) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};
const app = express();
app.use(express.json());
app.use(multer({ storage: storage, fileFilter }).single("note"));

app.post("/file", (req, res, next) => {
	const note = req.file;
	return res.end();
});

app.listen(5000, () => console.log("server is running🚀"));
