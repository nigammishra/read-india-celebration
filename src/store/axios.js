import axios from "axios";

const token = localStorage.getItem("userDetails");

const authToken = token && JSON.parse(token).token;

export const ricApi = axios.create({

  //Staging Api 
   baseURL: "https://readindia.info/ric/api/readindia/",

  
  headers: {
    // 'Access-Control-Allow-Origin': '*',
     'Accept': "application/json",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type',
    Authorization: `Bearer ${authToken}`,
  },
});
