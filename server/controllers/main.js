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
    },

    getAllHouses(req, res) {
        req.app.get('db').getAllHouses().then(houses => res.status(200).send(houses));
    },

    favorite(req, res) {
        req.app.get('db').checkDuplicateFavorite([req.session.user.id, req.params.id]).then((matches) => {
            if(matches[0]) {
                res.send();
            } else {
                req.app.get('db').addFavorites([req.session.user.id, req.params.id]).then(() => { res.send(); });
            }
        });
    }

};