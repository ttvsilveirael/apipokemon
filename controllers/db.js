const bluebird = require('bluebird');
const mysql = require('mysql2/promise');

class database {
    //Cria conexão do banco de dados com db definido
    //Cria o banco de dados com a conexão padrão
    static async createDatabase(nome) {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: "Test@123",
            Promise: bluebird
        });
        connection.execute(`create database ${nome ?? pokemon}`);
    }

    /**
     * Cria tabela no banco utilizando a funcao convertercolunas
     *
     * @param nome Nome da tabela
     * @param colunas Colunas em formato dbObject 
    */
    static async createTable(nome, colunas) {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: "Test@123",
            database: "pokemon",
            Promise: bluebird
        });

        let sqlColunas = this.converterColunas(colunas);
        let ret = await connection.execute(`create table ${nome} ${sqlColunas}`);
        console.log(ret);
    }

    /**
     * Cria uma string a partir do objeto dbObject para nova tabela no banco.
     *
     * @param colunas Colunas em formato dbObject 
    */
    static converterColunas(colunas) {
        // For Each === Para Cada
        colunas.forEach(coluna => {
            if (this.sqltext == '' || this.sqltext == undefined) this.sqltext = '(';
            else this.sqltext += ', ';

            this.sqltext += `${coluna.key} ${coluna.value}`;

            if (coluna.autoIncrement) {
                this.sqltext += ' AUTO_INCREMENT';
            }
            if (coluna.pk) {
                this.sqltext += ' PRIMARY KEY';
            }
            if (coluna.fk != null) {
                this.sqltext += `, FOREIGN KEY (${coluna.key}) REFERENCES ${coluna.nomeTabela}(${coluna.fk})`;
            }
        });
        this.sqltext += ')';

        return this.sqltext;
    }

    static async insert(tabela, colunas, values) {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: "Test@123",
            database: "pokemon",
            Promise: bluebird
        });
        const [rows, fields] = await connection.query(`insert into ${tabela} (${colunas}) values (${values})`);
        return "Dado adicionado com sucesso"
    }

    static async delete(tabela, id) {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: "Test@123",
            database: "pokemon",
            Promise: bluebird
        });
        const [rows, fields] = await connection.execute(`delete from ${tabela} where id = ${id}`)
        return `Dado deletado com sucesso.`
    }

    /**
     * Cria uma string a partir do objeto dbObject para nova tabela no banco.
     *
     * @param valores Valores devem vir no formato 'key=value, key2=value2' 
    */
    static async update(tabela, valores, condicao) {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: "Test@123",
            database: "pokemon",
            Promise: bluebird
        });
        const [rows, fields] = await connection.execute(`UPDATE ${tabela} SET ${valores} WHERE ${condicao}`);
        return `Pokemon atualizado com sucesso`;
    }

    static async get(tabela, id) {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: "Test@123",
            database: "pokemon",
            Promise: bluebird
        });
        const [rows, fields] = await connection.execute(`SELECT * FROM ${tabela} ${id != null ? 'WHERE ID = ' + id : ''}`);
        return rows;
    }
}

module.exports = database;