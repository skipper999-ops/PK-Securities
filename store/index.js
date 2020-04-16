console.log(process.env.NODE_ENV);

var url;

if (process.env.NODE_ENV == "development") {
    var url = "https://api.pkservices.in/backend/";
    // var url = "http://127.0.0.1:8000/backend/";
} else {
    var url = "https://api.pkservices.in/backend/";
}

import axios from "axios";
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

export const state = () => ({
    //api

    login: url + "login/customers",
    getAllClientListOutside: url + "client/allOutside",
    getAllClientListKamrup: url + "client/allKamrup",
    createQuery: url + "queries/createQuery",
    createContact: url + "queries/createContact",
    getHomepageSliderImages: url + "homepage/homepageslider",
    getAllNews: url + "news/getAllNews",
    getAllBlogs: url + "news/getAllBlog",
    getSingleBlog: url + "news/getSingleBlog/", //id
    getAllTestimonialAPI: url + "homepage/testimonial",
    getAQuote: "https://wenslink.com/backend/api/products/sendEmail",

    whatwedosecurity: url + "whatwedo/security",
    whatwedoservices: url + "whatwedo/services",
    career: url + "career/",

    //storage

    allClientListOutside: [],
    allClientListKamrup: [],
    HomepageSliderImages: [],
    allNews: [],
    allBlogs: [],
    singleBlog: {},
    alltestimonial: [],
    services: [],
    security: [],
    allcareer: []
});

export const mutations = {
    clientListKamrup(state, allClientListOutside) {
        console.log("selecting exercise mutation, " + allClientListOutside);
        state.allClientListOutside = allClientListOutside;
    },

    clientListOutside(state, allClientListKamrup) {
        console.log("selecting exercise mutation, " + allClientListKamrup);
        state.allClientListKamrup = allClientListKamrup;
    },

    HomepageSliderImages(state, HomepageSliderImages) {
        console.log("selecting exercise mutation, " + HomepageSliderImages);
        state.HomepageSliderImages = HomepageSliderImages;
    },

    allNews(state, allNews) {
        console.log("selecting exercise mutation, " + allNews);
        state.allNews = allNews;
    },

    allBlogs(state, allBlogs) {
        console.log("selecting exercise mutation, " + allBlogs);
        state.allBlogs = allBlogs;
    },

    singleBlog(state, singleBlog) {
        console.log("selecting exercise mutation, " + singleBlog);
        state.singleBlog = singleBlog;
    },

    services(state, services) {
        console.log("selecting exercise mutation, " + services);
        state.services = services;
    },

    security(state, security) {
        console.log("selecting exercise mutation, " + security);
        state.security = security;
    },

    career(state, career) {
        console.log("selecting exercise mutation, " + career);
        state.career = career;
    },

    alltestimonial(state, alltestimonial) {
        console.log("selecting exercise mutation, " + alltestimonial);
        state.alltestimonial = alltestimonial;
    }
};

export const getters = {};

export const actions = {
    getAllClientListKamrup({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.getAllClientListKamrup,
                    contentType: "application/json"
                })
                .then(res => {
                    console.log(res.data);
                    commit("clientListKamrup", res.data);
                    resolve(res);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    },

    getAllClientListOutside({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.getAllClientListOutside,
                    contentType: "application/json"
                })
                .then(res => {
                    console.log(res.data);
                    commit("clientListOutside", res.data);
                    resolve(res);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    },

    getAllNews({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.getAllNews,
                    contentType: "application/json"
                })
                .then(res => {
                    console.log(res.data);
                    commit("allNews", res.data);
                    resolve(res);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    },

    getAllBlogs({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.getAllBlogs,
                    contentType: "application/json"
                })
                .then(res => {
                    console.log(res.data);
                    commit("allBlogs", res.data);
                    resolve(res);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    },

    getSingleBlog({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.getSingleBlog + payload,
                    contentType: "application/json"
                })
                .then(res => {
                    console.log(res.data);
                    commit("singleBlog", res.data);
                    resolve(res);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    },

    getAllCareer({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.career,
                    contentType: "application/json"
                })
                .then(res => {
                    console.log(res.data);
                    commit("career", res.data);
                    resolve(res);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    },

    getAlltestimonial({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.getAllTestimonialAPI,
                    contentType: "application/json"
                })
                .then(res => {
                    console.log(res.data);
                    commit("alltestimonial", res.data);
                    resolve(res);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    },

    getAllServices({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.whatwedoservices,
                    contentType: "application/json"
                })
                .then(res => {
                    console.log(res.data);
                    commit("services", res.data);
                    resolve(res);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    },

    getAllSecurity({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.whatwedosecurity,
                    contentType: "application/json"
                })
                .then(res => {
                    console.log(res.data);
                    commit("security", res.data);
                    resolve(res);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    },

    getHomepageSliderImages({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.getHomepageSliderImages,
                    contentType: "application/json"
                })
                .then(res => {
                    console.log(res.data);
                    commit("HomepageSliderImages", res.data);
                    resolve(res);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    },

    createQuery({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "POST",
                    url: state.createQuery,
                    data: payload,
                    contentType: "application/json"
                })
                .then(res => {
                    console.log(res.data);
                    resolve(res);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    },

    createContact({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "POST",
                    url: state.createContact,
                    data: payload,
                    contentType: "application/json"
                })
                .then(res => {
                    console.log(res.data);
                    resolve(res);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    },

    getAQuote({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "POST",
                    url: state.getAQuote,
                    data: payload,
                    contentType: "application/json"
                })
                .then(res => {
                    console.log(res.data);
                    resolve(res);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    }
};