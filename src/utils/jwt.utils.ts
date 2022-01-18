import jwt from  'jsonwebtoken';
import config from 'config';

 const privatekey = config.get<string>("privatekey");
 const publickey = config.get<string>("publickey");

export function signJwt(object: Object, options?: jwt.SignOptions | undefined){
    return jwt.sign(object, privatekey, {
        ...(options && options),
        algorithm: "RS256"
    });
}

export function verifyJwt(token: string){
    try {
        const decode = jwt.verify(token, privatekey);
        return {
            valid: true,
            expires: false,
            decoded: true,
        }
    } catch (error: any) {

        return {
            valid: false,
            expires: error.message == "jwt expired",
            decoded: null,
        }
        
    }
}