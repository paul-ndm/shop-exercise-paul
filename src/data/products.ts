type Product = {
  picture: string;
  price: number;
  name: string;
};

type User = {
  surname: string;
  name: string;
  adresse: Adresse;
  email: string;
}

type Adresse = {
  street: string,
  city: string,
  region: string,
  postalCode: number,
  country: string

}

export const userMaxl: User = {
  surname: "Maxl",
  name: "Maxlman",
  adresse: {
    street: "Heldenplatz",
    city: "Vienna",
    region: "Vienna",
    postalCode: 1010,
    country: "Austria"
  
  },
  email: "max@mix,de"
}

export const products: Product[] = [
  {
    picture: "http://placehold.it/100x100",
    price: 180,
    name: "cillum",
  },
  {
    picture: "http://placehold.it/100x100",
    price: 289,
    name: "ad",
  },
  {
    picture: "http://placehold.it/100x100",
    price: 170,
    name: "culpa",
  },
  {
    picture: "http://placehold.it/100x100",
    price: 181,
    name: "ut",
  },
  {
    picture: "http://placehold.it/100x100",
    price: 178,
    name: "consectetur",
  },
  {
    picture: "http://placehold.it/100x100",
    price: 180,
    name: "cillum2",
  },
  {
    picture: "http://placehold.it/100x100",
    price: 289,
    name: "ad2",
  },
  {
    picture: "http://placehold.it/100x100",
    price: 170,
    name: "culpa2",
  },
  {
    picture: "http://placehold.it/100x100",
    price: 181,
    name: "ut2",
  },
  {
    picture: "http://placehold.it/100x100",
    price: 178,
    name: "consectetur2",
  },
  {
    picture: "http://placehold.it/100x100",
    price: 180,
    name: "cillum3",
  },
  {
    picture: "http://placehold.it/100x100",
    price: 289,
    name: "ad3",
  },
  {
    picture: "http://placehold.it/100x100",
    price: 170,
    name: "culpa3",
  },
  {
    picture: "http://placehold.it/100x100",
    price: 181,
    name: "ut3",
  },
  {
    picture: "http://placehold.it/100x100",
    price: 178,
    name: "consectetur3",
  },
];


