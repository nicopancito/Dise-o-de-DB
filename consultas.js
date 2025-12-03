//ordenar de mayor a mnor cuantas citas tiene un psicologo segun la cantidad
use ("ThriveAr");
db.cita.aggregate([
  { $group: { _id: "$psicologo._id", nombre: { $first: "$psicologo.nombre" }, totalCitas: { $sum: 1 } } },
  { $sort: { totalCitas: -1 } }
]);

//pacientes con más de una cita programada
db.cita.aggregate([
  { $match: { estado: "programada" } },
  { $group: { _id: "$paciente._id", nombre: { $first: "$paciente.nombre" }, citas: { $sum: 1 } } },
  { $match: { citas: { $gt: 1 } } }
]);

//Listar evaluaciones clínicas segun riesgo junto con datos del paciente y psicólogo
db.evaluacion_clinica.find(
  { nivelRiesgo: { $in: ["medio", "alto"] } },
  { "paciente.nombre": 1, "paciente.apellidoPaterno": 1, "psicologo.nombre": 1, motivoConsulta: 1, diagnostico: 1, nivelRiesgo: 1 }
);

//Contar cuántos pacientes hay por país y nivel de suscripción
db.usuario.aggregate([
  { $group: { _id: { pais: "$pais", nivelSuscripcion: "$nivelSuscripcion" }, totalUsuarios: { $sum: 1 } } },
  { $sort: { totalUsuarios: -1 } }
]);

//Listar psicólogos con evaluaciones realizadas con la antidad de evlauaciones realizadas
db.evaluacion_clinica.aggregate([
  { $group: { _id: "$psicologo._id", nombre: { $first: "$psicologo.nombre" }, totalEvaluaciones: { $sum: 1 } } },
  { $sort: { totalEvaluaciones: -1 } }
]);

//Obtener citas próximas en los próximos 7 días junto a los datos de usuarios y psicólogos
db.cita.find({
  fechaCita: { $gte: new Date(), $lte: new Date(new Date().getTime() + 7*24*60*60*1000) },
  estado: "programada"
}).sort({ fechaCita: 1 });

//Promedio de evaluaciones por nivel de riesgo
db.evaluacion_clinica.aggregate([
  { $group: { _id: "$nivelRiesgo", total: { $sum: 1 } } },
  { $project: { nivelRiesgo: "$_id", total: 1, _id: 0 } }
]);

//Listar pacientes que nunca tuvieron una evaluación clínica
db.usuario.aggregate([
  {
    $lookup: {
      from: "evaluacion_clinica",
      localField: "_id",
      foreignField: "paciente._id",
      as: "evaluaciones"
    }
  },
  { $match: { evaluaciones: { $size: 0 } } },
  { $project: { nombre: 1, apellidoPaterno: 1, email: 1 } }
]);

//psicólogos disponibles que tengan citas canceladas
db.cita.aggregate([
  { $match: { estado: "cancelada" } },
  { $group: { _id: "$psicologo._id", nombre: { $first: "$psicologo.nombre" }, canceladas: { $sum: 1 } } },
  { $match: { canceladas: { $gt: 0 } } }
]);

//Historial de citas de un paciente específico, ordenado por fecha y mostrando modalidad y estado
db.cita.find({ "paciente._id": ObjectId("692cf6ce9ac52478b7b8f4c3") })
       .sort({ fechaCita: -1 })
       .project({ fechaCita: 1, modalidad: 1, estado: 1, psicologo: 1 });
