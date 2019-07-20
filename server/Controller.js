module.exports = {
    getMake: (req,res) => {
        const db = req.app.get('db');
        db.getMake().then(result => res.status(200).send(result))
        .catch(err => console.log('err on make',err))
    },
    getModel: (req,res) => {
        const make_id = req.params;
        const db = req.app.get('db',db);
        db.getModel({make_id}).then(result => res.status(200).send(result))
        .catch(err => console.log('err on models',err))
    },
}