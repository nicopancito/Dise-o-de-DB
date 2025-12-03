use ("test");

//usuarios
db.usuario.insertMany([
  {
    _id: ObjectId("692cf6ce9ac52478b7b8f4c3"),
    nombre: "Juan",
    apellidoPaterno: "Pérez",
    apellidoMaterno: "",
    email: "juan.perez@gmail.com",
    hashPassword: "passJuan123",
    fechaNacimiento: "1993-05-15",
    pais: "Peru",
    telefono: "912345678",
    nivelSuscripcion: "gratis",
    estadoCuenta: "activo"
  },
  {
    _id: ObjectId("692cf6ce9ac52478b7b8f4c4"),
    nombre: "Ana",
    apellidoPaterno: "Torres",
    apellidoMaterno: "",
    email: "ana.torres@gmail.com",
    hashPassword: "passAna123",
    fechaNacimiento: "1996-08-22",
    pais: "Peru",
    telefono: "987654321",
    nivelSuscripcion: "gratis",
    estadoCuenta: "activo"
  },
  {
    _id: ObjectId("692cf6ce9ac52478b7b8f4c5"),
    nombre: "Carlos",
    apellidoPaterno: "Díaz",
    apellidoMaterno: "",
    email: "carlos.diaz@gmail.com",
    hashPassword: "passCarlos123",
    fechaNacimiento: "1978-11-03",
    pais: "Peru",
    telefono: "923456789",
    nivelSuscripcion: "gratis",
    estadoCuenta: "activo"
  },
  {
    _id: ObjectId("692cf6d976a3556f7475f772"),
    nombre: "Ana",
    apellidoPaterno: "Torres",
    apellidoMaterno: "",
    email: "ana.torres@gmail.com",
    hashPassword: "passAna123",
    fechaNacimiento: "1996-08-22",
    pais: "Peru",
    telefono: "987654321",
    nivelSuscripcion: "gratis",
    estadoCuenta: "activo"
  },
  {
    _id: ObjectId("692cf6d976a3556f7475f773"),
    nombre: "Carlos",
    apellidoPaterno: "Díaz",
    apellidoMaterno: "",
    email: "carlos.diaz@gmail.com",
    hashPassword: "passCarlos123",
    fechaNacimiento: "1978-11-03",
    pais: "Peru",
    telefono: "923456789",
    nivelSuscripcion: "gratis",
    estadoCuenta: "activo"
  }
]);

//psicolgoos
db.psicologo.insertMany([
  {
    _id: ObjectId("693089211f3a2956364521fd"),
    nombre: "María",
    apellidoPaterno: "Gutiérrez",
    apellidoMaterno: "Lozano",
    email: "maria.gutierrez@clinicaperu.com",
    licencia: "PSI-001",
    centro: "Centro de Salud Mental Lima",
    estado: "disponible",
    verificado: true
  },
  {
    _id: ObjectId("693089211f3a2956364521fe"),
    nombre: "Luis",
    apellidoPaterno: "Salazar",
    apellidoMaterno: "Mendoza",
    email: "luis.salazar@terapiavida.org",
    licencia: "PSI-002",
    centro: "Terapia Vida",
    estado: "en_revision",
    verificado: false
  }
]);

//evaluacion clinica
db.evaluacion_clinica.insertMany([
  {
    usuarioId: ObjectId("692cf6ce9ac52478b7b8f4c3"), // Juan
    psicologoId: ObjectId("693089211f3a2956364521fd"), // Maria
    fechaEvaluacion: ISODate("2025-01-15T10:00:00Z"),
    motivoConsulta: "Ansiedad generalizada",
    diagnostico: "Trastorno de ansiedad leve",
    recomendaciones: "Sesiones semanales de terapia cognitivo conductual",
    nivelRiesgo: "bajo"
  },
  {
    usuarioId: ObjectId("692cf6ce9ac52478b7b8f4c4"), // Ana
    psicologoId: ObjectId("693089211f3a2956364521fe"), // Luis
    fechaEvaluacion: ISODate("2025-01-18T14:00:00Z"),
    motivoConsulta: "Estrés laboral",
    diagnostico: "Estrés moderado",
    recomendaciones: "Ejercicios de respiración y seguimiento mensual",
    nivelRiesgo: "medio"
  },
  {
    usuarioId: ObjectId("692cf6ce9ac52478b7b8f4c5"), // Carlos
    psicologoId: ObjectId("693089211f3a2956364521fd"), // Maria
    fechaEvaluacion: ISODate("2025-01-20T09:30:00Z"),
    motivoConsulta: "Problemas de sueño",
    diagnostico: "Insomnio primario",
    recomendaciones: "Rutina de higiene del sueño, evitar cafeína",
    nivelRiesgo: "bajo"
  }
]);

//cita
db.cita.insertMany([
  {
    usuarioId: ObjectId("692cf6ce9ac52478b7b8f4c3"), // Juan
    psicologoId: ObjectId("693089211f3a2956364521fd"), // Maria
    fechaCita: ISODate("2025-02-01T10:00:00Z"),
    modalidad: "virtual",
    estado: "programada"
  },
  {
    usuarioId: ObjectId("692cf6ce9ac52478b7b8f4c4"), // Ana
    psicologoId: ObjectId("693089211f3a2956364521fe"), // Luis
    fechaCita: ISODate("2025-02-03T16:00:00Z"),
    modalidad: "presencial",
    estado: "programada"
  },
  {
    usuarioId: ObjectId("692cf6ce9ac52478b7b8f4c5"), // Carlos
    psicologoId: ObjectId("693089211f3a2956364521fd"), // Maria
    fechaCita: ISODate("2025-02-05T09:00:00Z"),
    modalidad: "virtual",
    estado: "cancelada"
  }
]);

