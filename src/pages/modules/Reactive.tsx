import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export function Reactive() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Reactive Patterns</h1>
        <p className="text-muted-foreground">
          Understanding benign reactive patterns is essential for distinguishing them from lymphomas.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            Reactive lymphadenopathy shows distinct patterns based on the antigenic stimulus and immune response type.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            The three main reactive patterns are: <strong>follicular hyperplasia</strong>, <strong>paracortical hyperplasia</strong>,
            and <strong>sinus histiocytosis</strong>. Each has distinct morphologic features.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Follicular Hyperplasia</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Expansion of B-cell follicles with germinal center formation, typically in response to bacterial infections or autoimmune conditions.
          </p>

          <div>
            <h4 className="font-semibold mb-2">Morphologic Features</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Numerous enlarged secondary follicles with prominent germinal centers</li>
              <li>Germinal centers show polarization (dark and light zones)</li>
              <li>Tingible body macrophages present (scattered macrophages with apoptotic debris)</li>
              <li>Preserved mantle zones</li>
              <li>Variable follicle size and shape (not monotonous)</li>
              <li>Follicles do not extend beyond capsule</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Immunophenotype (Conceptual)</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Germinal centers: BCL2 negative (key feature!)</li>
              <li>BCL6 positive in germinal centers</li>
              <li>CD10 positive in germinal centers</li>
              <li>Mantle zone: IgD+, CD20+, BCL2+</li>
              <li>No light chain restriction (polyclonal)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Common Causes</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Rheumatoid arthritis</li>
              <li>Toxoplasmosis</li>
              <li>HIV infection (early)</li>
              <li>Syphilis</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Paracortical Hyperplasia</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Expansion of the T-cell zone (paracortex), typically seen in viral infections and certain drug reactions.
          </p>

          <div>
            <h4 className="font-semibold mb-2">Morphologic Features</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Expanded interfollicular zones</li>
              <li>Immunoblasts (large activated lymphocytes) in paracortex</li>
              <li>Increased mitotic activity</li>
              <li>Prominent high endothelial venules</li>
              <li>Follicles may be compressed or atrophic</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Immunophenotype</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>CD3+ T-cells expanded</li>
              <li>Mixture of CD4+ and CD8+ cells</li>
              <li>No aberrant T-cell phenotype</li>
              <li>Polyclonal T-cell population</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Common Causes</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Viral infections (EBV, CMV, herpes viruses)</li>
              <li>Drug reactions (phenytoin, allopurinol)</li>
              <li>Vaccination</li>
              <li>Post-viral states</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sinus Histiocytosis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Expansion of sinuses by histiocytes, often seen in nodes draining malignancies or inflammatory sites.
          </p>

          <div>
            <h4 className="font-semibold mb-2">Morphologic Features</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Dilated subcapsular and trabecular sinuses</li>
              <li>Increased histiocytes within sinuses</li>
              <li>Histiocytes may contain phagocytosed material</li>
              <li>Underlying lymphoid architecture preserved</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Common Causes</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Lymph nodes draining carcinomas</li>
              <li>Inflammatory lesions</li>
              <li>Post-surgical drainage</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Granulomatous Lymphadenitis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Presence of epithelioid granulomas within lymph node. Can be necrotizing or non-necrotizing.
          </p>

          <div>
            <h4 className="font-semibold mb-2">Types</h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-sm">Necrotizing Granulomas</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  <li>Tuberculosis (caseous necrosis)</li>
                  <li>Fungal infections</li>
                  <li>Cat scratch disease (suppurative)</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-sm">Non-necrotizing Granulomas</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  <li>Sarcoidosis (tight, non-caseating)</li>
                  <li>Berylliosis</li>
                  <li>Early mycobacterial infection</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Dermatopathic Lymphadenopathy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Reactive pattern seen in nodes draining chronic skin conditions.
          </p>

          <div>
            <h4 className="font-semibold mb-2">Features</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Expanded paracortex with pale areas</li>
              <li>Langerhans cells with abundant pale cytoplasm</li>
              <li>Melanin-laden macrophages</li>
              <li>Interdigitating dendritic cells</li>
              <li>Associated with eczema, psoriasis, mycosis fungoides</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Progressive Transformation of Germinal Centers (PTGC)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Distinctive reactive pattern that can mimic lymphoma.
          </p>

          <div>
            <h4 className="font-semibold mb-2">Features</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Markedly enlarged germinal centers</li>
              <li>Infiltration of mantle zone cells into germinal center</li>
              <li>Creates "moth-eaten" appearance</li>
              <li>BCL2 negative in germinal center regions</li>
              <li>May precede or coexist with nodular lymphocyte-predominant Hodgkin lymphoma</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>Key Differentiating Features: Reactive vs Neoplastic</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold mb-2 text-sm">Reactive Features</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Preserved architecture</li>
                <li>Germinal centers: polarized, variable size, tingible body macrophages</li>
                <li>BCL2 negative in germinal centers</li>
                <li>Polyclonal B-cells or polytypic T-cells</li>
                <li>Intact capsule</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-sm">Suspicious for Lymphoma</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Effaced architecture</li>
                <li>Monotonous follicles (back-to-back, similar size)</li>
                <li>BCL2 positive in follicles</li>
                <li>Monoclonal B-cells or clonal T-cells</li>
                <li>Capsular invasion or extranodal extension</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
