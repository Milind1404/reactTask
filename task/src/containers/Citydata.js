import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function Citydata() {
    const data = axios({
        url: "https://restcountries.com/v2/all",
        method: "GET",
        // headers: {
        //   authorization: "your token comes here",
        // },
        // data: formData,
      });
    
    return data;
}

export default Citydata