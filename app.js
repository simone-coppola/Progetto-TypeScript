"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mezzo = /** @class */ (function () {
    function Mezzo(tipo, ID) {
        this.tipo = tipo;
        this.stato = 'disponibile';
        this.ID = ID;
    }
    Mezzo.prototype.assegnaUtente = function (utente) {
        if (this.stato === 'disponibile') {
            this.utenteAssegnato = utente;
            this.stato = 'inUso';
        }
        else {
            console.log("Mezzo già in uso");
        }
    };
    return Mezzo;
}());
var Utente = /** @class */ (function () {
    function Utente(nome, cognome, email, pagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.pagamento = pagamento;
    }
    Utente.prototype.prenotaMezzo = function (mezzo) {
        if (mezzo.stato === "disponibile") {
            mezzo.assegnaUtente(this);
        }
        else {
            console.log("Mezzo non disponibile per la prenotazione");
        }
    };
    return Utente;
}());
var Citta = /** @class */ (function () {
    function Citta(nome) {
        this.nome = nome;
        this.mezziDisponibili = [];
    }
    Citta.prototype.aggiungiMezzo = function (mezzo) {
        this.mezziDisponibili.push(mezzo);
    };
    return Citta;
}());
