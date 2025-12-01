import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export function Anatomy() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Normal Lymph Node Anatomy</h1>
        <p className="text-muted-foreground">
          Understanding the fundamental architecture of lymph nodes is essential for recognizing pathologic changes.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            Lymph nodes are organized into distinct anatomical zones, each with specific cell populations and functions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The lymph node is divided into three main regions: the <strong>cortex</strong>, <strong>paracortex</strong>,
            and <strong>medulla</strong>. Each region has distinct cellular composition and architectural features.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Capsule and Subcapsular Sinus</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Capsule</h4>
            <p className="text-sm text-muted-foreground">
              The lymph node is enclosed by a fibrous capsule from which trabeculae extend into the parenchyma.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Subcapsular Sinus</h4>
            <p className="text-sm text-muted-foreground">
              Located beneath the capsule, this is where afferent lymphatic vessels drain. It's a key site for
              metastatic tumor deposits and should be examined carefully.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cortex</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Primary Follicles</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Small, round aggregates of small, naive B-cells. They lack germinal centers.
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Composed of uniform small lymphocytes</li>
              <li>No mitotic activity</li>
              <li>BCL2 positive</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Secondary Follicles</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Follicles with germinal centers, representing sites of active B-cell proliferation and maturation.
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Polarized germinal centers with dark and light zones</li>
              <li>Dark zone: centroblasts (large, proliferating B-cells)</li>
              <li>Light zone: centrocytes (smaller, cleaved cells)</li>
              <li>Tingible body macrophages (macrophages containing apoptotic debris)</li>
              <li>BCL2 negative in germinal centers (important for distinguishing from follicular lymphoma)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Mantle Zone</h4>
            <p className="text-sm text-muted-foreground">
              The rim of small B-cells surrounding the germinal center. These cells express IgM, IgD, CD20, and BCL2.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Marginal Zone</h4>
            <p className="text-sm text-muted-foreground">
              Located at the outer edge of the follicle, contains memory B-cells and specialized antigen-presenting cells.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Paracortex</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            The T-cell zone located between follicles and the medulla.
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Predominantly T-cells (CD3+, CD4+ and CD8+)</li>
            <li>High endothelial venules (HEVs) - entry sites for lymphocytes from blood</li>
            <li>Interdigitating dendritic cells for antigen presentation</li>
            <li>Expands in viral infections and T-cell lymphomas</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Medulla</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Medullary Cords</h4>
            <p className="text-sm text-muted-foreground">
              Contain plasma cells, macrophages, and B-cells. This is where antibody-secreting plasma cells reside.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Medullary Sinuses</h4>
            <p className="text-sm text-muted-foreground">
              Channels that drain lymph toward the hilum. May contain histiocytes and can be expanded in sinus histiocytosis.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vascular and Lymphatic Flow</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Lymphatic Flow</h4>
            <p className="text-sm text-muted-foreground">
              Afferent lymphatics → Subcapsular sinus → Cortical sinuses → Medullary sinuses → Efferent lymphatics (at hilum)
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Blood Supply</h4>
            <p className="text-sm text-muted-foreground">
              Arteries enter at the hilum, branch through trabeculae. High endothelial venules in paracortex allow
              lymphocyte trafficking from blood to node.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>Key Clinical Pearls</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>
              <strong>Start with low power:</strong> Assess overall architecture before examining cytologic details
            </li>
            <li>
              <strong>BCL2 in germinal centers:</strong> Reactive germinal centers are BCL2 negative;
              BCL2+ follicles suggest follicular lymphoma
            </li>
            <li>
              <strong>Subcapsular sinus:</strong> Critical area for metastatic deposits
            </li>
            <li>
              <strong>Paracortical expansion:</strong> Think viral infection or T-cell process
            </li>
            <li>
              <strong>Tingible body macrophages:</strong> Sign of active germinal center with apoptosis (reactive feature)
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
