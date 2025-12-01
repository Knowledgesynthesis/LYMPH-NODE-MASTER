import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export function IHC() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Immunohistochemistry</h1>
        <p className="text-muted-foreground">
          Conceptual understanding of IHC markers in lymph node pathology.
        </p>
      </div>

      <Card className="bg-blue-500/10 border-blue-500/50">
        <CardHeader>
          <CardTitle>Educational Use Only</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            This content is conceptual and educational. It is not intended as laboratory guidance or clinical practice recommendations.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Core B-Cell Markers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">CD20</h4>
              <p className="text-sm text-muted-foreground">
                Pan-B-cell marker. Positive in most B-cell lymphomas. Weak or negative in classic Hodgkin lymphoma and some plasma cell neoplasms.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">CD79a</h4>
              <p className="text-sm text-muted-foreground">
                Pan-B-cell marker. More specific than CD20. Useful when CD20 is weak or negative.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">PAX5</h4>
              <p className="text-sm text-muted-foreground">
                B-cell transcription factor. Positive in B-cell lineage. Weakly positive in classic Hodgkin lymphoma (key feature).
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">CD10</h4>
              <p className="text-sm text-muted-foreground">
                Germinal center marker. Positive in follicular lymphoma, Burkitt, some DLBCL. Negative in mantle cell and marginal zone lymphomas.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Core T-Cell Markers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">CD3</h4>
              <p className="text-sm text-muted-foreground">
                Pan-T-cell marker. Identifies T-cell lineage. Essential for T-cell lymphoma diagnosis.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">CD4</h4>
              <p className="text-sm text-muted-foreground">
                Helper T-cell marker. Most peripheral T-cell lymphomas are CD4+.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">CD8</h4>
              <p className="text-sm text-muted-foreground">
                Cytotoxic T-cell marker. Some T-cell lymphomas are CD8+. Normal paracortex has CD4 and CD8 populations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">CD5</h4>
              <p className="text-sm text-muted-foreground">
                Pan-T-cell marker. Also positive in CLL/SLL and mantle cell lymphoma (B-cell neoplasms).
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Lymphoma Markers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">BCL2</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Anti-apoptotic protein</li>
              <li><strong>Negative in reactive germinal centers</strong> (critical distinction!)</li>
              <li>Positive in follicular lymphoma (BCL2+ follicles = abnormal)</li>
              <li>Positive in mantle zone cells normally</li>
              <li>Positive in many other lymphomas</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">BCL6</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Germinal center marker</li>
              <li>Positive in follicular lymphoma, Burkitt, some DLBCL</li>
              <li>Helps identify germinal center origin</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Cyclin D1</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Cell cycle regulatory protein</li>
              <li><strong>Highly specific for mantle cell lymphoma</strong></li>
              <li>Nuclear staining pattern</li>
              <li>Correlates with t(11;14)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">CD23</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Activation marker</li>
              <li>Positive in CLL/SLL</li>
              <li>Negative in mantle cell lymphoma (helps distinguish from CLL)</li>
              <li>Also marks follicular dendritic cells</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">CD30</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Activation marker</li>
              <li>Positive in classic Hodgkin lymphoma (strong, uniform)</li>
              <li>Positive in anaplastic large cell lymphoma</li>
              <li>Can be positive in reactive immunoblasts (weak, scattered)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">CD15</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Granulocyte marker</li>
              <li>Positive in classic Hodgkin lymphoma (75-85%)</li>
              <li>Membranous and Golgi pattern</li>
              <li>Negative in NLPHL and ALCL</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>MUM1 (IRF4)</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Expressed in plasma cells and activated B-cells</li>
            <li>Used in DLBCL cell-of-origin classification</li>
            <li>Part of Hans algorithm: CD10− BCL6− MUM1+ suggests activated B-cell (ABC) type</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Proliferation Marker</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <h4 className="font-semibold mb-2">Ki-67</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Nuclear protein expressed in proliferating cells</li>
              <li>High in aggressive lymphomas (Burkitt ~100%, DLBCL &gt;40%)</li>
              <li>Lower in indolent lymphomas (follicular lymphoma variable, CLL low)</li>
              <li>Helps grade follicular lymphoma</li>
              <li>Reactive germinal centers have high Ki-67 (expected)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common IHC Panels</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Initial Lymphoma Workup</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>CD20 (B-cell)</li>
              <li>CD3 (T-cell)</li>
              <li>CD30 (if large cells present)</li>
              <li>Ki-67 (proliferation)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Small B-Cell Lymphoma Panel</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>CD20, CD5, CD10, CD23</li>
              <li>Cyclin D1 (if CD5+ CD23−)</li>
              <li>BCL2 (if follicular pattern)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Large B-Cell Lymphoma Panel</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>CD20, CD10, BCL6, MUM1</li>
              <li>BCL2, MYC (if considering double-hit)</li>
              <li>Ki-67</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Hodgkin Lymphoma Panel</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>CD30, CD15</li>
              <li>PAX5 (weak in classic HL)</li>
              <li>CD20 (usually negative or weak)</li>
              <li>CD45 (negative in classic HL)</li>
              <li>If NLPHL suspected: CD20, CD45, EMA (positive in NLPHL)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange-500/50">
        <CardHeader>
          <CardTitle>Pitfalls and Technical Considerations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-sm space-y-2 text-muted-foreground">
            <li><strong>Non-specific staining:</strong> Always correlate with morphology and controls</li>
            <li><strong>Fixation artifacts:</strong> Poor fixation can cause false negative or weak staining</li>
            <li><strong>Crush artifact:</strong> Damaged tissue may not stain properly</li>
            <li><strong>Internal controls:</strong> Use reactive cells in specimen (e.g., normal T-cells for CD3)</li>
            <li><strong>CD20 can be negative:</strong> Some DLBCL, classic HL, plasma cell neoplasms</li>
            <li><strong>CD5+ B-cells:</strong> Not always malignant - can occur in reactive conditions</li>
            <li><strong>BCL2 false positives:</strong> T-cells and histiocytes can be BCL2+</li>
            <li><strong>Pattern matters:</strong> Scattered CD30+ immunoblasts in reactive nodes vs uniform CD30 in lymphoma</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>Integration with Architecture</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            IHC is most powerful when interpreted with histologic architecture. For example:
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2">
            <li>BCL2+ follicles in a follicular pattern → follicular lymphoma</li>
            <li>BCL2+ in diffuse pattern → could be DLBCL, other lymphomas</li>
            <li>CD30+ large cells in diffuse pattern → ALCL vs large cell lymphoma</li>
            <li>CD30+ cells in mixed background → classic Hodgkin lymphoma</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Never interpret IHC without reviewing the H&E slides.</strong>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
