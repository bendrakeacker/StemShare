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
            // dbx.filesListFolder({ path: '' })
        //         .then(function (response) {
        //             return (
        //                 response.entries
        //             )




        //         })
        //         .catch(function (error) {
        //             console.error(error);
        //         });
        // }
    }
};
