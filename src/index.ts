import express from "express";
// import routers from "./routers";
import processes from "./middleware/processes";
import exceptionHandler from "./middleware/exceptionHandler";
import settings from "./settings";


const app = express()
const port = settings.port

processes(app)

app.use(exceptionHandler)


app.listen(port, () => {

    console.log(`Server is running on port ${port}`)

})