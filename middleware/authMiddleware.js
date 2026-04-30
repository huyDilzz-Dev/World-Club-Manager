const jwt = require("jsonwebtoken");

module.exports = (req,res,next)=>{
  const token = req.headers.authorization;
  if(!token) return res.sendStatus(401);

  try{
    const data = jwt.verify(token,"SECRETKEY");
    req.user = data;
    next();
  }catch{
    res.sendStatus(403);
  }
};
