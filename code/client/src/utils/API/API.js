import axios from "axios";
const BASEURL = "";
const APIKEY = "id7gfw8lk9f607v";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};

