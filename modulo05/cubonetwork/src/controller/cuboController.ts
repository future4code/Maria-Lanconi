import { Request, Response } from "express";
import { participationInputDTO } from "../model/participationInput";
import { CuboBusiness } from "../business/cuboBusiness";

export class CuboController {
    constructor(
        private cuboBusiness:CuboBusiness
    ){}

    public insertNewUserOnTable = async (req:Request, res:Response) => {
        const {first_name, last_name, participation} = req.body

        try{
            //model to bank
            const input:participationInputDTO = {
                first_name:first_name,
                last_name:last_name,
                participation:participation
            }

            await this.cuboBusiness.insertNewUserOnTable(input)

            res.status(201).send('User added successfully!')

        } catch(e:any) {
            if (e.message){
                return res.status(400).send(e.message)
            } else {
                return res.status(400).send('Error adding new user.')
            }

        }
    }

    public showAllUsersParticipation = async (req:Request, res:Response) => {
        
        try{

            const userParticipationList = await this.cuboBusiness.showAllUsersParticipation()

            res.status(201).send({userParticipationList})

        } catch(e:any) {

            if (e.message){
                return res.status(400).send(e.sqlMessage || e.mysqlmessage)
            } else {
                return res.status(400).send('Error getting data')
            }
        }
    }
}

