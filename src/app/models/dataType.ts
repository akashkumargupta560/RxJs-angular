

export interface UserTypes{
    fullname:string,
    username:string,
    email:string,
    gender:string,
    phone:number,
    address:Address[],
}
export interface Address{
    Hsno?:number,
    street?:string,
    landmark?:string
}
