import cardsSchema from "../public/structure.json" with { type: "json" };
import { shuffle } from "@std/random";

type CardMeta = {
  count: number;
  category: string;
  when: string;
};

interface CardsData {
  [key: string]: CardMeta;
}

interface Card {
  name: string;
  when: string;
  category: string;
}

interface Player {
  name: string;
  hand: Card[];
}

const generateCard = (
  name: string,
  { category, when }: { category: string; when: string },
) => {
  return { name, category, when };
};

const generateCards = (cards: CardsData) => {
  const deckOfCards = [];
  for (const category in cards) {
    for (let i = 1; i <= cards[category].count; i++) {
      deckOfCards.push(generateCard(category, cards[category]));
    }
  }
  return deckOfCards;
};

const segregateCards = (
  cards: { name: string; category: string; when: string }[],
) => {
  const explodingCards = cards.filter((c) => c.name === "exploding-kitten");
  const defuseCards = cards.filter((c) => c.name === "defuse");
  const deck = cards.filter((c) =>
    !(new Set(["defuse", "exploding-kitten"]).has(c.name))
  );
  return { explodingCards, defuseCards, deck };
};

const distributeCards = (
  players: Player[],
  { explodingCards, defuseCards, deck }: { [key: string]: Card[] },
) => {
  const shuffledDeck = deck;
  players.forEach((p) => {
    p.hand.push(...shuffledDeck.splice(0, 4), defuseCards.pop() as Card);
  });
};

const getPlayers = () => {
  const player = {
    name: "",
    hand: [],
  };
  return [{
    name: "",
    hand: [],
  }, {
    name: "",
    hand: [],
  }, {
    name: "",
    hand: [],
  }, {
    name: "",
    hand: [],
  }, {
    name: "",
    hand: [],
  }];
};

const distributeTheCards = (
  players: Player[],
  { deck, defuseCards }: { [key: string]: Card[] },
): Card[] => {
  deck = shuffle(deck);
  players.forEach((p) =>
    p.hand.push(defuseCards.pop() as Card, ...deck.splice(0, 7))
  );
  deck.push(...defuseCards.splice(0, 2));
  return deck;
};

const setupGame = () => {
  const allCards = generateCards(cardsSchema);
  const segregatedCards = segregateCards(allCards);
  const players = getPlayers();
  const deck = distributeTheCards(players, segregatedCards);
  deck.push(...segregatedCards.explodingCards.splice(0, players.length - 1));
  const gameDeck = shuffle(deck);
};

setupGame();
