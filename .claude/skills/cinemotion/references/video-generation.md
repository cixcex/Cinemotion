# AI Video Generation

Created and maintained by Aditya (@cixcex).

This reference covers optional integration with AI video generation services. It is not a built-in feature and it is not free unless the user says so.

## Golden rules

1. Never assume an API is available.
2. Never assume an API is free.
3. Never claim a video was generated unless the API call completed.
4. Store keys outside the skill folder.
5. Explain cost and privacy before calling any service.

## Workflow

1. Confirm the user wants external generation.
2. Ask which provider they already use.
3. Confirm the API key is available in the environment.
4. Generate the shortest useful prompt.
5. Call the service only if the agent has a tool for it.
6. Save the output URL and report cost if known.

## Prompt template

```
Style: [cinematic / anime / game]
Duration: [seconds]
Camera: [POV / dolly / static / pan]
Subject: [character and clothing]
Environment: [location and lighting]
Action: [one clear action]
Mood: [calm / tense / dreamy]
```

## Continuity across shots

- Use the same character card from `references/character-animation.md`.
- Use a reference image if the provider supports image-to-video.
- Reuse the last frame as the next shot's start when possible.

## Honest reporting

Say exactly which step completed:

- Plan generated.
- Code/HTML generated.
- Preview opened.
- Video submitted to provider.
- Video rendering succeeded/failed.

Do not say “final video ready” when only a plan exists.
