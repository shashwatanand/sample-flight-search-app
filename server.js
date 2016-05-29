var express = require("express");
var application = express();
application.use(express.static(__dirname));
application.listen(5001);