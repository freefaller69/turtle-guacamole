export interface Voyage {
  id: string;
  description: string;
  currency: string;
  dateDepart: string;
  dateArrive: string;
  ship: string;
  embarkPort: string;
  disembarkPort: string;
  lowestVoyagePrice: number;
  staterooms: object[];
}
