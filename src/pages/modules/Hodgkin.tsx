import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export function Hodgkin() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Hodgkin Lymphomas</h1>
        <p className="text-muted-foreground">
          Pattern recognition and immunophenotyping of classic and nodular lymphocyte-predominant Hodgkin lymphoma.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            Hodgkin lymphoma is characterized by neoplastic cells (Reed-Sternberg cells or variants) in an inflammatory background.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Two main categories: <strong>Classic Hodgkin Lymphoma (cHL)</strong> and <strong>Nodular Lymphocyte-Predominant Hodgkin Lymphoma (NLPHL)</strong>.
            They differ in morphology, immunophenotype, and clinical behavior.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Reed-Sternberg Cells and Variants</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Classic Reed-Sternberg Cell</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Large cell with abundant cytoplasm</li>
              <li>Multiple nuclei or multilobated nucleus</li>
              <li>Each nucleus with large, prominent, eosinophilic nucleolus</li>
              <li>"Owl's eye" or "mirror image" appearance</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Mononuclear Hodgkin Cell</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Single nucleus with Reed-Sternberg cell features</li>
              <li>Large nucleolus</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Lacunar Cell</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Characteristic of nodular sclerosis subtype</li>
              <li>Large cell in a clear space (artifact of formalin fixation)</li>
              <li>Multilobated nucleus</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Classic Hodgkin Lymphoma Subtypes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2">1. Nodular Sclerosis (NS)</h4>
            <p className="text-sm text-muted-foreground mb-2">Most common subtype (60-70%)</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Nodular growth pattern</li>
              <li>Collagen bands dividing node into nodules</li>
              <li>Lacunar cells characteristic</li>
              <li>Young adults, often mediastinal presentation</li>
              <li>Excellent prognosis</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">2. Mixed Cellularity (MC)</h4>
            <p className="text-sm text-muted-foreground mb-2">Second most common (20-25%)</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Diffuse effacement of architecture</li>
              <li>Classic Reed-Sternberg cells present</li>
              <li>Mixed inflammatory background (eosinophils, lymphocytes, histiocytes, plasma cells)</li>
              <li>Associated with EBV in some cases</li>
              <li>Older adults, HIV patients</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">3. Lymphocyte-Rich (LR)</h4>
            <p className="text-sm text-muted-foreground mb-2">Uncommon (5%)</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Nodular or diffuse patterns</li>
              <li>Abundant small lymphocytes</li>
              <li>Scattered classic Reed-Sternberg cells</li>
              <li>Excellent prognosis</li>
              <li>May resemble NLPHL but immunophenotype differs</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">4. Lymphocyte-Depleted (LD)</h4>
            <p className="text-sm text-muted-foreground mb-2">Rare (&lt;5%)</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Paucity of lymphocytes</li>
              <li>Abundant Reed-Sternberg cells and variants</li>
              <li>Diffuse fibrosis or sarcomatous appearance</li>
              <li>Aggressive course, poor prognosis</li>
              <li>Associated with HIV/AIDS, elderly</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Classic Hodgkin Lymphoma Immunophenotype</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Typical Profile</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li><strong>CD30:</strong> Positive (strong, membranous and Golgi)</li>
              <li><strong>CD15:</strong> Positive in 75-85%</li>
              <li><strong>PAX5:</strong> Weakly positive (dim)</li>
              <li><strong>CD20:</strong> Usually negative or weak</li>
              <li><strong>CD45:</strong> Negative</li>
              <li><strong>EBV (LMP1/EBER):</strong> Positive in 40% overall (higher in MC and LD)</li>
            </ul>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm font-medium mb-2">Key Diagnostic Formula:</p>
            <p className="text-sm text-muted-foreground">
              CD30+ / CD15+ / PAX5 weak+ / CD20 negative or weak / CD45 negative
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Nodular Lymphocyte-Predominant Hodgkin Lymphoma (NLPHL)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Distinct entity with different morphology, immunophenotype, and clinical behavior from classic HL.
          </p>

          <div>
            <h4 className="font-semibold mb-2">Morphology</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Nodular or nodular and diffuse pattern</li>
              <li>"Popcorn cells" (LP cells) - multilobated nuclei, small nucleoli</li>
              <li>Background of small B-lymphocytes, often in rosettes around LP cells</li>
              <li>No classic Reed-Sternberg cells</li>
              <li>Rare eosinophils</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Immunophenotype</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li><strong>CD20:</strong> Positive (strong)</li>
              <li><strong>CD45:</strong> Positive</li>
              <li><strong>CD79a:</strong> Positive</li>
              <li><strong>EMA:</strong> Positive</li>
              <li><strong>CD30:</strong> Negative</li>
              <li><strong>CD15:</strong> Negative</li>
              <li>Background T-cells: CD3+, CD57+ rosettes</li>
            </ul>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm font-medium mb-2">NLPHL vs Classic HL:</p>
            <p className="text-sm text-muted-foreground">
              NLPHL cells retain B-cell markers (CD20+, CD45+) while classic HL loses most B-cell markers.
              NLPHL is CD30/CD15 negative.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Clinical Features</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Young to middle-aged adults, male predominance</li>
              <li>Peripheral nodes (cervical, axillary)</li>
              <li>Indolent course, excellent prognosis</li>
              <li>Risk of transformation to diffuse large B-cell lymphoma</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>Diagnostic Approach</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside text-sm space-y-2">
            <li>Identify large atypical cells in inflammatory background</li>
            <li>Characterize cell morphology (classic RS cells vs popcorn cells)</li>
            <li>Apply immunohistochemistry:
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-muted-foreground">
                <li>CD30/CD15 panel for classic HL</li>
                <li>CD20/CD45 to distinguish from NLPHL</li>
                <li>PAX5 to confirm B-cell origin</li>
              </ul>
            </li>
            <li>Consider EBV testing (especially in MC, LD subtypes)</li>
            <li>Correlate with clinical presentation and staging</li>
          </ol>
        </CardContent>
      </Card>

      <Card className="border-orange-500/50">
        <CardHeader>
          <CardTitle>Common Pitfalls</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-sm space-y-2 text-muted-foreground">
            <li>
              <strong>T-cell rich large B-cell lymphoma:</strong> May mimic lymphocyte-rich classic HL.
              Check for CD20 positivity in large cells (negative in classic HL).
            </li>
            <li>
              <strong>NLPHL vs T-cell/histiocyte-rich large B-cell lymphoma:</strong> Both have CD20+ large cells.
              NLPHL has nodular pattern and CD57+ rosettes.
            </li>
            <li>
              <strong>Anaplastic large cell lymphoma (ALCL):</strong> CD30+ but CD15 negative, strong CD45+, and shows T-cell markers.
            </li>
            <li>
              <strong>Reactive immunoblasts:</strong> May be large and CD30+, but occur in reactive background without effacement.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
