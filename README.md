# VeriCap
This project is a platform for managing projects, including creating projects, adding questions, uploading responses, and handling file uploads using AWS S3.

## Table of Contents
- Installation
- Usage
- API Endpoints
- Configuration
- Models
- Routes
- Controllers
- Dependencies
- Environment Variables

## Installation

1. Clone the repository



        git clone https://github.com/your-username/project-name.git


2. Install dependencies:



         cd project-name
         npm install

3. Create a .env file in the root directory with the following   environment variables:


       MONGO_URI=your-mongodb-connection-string
       AWSAccessKeyId=your-aws-access-key-id
       AWSSecretKey=your-aws-secret-key
       AWS_REGION=your-aws-region
       AWS_BUCKET_NAME=your-aws-s3-bucket-name


## Usage

Start the application:

     npm start

API Endpoints

- POST /createproject: Create a new project.
- POST /createquestion: Create a new question.
- GET /questions/:projectType: Get questions based on project type.
- POST /response: Upload a response with file uploads using AWS S3.

Configuration
 - config/aws.js: AWS S3 configuration using Multer and Multer-S3.
- index.js: Entry point of the application, sets up Express server  and connects to MongoDB.

Models

- models/project.js: Defines the Project schema and model.
- models/question.js: Defines the Question schema and model.
- models/response.js: Defines the Response schema and model.

Routes

- routes/route.js: Defines all the routes and their corresponding controller functions.

Controllers

- controllers/controller.js: Contains controller functions for handling project, question, and response operations.

Dependencies

- express: Web framework for Node.js.
- mongoose: MongoDB object modeling for Node.js.
- aws-sdk: AWS SDK for JavaScript.
- multer: Middleware for handling multipart/form-data, used for file uploads.
- multer-s3: Multer storage engine for AWS S3.

Environment Variables

- MONGO_URI: MongoDB connection string.
- AWSAccessKeyId: AWS Access Key ID for S3.
- AWSSecretKey: AWS Secret Access Key for S3.
- AWS_REGION: AWS region for S3.
- AWS_BUCKET_NAME: Name of the AWS S3 bucket.