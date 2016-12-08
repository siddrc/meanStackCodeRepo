var router = require('express').Router();
router.post('/', function(req, res) {
   var data = req.body;
   console.log("data "+JSON.stringify(data));
   res.send("Done, check console for data");
});
router.get('/',function(req,res){
  console.log("In get");
  res.send();
})
module.exports = router;
