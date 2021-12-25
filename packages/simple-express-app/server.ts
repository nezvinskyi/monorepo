import express from 'express';
// const cors = require('cors');
import _ from 'lodash';
import { QueryPayload } from 'simple-shared-data';

const app = express();
const port = 3001;

// app.use(cors());

app.use((_req, res, next) => {
  // Allow any website to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Continue to next middleware
  next();
});


app.get("/", (req, res) => {
	const responseData: QueryPayload = {
		payload: _.snakeCase("Server data returned successfully")
	}
  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});