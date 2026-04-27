# Exploding kittens
Contains data related to the game assets

## Total Cards - 56

| Card Name           | Category       | Count | Action Owner   | When It Can Be Played                      | Effect Summary                                    |
| ------------------- | -------------- | ----- | -------------- | ------------------------------------------ | ------------------------------------------------- |
| Exploding Kitten    | Core / Hazard  | 4     | N/A (drawn)    | When drawn                                 | Player explodes and is out unless Defuse is used  |
| Defuse              | Core / Defense | 6     | Self           | Immediately after drawing Exploding Kitten | Prevents explosion and reinserts kitten into deck |
| Attack              | Action         | 4     | Current Player | During own turn                            | End turn, next player takes 2 turns (can stack)   |
| Skip                | Action         | 4     | Current Player | During own turn                            | Ends turn without drawing                         |
| Favor               | Action         | 4     | Current Player | During own turn                            | Target player gives 1 card of their choice        |
| Shuffle             | Action         | 4     | Current Player | During own turn                            | Shuffle draw pile                                 |
| See the Future (3x) | Action         | 5     | Current Player | During own turn                            | View top 3 cards of draw pile                     |
| Nope                | Interrupt      | 5     | Any Player     | Anytime before an action resolves          | Cancels an action (can chain)                     |
| Cat Cards (various) | Combo          | 20    | Current Player | During own turn (as combos)                | No standalone effect; used for combos             |

## Cat Cards Breakdown

| Card Name (Examples) | Category | Count (Each) | Total |
| -------------------- | -------- | ------------ | ----- |
| Taco Cat             | Cat      | 4            |       |
| Rainbow Cat          | Cat      | 4            |       |
| Beard Cat            | Cat      | 4            |       |
| Potato Cat           | Cat      | 4            |       |
| Melon Cat            | Cat      | 4            | 20    |


## Combo Rules

| Combo Type      | Cards Required | Action Owner   | When Played     | Effect                                   |
| --------------- | -------------- | -------------- | --------------- | ---------------------------------------- |
| Two of a Kind   | 2 matching     | Current Player | During own turn | Steal random card from another player    |
| Three of a Kind | 3 matching     | Current Player | During own turn | Name a card and take it if target has it |

## Key card insertion

> Exploding cards inserted in game `players - 1`  
> **🛡️ Defuse Cards in Play**  
> Total Defuse cards in deck: 6  

> **Distribution:** 
>   - Each player gets 1 Defuse

> **From the remaining Defuse cards:**
> - Shuffle exactly 2 back into the deck  
> - Remove the rest from the game  