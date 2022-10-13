var express = require('express');
var router = express.Router();
const model = require('../models')
/* GET users listing. */
router.get('/', async function(req, res, next) {
    const objectlist = await model.Objectlist.findAll({
        include:[model.Truck,model.Car,model.Building,model.Basketballground,model.Bus,model.Tree,model.Parking],
    })
    res.json({objectlist})
});

router.get('/raychart',async (req,res,next)=>{
    const ray = await model.Raychart.findAll()
    res.json({ray})
} )

router.get('/barchart',async (req,res,next)=>{
    const bar = await model.Barchart.findAll()
    res.json({bar})
})

router.get('/detail',async (req,res,next)=>{
    const detail = await model.Buildingdetail.findAll({
        include:[model.Funnelchart]
    })
    res.json({detail})
})

router.get('/park',async (req,res,next)=>{
    const park = await model.Carpark.findAll()
    res.json({park})
})
router.get('/funnel',async (req,res,next)=>{
    const funnel = await model.Funnelchart.findAll()
    res.json({funnel})
})

router.get("/buildstatus",async(req,res,next)=>{
    const status = await model.Buildstatus.findAll()
    res.json({status})
})

router.put('/car/:id',async (req,res,next)=>{
    const car = await model.Car.findByPk(req.body.id)
    car.update(req.body)
    res.json({errorno:0,message:'update success'})
})
router.put('/truck/:id',async (req,res,next)=>{
    const car = await model.Truck.findByPk(req.body.id)
    car.update(req.body)
    res.json({errorno:0,message:'update success'})
})
router.put('/bus/:id',async (req,res,next)=>{
    const car = await model.Bus.findByPk(req.body.id)
    car.update(req.body)
    res.json({errorno:0,message:'update success'})
})

router.put('/building/:id',async (req,res,next)=>{
    const car = await model.Building.findByPk(req.body.id)
    car.update(req.body)
    res.json({errorno:0,message:'update success'})
})
router.put('/basketabll/:id',async (req,res,next)=>{
    const car = await model.Basketballground.findByPk(req.body.id)
    car.update(req.body)
    res.json({errorno:0,message:'update success'})
})
router.put('/parking/:id',async (req,res,next)=>{
    const car = await model.Parking.findByPk(req.body.id)
    car.update(req.body)
    res.json({errorno:0,message:'update success'})
})
router.put('/raychart/:id',async (req,res,next)=>{
    const ray = await model.Raychart.findByPk(req.body.id)
    ray.update(req.body)
    res.json({errorno:0,message:'update success'})
} )
router.put('/funnel/:id',async (req,res,next)=>{
    const ray = await model.Funnelchart.findByPk(req.body.id)
    ray.update(req.body)
    res.json({errorno:0,message:'update success'})
} )
router.put('/barchart/:id',async (req,res,next)=>{
    const ray = await model.Barchart.findByPk(req.body.id)
    ray.update(req.body)
    res.json({errorno:0,message:'update success'})
} )
router.put('/buildingdetail/:id',async (req,res,next)=>{
    const ray = await model.Buildingdetail.findByPk(req.body.id)
    ray.update(req.body)
    res.json({errorno:0,message:'update success'})
} )
router.put('/buildstatus/:id',async (req,res,next)=>{
    const ray = await model.Buildstatus.findByPk(req.body.id)
    ray.update(req.body)
    res.json({errorno:0,message:'update success'})
} )
router.put('/carpark/:id',async (req,res,next)=>{
    const ray = await model.Carpark.findByPk(req.body.id)
    ray.update(req.body)
    res.json({errorno:0,message:'update success'})
} )
module.exports = router;
