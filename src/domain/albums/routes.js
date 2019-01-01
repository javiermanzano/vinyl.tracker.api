const express = require('express');
const db = require('../../db');
const createAlbumsService = require('../../domain/albums/service');

const albumsService = createAlbumsService({ db });

const router = express.Router();

router.post('/', (req, res) => {
  albumsService
    .create({ album: req.body })
    .then(album => res.json(album))
    .catch(error => res.status(400).json(error));
});

router.get('/', (req, res) => {
  albumsService
    .find({})
    .then(albums => res.json(albums))
    .catch(err => res.json({ error: true, message: err }));
});

module.exports = router;
