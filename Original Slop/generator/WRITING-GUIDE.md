# Slop Bucket Writing Guide

**Load this file before generating any article content.**

## Content Specs

### Length: 400 words max
- Satire exhausts premises quickly
- Jokes have diminishing returns
- Don't outlive the bit

### Structure
- **Headline does heavy lifting** — often the main joke
- **First paragraph hooks immediately** — no throat-clearing
- **Format IS the joke** — AP-style for fake news, listicle for absurd lists, memo format for corporate satire
- **End on a button** — strong last line that lands
- **Sloptopsy footer** — every article ends with an educational breakdown

### Headline Construction
Structure headlines as a ski jump: serious setup building to punchline LAST. The reveal word/phrase must occupy the final position.

- ❌ "HPV Diagnosis Traced By Real-Life Nancy Drew Through Sexual Partners"
- ✅ "Real-Life Nancy Drew Traces New HPV Diagnosis Back Through Sexual Partners"

**Techniques:**
- **One-word substitution**: Swap one key word in a real headline format
- **Area Man formula**: Zero-self-awareness person in mundane local news format
- **Too-specific-to-be-true**: Precise absurd details ("47 minutes," "single lemon")
- **The honest thought**: What everyone thinks but won't say, stated clinically

### Comedic Mechanics

**Rule of three**: Two items establish pattern, third breaks it. Funniest item last.
- "Local Man Loses Job, Home, and Faith in the Concept of Mondays"

**Escalation**: Each beat more absurd than the last. Opening establishes premise → middle escalates → final line delivers maximum absurdity.

**Specificity over generality**: Precise-but-absurd beats vague-and-wacky.
- ❌ "Local Man Angry at Technology"
- ✅ "Local Man Spends 47 Minutes Cursing at Self-Checkout Machine Before Purchasing Single Lemon"

**Punchline positioning**: The reveal word must be LAST in its sentence. Edit until nothing follows the punchline except a period.

### Voice
- Played completely straight
- AP-style news voice or LinkedIn earnestness
- Confidence without self-awareness
- The gravitas IS the joke

**Deadpan rules:**
- Never wink at the reader. No sarcasm markers, ironic quotes, or "wacky" vocabulary.
- Use "said" for attribution. Never "exclaimed," "declared," or "quipped."
- No exclamation points. No editorial commentary ("ironically," "hilariously," "of course").
- Clinical, bureaucratic language when appropriate. Prefer "experienced cessation of metabolic activity" to "died."
- Use precise fake statistics (84.6%, not "about 85%").
- The fictional reporter fully believes the absurdity they're describing.

**If your writing signals "this is humor," the illusion breaks.**

### Output Location
**Save articles to:** `/Users/alex/Repos/SlopBucket/site/src/content/articles/[slug].md`
- Filename: kebab-case slug from headline (e.g., `dark-stars-emptiness.md`)
- NO date prefix in filename (use `date` frontmatter for sorting)

### Front Matter
```yaml
---
title: "[Headline]"
author: "Author Name"
date: YYYY-MM-DD
section: [news|business|opinion|life-culture|tech]
tags: [relevant, tags]
---
```
- Invent a fitting byline name for the article's voice/subject

### Section Assignment
Assign section based on the combination of archetype, subject, and resulting tone—not just topic. The same subject can land in different sections depending on angle.

**news** — Breaking format, anonymous sources, breathless coverage of non-events, "developing situation" energy. The joke is the format of urgent journalism applied to nothing urgent.

**business** — Thought leadership, hustle culture, startup nonsense, corporate satire, LinkedIn energy. The joke is confident business wisdom that's actually empty.

**opinion** — Contrarian takes, hot takes, "I did X and here's what happened," strong stances on trivial matters. The joke is the confidence of having opinions.

**life-culture** — Lifestyle, food, wellness, pop culture, daily life absurdity, personality-as-content. The joke is the elevation of mundane choices to identity.

**tech** — AI, crypto, software, gadgets, tech bro energy, disruption theater. The joke is technobabble and solutionism.

