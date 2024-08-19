const jsonwebtoken = require("jsonwebtoken");
const jwtManager = (user) => {

    const accessToken = jsonwebtoken.sign({ // sign function to create a JSON Web Token (JWT).
        //This is a JavaScript object that contains the data you want to embed within the JWT. Here
        // user is coming from the accesstoken function. working for login and register controller.
        _id: user._id, // AZXBVSSH938N3HY3J3YU2I
        name:user.name
    }, 
   process.env.jwt_salt
);

return accessToken // token be generated.

}

module.exports = jwtManager;

