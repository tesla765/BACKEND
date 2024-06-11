const express = require("express");

const app = express();

const users = [{
  name: "john",
  kidneys : [{
    healthy: false
  },{
    healthy : true
  }]
}];

app.use(express.json());

app.get("/", function(req, res){
  const johnkidneys = users[0].kidneys;
  const noofkidney = johnkidneys.length;
  let noofhealthykidney = 0;
  for(let i = 0; i < johnkidneys.length; i++){
    if(johnkidneys[i].healthy){
      noofhealthykidney = noofhealthykidney + 1;
    }
  }
  const noofunhealthykidney = noofkidney - noofhealthykidney;
  res.json({
    noofkidney,
    noofhealthykidney,
    noofunhealthykidney
  })

})

app.put("/", function(req,res){
  for(let i = 0; i < users[0].kidneys.length; i++){
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
})

app.delete("/", function(req,res){
  const newKidney = [];
  for(let i = 0; i < users[0].kidneys.length; i++){
    if(users[0].kidneys[i].healthy){
      newKidney.push({
        healthy: true
      })
    }
  }
  users[0].kidneys = newKidney;
  res.json({
    msg: "done!"
  });
})



app.post("/", function(req, res){
  
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy
  })
  res.json({
    msg: "Done!"
  })
 
})


app.listen(3000);
console.log(users[0]);