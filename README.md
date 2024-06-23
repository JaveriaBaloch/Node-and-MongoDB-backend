# Node-and-MongoDB-backend

This is a Node.js application with MongoDB to handle single-step and multi-step application forms. The application includes functionality for exporting data to CSV format and API documentation using Swagger UI.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Testing the Application](#testing-the-application)
- [API Documentation](#api-documentation)
- [Directory Structure](#directory-structure)
- [License](#license)

## Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/)

## Getting Started

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/multi-step-form.git
    cd multi-step-form
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root of your project directory and add your MongoDB connection string and the port number:

    ```env
    MONGO_URI=mongodb://localhost:27017/applicationForm
    PORT=3000
    ```

### Setting Up MongoDB

#### macOS

1. Install MongoDB using Homebrew:

    ```sh
    brew tap mongodb/brew
    brew install mongodb-community@6.0
    ```

2. Start MongoDB:

    ```sh
    brew services start mongodb/brew/mongodb-community
    ```

#### Windows

1. Download and install MongoDB from the [MongoDB Download Center](https://www.mongodb.com/try/download/community).

2. Follow the installation steps provided in the installer.

3. Start MongoDB by running the following command in the Command Prompt:

    ```sh
    "C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe"
    ```

    Alternatively, you can add MongoDB to your system's PATH variable to run `mongod` from any command prompt.

## Running the Application

1. Start MongoDB (if it's not already running):
    - **macOS:**

        ```sh
        brew services start mongodb/brew/mongodb-community
        ```

    - **Windows:**

        ```sh
        "C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe"
        ```

2. Start the application:

    ```sh
    npm start
    ```

3. Open your browser and go to `http://localhost:3000`.

## Testing the Application

You can use `curl` to test the API endpoints.

### Test Single-Step Application

#### Create a Single-Step Application

```sh
curl -X POST http://localhost:3000/api/single-step-applications/apply -H "Content-Type: application/json" -d '{
    "applyFor": "Director",
    "fullName": "John Doe",
    "email": "john.doe@example.com",
    "whatsappNumber": "1234567890",
    "gender": "Male",
    "instituteName": "Example University",
    "fieldOfStudy": "Computer Science",
    "yearOfStudy": "2024",
    "region": "North",
    "facebookLink": "https://facebook.com/johndoe",
    "instagramLink": "https://instagram.com/johndoe",
    "linkedinLink": "https://linkedin.com/in/johndoe",
    "previousExperiences": "Worked on AI projects",
    "bestSkills": ["Leadership", "Teamwork"]
}'
```


#### Export Single-Step Applications to CSV


```sh
curl -X GET http://localhost:3000/api/single-step-applications/export -o single-step-applications.csv
```

### Test Multi-Step Application
#### Create a Multi-Step Application
```sh
curl -X POST http://localhost:3000/api/multi-step-applications/apply -H "Content-Type: application/json" -d '{
    "applyFor": "Ambassador",
    "personalDetails": {
        "fullName": "Jane Smith",
        "email": "jane.smith@example.com",
        "whatsappNumber": "0987654321",
        "gender": "Female"
    },
    "academicDetails": {
        "instituteName": "Example College",
        "fieldOfStudy": "Biology",
        "yearOfStudy": "2023",
        "region": "South"
    },
    "socialDetails": {
        "facebookLink": "https://facebook.com/janesmith",
        "instagramLink": "https://instagram.com/janesmith",
        "linkedinLink": "https://linkedin.com/in/janesmith"
    },
    "professionalDetails": {
        "previousExperiences": "Worked on environmental projects",
        "bestSkills": ["Public Speaking", "Organizational Skills"]
    }
}'
```


#### Export Multi-Step Applications to CSV
```sh
curl -X GET http://localhost:3000/api/multi-step-applications/export -o multi-step-applications.csv
```


## API Documentation
API documentation is available through Swagger UI. You can access it at:
```sh http://localhost:3000/api-docs```# Node-and-MongoDB-backend
