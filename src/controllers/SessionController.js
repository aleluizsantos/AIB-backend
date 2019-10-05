// Por padrão temos dentro da controller os seguintes Metodos
// index = retorna uma listagem do tipo da controller
// show = listar uma único valor do tipo da controller
// store = criar um registro do tipo da controller
// update = atulalizar o registro do tipo da controller
// destroy = deletar o registro de um tipo de controller
const User = require('../models/User');

module.exports = {
    // Criar um Registro
    async store(req, res) {
        const { name, email } = req.body;

        let user = await User.findOne({ email });

        if (!user){
            user = await User.create({ name, email });
        }

        return user ? res.json({ message: "User exists" }) : res.json(user);
        
    }
};