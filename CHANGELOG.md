# Change Log
Changes to BOTete Project will be documented in this file.


### Unreleased
- Bank store.
- Music Scripts.
- `queue.js` command.
- `repeat.js` command.
- `nowplaying.js` command.
- `playlink.js` merge with `play.js`
- Implementation of purgequeue model.
- try-catch method to purge error that happens when you try to wipe 2 weeks old messages.
- music returning before checking chat room.
- The bot don't need to wait for Discord API to load and send timed posts; (unpatched)


## 6.0.0 | 2020-11-13
#### Added
- Full implementation of discord.js v12;

#### Changed
- Module's version up-to-date;
- Rework on sourse code to improve performance;
- Tables are now arrays inside superagent commands;
- Updated URLs from new host server.

#### Fixed
- Typos;

#### Known Bugs
- Due to some problems importing discord.js v12 settings, modules MusicStream(beta) and Currency are temporarely down;

## 5.3.1 | 2020-06-05
#### Added
- `message` event reply;
- `guildCreate` event greeting;
- `clearqueue.js` command;

#### Changed
- Puppies timeout for some servers;

## 5.2.0 | 2020-05-15
#### Added
- Implemented player model;
- `stop.js` command;

#### Changed
- Optimized memory usage from module requirements on index;
- Play function updated to a model explort `player.js` function;
- Update on `play.js` to keep up with player function;
- Upadte on `play.js` visual styles;
- Currency models folder changed path;

#### Fixed
- `takercoins.js` bug on accessing tables;

#### Deprecated
- `playlink.js` will soon be merged with `play.js`;

## 5.1.3 | 2020-05-08
#### Added
- Started MusicStream Module Beta Phase;
- Play function;
- `play.js` command;
- `playlink.js` command and support;
- `skip.js` command;

#### Changed
- Wipink Welcome Message;

## 5.0.2 | 2020-04-23
#### Added
- Help command;
- Music Environment Setup;

#### Changed
- Tables setup;
- Tables paths;
- Tables access mode;
- General ID's access mode;
- URLs acess mode;
- Owner if-elses check for `ownerid` variable insted of predefined id;
- `binary.js` was removed and put into `centrallab.js`;
- `hazyforest.js` and `verus.js` were rewrited to prevent flood bans;
- `alchemist.js`, `mixedcooking.js` and `pharmacy.js` combined into a master `purepotter.js` command;

#### Fixed
- Last missing `pt_BR` translation;
- Requirements have been adjusted;

## 4.1.3 | 2020-04-19
#### Added
- Help command environment;
- Dynamic Bot Activity;

#### Changed
- `saywwc.js` command upgraded to `saych.js`;

#### Fixed
- Command aliases bugs;
- Bank System bugs;

#### Deprecated
- Some commands require modules not used;

## 4.0.0 | 2020-04-16
#### Added
- New Command Handler;
- New Event Handler;
- Command Aliases;
- Bank System features;

#### Changed
- Paths to modules;
- Command names;
- Console log behaviours;
- `pt_BR` translation for voice logs in some servers;
- `pt_BR` translation for various commands;

#### Removed
- Deprecated commands;

#### Fixed
- Superagent offline hosts;
- Removed DM interaction to prevent crashes;