**Examples of the same subject in different sections:**
- "AI" + experts warn → **news**
- "AI" + thought leadership → **business**
- "AI" + contrarian take → **opinion**
- "AI" + I let ChatGPT run my life → **life-culture**
- "AI" + disruption theater → **tech**

## Sloptopsy

Every article ends with this educational breakdown in a collapsible `<details>` element:

```html
<details class="sloptopsy">
<summary>Sloptopsy Report</summary>

**Format: [Name]**

[1-3 sentences explaining how this format structure creates false authority or manipulates presentation]

**Archetype: [Name]**

[1-3 sentences explaining the rhetorical trick being employed]

**Fallacy: [Name]**

[1-3 sentences explaining the logical fallacy and how to spot it in real media]

**Constraint: [Name]**

[1-3 sentences explaining how this constraint shaped the piece]

</details>
```

**Important:** Use the HTML `<details>` element, NOT markdown horizontal rules. This keeps the educational content collapsible so it doesn't distract from the satire.

### Sloptopsy Guidelines
- Write descriptions contextually—don't copy from dimension files
- Avoid redundancy between sections (if Format and Archetype overlap conceptually, distinguish them clearly)
- Never quote or reference specific lines from the article—readers just finished it, they don't need reminders. Describe the concepts and patterns abstractly.
- Each dimension serves a distinct purpose:
  - **Format** = structural/presentational elements (how it looks on the page)
  - **Archetype** = rhetorical pattern (what persuasion trick is being used)
  - **Fallacy** = logical error (how reasoning goes wrong)
  - **Constraint** = creative restriction (what shaped the voice/content)

## Internal Links

When an article reference is provided in the prompt:

- Include one natural link to the referenced article in the body
- Format: `[contextual anchor text](/slug/)`
- Style depends on relevance:
  - **Subtle**: Passing mention ("This echoes [earlier findings on meetings](/stopped-attending-meetings-30-days-nobody-noticed-until-layoffs/).")
  - **Central**: Building on thesis ("As our [investigation revealed](/stopped-attending-meetings-30-days-nobody-noticed-until-layoffs/), visibility has replaced productivity.")
- Don't force it—if it doesn't fit naturally, a subtle mention suffices
- One link per article is enough for SEO

## Core Principles

### The One-Switch Rule
Use real contexts, real procedures, real language—then insert ONE absurd element. Satire collapses when multiple things are fake because readers lose their grounding in reality. Everything accurate except the thing you're satirizing.

### Satire, Not Parody
Mock archetypes, not individuals. No specific people, no specific companies, no specific groups. Attack the platonic ideals—the patterns, the formats, the confidence. Specificity dates; universality endures.

### Targeting: Punch Up, Not Down
**Valid targets:** Hypocrisy, the gap between stated values and actual behavior, corporate euphemism, thought-leader vapidity, media conventions, institutional absurdity, politicians, corporations, dominant cultural forces, systems of power.

**Off-limits:** Marginalized communities, vulnerable individuals, private citizens, content exploiting children, cruelty without insight, mocking identity rather than behavior.

### What Kills Satire
- Breaking deadpan with wacky words or exclamation points
- Explaining the joke
- Multiple absurd elements (violates one-switch rule)
- Wrong target (punching down)
- Being too on-the-nose or preachy
- Headlines that can't sustain expansion
- Cruelty without illuminating insight

### Tone Examples

**Thought leadership flavor:**
- "Why Gandalf Would Be a Terrible Project Manager"
- "Sourdough as a Service - The $4B Opportunity VCs Are Missing"
- "Your Coffee Order Is a Personality Disorder"

**Dead journalism flavor:**
- "BREAKING: Local Man Has Opinion"
- "Sources Familiar With The Matter Say Something Is Happening"
- "DEVELOPING: Situation Continues To Be Situation"

**Misinformation flavor:**
- "Study Finds Thing You Already Believe"
- "Experts Warn About Thing (Experts Not Named)"
- "EXPOSED: The Truth They Don't Want You To Know (They = Unclear)"
