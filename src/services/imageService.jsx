import axios from "axios";

export default class ImageService{
    
    getall(){
        return axios.get("http://localhost:8080/api/images/getall")
    }

    getById(id){
        return axios.get("http://localhost:8080/api/images/getById?id="+id)
    }

    getByJobSeekerId(id){
        return axios.get("http://localhost:8080/api/images/getByJobSeekerId?id="+id)
    }

    add(jobSeekerId,imageFile){
        return axios.post("http://localhost:8080/api/images/add?jobseekerId="+jobSeekerId,imageFile)
    }

    update(image){
        return axios.put("http://localhost:8080/api/images/update",image)
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/images/delete?id="+id)
    }
}