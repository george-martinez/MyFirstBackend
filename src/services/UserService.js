import * as uuid from 'uuid'

/**
 * @typedef {object} UserSearchCriteria
 * @property {string=} id 
 * @property {string=} email
 * @typedef {object} UserPersistence
 * @property {function(UserSearchCriteria):boolen} exists - This function validate if the user are already registered.
 */
export default class UserService {
    /**
     * 
     * @param {UserPersistence} userPersistence 
     */
    constructor(userPersistence) {
        this.userPersistence = userPersistence
    }

    /**
     * This function register a new user in the app
     * 
     * @param {object} req
     * @param {string=} req.name
     * @param {string=} req.email
     * @param {string=} req.pass
     * 
     * @throws {Error} Invalid User Name 
     * @throws {Error} Invalid User Email 
     * @throws {Error} Invalid User Password
     */
    addUser(req) {
       this.checkAaddUserRequest(req)

       const user = {
           id: uuid.v4(),
           name: req.name,
           email: req.email,
           pass: req.pass,
           createAt: new Date(),
           updateAt: new Date(),
       }

       if(this.userPersistence.exists({email:user.email})){
           console.log('User exists')
        } else{
            console.log('User doesnt exists')
       }
    }

    /**@private */
    checkAaddUserRequest(req){
        if (req?.name == ''){
            throw Error("Invalid user name")
        }

        if (req?.email == ''){
            throw Error("Invalid user email")
        }

        if (req?.pass == ''){
            throw Error("Invalid user password")
        }
    }
}