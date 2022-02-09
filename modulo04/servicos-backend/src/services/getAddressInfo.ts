import axios from 'axios';
import { Address } from '../types/types';

const baseUrl = "https://viacep.com.br/ws"

export const getAddressInfo = async (cep:string):Promise<Address | null> => {
    try{
        const response = await axios.get(`${baseUrl}/${cep}/json/`)
    
        const address:Address = {
            logradouro: response.data.logradouro,
            bairro: response.data.bairro,
            complemento: response.data.complemento,
            cidade: response.data.localidade,
            estado: response.data.uf
        }

        return address
    
    } catch (erro) {
        console.log("Erro no serviço getAddressInfo:", erro)
        return null
    }
}