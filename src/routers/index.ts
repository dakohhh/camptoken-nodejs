import express from 'express';
import authentication from './authentication';
import student from './student';

const router = express.Router();

export default (): express.Router => {
    authentication(router);
    student(router);

    // user(router)

    return router;
};
