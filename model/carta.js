const dbObject = require("./dbObject");

class Card {
    id;
    nome;
    type;
    image;
    text;

    constructor(id, nome, type, text, image) {
        this.id = id;
        this.nome = nome;
        this.type = type;
        this.text = text;
        this.image = image;
    }

    /**
     * Retorna as colunas do model user como dbObject
    */
    static getDbObject() {
        return [
            new dbObject('ID', 'INT', true, true),
            new dbObject('NOME', 'VARCHAR(255)', false, false),
            new dbObject('TYPE', 'VARCHAR(255)', false, false),
            new dbObject('TEXT', 'VARCHAR(500)', false, false),
            new dbObject('IMAGE', 'VARCHAR(500)', false, false)
        ];
    }
}

module.exports = Card