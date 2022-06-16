const FBook = require ("../Models/FBook")


const getAllBooks = async(req, res, next)=>{
    let books;
    try{
        books = await FBook.find();
    } catch (err){
        console.log(err);
    }

    if(!books){
        return res.status(400).json ({ message: "No books found" });
    }
    return res.status (200).json({ books});
};

const getById = async (req, res, next) =>{
    const id= req.params.id;
    let book;
    try{
        book= await FBook.findById(id);
    }catch(err){
        console.log(err);
    }
    if (!book){
        return res.status(400).json({ message: "No Book found" });
    }
    return res.status(200).json({ book});
};

const addBook = async (req, res, next) =>{
    const {name, author, description, price, available, image}= req.body;
    let book;
    try{
        book= new FBook ({
            name,
            author,
            description,
            price,
            available,
            image
        });
        await book.save();
    }catch (err){
        console.log(err);
    }

    if (!book){
        return res.status(500).json({message: 'Unable to Add'})
    }
    return res.status(201).json({book});
};

const updateBook= async (req, res, next) => {
    const id = req.params.id;
    const {name, author, description, price, available, image} = req.body;
    let book;
    try{
        book = await FBook.findByIdAndUpdate(id, {
            name,
            author, 
            description, 
            price, 
            available,
            image
        });
        book = await book.save();
    }catch (err){
        console.log(err);
    }
    if (!book){
        return res.status (404).json({ message: "Unable to Update By this ID " });
    }
    return res.status(200).json({ book });
};

const deleteBook = async (req, res, next) => {
    const id =req.params.id;
    let book;
    try{
        book = await FBook.findByIdAndRemove(id)
    }catch (err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({ message: "Unable to Delete By this ID "});
    }
    return res.status(200).json({ message: "Product Succesfully Deleted" });
};

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;