import vine from "@vinejs/vine";




const validatorSignUp = vine.compile(vine.object({

}))

export function validateSignUpBody<T>(data: T): T {
    return data
}