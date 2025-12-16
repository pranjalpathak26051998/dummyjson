//write test cases to test login functionality using jest
const { default: axios } = require('axios');
const { login, getUserDetails, getAllProducts } = require('../pages/login');
describe('Login functionality tests', () => {
    test('Valid login status code is 201', async () => {
        const response = await login();
        if (response && response.status == 200) {
            console.log("Response Status:", response.status);
            console.log("Response Data:", response.data);
        }
    })
});

//write test cases to test get user details functionality using jest

describe('GET User Details', () => {
    test('GET user details status code is 200', async () => {
        const response = await getUserDetails();
        if (response && response.status == 200) {
            console.log("GET User status : ", response.status);
            console.log("GET User data : ", response.data);
        };
    });
});

//GET all products https://dummyjson.com/products

describe('GET all products details', () => {
    test('GET all products status code is 200', async () => {
        const response = await getAllProducts();
        if (response && response.status === 200) {
            console.log("GET Products status :", response.status);
            console.log("GET Products data :", response.data);
        };
    })
});

//GET single products details https://dummyjson.com/products/1
// describe('GET single products details', () => {
//     test('GET single products status code is 200', async () => {
//         const response = await getAllProducts(1).responseSingle;
//         if (response && response.status === 200) {
//             console.log("GET Single Products status :", response.status);
//             console.log("GET Single Products data :", response.data);
//         };
//     });
// });




