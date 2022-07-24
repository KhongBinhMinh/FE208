export type TypeLoginRequest = {
    email:string,
    password:string
}
export type TypeLoginResponse = {
    accessToken:string,
    user:{
    id:number
    email:string,
    }
}

export type TypeSignupRequest = {
    name:string
    email:string,
    password:string
}
export type TypeSignupResponse = {
    id:number
    email:string,
}