import { CuboDatabase } from "../data/cuboDatabase";
import { participationInput, participationInputDTO } from "../model/participationInput";
import { IDGenerator } from "../services/generateId";

export class CuboBusiness {
    constructor(
        private idGenerator:IDGenerator,
        private cuboDataBase:CuboDatabase
    ){}

    public insertNewUserOnTable = async(input:participationInputDTO):Promise<void> => {
        const {first_name, last_name, participation} = input

        //validate inputs 

        //empty entries
        if(!first_name || !last_name || !participation){
            throw new Error('Empty inputs')
        }

        //number on string
        if(first_name.match(/^[0-9]/g) || last_name.match(/^[0-9]/g) ){
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