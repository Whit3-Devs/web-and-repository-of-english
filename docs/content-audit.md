# Content Audit — `obsidian-info`

This audit maps the original Obsidian source material into the app content that was extracted from it.

## Status Labels

- **Migrated into app data**: the topic already exists in `src/data/*`.
- **Archived source**: the original Obsidian file is no longer active in the repo root and now lives under `docs/archive/obsidian-info/`.
- **Future deep explanation source**: the content may still be useful later when turning placeholder detail routes into real long-form explanations.

## Current Source Policy

- Active `obsidian-info/` at repo root has been removed.
- All former Obsidian source files were archived under `docs/archive/obsidian-info/`.
- Runtime app content now comes from typed data files in `src/data/`.

## Verb Tenses

| Source | Status | App Target |
| --- | --- | --- |
| `Verb Tenses/Present/Present Simple.md` | Migrated into app data + archived source | Verb Tenses |
| `Verb Tenses/Present/Present Continuous.md` | Migrated into app data + archived source | Verb Tenses |
| `Verb Tenses/Present/Present Perfect.md` | Migrated into app data + archived source | Verb Tenses |
| `Verb Tenses/Present/Present Perfect Continuous.md` | Migrated into app data + archived source | Verb Tenses |
| `Verb Tenses/Past/Past Simple.md` | Migrated into app data + archived source | Verb Tenses |
| `Verb Tenses/Past/Past Continuous.md` | Migrated into app data + archived source | Verb Tenses |
| `Verb Tenses/Past/Past Perfect.md` | Migrated into app data + archived source | Verb Tenses |
| `Verb Tenses/Past/Past Perfect Continuous.md` | Migrated into app data + archived source | Verb Tenses |
| `Verb Tenses/Future/Future Simple.md` | Migrated into app data + archived source | Verb Tenses |
| `Verb Tenses/Future/Future Continuous.md` | Migrated into app data + archived source | Verb Tenses |
| `Verb Tenses/Future/Future Perfect.md` | Migrated into app data + archived source | Verb Tenses |
| `Verb Tenses/Future/Future Perfect Continuous.md` | Migrated into app data + archived source | Verb Tenses |
| `Verb Tenses/Future/Future Going To.md` | Migrated into app data + archived source | Verb Tenses |
| `Verb Tenses/Verb Tenses Overview.md` | Archived source / future deep explanation source | Future overview page |
| `Verb Tenses/* Reference Tables.md` | Archived source / future deep explanation source | Future reference-table page |
| `Verb Tenses/Verb Tenses Timeline.canvas` | Archived source / future deep explanation source | Future visual explanation |

## Modal Verbs

| Source | Status | App Target |
| --- | --- | --- |
| `Modal Verbs/Ability and Permission.md` | Migrated into app data + archived source | Modal Verbs |
| `Modal Verbs/Advice and Obligation.md` | Migrated into app data + archived source | Modal Verbs |
| `Modal Verbs/Polite Requests.md` | Migrated into app data + archived source | Modal Verbs |
| `Modal Verbs/Possibility and Probability.md` | Migrated into app data + archived source | Modal Verbs |
| `Modal Verbs/Would and Hypotheticals.md` | Migrated into app data + archived source | Modal Verbs |
| `Modal Verbs/Modal Verbs Overview.md` | Archived source / future deep explanation source | Modal Verbs overview |

## Core Grammar

| Source | Status | App Target |
| --- | --- | --- |
| `Core Grammar/English Auxiliaries.md` | Normalized into app data + archived source | Core Grammar |
| `Core Grammar/WH Questions and Question Types.md` | Normalized into app data + archived source | Core Grammar |
| `Core Grammar/Embedded WH clauses.md` | Normalized into app data + archived source | Core Grammar |
| `Core Grammar/Pronouns Possessives and Object Forms.md` | Normalized into app data + archived source | Core Grammar |
| `Core Grammar/Common Prepositions.md` | Normalized into app data + archived source | Core Grammar |
| `Core Grammar/Key Structure Differences.md` | Normalized into app data + archived source | Core Grammar |
| `Core Grammar/Frequent Modal Verbs.md` | Archived source / future restructure candidate | Modal Verbs / Core Grammar bridge |
| New authored topic: `Articles and Determiners` | Authored directly in app data | Core Grammar |
| New authored topic: `Gerunds and Infinitives` | Authored directly in app data | Core Grammar |
| New authored topic: `Passive Voice` | Authored directly in app data | Core Grammar |
| New authored topic: `Reported Speech` | Authored directly in app data | Core Grammar |
| New authored topic: `Comparatives and Superlatives` | Authored directly in app data | Core Grammar |

## Implementation Notes

- App-facing content remains English-first.
- Home is intended to work as a topic directory, not only as a section launcher.
- Detail routes may still show `Full explanation coming soon`, but their navigation structure is already stable.
- Archived Obsidian material remains available for future topic-by-topic deep migrations under `docs/archive/obsidian-info/`.
- `Articles and Determiners` is a new authored topic, not a migrated Obsidian source file.
- `Gerunds and Infinitives` is a new authored topic, not a migrated Obsidian source file.
- `Passive Voice` is a new authored topic, not a migrated Obsidian source file.
- `Reported Speech` is a new authored topic, not a migrated Obsidian source file.
- `Comparatives and Superlatives` is a new authored topic, not a migrated Obsidian source file.
