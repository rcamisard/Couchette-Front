import {Personne} from "./personne";

export class Rencontre {
  id : string | null
  idPersonnes : string[]
  date: Date | null
  idLieu : string | null
  ville : string | null
  idTypeRencontre : string | null
  note : number | null
  idPratiques : string[] | null
  commentaire : string | null

  personnes : Personne[]

  constructor() {
    this.id = null
    this.idPersonnes = []
    this.date = new Date()
    this.idLieu = null
    this.ville = null
    this.idTypeRencontre = null
    this.note = null
    this.idPratiques = []
    this.commentaire = null;
    this.personnes = []
  }
}
