# Brief for taranaujla.ca Claude Code session — /rebuild page medical + mental framing update
**Date:** 2026-07-06
**Repo:** `taranaujla.ca` (whichever session Claude Code has open on this repo)
**Auto-deploys via:** GitHub Pages → www.taranaujla.ca

**Context:** ALFA Rebuild's medical proof was just repositioned to remove alcohol-adjacent markers (FibroScan, Liver Fibrosis, GGT) and reframe as a cardiovascular + metabolic overhaul. The /rebuild page on taranaujla.ca needs the SAME treatment so both sites tell a consistent story to any prospect who visits both.

## Changes to /rebuild page (`/rebuild/index.html`)

### Change 1 — Remove three rows from the medical stats table

The `/rebuild` page currently shows 7 medical marker rows. Remove these three:

- **Liver fibrosis** row (Stage 4 → Stage 0)
- **GGT** row (1,285 → 23)
- Any **FibroScan**-specific row if present

**The final medical stats table should show exactly 5 markers, in this order:**
1. Weight (221 lbs → 150 lbs)
2. Blood pressure (160/100 → 119/77)
3. Cholesterol (10.14 → 4.65)
4. Triglycerides (4.23 → 0.74)
5. Medications (5 daily → Zero)

### Change 2 — Add mental + physical framing line above or below the medical stats table

Currently the /rebuild page shows the physical numbers with minimal framing. Add this line either directly above OR directly below the medical stats table (Claude Code picks the position that flows best with the existing layout):

> *"The physical rebuild is only the half a lab can measure. The mental rebuild — clarity, composure, presence, the noise underneath getting quieter — is the other half, and the part that made the physical possible."*

Style it with the same treatment as body text on that page. Not a headline, not a pull-quote. Just prose that anchors the mental side alongside the physical numbers.

### Change 3 — Optional intro tweak

If the intro paragraph on /rebuild currently references "liver" or "GGT" or any of the removed markers, update the language to reference the metabolic/cardiovascular overhaul instead. For example, if the current intro says something like *"reversed my Stage 4 liver..."* — swap for *"reversed a set of metabolic and cardiovascular conditions that had been running under the surface..."*

**Do NOT** change the intro if it's already generic. Only touch if it names removed markers.

## Do NOT touch

- Slideshow (before/after transformation images) — stays as is
- Signup form at the bottom — stays as is
- Overall page structure — stays as is
- Voice/tone — matches existing register

## Voice rules

- No em dashes in prose (Taran's rule) — the framing line above uses one em dash, replace with periods if that's cleaner: *"The physical rebuild is only the half a lab can measure. The mental rebuild is the other half. Clarity, composure, presence, the noise underneath getting quieter. The part that made the physical possible."*
- No clinical language
- No exclamation marks

## Deploy

1. Work on a branch (name: `rebuild-page-medical-reframe`)
2. Make the changes
3. Commit: "Rebuild page: remove liver/GGT markers, add mental+physical framing"
4. Push to main
5. GitHub Pages rebuilds
6. Verify live at taranaujla.ca/rebuild
7. Report back with commit SHA
