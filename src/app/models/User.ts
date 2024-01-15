import { UserRole } from "./UserRole"

export interface User{
    id: number,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    password: string,
    userRole: UserRole
}