import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export function TCell() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">T-Cell & NK-Cell Lymphomas</h1>
        <p className="text-muted-foreground">
          Peripheral T-cell and NK-cell neoplasms: pattern recognition and diagnostic approach.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            T-cell lymphomas are less common than B-cell lymphomas and often present diagnostic challenges.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            T-cell lymphomas show diverse morphology and behavior. Diagnosis requires integration of architecture,
            cytology, immunophenotype, and molecular studies.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Peripheral T-Cell Lymphoma, Not Otherwise Specified (PTCL-NOS)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Diagnosis of exclusion - used when T-cell lymphoma doesn't fit specific subtypes.
          </p>

          <div>
            <h4 className="font-semibold mb-2">Morphology</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Diffuse effacement of architecture</li>
              <li>Pleomorphic lymphoid cells (variable size and shape)</li>
              <li>Admixed inflammatory cells (eosinophils, histiocytes)</li>
              <li>High endothelial venules prominent</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Immunophenotype</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li><strong>CD3:</strong> Positive</li>
              <li><strong>CD4:</strong> Usually positive (may be CD8+ or double negative)</li>
              <li><strong>CD5:</strong> Usually positive</li>
              <li><strong>CD7:</strong> Often lost (aberrant)</li>
              <li><strong>CD20:</strong> Negative</li>
              <li>TCR clonality by PCR or flow</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Anaplastic Large Cell Lymphoma (ALCL)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            T-cell lymphoma with large anaplastic cells and strong CD30 expression.
          </p>

          <div>
            <h4 className="font-semibold mb-2">Morphology</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Large pleomorphic cells with abundant cytoplasm</li>
              <li>"Hallmark cells" - horseshoe or kidney-shaped nuclei, eosinophilic Golgi region</li>
              <li>May have sinusoidal growth pattern</li>
              <li>Common pattern: small cell variant exists</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Immunophenotype</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li><strong>CD30:</strong> Strong and uniform positivity (membranous and Golgi)</li>
              <li><strong>CD3:</strong> Variable</li>
              <li><strong>CD4:</strong> Usually positive</li>
              <li><strong>CD45:</strong> Positive (vs Hodgkin lymphoma)</li>
              <li><strong>ALK:</strong> Positive in ALK+ subtype (better prognosis)</li>
              <li><strong>EMA:</strong> Often positive</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Molecular</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>ALK-positive: t(2;5)(p23;q35) - NPM1/ALK fusion</li>
              <li>ALK-negative: other translocations, generally worse prognosis</li>
            </ul>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm font-medium mb-1">vs Classic Hodgkin Lymphoma:</p>
            <p className="text-sm text-muted-foreground">
              Both CD30+, but ALCL is CD45+ and has T-cell markers. Classic HL is CD15+, CD45−.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Angioimmunoblastic T-Cell Lymphoma (AITL)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Follicular helper T-cell (TFH) origin, distinctive clinical and pathologic features.
          </p>

          <div>
            <h4 className="font-semibold mb-2">Morphology</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Partial or complete effacement</li>
              <li>Polymorphous infiltrate (lymphocytes, immunoblasts, eosinophils, plasma cells)</li>
              <li>Prominent arborizing high endothelial venules</li>
              <li>Expanded follicular dendritic cell meshworks (CD21+)</li>
              <li>EBV+ B-immunoblasts often present</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Immunophenotype</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li><strong>CD3:</strong> Positive</li>
              <li><strong>CD4:</strong> Positive</li>
              <li><strong>CD10:</strong> Often positive (TFH marker)</li>
              <li><strong>PD-1:</strong> Positive (TFH marker)</li>
              <li><strong>CXCL13:</strong> Positive (TFH marker)</li>
              <li><strong>BCL6:</strong> Positive (TFH marker)</li>
              <li><strong>CD21:</strong> Expanded FDC meshworks</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Clinical Features</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Generalized lymphadenopathy</li>
              <li>B symptoms, rash, autoimmune phenomena</li>
              <li>Polyclonal hypergammaglobulinemia</li>
              <li>Aggressive course</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mycosis Fungoides / Sézary Syndrome</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Cutaneous T-cell lymphomas. Mycosis fungoides is skin-localized; Sézary syndrome has leukemic involvement.
          </p>

          <div>
            <h4 className="font-semibold mb-2">Mycosis Fungoides - Lymph Node Involvement</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Dermatopathic lymphadenopathy pattern early</li>
              <li>Progressive involvement: clusters of atypical lymphocytes in paracortex</li>
              <li>Late: complete effacement</li>
              <li>Cerebriform nuclei characteristic</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Immunophenotype</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li><strong>CD3:</strong> Positive</li>
              <li><strong>CD4:</strong> Positive</li>
              <li><strong>CD8:</strong> Negative</li>
              <li><strong>CD7:</strong> Often lost</li>
              <li><strong>CD26:</strong> Often lost</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>NK/T-Cell Lymphoma, Nasal Type</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Extranodal lymphoma, typically in nasal cavity/paranasal sinuses. Strong EBV association.
          </p>

          <div>
            <h4 className="font-semibold mb-2">Morphology</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Angiocentric and angiodestructive growth</li>
              <li>Extensive necrosis</li>
              <li>Medium to large atypical lymphocytes</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Immunophenotype</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li><strong>CD3:</strong> Positive (cytoplasmic, not surface)</li>
              <li><strong>CD56:</strong> Positive (NK marker)</li>
              <li><strong>EBV (EBER):</strong> Positive</li>
              <li><strong>Cytotoxic markers:</strong> Positive (TIA-1, granzyme B)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>Diagnostic Approach to T-Cell Lymphomas</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside text-sm space-y-2">
            <li>Assess architecture (effaced vs partial involvement)</li>
            <li>Look for specific patterns (angiocentric, sinusoidal, etc.)</li>
            <li>Immunophenotype:
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-muted-foreground">
                <li>Confirm T-cell lineage (CD3+)</li>
                <li>Check for aberrancy (loss of CD5, CD7, etc.)</li>
                <li>Assess CD4/CD8 ratio</li>
                <li>Look for specific markers (CD30, TFH markers, CD56)</li>
              </ul>
            </li>
            <li>Molecular studies: TCR gene rearrangement to confirm clonality</li>
            <li>Consider EBV testing</li>
            <li>Correlate with clinical presentation</li>
          </ol>
        </CardContent>
      </Card>

      <Card className="border-orange-500/50">
        <CardHeader>
          <CardTitle>Pitfalls in T-Cell Lymphoma Diagnosis</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-sm space-y-2 text-muted-foreground">
            <li>
              <strong>Reactive T-cell proliferations:</strong> Can have aberrant phenotypes.
              Clonality studies and clinical correlation crucial.
            </li>
            <li>
              <strong>Partial involvement:</strong> Small neoplastic population may be obscured by reactive cells.
            </li>
            <li>
              <strong>AITL with many B-cells:</strong> Can be mistaken for B-cell lymphoma.
              Look for TFH markers and expanded FDC meshworks.
            </li>
            <li>
              <strong>ALCL vs Hodgkin:</strong> Both CD30+. Check CD45, CD15, and T-cell markers.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
