
// Error handler for the application, will be used as the global error middleware in the application
const errorHandler = (error, req, res, next) => {
    // It has access to error whic the is error you will be getting , req -> request, res -> response and next(), the next() function will processed to another middleware or route if no error is found in the pipeline which is your application.
    if(error){
        if(error.message){
            res.status(400).json({
                status:"failed show me again",
                error: error.message // will display your error message.
            });
        } else{
            res.status(400).json({
                status:"failed  show me again",
                error: error
            });
        }
    } else{
        next();
    }
}
module.exports = errorHandler;