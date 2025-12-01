import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export function BCell() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">B-Cell Lymphomas</h1>
        <p className="text-muted-foreground">
          Small and large B-cell neoplasms: architecture, immunophenotype, and molecular patterns.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            B-cell lymphomas are categorized by cell size (small vs large), architecture (follicular vs diffuse), and immunophenotype.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Key approach: Assess architecture → cell size → immunophenotype → molecular features.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Small B-Cell Lymphomas</h2>

        <Card>
          <CardHeader>
            <CardTitle>Follicular Lymphoma (FL)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Morphology</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Follicular (nodular) architecture - closely packed, back-to-back follicles</li>
                <li>Monotonous follicle size and shape</li>
                <li>Lack of tingible body macrophages</li>
                <li>Mixture of centrocytes (small cleaved cells) and centroblasts (large cells)</li>
                <li>Graded 1-3 based on centroblast count</li>
                <li>No mantle zone</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Immunophenotype</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li><strong>CD20:</strong> Positive</li>
                <li><strong>CD10:</strong> Positive</li>
                <li><strong>BCL6:</strong> Positive</li>
                <li><strong>BCL2:</strong> Positive (key - abnormal in follicles!)</li>
                <li><strong>CD5:</strong> Negative</li>
                <li><strong>Cyclin D1:</strong> Negative</li>
                <li>Kappa or lambda light chain restriction</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Molecular</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>t(14;18)(q32;q21) in 85-90% - IGH/BCL2</li>
                <li>BCL2 rearrangement by FISH</li>
              </ul>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm font-medium mb-1">Key Differential:</p>
              <p className="text-sm text-muted-foreground">
                Reactive follicular hyperplasia: BCL2 negative, variable follicle sizes, tingible body macrophages
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Chronic Lymphocytic Leukemia / Small Lymphocytic Lymphoma (CLL/SLL)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Morphology</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Diffuse effacement by small, monotonous lymphocytes</li>
                <li>Proliferation centers (pseudofollicles) - paler areas with prolymphocytes and paraimmunoblasts</li>
                <li>Round nuclei, clumped chromatin</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Immunophenotype</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li><strong>CD20:</strong> Positive (dim)</li>
                <li><strong>CD5:</strong> Positive (co-expression with CD20)</li>
                <li><strong>CD23:</strong> Positive</li>
                <li><strong>CD10:</strong> Negative</li>
                <li><strong>Cyclin D1:</strong> Negative</li>
                <li>Dim surface immunoglobulin</li>
                <li>Kappa or lambda restriction</li>
              </ul>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm font-medium mb-1">Signature:</p>
              <p className="text-sm text-muted-foreground">
                CD5+ CD23+ CD20dim - distinguishes from mantle cell lymphoma
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mantle Cell Lymphoma (MCL)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Morphology</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Diffuse, nodular, or mantle zone pattern</li>
                <li>Monotonous small to medium lymphocytes</li>
                <li>Irregular nuclear contours</li>
                <li>Blastoid variant: larger cells with dispersed chromatin (aggressive)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Immunophenotype</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li><strong>CD20:</strong> Positive</li>
                <li><strong>CD5:</strong> Positive</li>
                <li><strong>CD23:</strong> Negative (vs CLL)</li>
                <li><strong>Cyclin D1:</strong> Positive (hallmark!)</li>
                <li><strong>SOX11:</strong> Positive</li>
                <li><strong>CD10:</strong> Negative</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Molecular</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>t(11;14)(q13;q32) - IGH/CCND1 (cyclin D1)</li>
                <li>CCND1 rearrangement by FISH</li>
              </ul>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm font-medium mb-1">Key Points:</p>
              <p className="text-sm text-muted-foreground">
                Cyclin D1 is highly specific. Aggressive course despite "small cell" morphology.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Marginal Zone Lymphomas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Three types: MALT lymphoma (extranodal), splenic, and nodal marginal zone lymphoma.
            </p>

            <div>
              <h4 className="font-semibold mb-2">Morphology</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Small to medium lymphocytes with abundant pale cytoplasm</li>
                <li>Monocytoid appearance</li>
                <li>Marginal zone distribution around follicles</li>
                <li>Plasmacytic differentiation may be present</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Immunophenotype</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li><strong>CD20:</strong> Positive</li>
                <li><strong>CD5:</strong> Negative</li>
                <li><strong>CD10:</strong> Negative</li>
                <li><strong>CD23:</strong> Negative</li>
                <li><strong>BCL2:</strong> Positive</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Large B-Cell Lymphomas</h2>

        <Card>
          <CardHeader>
            <CardTitle>Diffuse Large B-Cell Lymphoma (DLBCL)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Morphology</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Diffuse effacement of architecture</li>
                <li>Large cells (&gt;2x normal lymphocyte)</li>
                <li>Round to irregular nuclei</li>
                <li>Prominent nucleoli</li>
                <li>Variants: centroblastic, immunoblastic, anaplastic</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Immunophenotype</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li><strong>CD20:</strong> Positive</li>
                <li><strong>CD45:</strong> Positive</li>
                <li><strong>BCL6:</strong> Often positive</li>
                <li><strong>CD10:</strong> Positive in 30-40% (germinal center origin)</li>
                <li><strong>MUM1:</strong> Variable</li>
                <li>High Ki-67 proliferation index (&gt;40%)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Cell of Origin Classification</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Germinal Center B-cell (GCB):</strong> CD10+ or BCL6+ MUM1-. Better prognosis.</p>
                <p><strong>Activated B-cell (ABC):</strong> CD10- BCL6- MUM1+. Worse prognosis.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Burkitt Lymphoma</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Morphology</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Diffuse sheet-like growth</li>
                <li>Medium-sized cells with round nuclei</li>
                <li>Multiple basophilic nucleoli</li>
                <li>High mitotic rate</li>
                <li>"Starry-sky" pattern (tingible body macrophages among tumor cells)</li>
                <li>Very high proliferation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Immunophenotype</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li><strong>CD20:</strong> Positive</li>
                <li><strong>CD10:</strong> Positive</li>
                <li><strong>BCL6:</strong> Positive</li>
                <li><strong>BCL2:</strong> Negative (important!)</li>
                <li><strong>Ki-67:</strong> Nearly 100%</li>
                <li><strong>TdT:</strong> Negative (vs lymphoblastic lymphoma)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Molecular</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>MYC translocation: t(8;14) most common (IGH/MYC)</li>
                <li>Also t(2;8) or t(8;22) involving immunoglobulin light chains</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>High-Grade B-Cell Lymphomas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Double-Hit Lymphoma (DHL)</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>MYC rearrangement + BCL2 and/or BCL6 rearrangement</li>
                <li>Aggressive clinical course</li>
                <li>May resemble DLBCL or Burkitt morphologically</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Triple-Hit Lymphoma</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>MYC + BCL2 + BCL6 rearrangements</li>
                <li>Very aggressive</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>Small B-Cell Lymphoma Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Entity</th>
                  <th className="text-left p-2">CD5</th>
                  <th className="text-left p-2">CD10</th>
                  <th className="text-left p-2">CD23</th>
                  <th className="text-left p-2">Cyclin D1</th>
                  <th className="text-left p-2">BCL2</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="p-2">Follicular lymphoma</td>
                  <td className="p-2">−</td>
                  <td className="p-2">+</td>
                  <td className="p-2">−</td>
                  <td className="p-2">−</td>
                  <td className="p-2">+</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">CLL/SLL</td>
                  <td className="p-2">+</td>
                  <td className="p-2">−</td>
                  <td className="p-2">+</td>
                  <td className="p-2">−</td>
                  <td className="p-2">+</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Mantle cell lymphoma</td>
                  <td className="p-2">+</td>
                  <td className="p-2">−</td>
                  <td className="p-2">−</td>
                  <td className="p-2">+</td>
                  <td className="p-2">+</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Marginal zone</td>
                  <td className="p-2">−</td>
                  <td className="p-2">−</td>
                  <td className="p-2">−</td>
                  <td className="p-2">−</td>
                  <td className="p-2">+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
