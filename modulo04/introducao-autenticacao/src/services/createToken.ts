import * as jwt from 'jsonwebtoken';

//Token Expiration
const tokenExpires:string = '1min'

//Authentication Type
type AuthenticationData = {
    id:string
}

//Generate Token

export const createToken = (id:AuthenticationData) => {
    const token = jwt.sign(
        {id},
        'l4beNu',
        {expiresIn: tokenExpires}
    )

    return token
}