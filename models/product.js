import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    name:{
        type:String,
        required:[true, "please enter Product Name"],
        unique: true,
        trim: true,
    },
    description:{
        type:String,
        required:[true,"Please Enter Product Description"]
    },
    slug: {
        type: String,
        required: [true, "Slug is Required!"],
        unique: true,
        trim: true,
      },

    price:{
        type:Number,
        required:[true,"Please enter product price"]
    },
    images:[
        {
            public_id:{
                type:String
            },
            url:{
                type:String
            }
        }
    ],
    category:{
        type:String,
        required:[true,"please enter category"],
        enum:{
            values:[

                "electronics",
                "cameras",
                "laptops",
                "accessories",
                "headphones",
                "sports"
            ],
            message:"please enter correct category"
        },
    },
    seller:{
        type:String,
        required:[true,"Please Enter Product seller"]
    },
    stock:{
        type:Number,
        required:[true,"Please enter product stock"]
    },
    rating:{
        type:Number,
        default:0
    },
    reviews:[
        {
            rating:{
                type:String,
                required:true
            },
            comments:{
                type:String,
                required:true
            },
            createdAt:{
                type:Date,
                default:Date.now
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

export default mongoose?.models?.product || mongoose?.model("product",productSchema)