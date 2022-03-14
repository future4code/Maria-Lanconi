export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}
 
export default class post{
    
    constructor(id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
    ){}
}