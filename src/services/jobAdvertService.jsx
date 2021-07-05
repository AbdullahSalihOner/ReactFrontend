import axios from "axios"

export default class JobAdvertService{
    getJobAdverts(){
        return axios.get("http://localhost:8080/api/jobadvert/getAll")
    }
    getOpenJobAdverts(){
        return axios.get("http://localhost:8080/api/jobadvert/getAllOpenJobAdvertList")
    }
    getJobAdvertsOrderByPublishedAt(){
        return axios.get("http://localhost:8080/api/jobadvert/findAllByOrderByPublishedAt")
    }
    add(jobAdvert){
        return axios.post("http://localhost:8080/api/jobadvert/add",jobAdvert)
    }

    update(jobAdvert){
        return axios.put("http://localhost:8080/api/jobadvert/update",jobAdvert)
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/jobadvert/delete?id=",id)
    }
}