import mongoose from "mongoose";
import { Institution } from "types";


const institutionSchema = new mongoose.Schema<Institution>({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
});


const Institution = mongoose.model<Institution>("Institution", institutionSchema);

export default Institution;