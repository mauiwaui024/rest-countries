import axios from "axios";

export default class CountriesService{
    static async getAll(){
     try {
        const response = await axios.get("https://restcountries.com/v2/all")
        return response.data
     } catch (error) {
        console.log(error);
     }
    }

    static async getByCode(code){
      try {
         const response = await axios.get("https://restcountries.com/v2/alpha/" + code)
         return response.data
      } catch (error) {
         console.log(error);
      }
     }
}