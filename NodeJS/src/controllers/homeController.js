import db from "../models/index"; 
import CRUDService from "../services/CRUDService";

let getHomePage = async(req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs',{
            data: JSON.stringify(data)
        });
    } catch(e){
        console.log(e);
    }
}

let getCRUD = async(req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('crud.ejs');
    } catch(e){
        console.log(e);
    }
}

let postCRUD = async(req, res) => {
    try {
        let message = await CRUDService.createNewUser(req.body);
        console.log(message);
        return res.send('post crud from server');
    } catch(e){
        console.log(e);
    }
}

let displayCRUD = async (req, res) => {
    try {
        let data = await CRUDService.getAllUser();
        console.log(data);
        return res.send('get crud from server');
    } catch(e){
        console.log(e);
    }
}


module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayCRUD: displayCRUD,
}