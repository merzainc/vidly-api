const mongoose = require('mongoose');
const express = require('express');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const config = require('config');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { User } = require('../models/user');

function validate(req) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    });

    return schema.validate(req);
}

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Invalid email or password');
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) res.status(400).send('Invalid email or password');
    const token = user.generateAuthToken();
    res.send(token);
});



module.exports = router;