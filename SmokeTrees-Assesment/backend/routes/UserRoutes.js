import express from 'express';
import User from '../models/User.js';
import Address from '../models/Address.js';

const router = express.Router();

router.post('/register', async (req, res) => {
    const { name, address } = req.body;

    try {
        const newUser = new User({ name });
        const savedUser = await newUser.save();

        const newAddress = new Address({ userId: savedUser._id, address });
        await newAddress.save();

        res.status(201).json({ message: 'User and address created', user: savedUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
