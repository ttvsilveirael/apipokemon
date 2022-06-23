class dbObject {
    key;
    value;
    autoIncrement;
    pk;
    fk;
    nomeTabela;

    /**
     * Cria tabela no banco utilizando a funcao convertercolunas
     *
     * @param key Nome da coluna no banco de dados
     * @param value Tipo de dado (INT, VARCHAR(255), BOOLEAN) 
     * @param autoIncrement Valor setado automaticamente ao criar 
     * @param pk Se a coluna for uma chave primária 
     * @param fk Nome da coluna a ser referenciada
     * @param nomeTabela Nome da tabela a ser referenciada na FK
    */
    constructor(key, value, autoIncrement = null, pk = null, fk = null, nomeTabela = null) {
        this.key = key;
        this.value = value;
        this.autoIncrement = autoIncrement ?? false;
        this.pk = pk;
        this.fk = fk;
        this.nomeTabela = nomeTabela;
    }
}

module.exports = dbObject;