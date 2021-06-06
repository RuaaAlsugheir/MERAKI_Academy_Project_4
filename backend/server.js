const express = require('express');
const cors = require('cors');
const db = require('./db/db');


const app = express();

//routers
const registerRouter = require('./routers/routes/auth/register');
const loginRouter = require("./routers/routes/auth/login");
const requestRouter = require("./routers/routes/requests");
const hospitalRouter = require("./routers/routes/hospitals")
const CandidatesRouter = require("./routers/routes/candidates")

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());



//app routers
app.use(registerRouter)
app.use(loginRouter)
app.use("/request" , requestRouter);
app.use("/hospitals" , hospitalRouter);
app.use("/" , CandidatesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Dominators server listening at http://localhost:${PORT}`);
});