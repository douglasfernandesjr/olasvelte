import { writable } from "svelte/store";

const startList = [
  {
    id: 1,
    name: "Praia dos Carneiros, Pernambuco",
    srcImg:
      "https://www.viagenscinematograficas.com.br/wp-content/uploads/2018/12/Praia-dos-Carneiros-Igrejinha-6.jpg",
    visited: true,
  },
  {
    id: 2,
    name: "Morro de São Paulo – Bahia",
    srcImg:
      "https://www.viagenscinematograficas.com.br/wp-content/uploads/2017/02/Morro-de-SP-Melhores-Praias-20.jpg.webp",
    visited: false,
  },
  {
    id: 3,
    name: "Jericoacoara - Ceará",
    srcImg:
      "https://www.viagenscinematograficas.com.br/wp-content/uploads/2018/09/Jericoacoara-Ceara-O-que-fazer-12.jpg.webp",
    visited: true,
  },
  {
    id: 4,
    name: "Praia do Espelho, Porto Seguro – Bahia",
    srcImg:
      "https://www.viagenscinematograficas.com.br/wp-content/uploads/2019/01/Praia-do-Espelho-Dicas-Bahia-13.jpg",
    visited: true,
  },
];

export const travelList = writable(startList);

export function addNewTravel(name, srcImg) {
  travelList.update((list) => {
    let newTravel = {
      name: name,
      srcImg: srcImg,
      visited: false,
      id: list.length + 1,
    };

    list.push(newTravel);
    return list;
    //return [...list, newTravel];
  });
}

export function moveTravel(travel) {
  travelList.update((list) => {
      return list.filter((t) => t !== travel).concat(travel);
  });
}
