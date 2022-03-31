import { v4 } from "uuid";

export class IDGenerator {
    
    generateID = ():string => {
        return v4()
    }
}