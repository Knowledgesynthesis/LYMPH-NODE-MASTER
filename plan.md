# **LYMPH NODE MASTER — OPTIMIZED MASTER PROMPT FOR EDUCATIONAL APP GENERATION**

A **mobile-first**, **dark-mode**, **offline-ready**, pathology-resident–level educational platform focused entirely on **lymph node pathology** — *benign, reactive, infectious, autoimmune, and neoplastic (Hodgkin & Non-Hodgkin lymphomas)* — exactly as taught in a **hematopathology rotation**, **surgical pathology rotation**, or standard lymph node pathology texts.

The app must teach:
- How to approach a lymph node biopsy  
- Architecture-based patterns  
- Reactive hyperplasias  
- Germinal center vs mantle vs marginal zones  
- Hodgkin lymphoma patterns  
- Non-Hodgkin lymphomas (small B-cell, large B-cell, T-cell)  
- Flow cytometry principles in LN workups  
- IHC panels & pitfalls (conceptual, non-lab-advice)  
- Ancillary testing (FISH, PCR, NGS — conceptual only)  
- Classic differentials and morphology patterns (schematic icons only)  
- Normal vs abnormal appearance  
- How to build a final synthetic diagnostic impression  

All content must be **synthetic**, **non-clinical**, **non-identifiable**, and **educational only**.  
No real images — **only icons / schematic diagrams**.  
No score tracking — **session-only assessments**.

---

# **MASTER PROMPT — Lymph Node Master Educational App Generator (SPECIALIZED VERSION)**

## **0. ROLE & MISSION**

You are:
- Product Manager  
- Staff Frontend Engineer  
- Senior Instructional Designer  
- Hematopathology SME (LN emphasis)  
- Immunophenotyping / Flow SME  
- Molecular Pathology SME  
- UX Writer  
- QA Engineer  

**Mission:**  
Build a complete, high-yield, pattern-based, resident-friendly lymph node pathology learning app that teaches systematic reasoning, nodal architecture, key differentials, and integration of morphology + IHC + flow + molecular clues.

The app must be:
- Mobile-first  
- Dark-mode optimized  
- Fully offline-capable  
- Synthetic cases  
- No user tracking  

---

# **1. INPUTS (TO FILL WHEN GENERATING)**

- **PRIMARY TOPICS:** {{TOPICS}}  
  Default: LN architecture, reactive hyperplasia, Hodgkin lymphoma, NHL (B-cell, T-cell), flow cytometry, IHC patterns, molecular correlations.

- **LEVELS:** {{LEVELS}}  
  Default: Pathology residents PGY1–PGY4; heme-path fellows.

- **CONTEXT:** {{CONTEXT}}  
  Default: Surgical path + hematopath rotations; lymph node signout; boards prep.

- **LEARNING OBJECTIVES:** {{LEARNING_OBJECTIVES}}  
  Examples:  
  - Describe normal lymph node anatomy.  
  - Distinguish reactive patterns: follicular, paracortical, sinus.  
  - Differentiate benign proliferations from malignant lymphoma.  
  - Understand IHC/flow cytometry patterns conceptually.  
  - Recognize HL vs NHL patterns.  
  - Use architecture + cytology + IHC for structured diagnosis.

- **CONSTRAINTS:** {{CONSTRAINTS}}  
  Must include:  
  - Dark-mode  
  - Offline  
  - Mobile-first  
  - Synthetic-only  
  - No PHI  
  - No user tracking  

- **REFERENCES:** {{REFERENCES}}  
  Optional conceptual alignment: WHO/ICC classification frameworks.

- **TONE:** {{VOICE_TONE}}  
  Default: Calm, structured, pattern-focused, clinically rigorous but educational.

---

# **2. EXECUTIVE SUMMARY & NAME OPTIONS**

**Goal:**  
Create the definitive lymph node pathology learning environment that teaches nodal architecture, reactive patterns, lymphomas, common pitfalls, and how to integrate ancillary data.

**Name Options:**  
- **Lymph Node Master** — “Architecture → Pattern → Immunophenotype → Diagnosis.”  
- **NodeDx Atlas** — “Understanding lymph nodes through structured reasoning.”  
- **HemeNode Studio** — “From reactive to neoplastic patterns.”  

