export interface ISignUpResponse {

    accessToken: String,
    refreshToken: String

};

export const signUpResponse = (accessToken: String, refreshToken: String): ISignUpResponse => {
    return {

        accessToken: accessToken,
        refreshToken: refreshToken
    };
};
