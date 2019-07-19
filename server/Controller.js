module.exports = {
    getMake: (req,res) => {
        const db = req.app.get('db');
        db.getMake().then(result => res.status(200).send(result))
        .catch(err => console.log('err on make'))
    }
}