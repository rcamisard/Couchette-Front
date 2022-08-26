export class Personne {
  id: string | null;
  nom: string | null;
  prenom: string | null;
  signeAstrologique: string | null;
  idSigneAstrologique: string | null;
  description: string | null;
  age: string | null;
  idUtilisateur : string | null;
  idGenre: string | null;
  genre : string | null;

  constructor() {
    this.id = null;
    this.nom = null;
    this.prenom = null;
    this.signeAstrologique = null;
    this.idSigneAstrologique = null;
    this.description = null;
    this.age = null;
    this.idUtilisateur = null;
    this.idGenre = null
    this.genre = null
  }
}
