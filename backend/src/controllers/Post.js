const Post = require("../models/Post");

module.exports = {
    async index(req, res) {
        const location = [
            req.headers.longitude,
            req.headers.latitude
        ]
        const posts = await Post.find()
            .select("-__v -_id")
            .where('location')
            .near({
                center: location,
                maxDistance: 1/6378.1,
                spherical: true
            }).exec();

        return res.json(posts);
    },

    async store(req, res) {
        const location = [
            req.headers.longitude,
            req.headers.latitude
        ]
        const postParams = {
            ...req.body,
            author: req.headers.user,
            location: {
                type: "Point",
                coordinates: location
            }
        }

        const post = await Post.create(postParams);
        return res.json(post);
    },

    async destroy(req, res) {
        const post = await Post.findByIdAndRemove(req.params.id);
        return res.json(post);
    }
};