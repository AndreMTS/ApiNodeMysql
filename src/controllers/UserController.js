const connection = require('../database/connection')


const responseModel = {
    success: false,
    data: [],
    errors: []
};

module.exports = {

    async create(req, res) {
        const response = { ...responseModel }

        const { username, password } = req.body
 
        const [, affected] = await connection.query(`
         INSERT INTO users VALUES (DEFAULT, '${username}', '${password}', NOW(),NOW())
        `)

        response.success = affected > 0

        return res.json(response)
    },

    async login(req, res) {
        const response = { ...responseModel }

        const { username, password } = req.body
 
        const [, data] = await connection.query(`
         SELECT * FROM users WHERE username='${username}' AND password='${password}'
        `)

        response.success = data.length > 0

        return res.json(response)
    }
}