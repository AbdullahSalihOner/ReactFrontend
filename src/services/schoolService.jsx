import axios from "axios"

export default class SchoolService{
    
    getall(){
        return axios.get("http://localhost:8080/api/educations/getall")
    }

    getAllByJobSeekerId(id){
        return axios.get("http://localhost:8080/api/educations/getAllByJobSeekerId?id="+id)
    }

    getAllByJobSeekerIdOrderByEndAtDesc(id){
        return axios.get("http://localhost:8080/api/educations/getAllByJobSeekerIdOrderByEndAtDesc?id="+id)
    }
    
    getById(id){
        return axios.get("http://localhost:8080/api/educations/getbyid?id="+id)
    }

    add(school){
        return axios.post("http://localhost:8080/api/educations/add",school)
    }

    update(school){
        return axios.put("http://localhost:8080/api/educations/update",school)
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/educations/delete?id="+id)
    }
}