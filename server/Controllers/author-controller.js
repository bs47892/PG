const Author = require ("../Models/Authors");


const getAllAuthors = async(req, res, next)=>{
    let authors;
    try{
        authors = await Author.find();
    } catch (err){
        console.log(err);
    }

    if(!authors){
        return res.status(400).json ({ message: "No authors found" });
    }
    return res.status (200).json({ authors});
};

const getById = async (req, res, next) =>{
    const id= req.params.id;
    let author;
    try{
        author= await Author.findById(id);
    }catch(err){
        console.log(err);
    }
    if (!author){
        return res.status(400).json({ message: "No Author found" });
    }
    return res.status(200).json({ author});
};

const addAuthor = async (req, res, next) =>{
    const {name, life, description, category, image}= req.body;
    let authorObj;
    try{
        authorObj= new Author ({
            name,
            life,
            description,
            category,
            image
        });
        await authorObj.save();
    }catch (err){
        console.log(err);
    }

    if (!authorObj){
        return res.status(500).json({message: 'Unable to Add'})
    }
    return res.status(201).json({authorObj});
};

const updateAuthor= async (req, res, next) => {
    const id = req.params.id;
    const {name, life, description, category, image} = req.body;
    let authorObj;
    try{
        authorObj = await Author.findByIdAndUpdate(id, {
            name,
            life,
            description,
            category,
            image
        });
        authorObj = await authorObj.save();
    }catch (err){
        console.log(err);
    }
    if (!authorObj){
        return res.status (404).json({ message: "Unable to Update By this ID " });
    }
    return res.status(200).json({ authorObj });
};

const deleteAuthor = async (req, res, next) => {
    const id =req.params.id;
    let author;
    try{
        author = await Author.findByIdAndRemove(id)
    }catch (err){
        console.log(err);
    }
    if(!author){
        return res.status(404).json({ message: "Unable to Delete By this ID "});
    }
    return res.status(200).json({ message: "Product Succesfully Deleted" });
};

exports.getAllAuthors = getAllAuthors;
exports.addAuthor = addAuthor;
exports.getById = getById;
exports.updateAuthor = updateAuthor;
exports.deleteAuthor = deleteAuthor;