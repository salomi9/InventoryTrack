
function fetchTypes(req, res) {
    const {option} = req.params
    switch(option)
    {
        case 'ut':
            return res.status(200).send({"data":Object.keys(USER_TYPES_S2I)})
            break
        case 'tt':
            return res.status(200).send({"data":Object.keys(TICKET_TYPE_S2I)})
            break
        case 'ts':
            return res.status(200).send({"data":Object.keys(TICKET_STATUS_S2I)})
            break
        case 'tp':
            return res.status(200).send({"data":Object.keys(TICKET_PRIORITY_S2I)})
            break
        case 'ms':
            return res.status(200).send({"data":Object.keys(MODE_OF_SUPPORT_S2I)})
            break
        default:
            return res.status(200).send({"data":[]})
            break
    }
}

module.exports = {
    fetchTypes
}