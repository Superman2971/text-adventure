# TextAdventure

## To Do List

**Room functions / Types**
- basic room has 4 directions (maybe labeled), a description, maybe an image
- input action rooms (input boxes with multiple responses based on text you submit...should it also possible give player items? Solve a riddle?)
- button action rooms (buttons that cause functions...need to know the functions)
    - fight, run, take, leave, ... (can format these exactly like the directions with either function or example leave would have a goTo)
- dead end, something like a window...I don't think you should leave the current room. Maybe a sentence appears under the room description or a modal or alert.
- locked doors and keys
- monsters and fighting

1) should make a quick create room (just the beginning so I have an object to play with)
2) create a service that I can then use to temp store the object for playing
3) create a play component that has that game implemented for play
4) then upgrade the creation tool || begin the save tool

**later: create a board/mapping environment for the Create page which is infinite.**
How I think I can do it:
- square box with overflow scroll
- initial room given position absolute at the middle (100x100)
- then every time a room is generated you automate the goTo for the appropriate door && automatically generate and save the new coordinates to the map. For example if you build a northern room and all rooms are 40x40 it saves positionX 100 positionY 140 and is placed absolutely on the map.

From Phone
- add save game, use url params. Including game ID, room ID, and if including any items IDs to save what the character has in inventory (this method requires no database for the saves...but maybe I do gameID storage with the associated database storage dump)
- make homepage super simple with 3 states. Creation, game, about, maybe also a page for find a game (to search game database).
- add function for doors locking behind you
- add counter function inventory items. AKA you get one of x every y seconds
