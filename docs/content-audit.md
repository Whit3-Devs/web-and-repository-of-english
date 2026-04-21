# Content Audit — `obsidian-info`

This audit maps the current Obsidian source material into app-ready content groups.

## Status Labels

- **Ready for cheatsheet data**: structured enough to become typed app data now.
- **Needs English cleanup**: useful content, but contains Spanish text that must be normalized before app import.
- **Needs restructuring**: useful content, but not yet shaped for quick cards.
- **Deep explanation only**: better suited for future topic detail pages than for short cheatsheet cards.

## Verb Tenses

Primary implementation source for the first content expansion.

| Source | Status | App Target |
| --- | --- | --- |
| `Verb Tenses/Present/Present Simple.md` | Ready for cheatsheet data | Verb Tenses |
| `Verb Tenses/Present/Present Continuous.md` | Ready for cheatsheet data | Verb Tenses |
| `Verb Tenses/Present/Present Perfect.md` | Ready for cheatsheet data | Verb Tenses |
| `Verb Tenses/Present/Present Perfect Continuous.md` | Ready for cheatsheet data | Verb Tenses |
| `Verb Tenses/Past/Past Simple.md` | Ready for cheatsheet data | Verb Tenses |
| `Verb Tenses/Past/Past Continuous.md` | Ready for cheatsheet data | Verb Tenses |
| `Verb Tenses/Past/Past Perfect.md` | Ready for cheatsheet data | Verb Tenses |
| `Verb Tenses/Past/Past Perfect Continuous.md` | Ready for cheatsheet data | Verb Tenses |
| `Verb Tenses/Future/Future Simple.md` | Ready for cheatsheet data | Verb Tenses |
| `Verb Tenses/Future/Future Continuous.md` | Ready for cheatsheet data | Verb Tenses |
| `Verb Tenses/Future/Future Perfect.md` | Ready for cheatsheet data | Verb Tenses |
| `Verb Tenses/Future/Future Perfect Continuous.md` | Ready for cheatsheet data | Verb Tenses |
| `Verb Tenses/Future/Future Going To.md` | Ready for cheatsheet data | Verb Tenses |
| `Verb Tenses/Verb Tenses Overview.md` | Deep explanation only | Future overview/detail page |
| `Verb Tenses/* Reference Tables.md` | Deep explanation only | Future reference-table page |
| `Verb Tenses/Verb Tenses Timeline.canvas` | Deep explanation only | Future visual explanation |

## Modal Verbs

Good second-phase content after Verb Tenses are stable.

| Source | Status | App Target |
| --- | --- | --- |
| `Modal Verbs/Ability and Permission.md` | Migrated and archived | Modal Verbs |
| `Modal Verbs/Advice and Obligation.md` | Migrated and archived | Modal Verbs |
| `Modal Verbs/Polite Requests.md` | Migrated and archived | Modal Verbs |
| `Modal Verbs/Possibility and Probability.md` | Migrated and archived | Modal Verbs |
| `Modal Verbs/Would and Hypotheticals.md` | Migrated and archived | Modal Verbs |
| `Modal Verbs/Modal Verbs Overview.md` | Needs English cleanup | Modal Verbs overview |

## Core Grammar

Useful third-phase content, but several notes need English cleanup before app import.

| Source | Status | App Target |
| --- | --- | --- |
| `Core Grammar/English Auxiliaries.md` | Needs English cleanup | Core Grammar |
| `Core Grammar/WH Questions and Question Types.md` | Needs English cleanup | Core Grammar |
| `Core Grammar/Embedded WH clauses.md` | Needs English cleanup | Core Grammar |
| `Core Grammar/Pronouns Possessives and Object Forms.md` | Needs English cleanup | Core Grammar |
| `Core Grammar/Common Prepositions.md` | Needs English cleanup | Core Grammar |
| `Core Grammar/Key Structure Differences.md` | Needs English cleanup | Core Grammar |
| `Core Grammar/Frequent Modal Verbs.md` | Needs restructuring | Modal Verbs / Core Grammar bridge |

## Implementation Notes

- `obsidian-info` is a source folder, not the runtime data model.
- App-facing content must stay English-first.
- Verb Tense detail routes exist now, but full explanations are intentionally marked as coming soon.
- Future imports should continue extracting short cheatsheet summaries first, then deep explanations topic by topic.
- Migrated Modal Verbs source notes are archived under `docs/archive/obsidian-info/Modal Verbs/`.
