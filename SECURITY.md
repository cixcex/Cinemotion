# Security Policy

Created and maintained by Aditya (@cixcex).

## Reporting a vulnerability

If you believe you have found a security issue in CINEMOTION, please report it responsibly by emailing:

**kalebcherry2016@gmail.com**

Please include:

- A description of the issue.
- The affected file(s) and line(s), if known.
- Steps to reproduce, if applicable.
- Whether the issue relates to prompt injection, malicious script execution, data exfiltration, or dependency risk.

Do not open a public issue until you have received a response or the agreed disclosure date has passed.

## Security principles

- Skills run with the permissions of the host environment; review scripts before enabling them.
- CINEMOTION never requires credentials to be stored inside the skill folder.
- External AI video APIs are used only when explicitly configured by the user.
- Any third-party service integration must document its data flow and cost model.
- Keep dependencies minimal and pinned in examples.

## Scope

This policy covers the CINEMOTION skill source, example code, and packaging scripts. Third-party engines and services (Anthropic, Three.js, Blender, external video APIs) have their own security policies.
