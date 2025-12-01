import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export function Pitfalls() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Diagnostic Pitfalls</h1>
        <p className="text-muted-foreground">
          Common challenges and how to avoid misdiagnosis in lymph node pathology.
        </p>
      </div>

      <Card className="border-orange-500/50">
        <CardHeader>
          <CardTitle>Overarching Principle</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm font-medium">
            When in doubt, favor a benign diagnosis unless there is clear evidence of malignancy.
            Overcalling lymphoma has serious consequences for patients.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Reactive Follicular Hyperplasia vs Follicular Lymphoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">The Pitfall</h4>
            <p className="text-sm text-muted-foreground">
              Florid reactive follicular hyperplasia can appear crowded and raise concern for follicular lymphoma.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">How to Avoid</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Look for variability in follicle size and shape (reactive) vs monotony (FL)</li>
              <li>Tingible body macrophages present → reactive</li>
              <li>Follicle polarization → reactive</li>
              <li>Intact mantle zones → reactive</li>
              <li><strong>BCL2 in germinal centers:</strong> Negative → reactive; Positive → FL</li>
              <li>Flow or molecular: Polyclonal → reactive; Monoclonal → FL</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Progressive Transformation of Germinal Centers (PTGC)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">The Pitfall</h4>
            <p className="text-sm text-muted-foreground">
              Large, expanded follicles with mantle cell infiltration can mimic follicular lymphoma or nodular lymphocyte-predominant HL.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">How to Avoid</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>PTGC shows infiltration of mantle cells INTO germinal centers ("moth-eaten" appearance)</li>
              <li>BCL2 negative in germinal center regions (reactive feature)</li>
              <li>No light chain restriction</li>
              <li>PTGC may precede or coexist with NLPHL - clinical follow-up important</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Paracortical Hyperplasia vs T-Cell Lymphoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">The Pitfall</h4>
            <p className="text-sm text-muted-foreground">
              Florid paracortical hyperplasia with immunoblasts can raise concern for peripheral T-cell lymphoma.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">How to Avoid</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Preserved overall architecture → reactive</li>
              <li>Mixture of small and large lymphocytes → reactive</li>
              <li>Normal T-cell phenotype (CD3+ CD4+ and CD8+, intact CD5/CD7) → reactive</li>
              <li>Polyclonal T-cells by TCR studies → reactive</li>
              <li>Clinical history (viral infection, vaccination, drug reaction) → reactive</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Dermatopathic Lymphadenopathy vs Lymphoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">The Pitfall</h4>
            <p className="text-sm text-muted-foreground">
              Can occur with or without mycosis fungoides. Expanded paracortex may raise concern.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">How to Avoid</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Look for Langerhans cells and melanin-laden macrophages (dermatopathic features)</li>
              <li>If only dermatopathic pattern without discrete lymphoma, likely reactive</li>
              <li>If clusters of atypical lymphocytes with cerebriform nuclei → consider mycosis fungoides involvement</li>
              <li>Correlate with clinical history of chronic skin disease</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Partial Lymph Node Involvement</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">The Pitfall</h4>
            <p className="text-sm text-muted-foreground">
              Small neoplastic populations can be obscured by reactive lymphoid tissue.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">How to Avoid</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Examine entire node at low power for subtle architectural changes</li>
              <li>Look for clusters of atypical cells, even if focal</li>
              <li>Flow cytometry can detect small neoplastic populations</li>
              <li>If clinical suspicion high, consider deeper levels or additional immunostains</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Granulomatous Inflammation vs Lymphoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">The Pitfall</h4>
            <p className="text-sm text-muted-foreground">
              Granulomas can occur in lymphoma or can be the primary pathology. Necrotizing granulomas can mimic malignancy.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">How to Avoid</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Well-formed granulomas in otherwise normal architecture → infectious/sarcoid workup</li>
              <li>Granulomas can occur in Hodgkin lymphoma - look for RS cells</li>
              <li>Consider special stains for organisms (AFB, GMS)</li>
              <li>Clinical correlation essential</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>CLL/SLL vs Mantle Cell Lymphoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">The Pitfall</h4>
            <p className="text-sm text-muted-foreground">
              Both are CD5+ small B-cell lymphomas. MCL has worse prognosis and different treatment.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">How to Avoid</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>CLL: CD5+ CD23+, dim CD20, proliferation centers</li>
              <li>MCL: CD5+ CD23−, cyclin D1+</li>
              <li>If CD5+ CD23− → always check cyclin D1</li>
              <li>FISH for t(11;14) confirms MCL</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Classic Hodgkin Lymphoma vs NLPHL</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">The Pitfall</h4>
            <p className="text-sm text-muted-foreground">
              Both have large atypical cells in inflammatory background, but treatment and prognosis differ.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">How to Avoid</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Classic HL: CD30+ CD15+ PAX5weak CD20−/weak</li>
              <li>NLPHL: CD30− CD15− CD20+ CD45+ EMA+</li>
              <li>NLPHL has "popcorn cells" not classic RS cells</li>
              <li>NLPHL has nodular pattern with CD57+ T-cell rosettes</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>ALCL vs Classic Hodgkin Lymphoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">The Pitfall</h4>
            <p className="text-sm text-muted-foreground">
              Both can be CD30+with large pleomorphic cells.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">How to Avoid</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>ALCL: CD30+ CD45+ T-cell markers+ CD15−</li>
              <li>Classic HL: CD30+ CD45− CD15+ T-cell markers−</li>
              <li>ALCL may show ALK positivity</li>
              <li>Hallmark cells in ALCL vs RS cells in HL</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Burkitt Lymphoma vs DLBCL</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">The Pitfall</h4>
            <p className="text-sm text-muted-foreground">
              Both are aggressive large B-cell processes, but Burkitt requires specific intensive chemotherapy.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">How to Avoid</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Burkitt: Medium-sized uniform cells, starry-sky pattern, Ki-67 ~100%, BCL2−</li>
              <li>Burkitt: MYC rearrangement (t(8;14) or variants)</li>
              <li>DLBCL: Larger cells with more pleomorphism, Ki-67 variable (40-90%), often BCL2+</li>
              <li>"Gray zone" cases exist - molecular studies may be needed</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AITL vs Reactive Hyperplasia</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">The Pitfall</h4>
            <p className="text-sm text-muted-foreground">
              AITL has polymorphous infiltrate and can resemble reactive hyperplasia with many B-cells.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">How to Avoid</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Look for prominent arborizing vessels</li>
              <li>Expanded FDC meshworks (CD21+/CD23+)</li>
              <li>Neoplastic T-cells express follicular helper markers (PD-1, CXCL13, BCL6, CD10)</li>
              <li>EBV+ B-immunoblasts often present</li>
              <li>TCR clonality confirms T-cell lymphoma</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Crush Artifact and Inadequate Sampling</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">The Pitfall</h4>
            <p className="text-sm text-muted-foreground">
              Crushed tissue can show distorted nuclei mimicking malignancy. Small samples may miss diagnostic areas.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">How to Avoid</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Evaluate only well-preserved areas</li>
              <li>If entire specimen is crushed, consider repeat biopsy</li>
              <li>Small needle biopsies may not capture architecture - excisional biopsy often better</li>
              <li>Multiple levels can reveal better-preserved areas</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>General Principles to Avoid Pitfalls</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside text-sm space-y-2">
            <li><strong>Start with architecture:</strong> Low-power assessment before cytologic detail</li>
            <li><strong>Integrate all data:</strong> Morphology + IHC + flow + molecular + clinical</li>
            <li><strong>Use panels, not single markers:</strong> Single markers can be misleading</li>
            <li><strong>Correlate IHC with H&E:</strong> What cells are staining?</li>
            <li><strong>Know your normal:</strong> Understand reactive patterns</li>
            <li><strong>When uncertain, seek consultation:</strong> Hematopathology cases benefit from expert review</li>
            <li><strong>Don't overcall:</strong> If morphology is equivocal and ancillary studies are negative/inconclusive, favor reactive</li>
            <li><strong>Clinical correlation:</strong> Age, presentation, imaging can guide diagnosis</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}
