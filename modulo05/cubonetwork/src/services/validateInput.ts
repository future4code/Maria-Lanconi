
export class ValidateInput {

    public numberOnInput = (input:string):boolean => {

        const inputValidation =  input.replace(/[0-9]/g,'')

        if(inputValidation){
            return true
        }

        return false
    }
}

