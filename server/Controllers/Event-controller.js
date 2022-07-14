const Event = require ("../Models/Events");


const getAllEvents = async(req, res, next)=>{
    let events;
    try{
        events = await Event.find();
    } catch (err){
        console.log(err);
    }

    if(!events){
        return res.status(400).json ({ message: "No books found" });
    }
    return res.status (200).json({ events});
};

const getById = async (req, res, next) =>{
    const id= req.params.id;
    let event;
    try{
        event= await Event.findById(id);
    }catch(err){
        console.log(err);
    }
    if (!event){
        return res.status(400).json({ message: "No Book found" });
    }
    return res.status(200).json({ event});
};

const addEvent = async (req, res, next) =>{
    const {name, place,date, description, price, image}= req.body;
    let event;
    try{
        event= new Event ({
            name,
            place,
            date,
            description,
            price,
            image
        });
        await event.save();
    }catch (err){
        console.log(err);
    }

    if (!event){
        return res.status(500).json({message: 'Unable to Add'})
    }
    return res.status(201).json({event});
};

const updateEvent= async (req, res, next) => {
    const id = req.params.id;
    const {name, place,date, description, price, image} = req.body;
    let event;
    try{
        event = await Event.findByIdAndUpdate(id, {
            name,
            place,
            date,
            description,
            price,
            image
        });
        event = await event.save();
    }catch (err){
        console.log(err);
    }
    if (!event){
        return res.status (404).json({ message: "Unable to Update By this ID " });
    }
    return res.status(200).json({ event });
};

const deleteEvent = async (req, res, next) => {
    const id =req.params.id;
    let event;
    try{
        event = await Event.findByIdAndRemove(id)
    }catch (err){
        console.log(err);
    }
    if(!event){
        return res.status(404).json({ message: "Unable to Delete By this ID "});
    }
    return res.status(200).json({ message: "Product Succesfully Deleted" });
};

exports.getAllEvents = getAllEvents;
exports.addEvent = addEvent;
exports.getById = getById;
exports.updateEvent = updateEvent;
exports.deleteEvent = deleteEvent;