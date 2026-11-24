# Contributing to CINEMOTION

Created and maintained by Aditya (@cixcex).

Thank you for helping improve CINEMOTION. Please follow these guidelines so the skill stays modular, mobile-first, and easy to maintain.

## How to contribute

1. Fork the repository on GitHub: https://github.com/cixcex/cinemotion
2. Create a feature branch: `git checkout -b feature/short-name`
3. Make focused changes; do not reformat unrelated files.
4. Add or update tests in `.claude/skills/cinemotion/scripts/` when behavior changes.
5. Run the validation script:

   ```bash
   python3 .claude/skills/cinemotion/scripts/validate_skill.py
   ```

6. Run the packaging script and verify the ZIPs:

   ```bash
   python3 .claude/skills/cinemotion/scripts/package_skill.py
   ```

7. Open a pull request with a clear description of the change.

## Reporting bugs or requesting features

Open an issue with:

- The skill version from `SKILL.md` frontmatter.
- The Claude surface you used (Android, web, desktop, Claude Code, API).
- A minimal prompt that reproduces the issue.
- Expected vs. actual behavior.

Security issues should be sent to the maintainer (see `SECURITY.md`), not posted publicly.

## Development rules

- Keep `SKILL.md` under 500 lines; move detail into `references/`.
- Use relative paths one level deep where possible.
- Keep the Android-first experience in mind: no terminal requirements for basic use.
- Never invent fake GitHub stars, download counts, screenshots, or testimonials.
- Preserve the existing developer attribution format:

  > Created and maintained by Aditya (@cixcex).

- Do not add runtime dependencies unless they are clearly necessary and documented.
