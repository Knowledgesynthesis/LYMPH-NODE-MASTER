import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const questions = [
  {
    id: 'q1',
    question: 'What is the key immunohistochemical feature that distinguishes reactive germinal centers from follicular lymphoma?',
    options: [
      'CD10 expression',
      'BCL6 expression',
      'BCL2 negativity in reactive germinal centers',
      'CD20 expression'
    ],
    correct: 2,
    category: 'Reactive vs Neoplastic'
  },
  {
    id: 'q2',
    question: 'A lymph node shows CD5+/CD23+ small B-cell lymphoma. What is the most likely diagnosis?',
    options: [
      'Mantle cell lymphoma',
      'Follicular lymphoma',
      'CLL/SLL',
      'Marginal zone lymphoma'
    ],
    correct: 2,
    category: 'Small B-Cell Lymphomas'
  },
  {
    id: 'q3',
    question: 'Which immunophenotype is characteristic of classic Hodgkin lymphoma?',
    options: [
      'CD30+ CD15+ PAX5-strong CD20+',
      'CD30+ CD15+ PAX5-weak CD20-/weak',
      'CD30- CD15- CD20+ CD45+',
      'CD30+ CD15- CD20+ EMA+'
    ],
    correct: 1,
    category: 'Hodgkin Lymphoma'
  },
  {
    id: 'q4',
    question: 'Tingible body macrophages in germinal centers are a feature of:',
    options: [
      'Follicular lymphoma',
      'Reactive follicular hyperplasia',
      'Mantle cell lymphoma',
      'All of the above'
    ],
    correct: 1,
    category: 'Reactive Patterns'
  },
  {
    id: 'q5',
    question: 'Which translocation is associated with Burkitt lymphoma?',
    options: [
      't(14;18) - IGH/BCL2',
      't(11;14) - IGH/CCND1',
      't(8;14) - IGH/MYC',
      't(2;5) - NPM1/ALK'
    ],
    correct: 2,
    category: 'Molecular'
  },
  {
    id: 'q6',
    question: 'What is the most specific marker for mantle cell lymphoma?',
    options: [
      'CD5',
      'CD23',
      'Cyclin D1',
      'BCL2'
    ],
    correct: 2,
    category: 'Small B-Cell Lymphomas'
  },
  {
    id: 'q7',
    question: 'Paracortical hyperplasia is most commonly seen in:',
    options: [
      'Bacterial infections',
      'Viral infections',
      'Fungal infections',
      'Parasitic infections'
    ],
    correct: 1,
    category: 'Reactive Patterns'
  },
  {
    id: 'q8',
    question: 'Which feature distinguishes anaplastic large cell lymphoma from classic Hodgkin lymphoma?',
    options: [
      'CD30 positivity',
      'Large cell morphology',
      'CD45 positivity in ALCL',
      'Presence of eosinophils'
    ],
    correct: 2,
    category: 'Differential Diagnosis'
  },
  {
    id: 'q9',
    question: 'What is the typical Ki-67 proliferation index in Burkitt lymphoma?',
    options: [
      '20-30%',
      '40-60%',
      '~100%',
      '<10%'
    ],
    correct: 2,
    category: 'Large B-Cell Lymphomas'
  },
  {
    id: 'q10',
    question: 'Which zone of the lymph node is the T-cell zone?',
    options: [
      'Cortex',
      'Paracortex',
      'Medulla',
      'Germinal centers'
    ],
    correct: 1,
    category: 'Anatomy'
  },
  {
    id: 'q11',
    question: 'What pattern is characteristic of angioimmunoblastic T-cell lymphoma (AITL)?',
    options: [
      'Back-to-back follicles',
      'Diffuse large cell proliferation',
      'Prominent arborizing vessels and expanded FDC meshworks',
      'Starry-sky pattern'
    ],
    correct: 2,
    category: 'T-Cell Lymphomas'
  },
  {
    id: 'q12',
    question: 'In flow cytometry, what kappa:lambda ratio suggests B-cell monoclonality?',
    options: [
      '1:1 to 2:1',
      '0.5:1 to 3:1 (normal range)',
      '>3:1 or <0.5:1',
      'Any ratio'
    ],
    correct: 2,
    category: 'Flow Cytometry'
  },
  {
    id: 'q13',
    question: 'BCL2 rearrangement by FISH is most specific for:',
    options: [
      'CLL/SLL',
      'Mantle cell lymphoma',
      'Follicular lymphoma',
      'DLBCL'
    ],
    correct: 2,
    category: 'Molecular'
  },
  {
    id: 'q14',
    question: 'Nodular lymphocyte-predominant Hodgkin lymphoma is characterized by:',
    options: [
      'CD30+ CD15+ Reed-Sternberg cells',
      'CD20+ CD45+ EMA+ "popcorn cells"',
      'CD30+ ALK+ hallmark cells',
      'CD10+ BCL2+ small cells'
    ],
    correct: 1,
    category: 'Hodgkin Lymphoma'
  },
  {
    id: 'q15',
    question: 'What is the diagnostic significance of progressive transformation of germinal centers (PTGC)?',
    options: [
      'It is diagnostic of follicular lymphoma',
      'It is always malignant',
      'It is benign but may precede or coexist with NLPHL',
      'It requires immediate chemotherapy'
    ],
    correct: 2,
    category: 'Pitfalls'
  }
]

