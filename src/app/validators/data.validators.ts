// Валидаторы различных типов данных



interface StringMutations {
    capitalize: () => StringRules,
    lowerCase: () => StringRules,
    upperCase: () => StringRules,
}
interface StringRules {
    readyRules: {
        trim?: (...params: any[]) => any,
        minLength?: (...params: any[]) => any,
        maxLength?: (...params: any[]) => any,
        mutations?: {
            capitalize?: (...params: any[]) => any,
            lowerCase?: (...params: any[]) => any,
            upperCase?: (...params: any[]) => any,
        }
    },
    mutations: StringMutations,
    mutate: () => StringMutations,
    trim: () => StringRules,
    minLength: (length: number) => StringRules,
    maxLength: (length: number) => StringRules,
}


function trimText(text: string): string {
    return text
}

function minLengthText(length: number): any {
    return length;
}

function maxLengthText(length: number): any {
    return length;
}



const stringRules: StringRules = {
    readyRules: {},
    mutations: {
        capitalize: function () {
            return stringRules;
        },
        lowerCase: function () {
            return stringRules;
        },
        upperCase: function () {
            return stringRules;
        },

    },
    mutate: function () {
        return this.mutations;
    },
    trim: function () {
        this.readyRules.trim = trimText;
        return stringRules;
    },
    minLength: function (length: number) {
        this.readyRules.minLength = minLengthText;
        return stringRules;
    },
    maxLength: function (length: number) {
        this.readyRules.maxLength = maxLengthText;
        return stringRules;
    },
}

interface ValidatorRules {
    string: () => StringRules,
}


const validationSystem: ValidatorRules = {
    string: function () {
        return stringRules;
    }

}

export function createRulesValidator(rules: ValidatorRules) {
    let privateKey = 'secret';
    const validationRules = {};


    return {
        getKey: function() {
            return privateKey;
        },
        setKey: function(newKey: any) {
            privateKey = newKey;
        }
    };
}