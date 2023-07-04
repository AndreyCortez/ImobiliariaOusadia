const multer = require('multer');
const path = require('path');

// Configure Multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../../uploads/'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Upload route handler
const handleUpload = (req, res) => {
  // Single file upload
  upload.single('image')(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred during the upload
      return res.status(500).json({ error: 'Upload failed', message: err.message });
    } else if (err) {
      // An unknown error occurred during the upload
      return res.status(500).json({ error: 'Upload failed', message: err });
    }

    // File upload was successful
    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Return the saved file's information
    res.json({
      filename: file.filename,
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      path: file.path,
    });
  });
};

module.exports = handleUpload;
