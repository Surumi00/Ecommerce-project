import {v2 as cloudinary} from 'cloudinary'


const addproduct = async (req,res)=>{
        try{
            const {name,description,price,category,subcategory,sizes,bestseller}=req.body;

            const image1=req.files.image1&&req.files.image1[0];
            const image2=req.files.image2&&req.files.image2[0];
            const image3=req.files.image3&&req.files.image3[0];
            const image4=req.files.image4&&req.files.image4[0];

            const images=[image1,image2,image3,image4].filter((item)=>item !== undefined);

           const result = await cloudinary.uploader.upload(
    image1.path
);

console.log(result);

            console.log(name,description,price,category,subcategory,sizes,bestseller);
            
            
            

            res.json({})
        }catch(error){
             console.log(error);
             res.json({success:false,message:error.message});
        }

}

const listproduct = async (req,res)=>{
    
}

const removeproduct = async (req,res)=>{
    
}

const singleproduct = async (req,res)=>{
    
}


export {addproduct,listproduct,removeproduct,singleproduct};