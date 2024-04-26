const AWS = require('aws-sdk')
require('dotenv').config()
// Set the region and credentials
const { S3Client } = require('@aws-sdk/client-s3')

const multer = require('multer')
const multerS3 = require('multer-s3')

// Set up AWS S3 client using AWS SDK
const s3 = new AWS.S3({
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey,
  region: process.env.AWS_REGION
})

// Configure Multer for file uploads to AWS S3
const uploadS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = uploadS3
