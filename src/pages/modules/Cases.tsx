import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const syntheticCases = [
  {
    id: 'case_1',
    title: 'Case 1: Enlarged Cervical Lymph Node',
    clinical: '45-year-old female with painless cervical lymphadenopathy',
    architecture: 'Effaced by closely packed follicles in back-to-back arrangement',
    morphology: 'Monotonous follicles composed of small cleaved cells (centrocytes) and scattered centroblasts (0-5/HPF). No tingible body macrophages.',
    ihc: {
      CD20: 'Positive',
      CD10: 'Positive',
      BCL2: 'Positive in follicles',
      BCL6: 'Positive',
      CD5: 'Negative',
      'Cyclin D1': 'Negative'
    },
    flow: 'Monoclonal B-cell population, kappa-restricted, CD10+',
    molecular: 'BCL2 rearrangement detected by FISH',
    question: 'Most likely diagnosis?',
    options: [
      'Reactive follicular hyperplasia',
      'Follicular lymphoma',
      'Mantle cell lymphoma',
      'Marginal zone lymphoma'
    ],
    correct: 1,
    rationale: 'BCL2+ follicles in a follicular pattern, combined with CD10 positivity, monoclonality, and BCL2 rearrangement are diagnostic of follicular lymphoma. Reactive follicles are BCL2 negative.'
  },
  {
    id: 'case_2',
    title: 'Case 2: Mediastinal Mass in Young Adult',
    clinical: '28-year-old male with anterior mediastinal mass',
    architecture: 'Nodular growth pattern with broad collagen bands',
    morphology: 'Lacunar cells in clear spaces. Background of small lymphocytes, eosinophils, and histiocytes.',
    ihc: {
      CD30: 'Strong positive (membranous and Golgi)',
      CD15: 'Positive',
      PAX5: 'Weak positive',
      CD20: 'Negative',
      CD45: 'Negative'
    },
    flow: 'Limited due to fibrosis. Background reactive lymphocytes.',
    molecular: 'Not performed',
    question: 'Most likely diagnosis?',
    options: [
      'Anaplastic large cell lymphoma',
      'Classic Hodgkin lymphoma, nodular sclerosis',
      'Diffuse large B-cell lymphoma',
      'Primary mediastinal large B-cell lymphoma'
    ],
    correct: 1,
    rationale: 'CD30+/CD15+/PAX5 weak/CD45− profile in a young adult with mediastinal mass and lacunar cells is diagnostic of classic Hodgkin lymphoma, nodular sclerosis type. This is the most common HL subtype in this demographic.'
  },
  {
    id: 'case_3',
    title: 'Case 3: Generalized Lymphadenopathy',
    clinical: '65-year-old male with generalized lymphadenopathy and lymphocytosis',
    architecture: 'Diffuse effacement with proliferation centers (pseudofollicles)',
    morphology: 'Small, monotonous lymphocytes with round nuclei and clumped chromatin. Proliferation centers contain prolymphocytes and paraimmunoblasts.',
    ihc: {
      CD20: 'Dim positive',
      CD5: 'Positive',
      CD23: 'Positive',
      CD10: 'Negative',
      'Cyclin D1': 'Negative'
    },
    flow: 'Monoclonal B-cells, dim surface Ig, CD5+/CD23+',
    molecular: 'IGH clonal rearrangement',
    question: 'Most likely diagnosis?',
    options: [
      'Mantle cell lymphoma',
      'Follicular lymphoma',
      'Chronic lymphocytic leukemia/Small lymphocytic lymphoma',
      'Marginal zone lymphoma'
    ],
    correct: 2,
    rationale: 'CD5+/CD23+/CD20dim profile with proliferation centers is characteristic of CLL/SLL. Mantle cell lymphoma would be CD5+ but CD23− and cyclin D1+.'
  },
  {
    id: 'case_4',
    title: 'Case 4: Rapidly Growing Abdominal Mass',
    clinical: '35-year-old HIV+ male with rapidly growing abdominal mass',
    architecture: 'Diffuse, sheet-like growth with "starry-sky" pattern',
    morphology: 'Medium-sized cells with round nuclei, multiple basophilic nucleoli, very high mitotic rate. Tingible body macrophages scattered throughout.',
    ihc: {
      CD20: 'Positive',
      CD10: 'Positive',
      BCL6: 'Positive',
      BCL2: 'Negative',
      'Ki-67': '~100%',
      TdT: 'Negative'
    },
    flow: 'Monoclonal B-cells, CD10+',
    molecular: 'MYC rearrangement t(8;14)',
    question: 'Most likely diagnosis?',
    options: [
      'Diffuse large B-cell lymphoma',
      'Burkitt lymphoma',
      'Lymphoblastic lymphoma',
      'Follicular lymphoma, grade 3'
    ],
    correct: 1,
    rationale: 'Starry-sky pattern, Ki-67 ~100%, BCL2 negativity, and MYC rearrangement are diagnostic of Burkitt lymphoma. Very high proliferation rate and MYC translocation distinguish it from DLBCL.'
  },
  {
    id: 'case_5',
    title: 'Case 5: CD5+ Small B-Cell Lymphoma',
    clinical: '58-year-old male with lymphadenopathy',
    architecture: 'Diffuse and vaguely nodular pattern',
    morphology: 'Monotonous small to medium lymphocytes with irregular nuclear contours',
    ihc: {
      CD20: 'Positive',
      CD5: 'Positive',
      CD23: 'Negative',
      'Cyclin D1': 'Positive (nuclear)',
      SOX11: 'Positive'
    },
    flow: 'Monoclonal B-cells, CD5+/CD23−, bright surface Ig',
    molecular: 't(11;14) CCND1 rearrangement by FISH',
    question: 'Most likely diagnosis?',
    options: [
      'Chronic lymphocytic leukemia',
      'Mantle cell lymphoma',
      'Follicular lymphoma',
      'Marginal zone lymphoma'
    ],
    correct: 1,
    rationale: 'CD5+/CD23−/Cyclin D1+ profile with t(11;14) is diagnostic of mantle cell lymphoma. CLL would be CD5+/CD23+ and cyclin D1 negative.'
  },
  {
    id: 'case_6',
    title: 'Case 6: Pediatric Neck Mass',
    clinical: '14-year-old with painless cervical lymphadenopathy',
    architecture: 'Preserved with florid follicular hyperplasia',
    morphology: 'Variable-sized follicles with polarization. Tingible body macrophages present. Mantle zones intact.',
    ihc: {
      CD20: 'Positive in follicles',
      CD10: 'Positive in germinal centers',
      BCL2: 'Negative in germinal centers',
      BCL6: 'Positive in germinal centers'
    },
    flow: 'Polytypic B-cells, normal kappa:lambda ratio',
    molecular: 'Not performed',
    question: 'Most likely diagnosis?',
    options: [
      'Follicular lymphoma',
      'Reactive follicular hyperplasia',
      'Burkitt lymphoma',
      'Diffuse large B-cell lymphoma'
    ],
    correct: 1,
    rationale: 'BCL2 negativity in germinal centers, variable follicle sizes, tingible body macrophages, and polytypic B-cells confirm reactive follicular hyperplasia. This is the key differential from follicular lymphoma.'
  }
]

