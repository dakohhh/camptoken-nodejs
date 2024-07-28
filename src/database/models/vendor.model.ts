import mongoose from "mongoose";
import BaseUser from "./user.model";
import { IVendor } from "types";

const vendorSchema = new mongoose.Schema<IVendor>({

    businessName : {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    }
});


const Vendor = BaseUser.discriminator<IVendor>('Vendor', vendorSchema);

export default Vendor;