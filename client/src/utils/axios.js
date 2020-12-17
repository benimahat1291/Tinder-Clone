import axios from "axios";



const API = {

    getCards: function () {
      return axios.get("api/tindercards");
    }
  };
  


export default API;