export function Cases() {
  const [currentCase, setCurrentCase] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const caseData = syntheticCases[currentCase]

  const handleNext = () => {
    if (currentCase < syntheticCases.length - 1) {
      setCurrentCase(currentCase + 1)
      setShowAnswer(false)
      setSelectedOption(null)
    }
  }

  const handlePrevious = () => {
    if (currentCase > 0) {
      setCurrentCase(currentCase - 1)
      setShowAnswer(false)
      setSelectedOption(null)
    }
  }

  const handleSubmit = () => {
    setShowAnswer(true)
  }

  const handleSelectOption = (index: number) => {
    setSelectedOption(index)
    setShowAnswer(false)
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Synthetic Cases</h1>
        <p className="text-muted-foreground">
          Practice integrating morphology, immunophenotype, and molecular data.
        </p>
      </div>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePrevious}
          disabled={currentCase === 0}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Button>

        <span className="text-sm text-muted-foreground">
          Case {currentCase + 1} of {syntheticCases.length}
        </span>

        <Button
          variant="outline"
          size="sm"
          onClick={handleNext}
          disabled={currentCase === syntheticCases.length - 1}
        >
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{caseData.title}</CardTitle>
          <CardDescription>Synthetic educational case</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Clinical History</h3>
            <p className="text-sm text-muted-foreground">{caseData.clinical}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Architecture</h3>
            <p className="text-sm text-muted-foreground">{caseData.architecture}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Morphology</h3>
            <p className="text-sm text-muted-foreground">{caseData.morphology}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Immunohistochemistry</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {Object.entries(caseData.ihc).map(([marker, result]) => (
                <div key={marker} className="flex justify-between border-b pb-1">
                  <span className="font-medium">{marker}:</span>
                  <span className="text-muted-foreground">{result}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Flow Cytometry</h3>
            <p className="text-sm text-muted-foreground">{caseData.flow}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Molecular Studies</h3>
            <p className="text-sm text-muted-foreground">{caseData.molecular}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{caseData.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {caseData.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectOption(index)}
                className={`w-full text-left p-3 rounded-lg border transition-colors ${
                  selectedOption === index
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:bg-accent'
                } ${
                  showAnswer && index === caseData.correct
                    ? 'border-green-500 bg-green-500/10'
                    : ''
                } ${
                  showAnswer && selectedOption === index && index !== caseData.correct
                    ? 'border-red-500 bg-red-500/10'
                    : ''
                }`}
              >
                <span className="text-sm">{option}</span>
              </button>
            ))}
          </div>

          {!showAnswer && selectedOption !== null && (
            <Button onClick={handleSubmit} className="w-full">
              Submit Answer
            </Button>
          )}

          {showAnswer && (
            <div className="mt-4 p-4 rounded-lg bg-muted">
              <h4 className="font-semibold mb-2">
                {selectedOption === caseData.correct ? '✓ Correct!' : '✗ Incorrect'}
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Correct answer:</strong> {caseData.options[caseData.correct]}
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Rationale:</strong> {caseData.rationale}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
