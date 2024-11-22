interface Login {
    email: string,
    username?: string,
    password: string 
};
interface UserInput {
    email: string,
    password: string 
};
interface User {
    _id: string,
    email: string,
    // role?: string,
    password: string 
};
interface Admin {
    id: string,
    email: string,
}
interface LoginSuccessResponse {
    userId: string
    token: string
};