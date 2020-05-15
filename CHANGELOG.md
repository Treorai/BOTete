# Change Log
Changes to BOTete Project will be documented in this file.
Versions follows default {x.y.z} = { (major code updates).(new functionalities or commands).(minor fixes) }.
Every major updates get a new version section, while minor fixes will be updated in the section of the previous version.

### Unreleased
- V.6.0.0 shall meet discord.js v12 syntax changes.
- Adding bank store.
- Music Module Next Phases.
- Music Scripts.
- `clearqueue.js` command.
- `queue.js` command.
- `repeat.js` command.
- `nowplaying.js` command.

## 5.2.0 | 2020-05-14
#### Added
- Music Module Phase 2:
- Implemented player model.
- Implemented clearqueue model.
- `stop.js` command.

#### Changed
- Optimized memory usage from module requirements on index.
- Play function updated to a model explort `player.js` function.
- Update on `play.js` to keep up with player function.
- Upadte on `play.js` visual styles.
- Currency models folder changed path.

#### Fixed
- `takercoins.js` bug on accessing tables.

#### Deprecated
- `playlink.js` will soon be combined with `play.js`

## 5.1.3 | 2020-05-08
#### Added
- Music Module Phase 1:
- Play function.
- `play.js` command.
- `playlink.js` command and support.
- `skip.js` command.

#### Changed
- Wipink Welcome Message.

## 5.0.2 | 2020-04-23
#### Added
- Help command.
- Music Environment Setup.

#### Changed
- Tables setup.
- Tables paths.
- Tables access mode.
- General ID's access mode.
- URLs acess mode.
- Owner if-elses check for `ownerid` variable insted of predefined id.
- `binary.js` was removed and put into `centrallab.js`.
- `hazyforest.js` and `verus.js` were rewrited to prevent flood bans.
- `alchemist.js`, `mixedcooking.js` and `pharmacy.js` combined into a master `purepotter.js` command.

#### Fixed
- Last missing `pt_BR` translation.
- Requirements have been adjusted.

## 4.1.3 | 2020-04-19
#### Added
- Help command environment.
- Dynamic Bot Activity.

#### Changed
- `saywwc.js` command upgraded to `saych.js`

#### Fixed
- Command aliases bugs.
- Bank System bugs.

#### Deprecated
- Some commands require modules not used.

## 4.0.0 | 2020-04-16
#### Added
- New Command Handler.
- New Event Handler.
- Command Aliases.
- Bank System features.

#### Changed
- Paths to modules.
- Command names.
- Console log behaviours.
- `pt_BR` translation for voice logs in some servers.
- `pt_BR` translation for various commands.

#### Removed
- Deprecated commands.

#### Fixed
- Superagent offline hosts.
- Removed DM interaction to prevent crashes.