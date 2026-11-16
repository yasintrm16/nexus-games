# Changelog

## [0.7.1] 2021-06-24
- Pass real model during replays, allowing e.g. high scores to be consistent

## [0.7.0] 2021-06-17
- Add replays

## [0.6.0] 2021-02-24
- Separate control buttons into three groups
- Improve layout of arrow buttons (move down arrow down)
- Clarify appearance of controls bar (slightly sunken, fixed color)

## [0.5.3] 2021-02-08
- Friendlier names for buttons when in touch mode.

## [0.5.2] 2021-02-08
- Lay out arrow buttons in arrow-keys shape.
- Allow minimising touch buttons.
- Change names of arrow keys back to words since some fonts are missing
  the characters I used.

## [0.5.1] 2021-02-07
- Switch the touch buttons to be divs instead of links, to avoid touch browsers
  popping up options on long-press.

## [0.5.0] 2021-02-07
- Provide buttons for touch interfaces

## [0.4.0] 2021-01-28
- Allow changing screen size in the view method

## [0.3.1] 2021-01-26
- Remove extra export statement

## [0.3.0] 2021-01-26
- Provide getters for properties of screen, to make life easier in WASM

## [0.2.2] 2021-01-09
- Copy values that are passed in to Game's methods, so we don't rely on them
  being available later.  (Steps towards being usable from WASM.)

## [0.2.1] 2021-01-08
- If page has already loaded, call onLoad immediately

## [0.2] 2021-01-08
- Include button images within JS, simplifying deployment

## [0.1] 2021-01-01
- Prototype of Rightwaves game
- First version of games: Spring, Snake, Life, Heli, Duckmaze2
- Ability to report play statistics
- Buttons to Like, Share etc.
- Text labels
- Basic menu system
- Main game loop: model, update, view
- ASCII-art for images
- Game mechanics: frame rate handling, canvas for drawing
