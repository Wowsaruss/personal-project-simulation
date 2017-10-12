module.exports = {

   register(req, res) {
        const {username, password} = req.body;

        req.app.get('db').duplicateUser([username]).then((duplicateUser) => {
            if(duplicateUser[0]) {
                res.status(401).send();
            } else {
                req.app.get('db').registerUser([username, password])
                .then(() => {
                    req.app.get('db').login([username, password])
                    .then((user) => {
                    req.session.user = user[0];
                    res.status(200).send();
                });
            });
          }
        });
   },

   login(req, res) {
    const {username, password} = req.body;

    req.app.get('db').login([username, password]).then((user) => {
        console.log(user);
        if(user[0]) {
            req.session.user = user[0];
            console.log('before', req.session)
            res.status(200).send();
            console.log('after', req.session)
        } else {
            res.status(401).send();
        }
    });
    }

}