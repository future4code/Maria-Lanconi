type usuario = {
    name:string,
    email:string,
    role:string
}

enum ROLE {
    USER = 'user',
    ADMIN = 'admin',
}

const usarios:usuario[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

const filtroAdmin = (funcionarios:usuario[]) => {
    const filtro = funcionarios.filter((pessoa:usuario) => {
        return pessoa.role === ROLE.ADMIN
    })

    return filtro
}

console.log(filtroAdmin(usarios))