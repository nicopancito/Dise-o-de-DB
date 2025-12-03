use ("ThriveAr"); 

db.createCollection("psicologo", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "apellidoPaterno", "apellidoMaterno", "email", "licencia", "centro", "estado", "verificado"],
      properties: {
        nombre: { bsonType: "string" },
        apellidoPaterno: { bsonType: "string" },
        apellidoMaterno: { bsonType: "string" },
        email: { bsonType: "string", pattern: "^.+@.+$" },
        licencia: { bsonType: "string" },
        centro: { bsonType: "string" },
        estado: { bsonType: "string" },
        verificado: { bsonType: "bool" }
      }
    }
  }
})

db.createCollection("cita", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["fechaCita", "modalidad", "estado", "paciente", "psicologo"],
      properties: {
        fechaCita: { bsonType: "date" },
        modalidad: { bsonType: "string" },
        estado: { bsonType: "string" },
        paciente: { bsonType: "object" },
        psicologo: { bsonType: "object" }
      }
    }
  }
})

db.createCollection("evaluacion_clinica", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["fechaEvaluacion", "motivoConsulta", "diagnostico", "recomendaciones", "nivelRiesgo", "paciente", "psicologo"],
      properties: {
        fechaEvaluacion: { bsonType: "date" },
        motivoConsulta: { bsonType: "string" },
        diagnostico: { bsonType: "string" },
        recomendaciones: { bsonType: "string" },
        nivelRiesgo: { bsonType: "string" },
        paciente: { bsonType: "object" },
        psicologo: { bsonType: "object" }
      }
    }
  }
})


db.createCollection("usuario", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "apellidoPaterno", "apellidoMaterno", "email", "fechaNacimiento", "pais", "telefono", "nivelSuscripcion", "estadoCuenta"],
      properties: {
        nombre: { bsonType: "string"},
        apellidoPaterno: { bsonType: "string"},
        apellidoMaterno: { bsonType: "string"},
        email: { bsonType: "string", pattern: "^.+@.+$"},
        fechaNacimiento: { bsonType: "string"},
        pais: { bsonType: "string"},
        telefono: { bsonType: "string"},
        nivelSuscripcion: { bsonType: "string"},
        estadoCuenta: { bsonType: "string"}
      }
    }
  }
})
