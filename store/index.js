
console.log(process.env.NODE_ENV)

var url

if (process.env.NODE_ENV == "development") {

    var url = "http://127.0.0.1:8000/backend/";

} else {

    var url = "/backend/";

}




import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


export const state = () => ({


    //api

    login: url + "login/customers",
    getAllClientListOutside: url + "client/allOutside",
    getAllClientListKamrup: url + "client/allKamrup",
    createQuery: url + "queries/createQuery",
    createContact: url + "queries/createContact",
    getHomepageSliderImages: url + "homepage/homepageslider",
    getAllNews: url + "news/getAllNews",
    getAllTestimonialAPI: url + "homepage/testimonial",





    //storage

    allClientListOutside: [],
    allClientListKamrup: [],
    HomepageSliderImages: [],
    allNews: [],
    alltestimonial: []

})


export const mutations = {

    clientListKamrup(state, allClientListOutside) {
        console.log('selecting exercise mutation, ' + allClientListOutside)
        state.allClientListOutside = allClientListOutside
    },

    clientListOutside(state, allClientListKamrup) {
        console.log('selecting exercise mutation, ' + allClientListKamrup)
        state.allClientListKamrup = allClientListKamrup
    },

    HomepageSliderImages(state, HomepageSliderImages) {
        console.log('selecting exercise mutation, ' + HomepageSliderImages)
        state.HomepageSliderImages = HomepageSliderImages
    },

    allNews(state, allNews) {
        console.log('selecting exercise mutation, ' + allNews)
        state.allNews = allNews
    },

    alltestimonial(state, alltestimonial) {
        console.log('selecting exercise mutation, ' + alltestimonial)
        state.alltestimonial = alltestimonial
    },

}


export const getters = {

}



export const actions = {

    getAllClientListKamrup({ commit, state }) {

        return new Promise((resolve, reject) => {

            axios({
                method: 'GET',
                url: state.getAllClientListKamrup,
                contentType: 'application/json',
            })
                .then(res => {
                    console.log(res.data);
                    commit('clientListKamrup', res.data)
                    resolve(res);
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                })
        })
    },

    getAllClientListOutside({ commit, state }) {

        return new Promise((resolve, reject) => {

            axios({
                method: 'GET',
                url: state.getAllClientListOutside,
                contentType: 'application/json',
            })
                .then(res => {
                    console.log(res.data);
                    commit('clientListOutside', res.data)
                    resolve(res);
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                })
        })
    },

    getAllNews({ commit, state }) {

        return new Promise((resolve, reject) => {

            axios({
                method: 'GET',
                url: state.getAllNews,
                contentType: 'application/json',
            })
                .then(res => {
                    console.log(res.data);
                    commit('allNews', res.data)
                    resolve(res);
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                })
        })
    },

    getAlltestimonial({ commit, state }) {

        return new Promise((resolve, reject) => {

            axios({
                method: 'GET',
                url: state.getAllTestimonialAPI,
                contentType: 'application/json',
            })
                .then(res => {
                    console.log(res.data);
                    commit('alltestimonial', res.data)
                    resolve(res);
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                })
        })
    },

    getHomepageSliderImages({ commit, state }) {

        return new Promise((resolve, reject) => {

            axios({
                method: 'GET',
                url: state.getHomepageSliderImages,
                contentType: 'application/json'
            })
                .then(res => {
                    console.log(res.data);
                    commit('HomepageSliderImages', res.data)
                    resolve(res);
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                })
        })
    },

    createQuery({ commit, state }, payload) {

        return new Promise((resolve, reject) => {

            axios({
                method: 'POST',
                url: state.createQuery,
                data: payload,
                contentType: 'application/json'
            })
                .then(res => {
                    console.log(res.data);
                    resolve(res);
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                })
        })
    },

    createContact({ commit, state }, payload) {

        return new Promise((resolve, reject) => {

            axios({
                method: 'POST',
                url: state.createContact,
                data: payload,
                contentType: 'application/json'
            })
                .then(res => {
                    console.log(res.data);
                    resolve(res);
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                })
        })
    },

}

