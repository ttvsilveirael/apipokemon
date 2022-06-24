const CardController = require("../controllers/carta.controller");
const Card = require("../model/carta");

class CardRoutes {
    static routes = [{
        method: 'GET',
        url: '/card',
        handler: () => {
            return CardController.getCards();
        },
    }, {
        method: 'GET',
        url: '/card/:id',
        handler: (request, reply) => {
            let id = request.params['id'];
            return CardController.getCard(id);
        },
    },
    {
        method: 'POST',
        url: '/card/:id',
        handler: async (request, reply) => {
            let id = request.params['id'];
            let jsonCard = request.body;
            if (id == null) {
                return "Informe o id do pokemon para atualizar."
            }
            let card = new Card(id, jsonCard['nome'], jsonCard['type'], jsonCard['text'], jsonCard['image']);
            return CardController.updateCard(card);
        }
    },
    {
        method: 'POST',
        url: '/card',
        handler: async (request, reply) => {
            let jsonCard = request.body;
            if (jsonCard['id'] == null) {
                return "Utilize put para adicionar um novo pokemon."
            }
            let card = new Card(jsonCard['id'], jsonCard['nome'], jsonCard['type'], jsonCard['text'], jsonCard['image']);
            return CardController.updateCard(card);
        }
    },
    {
        method: 'PUT',
        url: '/card',
        handler: async (request, reply) => {
            let jsonCard = request.body;
            let card = new Card(null, jsonCard['nome'], jsonCard['type'], jsonCard['text'], jsonCard['image']);
            return await CardController.insertCard(card);
        }
    },
    {
        method: 'DELETE',
        url: '/card/:id',
        handler: async (request, reply) => {
            let id = request.params['id'];
            return CardController.deleteCard(id)
        }
    },
    {
        method: 'DELETE',
        url: '/card',
        handler: async (request, reply) => {
            return CardController.deleteAll()
        }
    }
    ]
}

module.exports = CardRoutes;