**Success Criteria:**  
- Learners can identify normal LN architecture.  
- Users can interpret reactive vs neoplastic patterns.  
- Trainees understand key immunophenotypes conceptually (no lab advice).  
- Residents can recognize hallmark lymphoma patterns using icons.  
- Users can correctly classify synthetic cases into broad diagnostic categories.

---

# **3. PERSONAS & USE CASEES**

### PERSONAS
1. **Junior Resident (PGY1–2)**  
   Needs: Basics of architecture, reactive patterns.  
   Pain: “Every LN looks scary.”

2. **Senior Resident (PGY3–4)**  
   Needs: Immunophenotype-based reasoning.  
   Pain: Complexity of B-cell vs T-cell vs Hodgkin lymphomas.

3. **Heme-Path Fellow**  
   Needs: High-level differentials & integrated reporting.  
   Pain: Textbook complexity → need structured reasoning.

### USE CASES
- “Is this reactive or neoplastic?”  
- “How do I build an IHC panel conceptually?”  
- “Is this follicular lymphoma or reactive follicular hyperplasia?”  
- “What do flow cytometry patterns mean?”  
- “What does CD10+/BCL2+ in follicles represent?”  
- “When does paracortical hyperplasia mimic lymphoma?”  
- “How do I produce an integrated synthetic node diagnosis?”

---

# **4. CURRICULUM MAP & KNOWLEDGE GRAPH**

## MODULE A — Normal Lymph Node Anatomy
- Capsule, subcapsular sinus  
- Cortex: primary vs secondary follicles  
- Germinal centers  
- Mantle zone, marginal zone  
- Paracortex  
- Medullary cords & sinuses  
- Vascular & lymphatic flow (schematic)

---

## MODULE B — Reactive Patterns
- **Follicular hyperplasia**
  - Polarized germinal centers  
  - Tingible body macrophages  
  - BCL2-negative follicles (conceptual)  

- **Paracortical hyperplasia**
  - Expanded T-cell zones  
  - Viral/reactive patterns  

- **Sinus histiocytosis**
  - Open sinuses with histiocytes  

- **Granulomatous lymphadenitis** (schematic)  
- **Dermatopathic lymphadenopathy**

Patterns must be illustrated with **icons**, not photos.

---

## MODULE C — Hodgkin Lymphomas
- Classic Hodgkin:
  - Nodular sclerosis (lacunar cells icon)  
  - Mixed cellularity  
  - Lymphocyte-rich  
  - Lymphocyte-depleted  

- Immunophenotype (conceptual):
  - CD30+, CD15+, PAX5 weak  

- Reed-Sternberg cell icons

- Nodular lymphocyte-predominant HL:
  - “Popcorn cell” icon  
  - CD20+, CD45+, EMA+  

---

## MODULE D — Non-Hodgkin Lymphomas (B-cell)
### Small B-cell lymphomas
- CLL/SLL (proliferation centers)  
- Follicular lymphoma (CD10+/BCL2+ follicles)  
- Mantle cell lymphoma (Cyclin D1 icon; t(11;14))  
- Marginal zone lymphoma  
- Lymphoplasmacytic lymphoma (conceptual IgM clues)

### Large B-cell lymphomas
- DLBCL patterns  
- Burkitt lymphoma (starry-sky schematic; MYC translocation)  
- High-grade B-cell lymphomas (double-hit schema)

---

## MODULE E — T-cell & NK-cell Lymphomas
- Peripheral T-cell lymphoma (PTCL)  
- ALCL (CD30+, hallmark cells icon)  
- Angioimmunoblastic T-cell lymphoma  
- Sézary syndrome / Mycosis fungoides (schematic epidermotropism)  

---

## MODULE F — Flow Cytometry in LN Workup
- B-cell gating concepts  
- Kappa/Lambda ratio  
- CD19/CD20, CD5, CD10 patterns  
- T-cell markers (CD2, CD3, CD4/CD8)  
- Aberrant phenotypes  
- Pitfalls:
  - Partial involvement  
  - Low-level monoclonality vs reactive hyperplasia  

