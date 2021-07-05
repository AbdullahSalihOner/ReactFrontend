import axios from "axios";

export default class JobSeekerService{

    getall(){
        return axios.get("http://localhost:8080/api/jobSeekers/getall")
    }

    add(jobSeeker){
        return axios.post("http://localhost:8080/api/jobSeekers/add",jobSeeker)
    }

    update(jobSeeker){
        return axios.put("http://localhost:8080/api/jobSeekers/update",jobSeeker)
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/jobSeekers/delete?id=",id)
    }

}