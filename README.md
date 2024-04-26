# VeriCap
This project is a platform for managing projects, including creating projects, adding questions, uploading responses, and handling file uploads using AWS S3.

### Features

- Create Project: Add new educational projects with details like name, city, and type (e.g., JEE, NEET, CET).
- Create Question: Include new questions with text and type.
- Get Questions: Retrieve questions based on project type for organization and preparation.
- Upload Response: Submit responses including text and file uploads, managed using AWS S3.

### Technologies Used

- Node.js: Backend runtime environment.
- Express.js: Web framework for routing.
- MongoDB: NoSQL database for data storage.
- Mongoose: MongoDB object modeling.
- AWS SDK: Integration for AWS S3 file storage.
- Multer: Middleware for file uploads.
- Multer-S3: Multer storage engine for AWS S3.

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

## Documentation

### API Endpoints

#### Projects

- **Create Project**
  - **URL:** `POST http://localhost:8080/createProject`
  - **Body:**
    ```json
    {
      "project_name": "test2",
      "project_city": "delhi",
      "project_type": "CET"
    }
    ```
  - **result:**
   ```json
    {
    "project_name": "test3",
    "project_city": "delhi",
    "project_type": "CET",
    "questions": [
        "662aa6358ba4b5d9326dfc32",
        "662aa6588ba4b5d9326dfc34",
        "662aa6748ba4b5d9326dfc36"
    ],
    "_id": "662b538e7a8c905eb03c7994",
    "__v": 0
    }
    ```
    
 #### Questions
- **Create Question**
  - **URL:** `POST http://localhost:8080/createQuestion`
  - **Body:**
    ```json
    {
      "question_text": "What aspects of your cost analysis are you least confident in, Please elaborate?",
      "type": "CET"
    }
    ```
   - **result:**
   ```json
    {
     "message": "question saved",
     "question": {
     "question_text": " What aspects of your cost analysis are you least confident in, Please elaborate?",
        "type": "CET",
        "_id": "662b54007a8c905eb03c7996",
        "__v": 0
    }

- **Get Questions**
  - **URL:** `GET http://localhost:8080/questions/CET`
  - **result:**
   ```json
    {
     "questions" :[{
           "_id": "662aa6358ba4b5d9326dfc32",
            "question_text": " How are you going to finance this project?",
            "type": "CET",
            "__v": 0
     },{
        "_id": "662aa6588ba4b5d9326dfc34",
            "question_text": "Gross Removal & Life Cycle Analysis (LCA)",
            "type": "CET",
            "__v": 0
     }]
    }
  
  

 #### Responses

- **Upload Response**
  - **URL:** `POST http://localhost:8080/response`
  - **Body (form-data):**
    - `files`: /C:/Users/user/Downloads/dummy.pdf (Attach files here)
    - `files`: /C:/Users/user/Downloads/dummy.pdf (Attach files here)
    - `question_id`: 662a9757b286bdd8237ed4c9
    - `response_text`: yes I understood your terms   
  - **result:**
   ```json
    {
       "question_id": "662a9757b286bdd8237ed4c9",
    "response_text": "yes I understood your terms",
    "response_file": [
        {
            "url": "https://vericap.s3.eu-north-1.amazonaws.com/1714116102557",
            "fileName": "dummy.pdf",
            "_id": "662b56077a8c905eb03c7999"
        },
        {
            "url": "https://vericap.s3.eu-north-1.amazonaws.com/1714116102558",
            "fileName": "dummy.pdf",
            "_id": "662b56077a8c905eb03c799a"
        }
    ],
    "_id": "662b56077a8c905eb03c7998",
    "__v": 0
    }
