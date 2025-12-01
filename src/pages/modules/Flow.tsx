import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export function Flow() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Flow Cytometry in LN Workup</h1>
        <p className="text-muted-foreground">
          Conceptual understanding of flow cytometry patterns in lymph node evaluation.
        </p>
      </div>

      <Card className="bg-blue-500/10 border-blue-500/50">
        <CardHeader>
          <CardTitle>Important Note</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            This section provides conceptual understanding only and is not intended as laboratory guidance or clinical advice.
            Flow cytometry interpretation requires trained specialists and clinical correlation.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Overview of Flow Cytometry</CardTitle>
          <CardDescription>
            Flow cytometry analyzes cell surface and intracellular markers to characterize lymphocyte populations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Key applications: Identifying clonality, characterizing immunophenotype, and detecting aberrant populations
            that suggest lymphoma.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Basic Principles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Gating Strategy</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Forward scatter (FSC) vs side scatter (SSC): Cell size and granularity</li>
              <li>CD45 gating: Identifies leukocytes and separates from debris</li>
              <li>Sequential gating: Focus on B-cells, T-cells, or other populations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Common Markers</h4>
            <div className="space-y-2 text-sm">
              <p><strong>Pan-leukocyte:</strong> CD45</p>
              <p><strong>B-cell:</strong> CD19, CD20, surface immunoglobulin (sIg)</p>
              <p><strong>T-cell:</strong> CD3, CD4, CD8, CD5, CD7</p>
              <p><strong>NK-cell:</strong> CD56, CD16</p>
              <p><strong>Germinal center:</strong> CD10</p>
              <p><strong>Activation:</strong> CD23, CD38</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>B-Cell Gating and Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Normal B-Cell Population</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>CD19+ CD20+ B-cells</li>
              <li>Polyclonal: Mix of kappa and lambda light chain expressing cells</li>
              <li>Kappa:lambda ratio approximately 2:1 (normal range 0.5-3.0)</li>
              <li>Variable CD10 expression (germinal center B-cells)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Assessing Clonality</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li><strong>Kappa/Lambda Light Chain Restriction:</strong> Monoclonal B-cells express only kappa OR only lambda</li>
              <li>Kappa:lambda ratio &gt;3:1 or &lt;0.5:1 suggests monoclonality</li>
              <li>Must have adequate B-cell population for assessment</li>
              <li>Not all lymphomas show light chain restriction (some are sIg negative)</li>
            </ul>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm font-medium mb-2">Example: Follicular Lymphoma Pattern</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>CD19+ CD20+ population</li>
              <li>CD10+ (germinal center origin)</li>
              <li>BCL2+ (abnormal for germinal center cells)</li>
              <li>Light chain restricted (kappa or lambda)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common B-Cell Lymphoma Patterns</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2">CLL/SLL</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>CD19+ CD20dim (weak CD20)</li>
              <li>CD5+ CD23+ (co-expression)</li>
              <li>Dim surface immunoglobulin</li>
              <li>Light chain restricted</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Mantle Cell Lymphoma</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>CD19+ CD20+</li>
              <li>CD5+ CD23− (vs CLL)</li>
              <li>Usually bright surface Ig</li>
              <li>Light chain restricted</li>
              <li>(Note: Flow doesn't detect cyclin D1 - need IHC)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Follicular Lymphoma</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>CD19+ CD20+</li>
              <li>CD10+ BCL2+</li>
              <li>CD5−</li>
              <li>Light chain restricted</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Marginal Zone Lymphoma</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>CD19+ CD20+</li>
              <li>CD5− CD10− CD23−</li>
              <li>Light chain restricted</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>T-Cell Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Normal T-Cell Population</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>CD3+ T-cells</li>
              <li>CD4:CD8 ratio approximately 2:1 (normal range 1-4)</li>
              <li>CD5+ CD7+ (pan T-cell markers)</li>
              <li>Polyclonal by TCR Vβ analysis or molecular studies</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Aberrant Phenotypes Suggesting T-Cell Lymphoma</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Loss of pan-T markers (CD5, CD7 loss)</li>
              <li>Abnormal CD4:CD8 ratio (markedly increased or reversed)</li>
              <li>CD4/CD8 double negative or double positive</li>
              <li>Abnormal marker expression (e.g., CD4+ CD56+)</li>
            </ul>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm font-medium mb-2">Important:</p>
            <p className="text-sm text-muted-foreground">
              Aberrant T-cell phenotypes can occur in reactive conditions. Molecular clonality studies are often
              needed to confirm T-cell lymphoma.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Limitations and Pitfalls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Sample Limitations</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Partial involvement: Neoplastic population may be small and difficult to detect</li>
              <li>Hemodilution: Peripheral blood contamination dilutes lymph node cells</li>
              <li>Low viability: Poor sample handling reduces accurate analysis</li>
              <li>Tissue crush: Damaged cells may not express markers properly</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Interpretive Pitfalls</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Reactive follicles may have skewed kappa:lambda ratios in individual follicles</li>
              <li>Polyclonal plasmacytosis can show apparent light chain restriction</li>
              <li>Some lymphomas lack surface Ig (e.g., some DLBCL)</li>
              <li>CD5+ B-cells can occur in reactive conditions</li>
              <li>T-cell aberrancy can occur in viral infections</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">What Flow Cannot Assess</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Architecture (follicular vs diffuse) - needs histology</li>
              <li>Cyclin D1 expression - needs IHC</li>
              <li>EBV status - needs EBER ISH or IHC</li>
              <li>Morphologic details (Reed-Sternberg cells, etc.)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>Integration with Other Studies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <p className="font-medium">Flow cytometry is most powerful when integrated with:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong>Histology:</strong> Architecture and morphology</li>
              <li><strong>IHC:</strong> Additional markers, cyclin D1, Ki-67, etc.</li>
              <li><strong>Molecular:</strong> IGH/TCR rearrangement, FISH for translocations</li>
              <li><strong>Clinical:</strong> Age, presentation, imaging</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              No single test is diagnostic. A comprehensive approach combining all available data yields the most
              accurate diagnosis.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
