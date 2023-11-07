//API for our resources
exports.apli = function(req, res) {
    res.write('[');
    res.write('{"resource":"tables", ');
    res.write(' "verbs":["GET","PUT", "DELETE"] ');
    res.write('}');
    res.write(']')
    res.send();
    };