use ("test");
db.createCollection("usuario", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "apellidoPaterno", "email", "hashPassword", "fechaNacimiento", "pais", "nivelSuscripcion", "estadoCuenta"],
      properties: {
        nombre: { bsonType: "string" },
        apellidoPaterno: { bsonType: "string" },
        apellidoMaterno: { bsonType: "string" },
        email: { bsonType: "string" },
        hashPassword: { bsonType: "string" },
        fechaNacimiento: { bsonType: "string" }, // puedes usar ISODate si quieres
        pais: { bsonType: "string" },
        telefono: { bsonType: "string" },
        nivelSuscripcion: { enum: ["gratis", "premium", "vip"] },
        estadoCuenta: { enum: ["activo", "inactivo"] }
      }
    }
  }
});

use ("test");
db.createCollection("psicologo", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "apellidoPaterno", "email", "licencia", "centro", "estado", "verificado"],
      properties: {
        nombre: { bsonType: "string" },
        apellidoPaterno: { bsonType: "string" },
        apellidoMaterno: { bsonType: "string" },
        email: { bsonType: "string" },
        licencia: { bsonType: "string" },
        centro: { bsonType: "string" },
        estado: { enum: ["disponible", "en_revision", "ocupado"] },
        verificado: { bsonType: "bool" }
      }
    }
  }
});

use ("test");
db.createCollection("evaluacion_clinica", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["usuarioId", "psicologoId", "fechaEvaluacion", "motivoConsulta", "diagnostico", "recomendaciones", "nivelRiesgo"],
      properties: {
        usuarioId: { bsonType: "objectId" },
        psicologoId: { bsonType: "objectId" },
        fechaEvaluacion: { bsonType: "date" },
        motivoConsulta: { bsonType: "string" },
        diagnostico: { bsonType: "string" },
        recomendaciones: { bsonType: "string" },
        nivelRiesgo: { enum: ["bajo", "medio", "alto"] }
      }
    }
  }
});

use ("test");
db.createCollection("cita", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["usuarioId", "psicologoId", "fechaCita", "modalidad", "estado"],
      properties: {
        usuarioId: { bsonType: "objectId" },
        psicologoId: { bsonType: "objectId" },
        fechaCita: { bsonType: "date" },
        modalidad: { enum: ["virtual", "presencial"] },
        estado: { enum: ["programada", "cancelada", "finalizada"] }
      }
    }
  }
});
