import { CuboDatabase } from "../data/cuboDatabase";
import { participationInput, participationInputDTO } from "../model/participationInput";
import { IDGenerator } from "../services/generateId";
import { ValidateInput } from "../services/validateInput";

export class CuboBusiness {
    constructor(
        private idGenerator:IDGenerator,
        private cuboDataBase:CuboDatabase,
        private validateInput:ValidateInput
    ){}

    public insertNewUserOnTable = async(input:participationInputDTO):Promise<void> => {
        const {first_name, last_name, participation} = input

        //validate inputs 

        //empty entries
        if(!first_name || !last_name || !participation){
            throw new Error('Empty inputs')
        }

        //number on string
        if(this.validateInput.numberOnInput(first_name) || this.validateInput.numberOnInput(last_name)){
            throw new Error('Number characters not supported')
        }

        //generate id
        const id = this.idGenerator.generateID()

        //model input to bank
        const userInserted:participationInput = {
            id:id,
            first_name:first_name,
            last_name:last_name,
            participation:participation
        }

        await this.cuboDataBase.insertNewUserOnTable(userInserted)

    }

    public showAllUsersParticipation = async ():Promise<participationInput[]> => {

        const userParticipationList = await this.cuboDataBase.showAllUsersParticipation()

        //No users registered
        if(!userParticipationList) {
            throw new Error('No users found.')
        }

        return userParticipationList
    }

}