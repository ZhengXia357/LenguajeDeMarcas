// 7.- Hacer una página HTML con JavaScript que contenga una función DameElTiempo que reciba dos parámetros: el tiempo que hizo ayer y el tiempo que hace hoy. Hay tres posibilidades: SOL, NUBLADO, LLUVIA. Y en función del tiempo de ayer y el tiempo de hoy devuelva la predicción para mañana. Esta predicción se basa en la siguiente tabla: 

// AYER, HOY → MAÑANA
// SOL, SOL → SOL
// SOL, NUBLADO → NUBLADO
// SOL, LLUVIA → NUBLADO
// NUBLADO, SOL → SOL
// NUBLADO, NUBLADO → NUBLADO
// NUBLADO, LLUVIA → LLUVIA
// LLUVIA, SOL → NUBLADO
// LLUVIA, NUBLADO → NUBLADO
// LLUVIA, LLUVIA → LLUVIA

function dameElTiempo(ayer, hoy) {
    if (ayer.toUpperCase() == "SOL") {
        if (hoy.toUpperCase() == "SOL") {
            return "SOL";
        } else {
            return "NUBLADO";
        }
    }else if (ayer.toUpperCase() == "NUBLADO") {
        if (hoy.toUpperCase() == "SOL") {
            return "SOL";
        } else if (hoy.toUpperCase() == "NUBLADO") {
            return "NUBLADO";
        } else {
            return "LLUVIA";
        }
    }else {
        if (hoy.toUpperCase() == "LLUVIA") {
            return "LLUVIA";
        } else {
            return "NUBLADO";
        }
    }
}