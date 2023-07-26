import dbConnect from "../../../config/dbConnect";
import Product from "../../../models/product";

export default async function handler(req, res) {
  dbConnect();
  switch (req.method) {
    case "GET":
      try {
        const singleProduct = await Product.findOne({
          slug: req.query.slug
        });
        res.status(200).json({
          success: true,
          message: singleProduct
        });
       
      }         catch (error) {res.status(error)}

    case "PUT":
      try {
        const singleProduct = await Product.findOne({
          slug: req.query.slug
        });
        if(!singleProduct){
          res.status(200).json({
            success:false,
            message:"Product Not Found!"
          })        }

          else{
            const updatedProduct = await Product.findByIdAndUpdate(
              singleProduct._id,
              {
                $set:{
                  ...req.body,
                  slug : req.body.name
                  .trim()
                  .toLowerCase()
                  .replace(/ /g, "-")
                  .replace(/[^\w-]+/g, "")
                  .replace(/--/g, "-")
                }
              },
              {new:true}
            )
          }
          res.status(200).json({
            success: true,
            updatedProduct
          });
        }
        catch (error) {res.status(error)}
        case "DELETE":
          try {
            const singleProduct = await Product.findOne({
              slug: req.query.slug
            });
            if(!singleProduct){
              res.status(200).json({
                success:false,
                message:"Product Not Found!"
              })        }
    
              else{
               const deletedBlog = await Product.findByIdAndDelete(
                singleProduct._id
               )
              }
              res.status(200).json({
                success: true,
                message:"Your Blog has been Deleted"
              });
            }
            catch (error) {res.status(error)}

      }
}
