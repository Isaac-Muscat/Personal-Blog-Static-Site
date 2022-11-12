---
title: "Java Chess Engine"
date: "2021-01-01"
coverImage: "/images/JavaChessGUIScreenshot.png"
tags: [
	"project"
]
---

## Inspiration
I have always enjoyed the game of chess and have been amazed by the power of computers, so I decided to create a work-in-progress chess engine in java using guidlines from the Chessprogrmming Wiki. Currently, it uses "Negamax" and searches up to a ply of 4 in a second consistently. The move generation is completely debugged using the perft algorithm (it was worth it). The average perft speed using complicated positions is around 3 million moves/second on my Macbook Air (CPU: 1.8 GHz Dual-Core Intel Core i5, RAM: 8 GB 1600 MHz DDR3).

## Board Representation
* Uses bitboards stored in a Java long to store positions of a certain piece type
* All piece types extend the Piece class
* The board uses make and unmake move methods rather than copy-make (which failed in my first attempt)
* All piece objects are stored in static variables within their class (like a singleton)
* Color and PieceEnum are used to store the type of piece

## The Code
You can view the github repository for this chess engine here at [github.com/Isaac-Muscat/Java-Chess-Engine](https://github.com/Isaac-Muscat/Java-Chess-Engine).