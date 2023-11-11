export function nowToHHMM() {
  const d = new Date();
  return `${d.getHours()}:${d.getMinutes().toString().padStart(2, "0")}`; //padstart permet d'ajout un chiffre au choix en avant au lieu le time retourne 16:1 il va retourner 16:01
}

export const DAYS = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"];

/*
export function nowToDDMM(date) {
  return `${date.getUTCDate().toString().padStart(2, "0")}/${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}`;
}
*/
