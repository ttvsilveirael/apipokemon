const Card = require("../model/carta");
const database = require("./db");

class CardController {

    /**
     * Cria a tabela card no banco de dados
     */
    static createTable() {
        return database.createTable('cards', Card.getDbObject());
    }

    /**
     * Adiciona carta pelo objeto Card
     *
     * @param novaCard Carta a ser adicionada Object:Card
     */
    static async insertCard(novaCard) {
        return await database.insert('cards', 'nome, type, image, text', `"${novaCard.nome}", "${novaCard.type}", "${novaCard.image}", "${novaCard.text}"`);
    }

    static deleteAll(){
        return database.deleteAll('cards');
    }
    
    /**
     * Delete uma carta pelo ID
     *
     * @param id da carta a ser deletada
     */
    static deleteCard(id) {
        return database.delete('cards', id);
    }

    /**
     * Atualiza uma carta pelo objeto Card
     *
     * @param card Carta a ser editada Object:Card
     */
    static updateCard(card) {
        return database.update('cards', `nome = '${card.nome}', type = '${card.type}', image = "${card.image}",  text = "${card.text}"`, `ID = ${card.id}`);
    }

    /**
     * Buscar uma carta específica pelo ID
     *
     * @param id da carta a ser buscada
     */
    static getCard(id) {
        return database.get('cards', id);
    }

    /**
     * Busca todas as cartas do banco
     */
    static getCards() {
        return database.get('cards', null);
    }
}

module.exports = CardController