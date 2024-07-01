export interface ReqInfoProps {
    nome_visitado: string,
    cpf_rne: string,
    tipo_visitacao: string,
    telefone: string,
    estado: string,
    cidade: string,
    bairro: string,
    rua: string,
    numero_casa: string,
    requerimento_assunto: string,
    id_user: {
        id: number;
    }
}