var Table = require('../models/table');

//List of all Tables
exports.table_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Table list');
}

//for a specific Table
exports.table_detail = function(req, res) {
    res.send('NOTIMPLEMENTED: Table detail: ' +req.params.id);
}

//Handle Table create on POST
exports.table_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Table create POST');
}

// Handle Table delete form on DELETE.
exports.table_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Table delete DELETE ' + req.params.id);
    };
    // Handle Costume update form on PUT.
    exports.table_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Table update PUT' + req.params.id);
    };
    
    