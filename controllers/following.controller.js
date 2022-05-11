const db = require('../models');
const Following = db.following;

exports.create = (req, res) => {
    const following = {
        id: req.body.id,
        followingId: req.body.followingId
    }
    Following.create(following).then(response => {
        console.log(`started following: [${response}]`);
        res.status(201).send(response);
    }).catch(err => {
        console.log(`cannot follow: [${err}]`);
        res.status(500).send({
            message: "Some internal error occured while following the user"
        })
    })
}

exports.delete = (req, res) => {
    const followingId = req.params.id;
    Following.destroy({
        where: {
            id: followingId
        }
    }).then(response => {
        res.sendStatus(200).send(response);

    }).catch(err => {
        res.sendStatus(500).send({
            message: "Some internal error occurred while unfollowing!"
        })
    });
}