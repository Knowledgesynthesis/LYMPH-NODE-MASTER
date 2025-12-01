import { Link } from 'react-router-dom'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import {
  Microscope,
  Activity,
  Hexagon,
  Layers,
  Zap,
  TestTube,
  Stethoscope,
  Dna,
  AlertTriangle,
  FileText,
  FolderOpen,
  ClipboardList
} from 'lucide-react'

const modules = [
  {
    id: 'anatomy',
    title: 'Normal Lymph Node Anatomy',
    description: 'Learn the fundamental architecture of lymph nodes including cortex, paracortex, and medullary zones.',
    icon: Microscope,
    path: '/anatomy',
    color: 'text-blue-500'
  },
  {
    id: 'reactive',
    title: 'Reactive Patterns',
    description: 'Understand follicular hyperplasia, paracortical hyperplasia, and sinus histiocytosis patterns.',
    icon: Activity,
    path: '/reactive',
    color: 'text-green-500'
  },
  {
    id: 'hodgkin',
    title: 'Hodgkin Lymphomas',
    description: 'Explore classic Hodgkin patterns, Reed-Sternberg cells, and nodular lymphocyte-predominant HL.',
    icon: Hexagon,
    path: '/hodgkin',
    color: 'text-purple-500'
  },
  {
    id: 'bcell',
    title: 'B-Cell Lymphomas',
    description: 'Study small and large B-cell lymphomas including follicular, mantle cell, and DLBCL.',
    icon: Layers,
    path: '/bcell',
    color: 'text-indigo-500'
  },
  {
    id: 'tcell',
    title: 'T-Cell & NK Lymphomas',
    description: 'Learn about peripheral T-cell lymphomas, ALCL, and angioimmunoblastic T-cell lymphoma.',
    icon: Zap,
    path: '/tcell',
    color: 'text-yellow-500'
  },
  {
    id: 'flow',
    title: 'Flow Cytometry',
    description: 'Understand B-cell gating, kappa/lambda ratios, and aberrant phenotype patterns.',
    icon: TestTube,
    path: '/flow',
    color: 'text-cyan-500'
  },
  {
    id: 'ihc',
    title: 'Immunohistochemistry',
    description: 'Conceptual understanding of B-cell, T-cell, and germinal center markers.',
    icon: Stethoscope,
    path: '/ihc',
    color: 'text-pink-500'
  },
  {
    id: 'molecular',
    title: 'Molecular Tools',
    description: 'High-level overview of FISH, PCR-based clonality, and NGS in lymphoma diagnosis.',
    icon: Dna,
    path: '/molecular',
    color: 'text-red-500'
  },
  {
    id: 'pitfalls',
    title: 'Diagnostic Pitfalls',
    description: 'Recognize common diagnostic challenges and how to avoid overcalling malignancy.',
    icon: AlertTriangle,
    path: '/pitfalls',
    color: 'text-orange-500'
  },
  {
    id: 'reporting',
    title: 'Integrated LN Reporting',
    description: 'Learn to synthesize architecture, IHC, flow, and molecular findings into diagnostic impressions.',
    icon: FileText,
    path: '/reporting',
    color: 'text-teal-500'
  },
  {
    id: 'cases',
    title: 'Synthetic Cases',
    description: 'Practice with integrated cases combining morphology, IHC, flow, and molecular data.',
    icon: FolderOpen,
    path: '/cases',
    color: 'text-violet-500'
  },
  {
    id: 'assessment',
    title: 'Assessment',
    description: 'Test your knowledge with session-based quizzes covering all lymph node pathology topics.',
    icon: ClipboardList,
    path: '/assessment',
    color: 'text-emerald-500'
  }
]

export function Home() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Lymph Node Master</h1>
        <p className="text-muted-foreground">
          Architecture → Pattern → Immunophenotype → Diagnosis
        </p>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-xl font-semibold mb-2">Welcome to Lymph Node Master</h2>
        <p className="text-muted-foreground">
          A comprehensive, mobile-first educational platform focused on lymph node pathology.
          Learn systematic reasoning from architecture to diagnosis through pattern-based teaching.
        </p>
        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
          <p>✓ Pattern-based learning approach</p>
          <p>✓ Synthetic cases and interactive tools</p>
          <p>✓ Session-only assessments (no tracking)</p>
          <p>✓ Offline-capable and mobile-optimized</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Learning Modules</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon
            return (
              <Link key={module.id} to={module.path}>
                <Card className="h-full transition-all hover:shadow-md hover:border-primary">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Icon className={`h-8 w-8 ${module.color}`} />
                    </div>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>

      <div className="rounded-lg border bg-muted/50 p-6">
        <h3 className="font-semibold mb-2">Learning Approach</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
          <li>Start with architecture first</li>
          <li>Assess cytology and patterns</li>
          <li>Apply IHC panel knowledge</li>
          <li>Interpret flow cytometry findings</li>
          <li>Consider molecular clues</li>
          <li>Integrate into broad diagnosis</li>
          <li>Address pitfalls and differentials</li>
        </ol>
      </div>
    </div>
  )
}
