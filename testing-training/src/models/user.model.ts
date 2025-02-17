export interface User {
    accessToken: string;
    user: {
        email: string;
        id: number;
    }
}

export interface IUseUser {
    user: User | null;
}
