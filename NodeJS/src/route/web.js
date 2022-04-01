import express from "express";  
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let iniWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayCRUD);

    router.post('/api/login', userController.handleLogin);

    return app.use("/", router);
}

module.exports = iniWebRoutes;