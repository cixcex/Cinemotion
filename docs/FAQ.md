# FAQ

Created and maintained by Aditya (@cixcex).

## Is CINEMOTION affiliated with Anthropic?

No. It is an independent open-source skill created by Aditya (@cixcex). It uses the open Agent Skills format but is not endorsed or sponsored by Anthropic.

## Does CINEMOTION work in Claude Android?

Yes, it is designed for Claude Android. Upload `cinemotion-claude-skill.zip` through the supported Skills interface. If your app build does not expose custom skill upload, use Claude desktop/web or Claude Code.

## Does CINEMOTION render video inside the chat?

Only if the client provides rendering tools. On Android, CINEMOTION usually produces code and preview instructions. It will not claim a video was rendered unless rendering actually happened.

## Are external video APIs free?

No. CINEMOTION never assumes an external API is free or available. It will ask for confirmation and explain cost before calling any provider.

## Which mode should I use?

Start with low cost mode. Switch to balanced or maximum quality only when you need more detail.

## Can I use CINEMOTION with Claude Code?

Yes. Copy `.claude/skills/cinemotion` into your project or user skills folder, then ask for an animation.

## How do I report a security issue?

Email kalebcherry2016@gmail.com. See `SECURITY.md`.

## How do I contribute?

See `CONTRIBUTING.md`. Run the validation and packaging scripts before opening a pull request.
