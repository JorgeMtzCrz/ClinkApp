require('dotenv').config()

const cloudinary = require('cloudinary')
const cloudinaryStorage = require('multer-storage-cloudinary')
const multer = require('multer')

cloudinary.config({
    cloud_name: process.env.CLNA,
    api_key: process.env.CLAK,
    api_secret: process.env.CLAS
})

const storage = cloudinaryStorage({
    cloudinary,
    folder: 'clinkapp',
    allowedFormats: ['jpg', 'png'],
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const uploadCloud = multer({
    storage
})

module.exports = uploadCloud