//Listar todos los usuarios activos
db.usuario.find({ estadoCuenta: "activo" })

//Obtener todos los psicólogos verificados
db.psicologo.find({ verificado: true })

//Listar todas las evaluaciones clínicas de un usuario específico (Juan)
db.evaluacion_clinica.find({ usuarioId: ObjectId("692cf6ce9ac52478b7b8f4c3") })

//Mostrar las citas programadas de modalidad especifica y estado especifico
db.cita.find({ modalidad: "virtual", estado: "programada" })


//Contar cuántas evaluaciones clínicas tiene cada psicólogo
db.evaluacion_clinica.aggregate([
  { $group: { _id: "$psicologoId", totalEvaluaciones: { $sum: 1 } } }
])

//Buscar usuarios por país y nivel de suscripción especifica
db.usuario.find({ pais: "Peru", nivelSuscripcion: "gratis" })

//Mostrar todas las citas de un usuario junto con el nombre del psicólogo 
db.cita.aggregate([
  { $match: { usuarioId: ObjectId("692cf6ce9ac52478b7b8f4c3") } },
  {
    $lookup: {
      from: "psicologo",
      localField: "psicologoId",
      foreignField: "_id",
      as: "psicologo"
    }
  },
  { $unwind: "$psicologo" },
  { $project: { fechaCita: 1, modalidad: 1, estado: 1, "psicologo.nombre": 1, "psicologo.apellidoPaterno": 1 } }
])


//Obtener evaluaciones clinicas con nivel de riesgo bajo
db.evaluacion_clinica.find({ nivelRiesgo: "bajo" })

// Listar los psicólogos que tienen citas canceladas
db.cita.aggregate([
  { $match: { estado: "cancelada" } },
  {
    $lookup: {
      from: "psicologo",
      localField: "psicologoId",
      foreignField: "_id",
      as: "psicologo"
    }
  },
  { $unwind: "$psicologo" },
  { $project: { "psicologo.nombre": 1, "psicologo.apellidoPaterno": 1, fechaCita: 1 } }
])

//Contar cuántas citas tiene cada usuario
db.cita.aggregate([
  { $group: { _id: "$usuarioId", totalCitas: { $sum: 1 } } }
])
