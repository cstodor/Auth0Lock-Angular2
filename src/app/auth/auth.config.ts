interface AuthConfiguration {
    clientID: string;
    domain: string;
    callbackURL: string;
    memberRouter: string[];
    responseType: string;
}

export const myConfig: AuthConfiguration = {
    clientID: 'bY159CtFcxmfocFXDe4HMzTA3rKTncIF',
    domain: 'cstodor.eu.auth0.com',
    callbackURL: 'http://localhost:4200/',
    memberRouter: ['/dashboard'],
    responseType: 'token'
};
