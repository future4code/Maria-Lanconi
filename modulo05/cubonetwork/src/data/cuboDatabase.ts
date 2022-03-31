import { BaseDatabase } from "./baseDatabase";
import { participationInput } from "../model/participationInput";

export class CuboDatabase extends BaseDatabase {
    private userParticipationTable = 'user_participation'

    public insertNewUserOnTable = async (input:participationInput):Promise<void> => {
        try {

            await BaseDatabase.connection(this.userParticipationTable)
            .insert(input)

        } catch (e:any) {
            throw new Error(e.sqlMessage || e.message)
        }
        
    }

    public showAllUsersParticipation = async ():Promise<participationInput[]> => {
        try {

            const userParticipationList = await BaseDatabase.connection(this.userParticipationTable)
            .select('*')

            return userParticipationList

        } catch (e:any) {
            throw new Error(e.sqlMessage || e.message)
        }
        
    }
}
