import express, { Express, Request, Response } from "express";
import { getAddressInfo } from "../services/getAddressInfo";
import connection from "../connection";

const inserirUsuarios = async (
    nome:string, 
    logradouro:string | undefined, 
    bairro:string | undefined,
    cidade:string | undefined, 
    estado:string | undefined,
    complemento?:string, ):Promise<void> => {

    await connection.raw(`
        INSERT INTO users
        (id, nome, logradouro, bairro, complemento, cidade, estado)
        VALUES(
            ${Date.now().toString()},
            "${nome}",
            "${logradouro}",
            "${bairro}",
            "${complemento}",
            "${cidade}",
            "${estado}"
        );
    `);
};

export const createUser = async (req:Request, res:Response) => {
    try{
        const {email, cep, complemento} = req.body

        const address = await getAddressInfo(cep)

        await inserirUsuarios(email, address?.logradouro, address?.bairro, address?.cidade, address?.estado, complemento)

        res.send({address, message: "Cadastro realizado com sucesso" })
        
    } catch (error) {
        if (error instanceof Error){
            res.send({error, message: error.message})
        } else {
            res.send({message: 'Erro Inesperado'})
        }
    }
}