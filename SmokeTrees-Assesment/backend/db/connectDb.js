import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/user-address-db', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

export default connectDb;