export function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  )
  const [showResults, setShowResults] = useState(false)

  const handleSelectAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const calculateScore = () => {
    let correct = 0
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        correct++
      }
    })
    return correct
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setSelectedAnswers(new Array(questions.length).fill(null))
    setShowResults(false)
  }

  if (showResults) {
    const score = calculateScore()
    const percentage = Math.round((score / questions.length) * 100)

    return (
      <div className="space-y-6 max-w-4xl">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Assessment Results</h1>
          <p className="text-muted-foreground">Session-only results (not stored)</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Your Score</CardTitle>
            <CardDescription>
              You answered {score} out of {questions.length} questions correctly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-4">
                {percentage}%
              </div>
              <p className="text-muted-foreground">
                {percentage >= 90 ? 'Excellent!' : percentage >= 70 ? 'Good job!' : percentage >= 50 ? 'Keep practicing!' : 'Review the modules and try again!'}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Question Review</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {questions.map((q, index) => {
              const userAnswer = selectedAnswers[index]
              const isCorrect = userAnswer === q.correct

              return (
                <div key={q.id} className="border-b pb-4 last:border-0">
                  <div className="flex items-start gap-2 mb-2">
                    <span className={`font-semibold ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                      {isCorrect ? '✓' : '✗'}
                    </span>
                    <div className="flex-1">
                      <p className="font-medium text-sm mb-2">
                        {index + 1}. {q.question}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Your answer:</strong> {userAnswer !== null ? q.options[userAnswer] : 'Not answered'}
                      </p>
                      {!isCorrect && (
                        <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                          <strong>Correct answer:</strong> {q.options[q.correct]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button onClick={handleReset} className="flex-1">
            Take Assessment Again
          </Button>
          <Button variant="outline" onClick={() => window.location.href = '/'} className="flex-1">
            Return to Home
          </Button>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const selectedAnswer = selectedAnswers[currentQuestion]
  const allAnswered = selectedAnswers.every(a => a !== null)

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Assessment</h1>
        <p className="text-muted-foreground">
          Test your knowledge - results are session-only and not tracked
        </p>
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Question {currentQuestion + 1} of {questions.length}</span>
        <span>Category: {question.category}</span>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{question.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                className={`w-full text-left p-3 rounded-lg border transition-colors ${
                  selectedAnswer === index
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:bg-accent'
                }`}
              >
                <span className="text-sm">{option}</span>
              </button>
            ))}
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex-1"
            >
              Previous
            </Button>
            {currentQuestion < questions.length - 1 ? (
              <Button
                onClick={handleNext}
                className="flex-1"
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!allAnswered}
                className="flex-1"
              >
                Submit Assessment
              </Button>
            )}
          </div>

          {currentQuestion === questions.length - 1 && !allAnswered && (
            <p className="text-sm text-center text-muted-foreground">
              Please answer all questions before submitting
            </p>
          )}
        </CardContent>
      </Card>

      <div className="flex gap-2 flex-wrap">
        {questions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentQuestion(index)}
            className={`w-8 h-8 rounded text-sm ${
              index === currentQuestion
                ? 'bg-primary text-primary-foreground'
                : selectedAnswers[index] !== null
                ? 'bg-accent'
                : 'bg-muted'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
