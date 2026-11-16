# Smolpxl TODO-v2

Some ideas about how to improve Smolpxl for the next major release.

## All UI state is in the model

Currently, the model contains the game state only. Any UI state or config is
held ad-hoc within the Smolpxl objects.

In v2, we should hold all UI state and config in the model.  Something like:

```
{
    "player-x": 25,
    "activePlayers": [
    ]

    // ... other game state
    "_": {
        "local_config": {
            showTouchControls: false,
            // ...
        },
        "config": {
            saveHighScores: true,
            highScores: [...],
            players: [...],
            // ...
        },
        "ui": {
            "mode": "game",
            // ...
        },
        "local_ui": {
            "remote_dialog_open": "true",
            "remote_mode": "host",
            "modes": {
                "host": {
                    "server_id": "464574",
                    "reconnect_key": "12354364",
                    "known_players": [
                        {"id": "32423", "player_number": 1, "name": "Phil"},
                        // ...
                    ]
                },
                "remote": {
                    "server_id": "333",
                    "my_reconnect_key": "3543",
                    "my_id": "352",
                    "player_number": 2,
                    "name": "Fiona"
                }
            }
        },
        "modes": {
            "menu": {
                "items": [{"text": "Menu item 1"}, ...],
                "position": [2, 3, 1],
                // ...
            },
            "title": {
                "page": 1,
                "updateGame": true
            }
        }
    }
}
```

Ideally, this should be plain JSON, so containing no functions etc.  We'll
need "Sending messages" below for this to work.

This makes it much easier to reproduce state in a remote instance, and it
makes it much clearer what state we actually hold.

It also gives us a generic way for the game to alter the ui state.

It also should make it pretty easy to save config to local storage.

Possible `mode`s might include: game, menu, title, gameStarting?, dialog.

## Different modes are like sub-games

Our game code controls rendering when we're in mode "game", and other code
controls it the rest of the time.

For example, in "menu" mode, the menu has an update() function and a view()
function similar to our game.  When in menu mode, our game does not receive
calls to update().

In "title" mode again, we don't receive update calls by default, although
we can probably register to receive them if we want to.

## Sending messages

Like in Elm and React, we should send messages instead of calling callbacks:

```
{
    "menu": [
        {
            "text": "Delete player",
            "msg": {"msgtype": "delete_player", "data": {"playerIndex": 1}}
        }
    ]
}
```

and in `update()` we should receive messages instead of calling methods on
some `runningGame` object:

```
function update(model, messages) {
    for (let msg of messages) {
        switch (msg.msgtype) {
            case "delete_player":
                doDeletePlayer(model, msg.data.playerIndex)
                break;
        }
    }
}
```

We might need to be able to return some messages that will be passed to us
in the next timestep, I think.

## Explicit messages like game starting

It is helpful to receive messages like `game_starting`.  I had thought that a
gameStarting mode might be helpful, but if we receive it as a message that
is probably better.

## Modify model instead of returning

In v1 we use the convention of "if I don't return anything from update then
do nothing".  This is a rare thing to want to do, and the tradeoff is that
it's easy to forget to return model, and then nothing happens and it's
confusing.

In Elm or similar, we can enforce returning model, but in JavaScript things
feel different.  So, let's modify model instead of returning a new one.  This
also means the complex structure inside `model._` described above will be
automatically preserved.

If we want to say "no update please" then we should be explicit about that.
Maybe we can return a special value like
`Smolpxl.I_PROMISE_MODEL_IS_UNCHANGED`.

## Custom replays should be easier

Something is up with how we are doing replays at the moment: using them in
the default way (show a replay on the title screen) is fine,
but doing something clever (e.g. show a replay in-game e.g. after we lost a
life) seems a bit weird.

Maybe with all the state in model, we can make this better.

## ES6

We already use many ES6 features, so it is a dependency.

We should consider just being a module, and whether that makes it harder for
beginners to use us.

We should remove old usage where ES6 has a better way.
