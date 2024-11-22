// Sample User Controller
const getUsers = (req, res) => {
    res.json({ message: 'Get all users' });
};

const createUser = (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    res.json({ message: 'User created successfully', user: { name, email } });
};

module.exports = { getUsers, createUser };
