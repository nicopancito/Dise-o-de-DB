use ("TriveAr");
db.usuario.insertMany([
  {
    _id: ObjectId("692cf6ce9ac52478b7b8f4c3"),
    nombre: "Juan",
    apellidoPaterno: "Pérez",
    apellidoMaterno: "",
    email: "juan.perez@gmail.com",
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
    fechaNacimiento: "1978-11-03",
    pais: "Peru",
    telefono: "923456789",
    nivelSuscripcion: "gratis",
    estadoCuenta: "activo"
  }
]);

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

db.cita.insertMany([
  {
    fechaCita: ISODate("2025-02-01T10:00:00Z"),
    modalidad: "virtual",
    estado: "programada",
    paciente: {
      _id: ObjectId("692cf6ce9ac52478b7b8f4c3"),
      nombre: "Juan",
      apellidoPaterno: "Pérez"
    },
    psicologo: {
      _id: ObjectId("693089211f3a2956364521fd"),
      nombre: "María",
      apellidoPaterno: "Gutiérrez"
    }
  },
  {
    fechaCita: ISODate("2025-02-03T16:00:00Z"),
    modalidad: "presencial",
    estado: "programada",
    paciente: {
      _id: ObjectId("692cf6ce9ac52478b7b8f4c4"),
      nombre: "Ana",
      apellidoPaterno: "Torres"
    },
    psicologo: {
      _id: ObjectId("693089211f3a2956364521fe"),
      nombre: "Luis",
      apellidoPaterno: "Salazar"
    }
  },
  {
    fechaCita: ISODate("2025-02-05T09:00:00Z"),
    modalidad: "virtual",
    estado: "cancelada",
    paciente: {
      _id: ObjectId("692cf6ce9ac52478b7b8f4c5"),
      nombre: "Carlos",
      apellidoPaterno: "Díaz"
    },
    psicologo: {
      _id: ObjectId("693089211f3a2956364521fd"),
      nombre: "María",
      apellidoPaterno: "Gutiérrez"
    }
  }
]);

db.evaluacion_clinica.insertMany([
  {
    fechaEvaluacion: ISODate("2025-01-15T10:00:00Z"),
    motivoConsulta: "Ansiedad generalizada",
    diagnostico: "Trastorno de ansiedad leve",
    recomendaciones: "Sesiones semanales de terapia cognitivo conductual",
    nivelRiesgo: "bajo",
    paciente: {
      _id: ObjectId("692cf6ce9ac52478b7b8f4c3"),
      nombre: "Juan",
      apellidoPaterno: "Pérez"
    },
    psicologo: {
      _id: ObjectId("693089211f3a2956364521fd"),
      nombre: "María",
      apellidoPaterno: "Gutiérrez"
    }
  },
  {
    fechaEvaluacion: ISODate("2025-01-18T14:00:00Z"),
    motivoConsulta: "Estrés laboral",
    diagnostico: "Estrés moderado",
    recomendaciones: "Ejercicios de respiración y seguimiento mensual",
    nivelRiesgo: "medio",
    paciente: {
      _id: ObjectId("692cf6ce9ac52478b7b8f4c4"),
      nombre: "Ana",
      apellidoPaterno: "Torres"
    },
    psicologo: {
      _id: ObjectId("693089211f3a2956364521fe"),
      nombre: "Luis",
      apellidoPaterno: "Salazar"
    }
  },
  {
    fechaEvaluacion: ISODate("2025-01-20T09:30:00Z"),
    motivoConsulta: "Problemas de sueño",
    diagnostico: "Insomnio primario",
    recomendaciones: "Rutina de higiene del sueño, evitar cafeína",
    nivelRiesgo: "bajo",
    paciente: {
      _id: ObjectId("692cf6ce9ac52478b7b8f4c5"),
      nombre: "Carlos",
      apellidoPaterno: "Díaz"
    },
    psicologo: {
      _id: ObjectId("693089211f3a2956364521fd"),
      nombre: "María",
      apellidoPaterno: "Gutiérrez"
    }
  }
]);
