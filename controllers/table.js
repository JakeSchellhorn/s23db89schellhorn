var Table = require('../models/table');

//List of all Tables
exports.table_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Table list');
}


// for a specific Table.
exports.table_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Table.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

// Handle Table create on POST.
exports.table_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Table();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.material = req.body.material;
    document.shape = req.body.shape;
    document.numlegs = req.body.numlegs
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    }

// Handle Table delete on DELETE.
exports.table_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Table.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

// Handle Table update form on PUT.
exports.table_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Table update PUT' + req.params.id);
    };

// List of all Tables
exports.table_list = async function(req, res) {
try{
theTable = await Table.find();
res.send(theTable);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

//VIEWS
// Handle a show all view
exports.table_view_all_Page = async function(req, res) {
try{
theTable = await Table.find();
res.render('table', { title: 'Table Search Results', results: theTable });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};


// Handle Costume update form on PUT.
exports.table_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Table.findById( req.params.id)
// Do updates of properties
if(req.body.material)
toUpdate.material = req.body.material;
if(req.body.shape) toUpdate.shape = req.body.shape;
if(req.body.numlegs) toUpdate.numlegs = req.body.numlegs;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};    