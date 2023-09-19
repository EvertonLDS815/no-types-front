export interface Knots {
  _id?: string;
  name: string;
  description?: string;
  linkImage?: string;
  linkVideo?: string;
  nivel: string;
  type: string;
  onModalClick: (arr: Knots) => void;
}
