import UserService from "./src/services/UserService.js";

const userPersistenceMock = {
    /**
     * 
     * @param {import(./services/UserService).userSearchCriteria} req
     * @returns {boolean} 
     */

    exists: (req) => {
        return true
    }
}


const userService = new UserService(userPersistenceMock);
try {
    userService.addUser({name: "George", email: "george@gmail.com", pass: "123"})
} catch (error) {
    console.log(error.message)
}
