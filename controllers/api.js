

const getUserPublicIP = async (req,res) => {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // If there are multiple IP addresses in x-forwarded-for, the first one is the original IP address
    if (ip.indexOf(',') > -1) {
        ip = ip.split(',')[0].trim();
    }

    if (ip.substr(0, 7) == "::ffff:") {
        ip = ip.substr(7)
    }
    res.send({ip});
}

module.exports = {
    getUserPublicIP
}