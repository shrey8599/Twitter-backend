const db = require('../models');
const Follower = db.follower;

exports.create = (req, res) => {
    const follower = {
        id: req.body.id,
        followerId: req.body.followerId
    }
    Follower.create(follower).then(response => {
        console.log(`follower: [${response} got inserted in db]`);
        res.status(201).send(response);
    }).catch(err => {
        console.log(`follower: [${err} not inserted in db]`);
        res.status(500).send({
            message: "Some internal error occured while storing the follower data"
        })
    })
}

exports.delete = (req, res) => {
    const followerId = req.params.id;
    Follower.destroy({
        where: {
            id: followerId
        }
    }).then(response => {
        res.sendStatus(200).send(response);

    }).catch(err => {
        res.sendStatus(500).send({
            message: "Some internal error occurred while removing the follower!"
        })
    });
}