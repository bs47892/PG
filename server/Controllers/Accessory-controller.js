const Accessory = require ("../Models/Accessories");


const getAllAccessories = async(req, res, next)=>{
    let accessories;
    try{
        accessories = await Accessory.find();
    } catch (err){
        console.log(err);
    }

    if(!accessories){
        return res.status(400).json ({ message: "No accessories found" });
    }
    return res.status (200).json({ accessories});
};

const getById = async (req, res, next) =>{
    const id= req.params.id;
    let accessory;
    try{
        accessory= await Accessory.findById(id);
    }catch(err){
        console.log(err);
    }
    if (!accessory){
        return res.status(400).json({ message: "No Accessory found" });
    }
    return res.status(200).json({ accessory});
};

const addAccessory = async (req, res, next) =>{
    const {name, brand, description, price, image}= req.body;
    let accessoryObj;
    try{
        accessoryObj= new Accessory ({
            name,
            brand,
            description,
            price,
            image
        });
        await accessoryObj.save();
    }catch (err){
        console.log(err);
    }

    if (!accessoryObj){
        return res.status(500).json({message: 'Unable to Add'})
    }
    return res.status(201).json({accessoryObj});
};

const updateAccessory= async (req, res, next) => {
    const id = req.params.id;
    const {name, brand, description, price, image} = req.body;
    let accessoryObj;
    try{
        accessoryObj = await Accessory.findByIdAndUpdate(id, {
            name,
            brand,
            description,
            price,
            image
        });
        accessoryObj = await accessoryObj.save();
    }catch (err){
        console.log(err);
    }
    if (!accessoryObj){
        return res.status (404).json({ message: "Unable to Update By this ID " });
    }
    return res.status(200).json({ accessoryObj });
};

const deleteAccessory = async (req, res, next) => {
    const id =req.params.id;
    let accessory;
    try{
        accessory = await Accessory.findByIdAndRemove(id)
    }catch (err){
        console.log(err);
    }
    if(!accessory){
        return res.status(404).json({ message: "Unable to Delete By this ID "});
    }
    return res.status(200).json({ message: "Product Succesfully Deleted" });
};

exports.getAllAccessories = getAllAccessories;
exports.addAccessory = addAccessory;
exports.getById = getById;
exports.updateAccessory = updateAccessory;
exports.deleteAccessory = deleteAccessory;