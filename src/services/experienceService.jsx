import axios from "axios";

export default class ExperienceService{

    getById(id){
        return axios.get("http://localhost:8080/api/experiences/getbyid?id="+id)
    }

    getAllByJobSeekerId(id){
        return axios.get("http://localhost:8080/api/experiences/getAllByJobSeekerId?id="+id)
    }

    getAllByJobSeekerIdOrderByEndAtDesc(id){
        return axios.get("http://localhost:8080/api/experiences/getAllByJobSeekerIdOrderByEndAtDesc?id="+id)
    }

    add(experience){
        return axios.post("http://localhost:8080/api/experiences/add",experience)
    }

    update(experience){
        return axios.put("http://localhost:8080/api/experiences/update",experience)
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/experiences/delete?id="+id)
    }
}