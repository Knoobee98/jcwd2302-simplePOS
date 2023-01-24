const bcrypt = require('bcrypt');
const saltrounds = 10;

const hashPassword = async(password) => {
    try {
        return await bcrypt.hash(password, saltrounds);
    } catch (error) {
        return null;
    }
}

const hashMatch = async(password, hashPassword) => {
    try {
        let watch = await bcrypt.compare(password, hashPassword)
        return watch;
    } catch (error) {
        return false;
    }
}

module.exports = {
    hashPassword,
    hashMatch
}