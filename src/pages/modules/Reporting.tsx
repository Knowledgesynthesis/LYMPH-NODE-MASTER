import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export function Reporting() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Integrated LN Reporting</h1>
        <p className="text-muted-foreground">
          Synthesizing morphology, immunophenotype, and molecular findings into a comprehensive diagnostic impression.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            A lymph node report integrates all available data into a structured, clinically useful format.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            The report should tell a story: describe what you see, how you characterized it, and what it means.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Standard Reporting Framework</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">1. Clinical Information</h4>
            <p className="text-sm text-muted-foreground">
              Age, sex, site, clinical indication, relevant history
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">2. Gross Description</h4>
            <p className="text-sm text-muted-foreground">
              Size, appearance, sampling approach
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">3. Microscopic Description</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li><strong>Architecture:</strong> Preserved, partially effaced, or completely effaced</li>
              <li><strong>Pattern:</strong> Follicular, diffuse, interfollicular, sinus, etc.</li>
              <li><strong>Cytology:</strong> Cell size, nuclear features, mitotic activity</li>
              <li><strong>Background:</strong> Inflammatory cells, necrosis, fibrosis</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">4. Ancillary Studies</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li><strong>Immunohistochemistry:</strong> Summary of key markers and interpretation</li>
              <li><strong>Flow Cytometry:</strong> Clonality, immunophenotype</li>
              <li><strong>Molecular/FISH:</strong> Gene rearrangements, translocations</li>
              <li><strong>Special Stains:</strong> If applicable (e.g., AFB, GMS for organisms)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">5. Diagnosis</h4>
            <p className="text-sm text-muted-foreground">
              Clear, concise statement of the final diagnosis
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">6. Comment (if needed)</h4>
            <p className="text-sm text-muted-foreground">
              Differential diagnosis, additional context, recommendations for further studies or correlation
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example Report: Follicular Lymphoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div>
            <p className="font-semibold">DIAGNOSIS:</p>
            <p>LEFT CERVICAL LYMPH NODE, EXCISIONAL BIOPSY:</p>
            <p className="ml-4">- FOLLICULAR LYMPHOMA, GRADE 1-2 (see note)</p>
          </div>

          <div>
            <p className="font-semibold">MICROSCOPIC DESCRIPTION:</p>
            <p className="text-muted-foreground">
              The lymph node architecture is effaced by a proliferation of closely packed follicles in a back-to-back
              arrangement. The follicles are monotonous in size and shape and lack mantle zones. The neoplastic
              follicles are composed predominantly of small cleaved lymphocytes (centrocytes) with scattered
              centroblasts (0-5 per high-power field, consistent with grade 1-2). Tingible body macrophages are absent.
            </p>
          </div>

          <div>
            <p className="font-semibold">IMMUNOHISTOCHEMISTRY:</p>
            <p className="text-muted-foreground">
              The neoplastic follicles are positive for CD20, CD10, BCL6, and BCL2. The BCL2 positivity in follicle
              centers is abnormal and supports a neoplastic process. Ki-67 proliferation index is approximately 20%.
              CD5 and cyclin D1 are negative.
            </p>
          </div>

          <div>
            <p className="font-semibold">FLOW CYTOMETRY:</p>
            <p className="text-muted-foreground">
              Flow cytometry demonstrates a monoclonal B-cell population with kappa light chain restriction,
              co-expressing CD19, CD20, CD10, and BCL2, consistent with follicular lymphoma.
            </p>
          </div>

          <div>
            <p className="font-semibold">FISH ANALYSIS:</p>
            <p className="text-muted-foreground">
              BCL2 rearrangement is detected by FISH, consistent with t(14;18).
            </p>
          </div>

          <div>
            <p className="font-semibold">COMMENT:</p>
            <p className="text-muted-foreground">
              The morphologic, immunophenotypic, and molecular findings are diagnostic of follicular lymphoma, grade 1-2.
              This is an indolent B-cell lymphoma. Clinical correlation and staging are recommended.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example Report: Reactive Follicular Hyperplasia</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div>
            <p className="font-semibold">DIAGNOSIS:</p>
            <p>RIGHT INGUINAL LYMPH NODE, EXCISIONAL BIOPSY:</p>
            <p className="ml-4">- REACTIVE FOLLICULAR HYPERPLASIA (see note)</p>
          </div>

          <div>
            <p className="font-semibold">MICROSCOPIC DESCRIPTION:</p>
            <p className="text-muted-foreground">
              The lymph node shows preserved architecture with prominent follicular hyperplasia. The follicles are
              variable in size and shape and show distinct polarization with well-defined dark and light zones.
              Tingible body macrophages are readily identified. Mantle zones are intact. The interfollicular regions
              show mixed small lymphocytes without atypia.
            </p>
          </div>

          <div>
            <p className="font-semibold">IMMUNOHISTOCHEMISTRY:</p>
            <p className="text-muted-foreground">
              The germinal centers are positive for CD20, CD10, and BCL6, and are negative for BCL2, confirming their
              reactive nature. CD3 highlights background T-cells in the interfollicular zones.
            </p>
          </div>

          <div>
            <p className="font-semibold">FLOW CYTOMETRY:</p>
            <p className="text-muted-foreground">
              Flow cytometry shows polytypic B-cells with normal kappa:lambda ratio. No aberrant B-cell or T-cell
              population is identified.
            </p>
          </div>

          <div>
            <p className="font-semibold">COMMENT:</p>
            <p className="text-muted-foreground">
              The findings are consistent with reactive follicular hyperplasia. There is no morphologic or
              immunophenotypic evidence of lymphoma. Clinical correlation is recommended.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example Report: Classic Hodgkin Lymphoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div>
            <p className="font-semibold">DIAGNOSIS:</p>
            <p>MEDIASTINAL LYMPH NODE, CORE BIOPSY:</p>
            <p className="ml-4">- CLASSIC HODGKIN LYMPHOMA, NODULAR SCLEROSIS TYPE (see note)</p>
          </div>

          <div>
            <p className="font-semibold">MICROSCOPIC DESCRIPTION:</p>
            <p className="text-muted-foreground">
              The lymph node shows effaced architecture with a nodular growth pattern separated by broad collagen bands.
              Within the nodules are scattered large atypical cells with abundant cytoplasm, including lacunar cells
              and occasional classic Reed-Sternberg cells. The background consists of small lymphocytes, eosinophils,
              and histiocytes. No neutrophilic infiltrate or necrosis is present.
            </p>
          </div>

          <div>
            <p className="font-semibold">IMMUNOHISTOCHEMISTRY:</p>
            <p className="text-muted-foreground">
              The large atypical cells are positive for CD30 (strong membranous and Golgi staining) and CD15.
              PAX5 shows weak nuclear positivity. CD20 and CD45 are negative. These findings are diagnostic of
              classic Hodgkin lymphoma.
            </p>
          </div>

          <div>
            <p className="font-semibold">COMMENT:</p>
            <p className="text-muted-foreground">
              The morphologic and immunophenotypic features are diagnostic of classic Hodgkin lymphoma, nodular
              sclerosis type. Clinical staging and oncology consultation are recommended.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>When Additional Studies Are Needed</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-3">
            Sometimes initial studies are insufficient for definitive classification. It's appropriate to state:
          </p>
          <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-sm">
            <p className="font-medium">Example Deferred Diagnosis:</p>
            <p className="text-muted-foreground">
              "ATYPICAL LYMPHOID PROLIFERATION, see comment."
            </p>
            <p className="text-muted-foreground mt-2">
              <strong>COMMENT:</strong> The lymph node shows partial architectural effacement with an atypical
              lymphoid proliferation. Immunohistochemistry shows an aberrant T-cell population with loss of CD7.
              However, the findings are not definitive for T-cell lymphoma. Molecular studies for T-cell receptor
              gene rearrangement are in progress and will be reported as an addendum. Clinical correlation is essential."
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>Best Practices for LN Reporting</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li><strong>Be clear and concise:</strong> Clinicians need actionable diagnoses</li>
            <li><strong>Integrate all data:</strong> Don't report IHC or flow in isolation - synthesize the findings</li>
            <li><strong>Describe key features:</strong> Architecture and pattern are critical</li>
            <li><strong>State what you see, not just what it isn't:</strong> Avoid purely exclusionary diagnoses</li>
            <li><strong>Use WHO terminology:</strong> Standardized nomenclature aids communication</li>
            <li><strong>Provide context in comments:</strong> Differential diagnosis, prognostic features, recommendations</li>
            <li><strong>Acknowledge limitations:</strong> If sampling is limited or studies are pending, say so</li>
            <li><strong>Recommend follow-up when appropriate:</strong> "Clinical correlation recommended," "Suggest staging," etc.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>The 7-Step Diagnostic Reasoning Framework</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside text-sm space-y-2">
            <li><strong>Architecture first:</strong> Preserved, partially effaced, or completely effaced?</li>
            <li><strong>Pattern recognition:</strong> Follicular, diffuse, paracortical, sinusoidal?</li>
            <li><strong>Cytology:</strong> Small vs large cells, degree of atypia</li>
            <li><strong>Immunophenotype:</strong> B-cell vs T-cell, specific markers</li>
            <li><strong>Flow/molecular:</strong> Clonality, aberrant phenotypes</li>
            <li><strong>Integration:</strong> Synthesize all findings into a diagnosis</li>
            <li><strong>Differential and pitfalls:</strong> What else could this be? How do I exclude it?</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}
