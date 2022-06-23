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
        return res.send('Create new user');
    } catch(e){
        console.log(e);
    }
}

let displayCRUD = async (req, res) => {
    try {
        let data = await CRUDService.getAllUser();
        return res.render('displayCRUD.ejs', {dataTable: data});
    } catch(e){
        console.log(e);
    }
}

let editCRUD = async(req, res) => {
    let userId = req.query.id;
    if(userId){
        let userData = await CRUDService.getUserInfoById(userId);
        return res.render('editCRUD.ejs', { userData: userData })
    }
    else{
        return res.send('xxx');
    }
}

let putCRUD = async(req, res) => {
    try {
        let allUsers = await CRUDService.updateUserData(req.body);
        return res.render('displayCRUD.ejs', {dataTable: allUsers});
    } catch(e){
        console.log(e);
    }
}

let deleteCRUD = async(req, res) => {
    let userId = req.query.id;
    if(userId){
        let allUsers = await CRUDService.deleteUserData(userId);
        return res.render('displayCRUD.ejs', {dataTable: allUsers});
    }
    else{
        return res.send('xxx');
    }
}


module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayCRUD: displayCRUD,
    editCRUD: editCRUD,
    deleteCRUD: deleteCRUD,
    putCRUD: putCRUD,
}