# The Meeting That Should Have Been One Line

[![Competition](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c.svg)](https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)
[![Rank](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/bbulls013/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/rank.svg)](https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)
[![Reward](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/bbulls013/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/reward.svg)](https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)

Entry for the make.fun bounty
[The Meeting That Should Have Been One Line](https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c).

`main.ts` writes a single sentence to `/output/entry.txt`: the one line
that could have replaced the whole pointless meeting. The text is fixed
in the source, the program takes no input and uses no network, and every
run produces exactly the same bytes.

Run it with Node 22 or later (the harness runtime is node22):

```sh
node main.ts
cat /output/entry.txt
```

The output is one UTF-8 line of 100 bytes, inside the bounty's
1–200 character gate, and two consecutive runs are byte-identical.

MIT licensed; see `LICENSE`.
