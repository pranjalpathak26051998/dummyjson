const axios = require('axios');
require('dotenv').config();

//generate a token from dummyjson.com and use it to authenticate further requests by
const baseURl = "https://dummyjson.com/auth/";
let token;
async function login() {
    try {
        method: 'POST';
        const loginURL = `${baseURl}login`;
        const credentials = {
            username: process.env.DJ_USERNAME,
            password: process.env.DJ_PASSWORD
        };
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const response = await axios.post(loginURL, credentials, config);

        if (response.status === 200 && response.data) {
            token = response.data.accessToken;
            console.log("Login Success:", response.status, response.data);
            console.log("Generated Token:", token);
            return token;

        } else {
            console.log("Login Failed:", response.status, response.data);
        }
    }
    catch (error) {
        if (error.response) {
            console.log("Login API Error:", error.response.status, error.response.data);
        }
        else {
            console.log("Error:", error.message);
        }

    }
}


//get user details using the token generated from login API
async function getUserDetails() {
    try {
        const getUserURL = `${baseURl}me`;
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        };
        const response = await axios.get(getUserURL, config);
        if (response.status === 200 && response.data) {
            console.log("GET User Details Success:", response.status, response.data);
        } else {
            console.log("GET User Details Failed:", response.status, response.data);
        }

    } catch (error) {
        if (error.response) {
            console.log("GET User API Error:", error.response.status, error.response.data);
        } else {
            console.log("Error:", error.message);
        }

    }
};

//GET all products https://dummyjson.com/products
let id;
async function getAllProducts(id) {
    try {
        const getProductsURL = `${baseURl}products`;
        const getSingleProductURL = `${baseURl}products/${id}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }

        const response = await axios.get(getProductsURL, config);
        if (response.status == 200 && response.data) {
            console.log("GET Products Success status:", response.status);
            console.log("GET Products Data:", response.data);
        }
        if (response.data) {
            console.log("GET Products Data:", response.data);
        };

        const responseSingle = await axios.get(getSingleProductURL, config);
        console.log("GET single Products Details here....", responseSingle.data);
        return responseSingle;
    } catch (error) {
        if (error.response) {
            console.log("GET Products API Error:", error.response.status, error.response.data);
        } else {
            console.log("Error:", error.message);
        }

    }
};

//execute the functions in sequence....
async function execute() {
    await login();
    await getUserDetails();
    await getAllProducts(1);
}
// execute();
module.exports = { login, getUserDetails, getAllProducts };
