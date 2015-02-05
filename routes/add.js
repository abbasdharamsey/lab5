var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var newFriend = {
        "name": req.query.name,
        "description": req.query.description,
        "imageURL": "http://upload.wikimedia.org/wikipedia/commons/5/5b/Ultraviolet_image_of_the_Cygnus_Loop_Nebula_crop.jpg"
    }
    data["friends"].push(newFriend);
 }