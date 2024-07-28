import { Document } from 'mongoose';

export interface Institution extends Document {
    _id: string;
    name: string;
}