---

## MODULE G — Immunohistochemistry (Conceptual)
- B-cell markers  
- T-cell markers  
- Germinal center markers  
- Cyclin D1/MUM1/BCL2/BCL6  
- Pitfalls:
  - Non-specific staining  
  - Artifacts  
  - Must correlate with architecture  

(Again, **conceptual**, no lab instruction.)

---

## MODULE H — Molecular Tools (High-level)
- FISH for lymphoma  
- PCR-based clonality  
- NGS for B & T-cell lymphomas  
- Common fusions/translocations (schematic)  

---

## MODULE I — Diagnostic Pitfalls
- Reactive follicular hyperplasia vs FL  
- Florid progressive transformation of germinal centers  
- Necrotizing granulomas mimicking malignancy  
- Partial involvement issues  
- Overcalling atypia  
- Inadequate sampling / crush artifact  

---

## MODULE J — Integrated LN Reporting
- Architecture description  
- Cytology description  
- IHC summary (conceptual)  
- Flow summary (conceptual)  
- Molecular findings (if provided)  
- Final synthetic impression  
- Differential framing  
- When “Further classification requires additional studies” is appropriate  

---

## MODULE K — Synthetic Lymph Node Cases
- Reactive cases  
- Hodgkin cases  
- Small B-cell lymphoma cases  
- Large B-cell lymphoma cases  
- T-cell lymphoma cases  
- Partial involvement cases  
- Flow + IHC + molecular integrated cases  

---

# **5. INTERACTIVE MODELS**

| Interactive | Purpose | Inputs | Outputs | Visuals | Guardrails |
|------------|---------|--------|---------|---------|-----------|
| LN Architecture Explorer | Learn LN zones | Region selection | Description | Node schematic | Educational only |
| Reactive vs Neoplastic Sorter | Pattern triage | Descriptions | Category | Icon patterns | No diagnosis |
| Follicular vs FL Tool | Core differential | BCL2/CD10 clues | Reactive vs FL suggestion | Follicle diagrams | Conceptual |
| Hodgkin Pattern Finder | Identify HL subtypes | Feature clues | Subtype suggestion | RS-cell icons | Not diagnostic |
| Small B-cell Panel Navigator | B-cell lymphoma logic | IHC/flow clues | Category band | Tile UI | Educational |
| Flow Cytometry Gating Simulator | Interpret patterns | Synthetic dot-plots | Clonality suggestion | Iconic plots | Synthetic |
| T-cell Lymphoma Mapper | Pattern recognition | Clinical + morph clues | Possible T-cell category | Flowchart | Concept-only |
| Integrated LN Case Builder | Combine morph + IHC + flow | Case inputs | Synthetic report | Text template | Non-clinical |

---

# **6. ASSESSMENT (Session-Only)**

Question types:
- MCQ  
- Architecture identification  
- Reactive vs neoplastic  
- Follicular hyperplasia vs follicular lymphoma  
- Hodgkin subtype identification  
- Small B-cell lymphoma differentiation  
- Flow cytometry interpretation  
- Integrated case reasoning  

End-of-quiz:
- “You answered X/Y correctly this session.”  
- No storage of data  

---

# **7. LYMPH NODE REASONING FRAMEWORK**

1. **Architecture first**  
2. **Cytology**  
3. **Pattern recognition** (follicular, diffuse, paracortical, sinus)  
4. **IHC panel**  
5. **Flow cytometry**  
6. **Molecular clues**  
7. **Integration into broad diagnosis**  
8. **Address pitfalls & differentials**  

Pitfalls:  
- Overinterpreting partial involvement  
- BCL2 false positives/negatives  
- Immunoblastic reactive patterns mimicking lymphoma  
- Failing to correlate architecture with IHC  
- Mistaking PTGC for FL  

---

# **8. ACCESSIBILITY, EQUITY, SAFETY**

- WCAG 2.2 AA  
- High-contrast mode  
- Icons only; no real images  
- Inclusive case names  
- Educational only; no clinical advice  
- Synthetic data only  
- No tracking  

---

# **9. TECH ARCHITECTURE**

