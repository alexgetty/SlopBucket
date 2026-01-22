---
name: headlines
description: "Generate satirical headline options for Slop Bucket. Usage: /headlines <count>"
---

# Headlines Skill

Generate satirical headline options from the Slop Bucket prompt generator.

## Arguments

```
/headlines [count]
```

- `count` (optional): Number of headlines to generate. Default: 5

## Workflow

### Phase 1: Generate Prompts

1. Run the headlines bash script:
   ```bash
   "/Users/alex/Repos/SlopBucket/Original Slop/generator/headlines" <count>
   ```

2. Parse the output. Each prompt contains:
   - **Format**: The container/genre (Breaking News, Listicle, FAQ, etc.) with headline templates and examples
   - **Archetype**: The rhetorical trick (contrarian take, experts warn, etc.)
   - **Subject(s)**: 1-2 topics to write about, with keywords
   - **Constraint(s)**: 1-2 creative restrictions (required phrases, perspectives, fake citations, etc.)

3. Store ALL prompt details in working memory for later retrieval.

### Phase 2: Generate Headlines

For each prompt, generate ONE punchy headline that:
- Uses the format's headline templates as a STARTING POINT
- Interpret freely—tweak, combine, riff on the templates
- Incorporate the subject(s) naturally
- Keep it UNDER 15 WORDS (ideally under 10)
- The joke IS the headline—don't set up, deliver
- Sounds like it belongs on The Onion or McSweeney's
- Played completely straight (the gravitas IS the joke)

Display as a numbered list:
```
1. [HEADLINE]
2. [HEADLINE]
...
```

### Phase 3: User Selection

Wait for user to respond with a number (e.g., "3" or "I'll take 3").

### Phase 4: Write Article

**REQUIRED: Before writing, read the writing guide:**
```bash
Read "/Users/alex/Repos/SlopBucket/Original Slop/generator/WRITING-GUIDE.md"
```

This contains all content specs, voice guidelines, and Sloptopsy formatting requirements. Follow it exactly.

Then retrieve the full prompt for the selected headline and write the article according to the guide.

### Phase 5: Revision

User will heavily revise. This is a draft/starting point, not final copy.

## Example Flow

```
User: /headlines 3

Claude: [Runs script, generates 3 prompts]

1. BREAKING: Experts Warn Your Spreadsheet Naming Convention May Be Linked to Early Death
2. I Replaced Every Meeting With a Slack Emoji for 30 Days. My CEO Called It "Visionary."
3. Why The Mandalorian Would Be a Terrible Scrum Master: A Data-Driven Analysis

Which one?

User: 2

Claude: [Reads WRITING-GUIDE.md, then writes article with Sloptopsy section]
```
