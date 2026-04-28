import cards from "../public/structure.json" with { type: "json" };

type CardMeta = {
  count: number;
  category: string;
  when: string;
};

interface CardsData {
  [key: string]: CardMeta;
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

generateCards(cards);
