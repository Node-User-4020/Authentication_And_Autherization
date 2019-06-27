export interface ILoginResponse {

    accessToken: String,
    userId: String

};

export const loginResponse = (loginData:any): ILoginResponse => {
    return {

        accessToken: loginData.accessToken,
        userId:loginData.userId

    };
};

