# rest-api-implement
# REST API Backend – Day 1 Notes

This repository documents my Day 1 learning while starting to build a REST API backend using Node.js, TypeScript, Express, and MongoDB.

---

## Day 1 – Initial Backend Setup

### Initialize Node.js project
```
npm init -y
```

This initializes a Node.js project and creates a package.json file.

---

### Install TypeScript
```
npm install -D typescript
```

TypeScript is used for writing type-safe JavaScript.

---

### Install ts-node
```
npm install -D ts-node
```

Allows running TypeScript files directly.

---

### Install nodemon
```
npm install -D nodemon
```

Automatically restarts the server when code changes.

---

### TypeScript configuration (tsconfig.json)
```
{
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "baseUrl": "src",
    "outDir": "dist",
    "sourceMap": true,
    "noImplicitAny": true
  },
  "include": ["src/**/*"]
}
```

---

### Nodemon configuration (nodemon.json)
```
{
  "watch": ["src"],
  "ext": "ts,js",
  "exec": "ts-node ./src/index.ts"
}
```

---

### Project structure
```
src/
 ├─ index.ts
 └─ db/
    └─ user.ts
```

---

### Install Express and middleware
```
npm i express body-parser cookie-parser compression cors
```

---

### Install TypeScript type definitions
```
npm i -D @types/express @types/body-parser @types/cookie-parser @types/compression @types/cors
```

---

### Express server setup (src/index.ts)
```
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

const app = express();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
```

Opening http://localhost:8080 shows "Cannot GET /" because no routes are added yet.

---

### MongoDB setup
MongoDB Atlas is used as a cloud database. The connection string is stored in a .env file.

---

### Install mongoose
```
npm install mongoose
```

---

### User schema (src/db/user.ts)
```
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true, select: false },
  email: { type: String, required: true },
  salt: { type: String, select: false },
  sessionToken: { type: String, select: false },
});

export const User = mongoose.model("User", userSchema);
```

---

## Status after Day 1
- Backend server running
- TypeScript configured
- Express middleware added
- MongoDB model created
- Ready for routes and authentication
