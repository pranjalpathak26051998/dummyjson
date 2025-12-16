const axios = require('axios');
require('dotenv').config();

//generate a token from dummyjson.com and use it to authenticate further requests by




let baseURL = 'https://dummyjson.com/auth/';

async function login() {
    try {
        const loginURL = `${baseURL}login`;
        const credentials = {
            username: process.env.DJ_USERNAME,
            password: process.env.DJ_PASSWORD
        };

        console.log("Credentials being sent:", credentials);

        const response = await axios.post(loginURL, credentials, {
            headers: {
                "Content-Type": "application/json",

                "Accept": "application/json"
            }
        });

        console.log("Login Success:", response.data);

    } catch (error) {
        if (error.response) {
            console.log("API Error:", error.response.status, error.response.data);
        } else {
            console.log("Error:", error.message);
        }
    }
}

login();
