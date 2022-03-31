import { AnyRecord } from 'dns'
import {
    Character,
    performAttackTest,
    ValidateCharacter
} from '../src/index'

// describe('Testando as propriedades do personagem', ()=> {

//     test('Deve retornar false', () => {

//         const input:Character = {
//             name:'',
//             life: 1500,
//             strength: 100,
//             defense:30
//         }

//         expect(ValidateCharacter(input)).toBe(false)
//     })

//     test('Deve retornar false', () => {

//         const input:Character = {
//             name:'Maria',
//             life: 0,
//             strength: 100,
//             defense:30
//         }

//         expect(ValidateCharacter(input)).toBe(false)
//     })

//     test('Deve retornar false', () => {

//         const input:Character = {
//             name:'Maria',
//             life: 1500,
//             strength: 0,
//             defense: 30
//         }

//         expect(ValidateCharacter(input)).toBe(false)
//     })

//     test('Deve retornar false', () => {

//         const input:Character = {
//             name:'Maria',
//             life: 1500,
//             strength: 100,
//             defense: 0
//         }

//         expect(ValidateCharacter(input)).toBe(false)
//     })
    
//     test('Deve retornar false', () => {

//         const input:Character = {
//             name:'Maria',
//             life: -30,
//             strength: 100,
//             defense: 30
//         }

//         expect(ValidateCharacter(input)).toBe(false)
//     })

//     test('Deve retornar true', () => {

//         const input:Character = {
//             name:'Maria',
//             life: 1500,
//             strength: 100,
//             defense: 30
//         }

//         expect(ValidateCharacter(input)).toBe(true)
//     })
// })

// describe('Testando Validator', () => {
    
//     test('Deve retornar Invalid Character', () => {
//         try{

//             //Input da função
//                 const attacker:Character = {
//                     name:'',
//                     life: 1500,
//                     strength: 100,
//                     defense: 30
//                 }

//                 const defender:Character = {
//                     name:'Maria',
//                     life: 1500,
//                     strength: 100,
//                     defense: 30
//                 }

//             //mock
//                 const validatorMock = jest.fn(() => {
//                     return false
//                 })
            
//             performAttackTest(attacker, defender, validatorMock)
//         }catch(e){
//             expect(e.message).toContain('Invalid Character')
//         } finally {
//             expect.assertions(1)
//         }
//     })
// })

// describe('Testando Validator', () => {
    
//     test('Deve retornar true', () => {
//         try{

//             //Input da função
//                 const attacker:Character = {
//                     name:'Pedro',
//                     life: 1500,
//                     strength: 100,
//                     defense: 30
//                 }

//                 const defender:Character = {
//                     name:'Maria',
//                     life: 1500,
//                     strength: 100,
//                     defense: 30
//                 }

//             //mock
//                 const validatorMock = jest.fn(() => {
//                     return true
//                 })
            
//             performAttackTest(attacker, defender, validatorMock)
//         }catch(e){
//             expect(e.message).toContain('Invalid Character')
//         } 
//     })
// })

describe('Testando performAttack', () => {
    
    test('Deve retornar defender', () => {
        try{

            //Input da função
                const attacker:Character = {
                    name:'Pedro',
                    life: 1500,
                    strength: 300,
                    defense: 30
                }

                const defender:Character = {
                    name:'Maria',
                    life: 1500,
                    strength: 100,
                    defense: 10
                }

            //mock
                const validatorMock = jest.fn(() => {
                    return true
                })
            
            const result = performAttackTest(attacker, defender, validatorMock as any)

            expect(result).toEqual({
                name:'Maria',
                life: 1210,
                strength: 100,
                defense: 10
            })
            expect(validatorMock).toHaveBeenCalled()
            expect(validatorMock).toHaveBeenCalledTimes(2)

        }finally{
            expect.assertions(3)
        } 
    })
})

describe('Testando performAttack', () => {
    
    test('Deve retornar Invalid', () => {
        try{

            //Input da função
                const attacker:Character = {
                    name:'Pedro',
                    life: 1500,
                    strength: 300,
                    defense: 30
                }

                const defender:Character = {
                    name:'',
                    life: 1500,
                    strength: 100,
                    defense: 10
                }

            //mock
                const validatorMock = jest.fn(() => {
                    return true
                })
            
            const result = performAttackTest(attacker, defender, validatorMock as any)

            expect(result).toEqual({
                name:'',
                life: 1210,
                strength: 100,
                defense: 10
            })
        }catch(e){
            expect(e.message).toContain('Invalid Character')
        } finally{
            expect.assertions(1)
        } 
    })
})

