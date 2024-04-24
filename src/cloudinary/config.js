const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');


require('dotenv').config()


cloudinary.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key : process.env.API_KEY,
    api_secret : process.env.API_SECRET
})

const storage = new CloudinaryStorage({     // an Instance of Cloudinary storage
  cloudinary,
  params: {
    folder: 'VeriCap',                         // folder in cloudinary
    allowedFormats: ['.txt', '.pdf']
  }
});    

module.exports = {
    cloudinary,
    storage
}