// import 'module-alias/register';
import express from "express";
import routers from "./routers";
import processes from "./middleware/processes";
import exceptionHandler from "./middleware/exceptionHandler";
import settings from "./settings";
import { connect_to_mongo } from "./database/config";

const app = express();
const port = settings.port;

processes(app);


app.use(routers());
app.use(exceptionHandler);



app.listen(port, async () => {

    await connect_to_mongo();

    console.log(`Server is running on port ${port}`);

});