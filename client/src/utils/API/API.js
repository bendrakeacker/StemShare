import axios from "axios";
export default {
    getProjects: function (props) {
        return axios
      .get("https://api.github.com/orgs/github/public_members")
      .then(res => {
        console.log(props);
        const users = res.data;
        return users.map(user => {
          return {
            login: user.login,
            image: user.avatar_url,
            profileUrl: user.html_url
          };
        });
      });
    }, 
    saveComment: function (commentData, filename) {
      commentData.id = filename;
      console.log(commentData);
      return axios
      .post("/api/dashboard", commentData)
    },
    getComment: function (id) {
      return axios
      .get("/api/dashboard/" + id)
    }
};


     
        