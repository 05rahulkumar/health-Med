export interface signup {
    name: string,
    email: string,
    password: string,
    confirmPassword:string
    phone: number,
    success:boolean,
    msg:string
}
export interface login {
    email:string,
    password:string,
    success:boolean,
    message:string,
    token:any
}