import mongoose from 'mongoose';

const uerSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String }
})

export default mongoose.model('User', userSchema);