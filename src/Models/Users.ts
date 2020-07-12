import { Role } from './Roles'

export interface User{
    userId: number // primary key
    username: string // not null, unique
    password: string // not null
    firstName: string // not null
    lastName: string // not null
    email: string // not null
    roleDetails: Role // not null
}