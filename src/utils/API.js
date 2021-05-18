import axios from "axios";

const BASEURL = "https://randomuser.me/api/?inc=picture,name,location,email,cell&results=100";


// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
