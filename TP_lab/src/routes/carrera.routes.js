const { Router} = require('express')
const carreraCrontroller = require('../controller/carrera.controller.js')
const carreraMiddlewares = require('../middlewares/carrera.middleware.js')
const carreraSchema = require('../schemas/carrera.schema.js')
const schemaValidator = require("../middlewares/schemaValidator.js")

const route = Router()

route.get('/carreras', carreraMiddlewares.seguir,carreraCrontroller.getAllCarreras)
route.get('/carreras/:id', carreraMiddlewares.existeCarreraByID,carreraCrontroller.getCarreraById)
route.post('/carreras', schemaValidator(carreraSchema),carreraCrontroller.createCarrera)
route.delete('/carreras/:id',carreraMiddlewares.existeCarreraByID,carreraCrontroller.deleteCarreraById)

route.get('/materias', carreraCrontroller.getAllMaterias)
route.get('/materias/:id', carreraCrontroller.getMateriasById)
route.delete('/materia/:id',carreraCrontroller.deleteMateriasById)


module.exports = route 