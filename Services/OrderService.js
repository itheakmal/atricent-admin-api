const { default: axios } = require('axios');
require('dotenv').config();

const getOrders = () => {
    return new Promise((resolve, reject) => {
        axios.post(`${process.env.ATRICENT_APP_URL}api/v1/admin/orders-listing`)
            .then(data => {
                // console.log('data.data', data.data);
                resolve(data.data)
            })
            .catch(err => {
                // Handle errors
                console.error(err);
                reject('Something went wrong');
            });
    })
}
const updateOrder = (order) => {
    console.log('order', order)
    return new Promise((resolve, reject) => {
        axios.post(`${process.env.ATRICENT_APP_URL}api/v1/admin/update-order`, order)
            .then(data => {
                // console.log('data.data', data.data);
                resolve(data.data)
            })
            .catch(err => {
                // Handle errors
                console.error(err);
                reject('Something went wrong');
            });
    })
}
const orderDetail = (order) => {
    console.log('order', order)
    return new Promise((resolve, reject) => {
        axios.get(`${process.env.ATRICENT_APP_URL}api/v1/order-details/${order}`)
            .then(data => {
                // console.log('data.data', data.data);
                resolve(data.data)
            })
            .catch(err => {
                // Handle errors
                console.error(err);
                reject('Something went wrong');
            });
    })
}
module.exports = {
    getOrders,
    updateOrder,
    orderDetail
}