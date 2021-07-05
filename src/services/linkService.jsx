import axios from "axios"

export default class LinkService{

    getall(){
        return axios.get("http://localhost:8080/api/links/getall")
    }

    getById(id){
        return axios.get("http://localhost:8080/api/links/getById?id="+id)
    }

    getAllByJobSeekerId(id){
        return axios.get("http://localhost:8080/api/links/getAllByJobSeekerId?id="+id)
    }

    add(link){
        return axios.post("http://localhost:8080/api/links/add",link)
    }

    update(link){
        return axios.put("http://localhost:8080/api/links/update",link)
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/links/delete?id="+id)
    }
    
}