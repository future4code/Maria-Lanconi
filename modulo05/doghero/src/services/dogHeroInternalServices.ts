export class DogHeroInternalServices {

    calculateWalkingTime = (startTime:string, endTime:string):string => {

        const currentDate = new Date()

        const currentDateStartTime = new Date(`
            ${currentDate.getFullYear()}, 
            ${currentDate.getMonth()}, 
            ${currentDate.getDate()},
            ${startTime}
        `)
        
        const currentDateEndTime = new Date(`
            ${currentDate.getFullYear()}, 
            ${currentDate.getMonth()}, 
            ${currentDate.getDate()},
            ${endTime}
        `)

        //calculate time difference
        const walkingHour = currentDateEndTime.getHours() - currentDateStartTime.getHours()
        const walkingMinute = currentDateEndTime.getMinutes() - currentDateStartTime.getMinutes()
        
        return `${Math.abs(walkingHour)}:${Math.abs(walkingMinute)}`
    }

    calculateWalkingPrice = (startTime:string, endTime:string, pets:number):number => {

        //calculate time
        const walkingTime = this.calculateWalkingTime(startTime,endTime) 

        //formate calculated time
        const formattedTime = walkingTime.split(':')

        //calculate price
        let defaultPrice

        const calculatePrice = ():number => {
            if(Number(formattedTime[0]) >= 1){
                defaultPrice = 35
                if(pets > 1){
                    const walkingPrice = defaultPrice + ((pets - 1) * 20)
                    return walkingPrice
                }

                return defaultPrice
            } else {
                let defaultPrice = 25
                if(pets > 1){
                    const walkingPrice = defaultPrice + ((pets - 1) * 15)
                    return walkingPrice
                }

                return defaultPrice
            }
        }

        return calculatePrice()
    }

}