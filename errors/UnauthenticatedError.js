const customApiError = require('./customApiError');
const {StatusCodes} = require('http-status-codes')
class UnauthenticatedError extends customApiError{
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}