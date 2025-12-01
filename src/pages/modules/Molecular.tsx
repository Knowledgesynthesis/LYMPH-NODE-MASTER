import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export function Molecular() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Molecular Tools</h1>
        <p className="text-muted-foreground">
          High-level overview of molecular techniques in lymphoma diagnosis.
        </p>
      </div>

      <Card className="bg-blue-500/10 border-blue-500/50">
        <CardHeader>
          <CardTitle>Conceptual Framework Only</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            This section provides conceptual understanding of molecular methods. It is not laboratory guidance.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            Molecular techniques complement morphology and immunophenotyping in lymphoma diagnosis.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Three main categories: <strong>Clonality assessment</strong>, <strong>Translocation detection</strong>, and <strong>Mutation profiling</strong>.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Clonality Assessment</h2>

        <Card>
          <CardHeader>
            <CardTitle>IGH Gene Rearrangement (B-Cell Clonality)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Principle</h4>
              <p className="text-sm text-muted-foreground">
                B-cells rearrange immunoglobulin heavy chain (IGH) genes during development. In reactive processes,
                many different rearrangements exist (polyclonal). In lymphoma, a single clone dominates (monoclonal).
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Method</h4>
              <p className="text-sm text-muted-foreground">
                PCR amplification of IGH variable regions followed by fragment analysis or sequencing.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Interpretation</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li><strong>Polyclonal:</strong> Gaussian distribution / smear pattern - reactive</li>
                <li><strong>Monoclonal:</strong> Discrete peak - suggests lymphoma</li>
              </ul>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm font-medium mb-1">Important Caveat:</p>
              <p className="text-sm text-muted-foreground">
                Monoclonality supports but does not diagnose lymphoma. Small clones can occur in reactive conditions,
                especially in elderly patients. Clinical and histologic correlation essential.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>TCR Gene Rearrangement (T-Cell Clonality)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Principle</h4>
              <p className="text-sm text-muted-foreground">
                T-cells rearrange T-cell receptor (TCR) genes. Reactive T-cell populations are polyclonal;
                T-cell lymphomas are monoclonal.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Method</h4>
              <p className="text-sm text-muted-foreground">
                PCR for TCR gamma or TCR beta gene rearrangements.
              </p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm font-medium mb-1">T-Cell Clonality Caution:</p>
              <p className="text-sm text-muted-foreground">
                Clonal T-cell populations can occur in reactive conditions (viral infections, autoimmune diseases).
                T-cell clonality is less specific than B-cell clonality for neoplasia.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">FISH (Fluorescence In Situ Hybridization)</h2>

        <Card>
          <CardHeader>
            <CardTitle>Overview of FISH</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              FISH uses fluorescent probes to detect specific chromosomal abnormalities (translocations, deletions, amplifications).
              Can be performed on fresh or fixed tissue.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common FISH Tests in Lymphoma</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">t(14;18) - IGH/BCL2</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Follicular lymphoma (85-90%)</li>
                <li>Some DLBCL (20-30%, often transformed FL)</li>
                <li>BCL2 rearrangement leads to BCL2 overexpression</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">t(11;14) - IGH/CCND1</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Mantle cell lymphoma (&gt;95%)</li>
                <li>Leads to cyclin D1 overexpression</li>
                <li>Highly specific for MCL</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">MYC Rearrangements</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>t(8;14) - IGH/MYC: Burkitt lymphoma (hallmark)</li>
                <li>Also t(2;8) or t(8;22) involving Ig light chains</li>
                <li>MYC rearrangement + BCL2/BCL6 = "double-hit" or "triple-hit" lymphoma (aggressive)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">t(2;5) - NPM1/ALK</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>ALK-positive anaplastic large cell lymphoma</li>
                <li>Better prognosis than ALK-negative ALCL</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">BCL6 Rearrangements</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Can occur in DLBCL</li>
                <li>Part of "double-hit" assessment (MYC + BCL2 + BCL6)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Next-Generation Sequencing (NGS)</h2>

        <Card>
          <CardHeader>
            <CardTitle>Overview of NGS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              NGS can detect mutations, copy number alterations, and translocations across multiple genes simultaneously.
              Increasingly used for lymphoma classification, prognosis, and targeted therapy selection.
            </p>

            <div>
              <h4 className="font-semibold mb-2">Applications</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Identifying driver mutations (e.g., MYD88, BRAF)</li>
                <li>Detecting clonal evolution</li>
                <li>Identifying therapeutic targets</li>
                <li>Confirming clonality (IGH/TCR sequencing)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Example Mutations</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li><strong>MYD88 L265P:</strong> Waldenström macroglobulinemia, some DLBCL</li>
                <li><strong>BRAF V600E:</strong> Hairy cell leukemia</li>
                <li><strong>EZH2:</strong> Follicular lymphoma, some DLBCL</li>
                <li><strong>TP53:</strong> Associated with poor prognosis in many lymphomas</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>EBV Testing (Epstein-Barr Virus)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Methods</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li><strong>EBER in situ hybridization:</strong> Most sensitive and specific</li>
              <li><strong>LMP1 IHC:</strong> Less sensitive but specific</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">EBV-Associated Lymphomas</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Classic Hodgkin lymphoma (40% overall, higher in mixed cellularity)</li>
              <li>Burkitt lymphoma (endemic form)</li>
              <li>NK/T-cell lymphoma, nasal type (nearly 100%)</li>
              <li>Post-transplant lymphoproliferative disorders</li>
              <li>EBV+ DLBCL in elderly</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>When to Use Molecular Studies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium">IGH/TCR Clonality:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Equivocal morphology and immunophenotype</li>
                <li>Suspected T-cell lymphoma (aberrant phenotype but uncertain)</li>
                <li>Small neoplastic population in background of reactive cells</li>
              </ul>
            </div>

            <div>
              <p className="font-medium">FISH:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Suspected follicular lymphoma (confirm BCL2 rearrangement)</li>
                <li>CD5+ B-cell lymphoma (distinguish CLL from MCL with CCND1 FISH)</li>
                <li>Aggressive DLBCL (check for MYC, BCL2, BCL6 rearrangements)</li>
                <li>Burkitt vs DLBCL (MYC rearrangement)</li>
              </ul>
            </div>

            <div>
              <p className="font-medium">NGS:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Prognostic information</li>
                <li>Targeted therapy considerations</li>
                <li>Complex cases requiring deep characterization</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange-500/50">
        <CardHeader>
          <CardTitle>Limitations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-sm space-y-2 text-muted-foreground">
            <li><strong>False negatives:</strong> Small tumor burden, technical failure, variant rearrangements</li>
            <li><strong>False positives:</strong> Small clones in reactive conditions, especially in elderly</li>
            <li><strong>Clonality ≠ malignancy:</strong> Clonal populations can be reactive</li>
            <li><strong>Need adequate tissue:</strong> Poor quality or quantity affects results</li>
            <li><strong>Not all lymphomas have signature translocations</strong></li>
            <li><strong>Cost and turnaround time</strong></li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>Integration is Key</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Molecular studies are powerful but must be integrated with morphology, immunophenotype, and clinical context.
            No single test diagnoses lymphoma. The complete picture emerges from synthesis of all available data.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
