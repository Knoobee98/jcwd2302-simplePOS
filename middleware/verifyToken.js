const {validateToken} = require('./../lib/token')

module.exports = {
    verifyToken: (req, res, next) => {
        let token = req.body
        
        if(!token) return res.status(401).send({
            isError: true,
            message: 'token not found',
            isData: false,
            data: null
        })

        try {
            const validateTokenResult = validateToken(token)
            req.user = validateTokenResult

            next()
        } catch (error) {
            console.log(error)
            res.status(401).send({
                isError: true,
                message: 'token is expired',
                data: null
            })
        }
    }
}