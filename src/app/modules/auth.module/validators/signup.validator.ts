import moment from "moment";

// Действия необходимые при валидации
export async function validateSignUpBody<T>(data: T): Promise<T> {
    console.log(moment(Date.now()).format('HH:mm:ss'));
    
    // Схема Валидации тела запроса для Sign-Up (регистрации нового пользователя)
    // const validatorSignUp = vine.compile(vine.object({
    //     fullname: vine.string().trim().minLength(3),
    //     login: vine.string().trim().minLength(6),
    //     password: vine.string().trim().minLength(6),
    // }));

    try {
        // const valideData = await validatorSignUp.validate(data);
        // return valideData as T;
        return data
    } catch (err) {
        throw err;
    }
}