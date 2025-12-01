export interface Module {
  id: string
  title: string
  description: string
  icon: string
  path: string
  color: string
}

export interface Lesson {
  id: string
  title: string
  content: string
  sections: LessonSection[]
}

export interface LessonSection {
  id: string
  title: string
  content: string
  type: 'text' | 'diagram' | 'table' | 'list'
  data?: unknown
}

export interface Question {
  id: string
  question: string
  options: string[]
  correct: number
  rationale: string
  category?: string
}

export interface CaseData {
  id: string
  architecture: string
  ihc: Record<string, string>
  flow: Record<string, string>
  molecular: string[]
  question: string
  options: string[]
  correct: number
  rationale: string
}
