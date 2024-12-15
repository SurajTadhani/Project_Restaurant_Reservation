import  app  from './app.js';

const PORT = process.env.PORT || 4001

app.listen(PORT, (req,res)=> console.log('server started... on port ' , PORT));