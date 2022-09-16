import express from 'express';
import dotenv from 'dotenv';

dotenv.config()
const app = express();

app.get('/', (req, res) => {
   res.send('Api is running...');
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));