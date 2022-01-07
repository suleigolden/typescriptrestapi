import { type } from "os";
import { object, string, TypeOf } from "zod";


export const createUserSchema = object({
    body: object({
        name: string({
            required_error: 'Name is required'
        }),
        password: string({
            required_error: 'Password is required'
        }).min(6, "Password is too short - should be minimun of 6 chracters.."),
        passwordConfirmation: string({
            required_error: 'password Confirmation is required'
        }),
        email: string({
            required_error: 'Email is required'
        }).email("Not valid email.."),

    }).refine((data) => data.password === data.passwordConfirmation,{
        message: "Password do not match",
        path: ["passwordConfirmation"]
    }),
});
 
export type CreateUserInput = Omit<
TypeOf<typeof createUserSchema>,
"body.passwordConfirmation"
>;

