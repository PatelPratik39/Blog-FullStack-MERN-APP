# Blog-FullStack-MERN-APP

# 1st step : install dependecies :

```
npm i react-redux
npm i react-router-dom
npm i tinymce
npm i appwrite
npm install @reduxjs/toolkit
npm i html-react-parser
npm i react-hook-form
```

# 2nd step: Set up Environment variables :

- if we create an App using React or Npx comand, we need to used "REACT*APP*",
- so we wont get reference Error: that process.env file is not defined.

REACT_APP_APPWRITE_URL = "test environemnt"

- if we have created an app using vite@latest , we need to provide "VITE\_",
- and we need to use "import.meta.env.VITE\_"
- change string value to actual AppWrite url

VITE_APPWRITE_URL = "test environemnt"

- create Project -> Database -> Collection -> Bucket in Appwrite
  # Note: if storage limit comes for the free version, just go down to the bottom in Bucket setting and increase the size 50 Megabytes.
- set permission based on requirements
