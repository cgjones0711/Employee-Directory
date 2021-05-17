import axios from "axios";

const BASEURL = "https://randomuser.me/api/?inc=name,email,picture,cell&nat=us&results=100";


// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function() {
    return axios.get(BASEURL );
  }
};
