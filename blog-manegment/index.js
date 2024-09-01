const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

connectDB();

app.use(cors());
app.use(express.json({ extended: false }));

app.use('/users', require('./routes/userRoutes'));
app.use('/blogPosts', require('./routes/blogPostRoutes'));
app.use('/comments', require('./routes/commentRoutes'));

const PORT = 8090;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
