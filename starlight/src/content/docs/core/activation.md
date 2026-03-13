---
title: Activation Phase
description: A overview of the activation phase
---

### Overview
Starting with the player with priority, each player will take turns activating units one at a time until every unit has activated. 

If one player has greater than or equal to double the amount of unactivated units, they must activate 2 units at a time. If one player has greater than or equal to triple the amount of unactivated units, they must activate 3 units at a time, etc. 

#### Examples
| Move Number | Player A Units Remaining | Player B Units Remaining | Player A Activates | Player B Activates |
| ------ | ------ | ------ | ------ |  ------ |
| 1 | 10 | 15 | 1 | 1 |
| 2 | 9 | 14 | 1 | 1 |
| 3 | 8 | 13 | 1 | 1 | 
| 4 | 7 | 12 | 1 | 1 |
| 5 | 6 | 11 | 1 | 1 |
| 6 | 5 | 10 | 1 | 2 |
| 7 | 4 | 8 | 1 | 2 |
| 8 | 3 | 6 | 1 | 2 |
| 9 | 2 | 4 | 1 | 2 |
| 10 | 1 | 2 | 1 | 2 |


| Move Number | Player A Units Remaining | Player B Units Remaining | Player A Activates | Player B Activates |
| ------ | ------ | ------ | ------ |  ------ |
| 1 | 5 | 14 | 1 | 2 |
| 2 | 4 | 12 | 1 | 3 |
| 3 | 3 | 9 | 1 | 3 |
| 4 | 2 | 6 | 1 | 3 |
| 5 | 1 | 3 | 1 | 3 |

### Actions
Each unit can attempt each of the below actions once per turn, so long as it has enough activations left to complete each action. Each action has an associated AC, and each unit starts the phase with activations equal to that units AC characteristic. 

#### Move (AC:1): 
The unit can move up to its movement characteristic with and can rotate for free during any part of the move, with the exception of non WALKER VEHICLE units which can only rotate up to 90 degrees if moving more than half their movement. You cannot enter, leave, or end the move engagement range as a part of this move. Vehicles can enter and leave engagement range but cannot end in engagement range. A unit can only move so long as it has not made a Run or Fallback action in the same turn. 
#### Run (AC:2): 
The unit can move up to twice your movement characteristic, with the same restrictions as the Move Action. A unit can only run so long as it has not made a Move or Fallback action in the same turn. Until the end of turn, this unit is has a -1 to hit modifier when making ranged attacks and cannot fire any weapons with the HEAVY ability, or perform the Charge action. 
#### Fallback (AC:2):
The unit can move up to its movement charactersitic with the same restrictions as the Move Action, but it can leave/enter Engagement Range so long as it doesn't end that move in Engagement Range. Until the end of the turn, this unit is battleshocked and any ranged attacks it makes hit on an umodifiable 6+. 
#### Take Aim (AC:1):
Until the end of the turn, add 1 to this units Ballistic Skill.
#### Overwatch (AC:2):
The unit can rotate, after which it has considered to have entered Overwatch until the end of the turn or until until the unit moves for any reason. While the unit is in Overwatch, when a unit starts or ends a move within 24 inches of this unit, you may interrupt them and shoot at -1 BS and cannot have any positive BS or hit roll modifiers. 

#### Charge (AC:1):
You may move up to your movement characteristic + d6 inches to a maximum of 12 inches. You must end this move in engagement range, and there is no limit on rotations. You can immediatly perform a free fight action, and until the end of the turn add one to the attacks characteristic of melee weapons equipped by this unit. 
#### Shoot (AC:1):
The unit may shoot its ranged weapons. See [Shooting](/0thEdition/core/shooting/)
#### Fight (AC:1):
The unit may fight in melee with its melee weapons
See [Fighting](/0thEdition/core/fighting/)
#### Go To Ground (AC:1):
Until the unit moves for any reason, it has a 6+ cover save.
