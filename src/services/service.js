import axios from 'axios'

const url = 'https://agile-garden-69829.herokuapp.com'

const getter = async route => {
    return axios.get(`${url + route}`)
}
const poster = async (route, object) => {
    return axios.post(`${url + route}`, object)
}
const putter = async (route, object) => {
    return axios.put(`${url + route}`, object)
}
const deleter = async (route) => {
    return axios.delete(`${url + route}`)
}


export default {
    getter,
    poster,
    putter,
    deleter
}