export default interface IUser {
    id: number,
    avatar: string,
    firstName: string,
    lastName: string,
    email: string,
    password?: string,
}