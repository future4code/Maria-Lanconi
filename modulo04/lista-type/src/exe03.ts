enum GENERO {
    ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type filmes = {
    nome:string,
    ano:string,
    genero:string,
    pontuação?:number
}

const infoFilmes = (nomeFilme:string, anoEstreia:string, genero:string, pontuacao?:number ) => {
    const mensagemInfo:filmes = {
        nome: nomeFilme,
        ano: anoEstreia,
        genero: genero,
    }

    if (pontuacao !== undefined) {
        mensagemInfo.pontuação = pontuacao
    }

    return mensagemInfo
}

console.log(infoFilmes('Duna', '2021', GENERO.ACAO))