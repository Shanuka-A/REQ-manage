import mongoose, { Document, Schema } from 'mongoose';

interface IRequest extends Document {
    floor: string;
    room: string;
    block?: string;
    guestName: string;
    phoneNumber: string;
    service?: string;
    department?: string;
    priority?: string;
    status: string; // e.g., 'NEW', 'IN_PROGRESS', 'COMPLETED'
    location: string; // e.g., '1-101'
}

const RequestSchema: Schema = new Schema({
    floor: { type: String, required: true },
    room: { type: String, required: true },
    block: { type: String },
    guestName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    service: { type: String },
    department: { type: String },
    priority: { type: String },
    status: { type: String, default: 'NEW' },
    location: { type: String, required: true },
}, { timestamps: true });

const Request = mongoose.model<IRequest>('Request', RequestSchema);
export default Request;
