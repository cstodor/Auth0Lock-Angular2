interface AuthConfiguration {
    clientID: string;
    domain: string;
    callbackURL: string;
    memberRouter: string[];
    responseType: string;
}

export const myConfig: AuthConfiguration = {
    clientID: 'ADD_YOUR_CLIENT_ID_HERE',
    domain: 'ADD_YOUR_AUTH0_DOMAIN_HERE',
    callbackURL: 'http://localhost:4200/',
    memberRouter: ['/dashboard'],
    responseType: 'token'
};
