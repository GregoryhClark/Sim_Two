module.exports = {


    getAll: (req, res) => {
        const db = req.app.get('db');
        console.log('hit controller')
        const desiredRent = req.query.desiredRent;
        console.log('desiredRent is ',desiredRent)
        // if (desiredRent){
        //     db.getPropertiesByDesiredRent([desiredRent])
        //     .then((properties) => {res.send(properties)})
        // }else{
        db.read_properties()
        .then(properties =>  {
            console.log("after the server is hit, properties is",properties)
            res.status(200).send(properties)})
        .catch( (err)=> res.status(500).send(console.log(err)) )
        // };
    }
}
//change to accept queries