Stack:
- React + TypeScript  
- Tailwind + shadcn/ui  
- Zustand (session-only)  
- Service Worker for offline mode  

Routes:
- `/anatomy`  
- `/reactive`  
- `/hodgkin`  
- `/bcell`  
- `/tcell`  
- `/flow`  
- `/ihc`  
- `/molecular`  
- `/pitfalls`  
- `/cases`  
- `/assessment`  
- `/settings`

Settings only:
- Dark/light toggle  
- About  
- Disclaimers  

---

# **10. DATA SCHEMAS**

### Synthetic LN Case Schema

{
"id": "ln_case_15",
"architecture": "follicular",
"ihc": {"CD10": "positive", "BCL2": "positive"},
"flow": {"kappa_lambda": "restricted"},
"molecular": ["t(14;18)"],
"question": "Most consistent broad category?",
"options": ["Reactive follicular hyperplasia", "Follicular lymphoma", "Paracortical hyperplasia"],
"correct": "Follicular lymphoma",
"rationale": "BCL2+/CD10+ follicles + clonality + t(14;18)."
}


### IHC Concept Entry


{
"id": "bcl2_marker",
"name": "BCL2",
"pattern": "Positive in mantle zone & many B-cell lymphomas; negative in reactive germinal centers."
}


### Flow Phenotype Example


{
"id": "flow_example_3",
"population": "B-cells",
"clonality": "kappa-restricted",
"interpretation": "Suggestive of monoclonal B-cell population (synthetic)."
}


---

# **11. SCREEN INVENTORY & WIREFRAMES**

### HOME  
Modules: Anatomy • Reactive • Hodgkin • B-Cell • T-Cell • Flow • IHC • Molecular • Pitfalls • Cases • Assessment • Settings

### MODULE OVERVIEW  
- Summary  
- Sub-lessons  
- Quick quiz

### LESSON PAGE  
- Architecture diagrams  
- Pattern tables  
- IHC/flow cheat-sheets  
- Pitfall callouts  

### CASE ENGINE  
- Morph + IHC + flow + molecular  
- Synthetic reasoning  
- Instant feedback  

### ASSESSMENT  
- 10–20 questions  
- Session-only score  

### SETTINGS  
- Dark/light  
- About  
- Disclaimer  

---

# **12. COPY & CONTENT KIT**

Examples:
- “Start with architecture before reaching for IHC.”  
- “BCL2 negativity in germinal centers is a reassuring reactive feature.”  
- “Paracortical expansion suggests viral/reactive processes.”  
- “Clonality is supportive, not diagnostic alone—integrate architecture.”  
- “HL diagnosis relies on identifying RS cells in the right background.”  

Glossary includes:  
- Germinal center, mantle zone, marginal zone, tingible body macrophage, RS cell, hallmark cell, starry-sky, immunoblastic, PTGC, etc.

---

# **13. CREATOR-SIDE A/B TESTING** *(No in-app tracking)*  
Ideas:
- Pattern-based vs architecture-first teaching  
- Flow-based vs IHC-based case triage  
- Pitfall-recognition modules

---

# **14. QA CHECKLIST**
- Architecture diagrams correct  
- Reactive vs neoplastic distinctions accurate  
- HL & NHL patterns conceptually accurate  
- Flow & IHC explanations high-level, non-advisory  
- Synthetic data only  
- No PHI  
- Dark-mode & offline capability validated  

---

# **15. ROADMAP**
- M0: Anatomy + Reactive  
- M1: Hodgkin + Small B-cell Lymphomas  
- M2: Large B-cell + T-cell  
- M3: Flow + IHC + Molecular  
- M4: Pitfalls + Integrated Cases  
- M5: 100+ case bank  

---

# **ACCEPTANCE CRITERIA**
- Covers full lymph node pathology curriculum  
- Includes architecture, reactive, HL, NHL, flow, IHC, and molecular concepts  
- All content synthetic and non-diagnostic  
- Mobile-first, dark-mode, offline  
- No tracking or PHI  
- Pattern-based, structured, trainee-friendly  

---

## **NOW GENERATE**
Using this blueprint, produce the full **Lymph Node Master** app specification in the required Output Format and constraints.  
