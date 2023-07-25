import dbConnect from "../../../config/dbConnect";
import Product from "../../../models/product";

export default async function handler(req,res){
    dbConnect();
    try {
        const allProducts = await Product.find();
        res.status(200).json({
            success:true,
            allProducts
        })
    } catch (error) {
        console.log(error)
    }
}