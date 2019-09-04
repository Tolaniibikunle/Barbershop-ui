import { Resource, Serializer } from '../bo/Util';

export class User extends Resource {
    authId: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    enabled: boolean;
    role: UserRole;
}

export enum UserRole {
    BARBER_ROLE,
    CUSTOMER_ROLE
}

export class UserSerializer implements Serializer {

    toJson(resource: Resource) {
        throw new Error("Method not implemented.");
    }

    fromJson(json: any): User {
        const user = new User();
        user.id = json.userId;
        user.authId = json.authId;
        user.firstName = json.firstName;
        user.lastName = json.lastName;
        user.email = json.email;
        user.phoneNumber = json.phoneNumber;
        user.enabled = json.enabled;
        user.role = json.role;
        return user;
    }

}