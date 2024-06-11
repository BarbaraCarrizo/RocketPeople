const carreras = require('../../data/data.carreras.json')
const materias = require('../../data/data.materias.json')

const getAllCarreras = (req,res) => {
  res.status(200).json(carreras)
}

const getCarreraById = (req,res) => {
  const id = req.params.id
  const carrera = carreras.find( s => s.id == id)
  res.status(200).json(carrera)
}

const createCarrera = (req,res) => {
  const carrera = req.body
  let id = 1
  if(carreras.length) {
    const ids = carreras.map (s => s.id)
    id = Math.max(...ids)+1
  }
  carreras.push({id, ...carrera})
  res.status(201).json(carreras[carreras.length-1])
}

const deleteCarreraById = (req,res) => {
  const id = req.params.id
  const index = carreras.findIndex(carrera => carrera.id == id)
  if (index !== -1) {
    const materiasQueQuedan = materias.filter(s => s.carreraId != id)
    const materias = materiasQueQuedan
    const deletedCarrera = carreras.splice(index, 1)
    res.status(200).json({ mensaje:`La Carrera con ID ${id} fue borrada:`,
    CarreraBorrada : deletedCarrera[0]})}
}                           

const getAllMaterias = (req,res) => {
  res.status(200).json(materias)
}

const getMateriasById = (req,res) => {
  const id = req.params.id
  const materia = materias.find( s => s.id == id)
  res.status(200).json(materia)
}

const createMaterias = (req,res) => {
  const materia = req.body
  let id = 1
  if(materias.length) {
    const ids = materias.map (s => s.id)
    id = Math.max(...ids)+1
  }
  materias.push({id, ...materia})
  res.status(201).json(materias[materias.length-1])
}

const deleteMateriasById = (req,res) => {
  const id = req.params.id
  const index = materias.findIndex(s => s.id == id)
  if (index !== -1) {
    const deletedMateria = materias.splice(index, 1)
    res.status(200).json({ mensaje:`La Materia con ID ${id} fue borrada:`,
    MateriaBorrada : deletedMateria[0]})}
}







module.exports = { getAllCarreras, getCarreraById, createCarrera,
deleteCarreraById, getAllMaterias, getMateriasById,deleteMateriasById,createMaterias,carreras, materias }