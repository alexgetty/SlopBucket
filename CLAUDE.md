# Slop Bucket

**Domain:** slopbucket.blog
**What:** Satirical news/editorial site

## What We're Satirizing

The broader information landscape:
- **Misinformation culture** — the sheer volume of confident wrongness everywhere
- **Dead journalism** — media that stopped investigating and started aggregating hot takes
- **Thought leadership** — LinkedIn lunatics, TED talk energy, "I learned this from my Uber driver"
- **Hot take economy** — everyone has an opinion, nobody has sources
- **Rage bait & engagement farming** — content designed to provoke, not inform

We're holding a mirror up to the information ecosystem and making it absurd enough that people might notice.

## Core Principles

### Satire, Not Parody
We mock archetypes, not individuals. No specific people, no specific companies, no specific groups. We attack the platonic ideals—the patterns, the formats, the confidence. This keeps it legally clean and funnier—specificity dates, universality endures.

### Human-Guided Content
The name "Slop Bucket" makes everyone assume AI slop. The content is AI-assisted but human-guided and heavily revised.

**The workflow:**
1. Run `/headlines N` to generate N random prompt combinations
2. Claude generates punchy headlines for each
3. Alex picks one
4. Claude writes a draft article (400-800 words)
5. Alex heavily revises—this is the human layer
6. Publish

The AI does first-draft heavy lifting. The human provides taste, judgment, and revision. This is never disclosed. Let people assume pure AI. Let them be surprised by how good it is.

### The Prompt Generator
Located in `/Original Slop/generator/`

**Components:**
- **Archetypes** (33): Format templates like "experts warn about nothing," "contrarian take on beloved thing"
- **Subjects** (131): Topics across pop culture, business, daily life, tech, food, wellness, finance, etc.
- **Constraints** (55): Required phrases, perspectives, fake citations, emotional beats, format requirements

**The `/headlines` skill:**
1. Runs the bash script to generate random prompt combos
2. Claude generates headlines from those prompts
3. User selects one
4. Claude writes the article

## Content Specs

### Length: 400-800 words
Research-backed for satire specifically:
- Satire exhausts premises quickly
- Jokes have diminishing returns
- The Onion and McSweeney's both prefer under 1,000 words
- Don't outlive the bit

### Structure
- **Headline does heavy lifting** — often the main joke
- **First paragraph hooks immediately** — no throat-clearing
- **Format IS the joke** — AP-style for fake news, listicle for absurd lists, memo format for corporate satire
- **End on a button** — strong last line that lands

### Voice
- Played completely straight
- AP-style news voice or LinkedIn earnestness
- Confidence without self-awareness
- The gravitas IS the joke

## Design Direction

### Aesthetic: 90s OS Browser Frame
The entire site lives inside a fake 90s-style OS browser window. Generic—not Windows XP specifically, legally distinct.

**MVP (ship tonight):**
- Static centered window chrome
- No drag/resize/close functionality
- Just the visual frame containing the news site

**Stretch goals (later):**
- Draggable, resizable, closeable windows
- Easter eggs in the "OS" layer (other programs, hidden content)
- Notepad with draft posts, Recycle Bin with "deleted" takes, etc.

### Visual Philosophy
90s web aesthetic executed with intention—not ironic bad design, but the 90s visual vocabulary used with craft. Like wearing vintage with tailoring.

Key elements:
- Window chrome (title bar, controls, menu bar, toolbar, status bar)
- Beveled edges, visible gradients, chunky UI
- That era's grays and teals
- Busier/cluttered but still readable
- NO Comic Sans (that's the line)

Must remain accessible: proper contrast, semantic HTML, readable text. We're doing the aesthetic bit without breaking WCAG.

### Tone
Played completely straight. The gravitas IS the joke.

**Thought leadership flavor:**
- "Why Gandalf Would Be a Terrible Project Manager"
- "Sourdough as a Service - The $4B Opportunity VCs Are Missing"
- "Your Coffee Order Is a Personality Disorder"
- "I Let My Uber Driver Run My Company For a Week"

**Dead journalism flavor:**
- "BREAKING: Local Man Has Opinion"
- "Sources Familiar With The Matter Say Something Is Happening"
- "EXCLUSIVE: We Aggregated These Tweets So You Don't Have To"
- "DEVELOPING: Situation Continues To Be Situation"

**Misinformation flavor:**
- "Study Finds Thing You Already Believe"
- "Experts Warn About Thing (Experts Not Named)"
- "EXPOSED: The Truth They Don't Want You To Know (They = Unclear)"

## Tech Stack
TBD - keeping it simple. Likely static HTML/CSS to start. No premature infrastructure.

## File Structure
```
/mockups/           # HTML mockups for design exploration
  01.html - 15.html   # Initial explorations
  mvp-draft-*.html    # Refined MVP candidates
```
