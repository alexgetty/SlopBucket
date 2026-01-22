---
allowed-tools: Bash(python3:*), Read, Write, Glob, AskUserQuestion
---

Generate trending satire headlines from today's news.

## Context

**Today's Headlines:**
```
!`python3 "/Users/alex/Repos/SlopBucket/Original Slop/generator/trends.py" scrape 2>&1`
```

**Generator Directory:** `/Users/alex/Repos/SlopBucket/Original Slop/generator/`

## Pipeline

### Step 1: Extract Keywords
From the headlines above, extract 5-10 meaningful trending topics. Skip:
- Publisher names (CNN, BBC, NPR, etc.)
- Generic words (says, new, report, etc.)
- Non-specific terms

Look for: Named entities, events, policies, products, people, places that are newsworthy today.

### Step 2: Build 5 Prompts
For each prompt, pick randomly from the generator files:
- 1 format (format-*.md files)
- 1 archetype (files with `type: archetype`)
- 1-2 constraints (files with `type: constraint`)
- 1-2 fallacies (files with `type: fallacy`)

For subjects: Use 1-2 of your extracted trending keywords as placeholder subjects (don't look for .md files - these are new topics).

Read the selected files to get their titles and descriptions for the prompt context.

### Step 3: Generate 5 Headlines
For each prompt combination, generate one punchy satire headline:
- Under 15 words
- The headline IS the joke
- Use the format templates as inspiration
- Apply the archetype's satirical angle
- Incorporate the constraint's required element
- Let the fallacy flavor the logic

Present the 5 headlines numbered 1-5 with their prompt components visible.

### Step 4: User Selection
Use AskUserQuestion to let the user pick their favorite headline (1-5).

### Step 5: Create Subject Files
For the keywords used in the selected headline, create proper .md subject files in the generator directory:

```yaml
---
type: subject
tags: [subject, trending-import]
imported_date: YYYY-MM-DD
---

# Keyword Title

[Write a satirical 1-2 sentence description matching the style of existing subjects like taylor-swift.md or coffee.md]

**Keywords:** [related terms]
```

Use kebab-case filenames: `tariffs.md`, `ravens-playoff.md`, etc.

### Step 6: Write Article
Write the full 400-800 word satirical article using:
- The selected headline
- The now-complete subject files for rich context
- The selected format's article structure
- Completely straight-faced AP-style voice

End with a collapsible Sloptopsy section:

```html
<details class="sloptopsy">
<summary>Sloptopsy Report</summary>

**Format: [Name]**

[Description of the format and how it manipulates presentation]

**Archetype: [Name]**

[Description of the satirical pattern being employed]

**Fallacy: [Name]**

[Explanation of the logical fallacy and how to spot it in real media]

**Constraint: [Name]**

[Brief explanation of the constraint applied]

</details>
```

**Save the article to:** `/Users/alex/Repos/SlopBucket/site/src/content/articles/[slug].md`
- Use kebab-case slug derived from headline (e.g., `dark-stars-emptiness.md`)
- NO date prefix in filename (the `date` frontmatter field handles sorting)

### Step 7: Write Audit Log
Create a log file at `/Users/alex/Repos/SlopBucket/Original Slop/generator/logs/YYYY-MM-DD-HHMMSS.md` with:
- Scraped headlines (all of them)
- Extracted keywords
- All 5 prompt combinations with their components
- All 5 generated headlines
- User selection
- Created subject files
- Article title

## Output
After completing the pipeline, summarize what was created:
- New subject files added to generator
- Article ready for review
- Log file location
