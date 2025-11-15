type tipoMezzo = 'bici' | 'monopattino' | 'scooter';
type statoMezzo = 'disponibile' | 'inUso';
type metodoPagamento = 'carta' | 'contanti';

interface IMezzo {
    tipo: tipoMezzo;
    stato: statoMezzo;
    ID: number;

    assegnaUtente(utente: IUtente): void
}

interface IUtente {
    nome: string;
    cognome: string;
    email: string;
    pagamento: metodoPagamento;

    prenotaMezzo(mezzo: IMezzo): void;
}

interface ICitta {
    nome: string;
    mezziDisponibili: IMezzo[];

    aggiungiMezzo(mezzo: IMezzo): void;
}

class Mezzo implements IMezzo {
    tipo: tipoMezzo;
    stato: statoMezzo;
    ID: number;
    utenteAssegnato?: IUtente;

    constructor(tipo: tipoMezzo, ID: number) {
        this.tipo = tipo;
        this.stato = 'disponibile';
        this.ID = ID;
    }

    assegnaUtente(utente: IUtente): void {
        if (this.stato === 'disponibile') {
            this.utenteAssegnato = utente;
            this.stato = 'inUso';
        } else {
            console.log("Mezzo già in uso");
        }
    }
}

class Utente implements IUtente {
  nome: string;
  cognome: string;
  email: string;
  pagamento: metodoPagamento;

  constructor(nome: string, cognome: string, email: string, pagamento: metodoPagamento) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.pagamento = pagamento;
  }

  prenotaMezzo(mezzo: IMezzo): void {
    if (mezzo.stato === "disponibile") {
      mezzo.assegnaUtente(this);
    } else {
      console.log("Mezzo non disponibile per la prenotazione");
    }
  }
}

class Citta implements ICitta {
    nome: string;
    mezziDisponibili: IMezzo[];

    constructor(nome:string){
        this.nome = nome;
        this.mezziDisponibili = [];
    }

    aggiungiMezzo(mezzo: IMezzo): void {
        this.mezziDisponibili.push(mezzo);
    }
}

export {};



