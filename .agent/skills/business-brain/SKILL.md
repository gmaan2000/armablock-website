---
name: business-brain
description: Extracts and defines the immutable Business DNA for a project, serving as the canonical source of truth for all brand, copy, and architectural decisions.
---

# 🧠 Business Brain Skill

**Purpose:** To extract, define, and codify the immutable identity ("DNA") of a business. This document acts as the single source of truth for what the business is, who it serves, how it makes money, what it believes, and how it communicates. Any AI, operator, or system reading the resulting `business-dna.md` should treat it as canonical.

## 🚀 When to use this skill
- When starting a new project, business, or website.
- When the user asks to "Initialize the Business Brain", "Create a Business DNA", or "Define the brand identity".
- Before generating marketing copy, designing a landing page (e.g., prior to `one-shot-website`), or making high-level architectural decisions where brand alignment is crucial.

## 🛠️ How to execute this skill

1. **Acknowledge and Initiate:** Tell the user you are initializing the Business Brain and will ask them a series of questions to build their canonical `business-dna.md` file.
2. **Interview Process:** Ask the user questions based on the "Business DNA Framework" below. *Do not overwhelm the user with all questions at once.* Ask them in logical chunks (e.g., Part 1 first, then Part 2, then Part 3). Let them answer each chunk before moving to the next.
3. **Draft the Document:** Once you have sufficient answers, draft the complete `business-dna.md` document using the exact template structure provided below.
4. **Save and Finalize:** Save the file to the root of the current project directory as `business-dna.md`. Ensure the user reviews it.
5. **Enforce Context:** Remind the user (and yourself) that future agents and skills should reference this `business-dna.md` file when working on this project (e.g., by checking if it exists before writing copy).

---

## 🧬 The Business DNA Framework (Template)

Below is the structure you must use to build the `business-dna.md` file. Use this exact structure but fill in the bracketed `[...]` information with the details extracted from the user.

### PART 1 — ⚙️ THE MACHINE
*The business: what it is, who it serves, how it runs*

**🎯 TARGET CUSTOMER**
Who is your ideal customer?
*   **Customer Profile:**
    *   **Gender:** [Primary gender demographic]
    *   **Age Range:** [e.g. 25–45]
    *   **Location:** [Countries / regions served]

**🧩 PROBLEMS YOU SOLVE**
The top 3 pain points your business removes
*   **Problem #1** — [Short, outcome-focused description]
*   **Problem #2** — [Short, outcome-focused description]
*   **Problem #3** — [Short, outcome-focused description]

**🗺️ CUSTOMER JOURNEY**
From first touch to payment
*Explain how someone discovers you, builds trust, and becomes a customer — step by step.*
*   *[Example flow: Discovery → Education → Trust → Offer → Conversion → Delivery → Retention]*

**📊 KEY METRICS**
The numbers that matter
| Metric | Value |
| :--- | :--- |
| Monthly Revenue | $ |
| Total Monthly Costs | $ |
| Monthly Profit | $ |
| Monthly Clicks | |
| Total Leads | |
| Conversion Rate | % |
| Retention / Delivery Rate | % |
| CAC (Customer Acquisition Cost) | $ |
| LTV (Customer Lifetime Value) | $ |

**👥 TEAM**
Who’s involved & what they own
*   **[Role / Name]** — [Primary responsibility]
*   **[Role / Name]** — [Primary responsibility]

**📍 CURRENT STATE**
Reality check
*   **Biggest Bottleneck:** The single thing slowing growth right now.
*   **Current Focus:** What you’re actively fixing or building.
*   **Dream Outcome:** The result you want but don’t yet have.
*   **Core Links:** [yourwebsite.com]

### PART 2 — 🧠 THE MAKER
*The person: your story, credibility, and edge*

**✍️ YOUR STORY**
Why this business exists
*Your origin story — what problem you saw, why you cared, and why you acted.*

**🏆 CREDIBILITY**
Why people should trust you
*Wins, numbers, milestones, exits, credentials, or proof points that build authority.*

**⚔️ YOUR EDGE**
What makes you different
*Your unique angle, belief, or method — why your take stands out in the market.*

**🧠 AUDIENCE AWARENESS**
How sophisticated is your audience?
*[Beginner / Intermediate / Advanced] — and how that changes how you communicate, sell, and teach.*

### PART 3 — 🗣️ THE VOICE
*How the business sounds and communicates*

**Elevator Pitch:**
*One single sentence summarizing everything: "We help [Customer] achieve [Dream Outcome] by solving [Problem] through [Your Edge]."*

**Brand Voice & Tone:**
*   **Tone:** [e.g., Witty, authoritative, simple, controversial]
*   **Vocabulary:**
    *   *Words we ALWAYS use:* [...]
    *   *Words we NEVER use:* [...]

**Core Objections & Rebuttals:**
*Why do people typically say "no" to this? How do we counter it?*
*   **Objection 1:** [...] -> **Rebuttal:** [...]
*   **Objection 2:** [...] -> **Rebuttal:** [...]
