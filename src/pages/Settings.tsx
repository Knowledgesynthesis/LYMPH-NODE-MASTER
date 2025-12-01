import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useThemeStore } from '@/store/themeStore'
import { Moon, Sun } from 'lucide-react'

export function Settings() {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Customize your app preferences
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>
            Customize how the app looks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Theme</p>
              <p className="text-sm text-muted-foreground">
                Switch between dark and light mode
              </p>
            </div>
            <Button
              variant="outline"
              size="lg"
              onClick={toggleTheme}
              className="flex items-center gap-2"
            >
              {theme === 'dark' ? (
                <>
                  <Moon className="h-5 w-5" />
                  Dark Mode
                </>
              ) : (
                <>
                  <Sun className="h-5 w-5" />
                  Light Mode
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>About Lymph Node Master</CardTitle>
          <CardDescription>
            Learn more about this educational platform
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Mission</h3>
            <p className="text-sm text-muted-foreground">
              Lymph Node Master is a comprehensive educational platform designed to teach lymph node pathology
              through a systematic, pattern-based approach. The app focuses on helping pathology residents and
              fellows develop structured reasoning skills from architecture to diagnosis.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Learning Philosophy</h3>
            <p className="text-sm text-muted-foreground">
              Architecture → Pattern → Immunophenotype → Diagnosis
            </p>
            <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1 mt-2">
              <li>Start with architecture before reaching for IHC</li>
              <li>Recognize patterns (follicular, diffuse, paracortical, sinus)</li>
              <li>Apply immunophenotyping conceptually</li>
              <li>Integrate all findings for diagnosis</li>
              <li>Address pitfalls and differentials</li>
            </ol>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>11 comprehensive learning modules covering normal anatomy through integrated reporting</li>
              <li>Synthetic cases for hands-on practice</li>
              <li>Session-based assessments (no tracking)</li>
              <li>Mobile-first, responsive design</li>
              <li>Offline-capable progressive web app</li>
              <li>Dark mode optimized for reduced eye strain</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Version</h3>
            <p className="text-sm text-muted-foreground">1.0.0</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange-500/50">
        <CardHeader>
          <CardTitle>Important Disclaimers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 text-orange-600 dark:text-orange-400">Educational Use Only</h3>
            <p className="text-sm text-muted-foreground">
              This application is designed solely for educational purposes to teach lymph node pathology concepts
              to pathology residents, fellows, and medical students. It is not intended for clinical use, patient
              care, or diagnostic decision-making.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-orange-600 dark:text-orange-400">Not Clinical Advice</h3>
            <p className="text-sm text-muted-foreground">
              The content provided in this app does not constitute medical advice, clinical guidance, or laboratory
              recommendations. All clinical and diagnostic decisions must be made by qualified healthcare
              professionals based on individual patient circumstances and according to institutional protocols.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-orange-600 dark:text-orange-400">Synthetic Data Only</h3>
            <p className="text-sm text-muted-foreground">
              All cases, examples, and scenarios in this app are entirely synthetic and do not represent real
              patients or clinical data. No protected health information (PHI) or patient-identifiable data is
              used or stored.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-orange-600 dark:text-orange-400">No Data Tracking</h3>
            <p className="text-sm text-muted-foreground">
              This application does not track, store, or transmit any user data, progress, or assessment results.
              All interactions are session-based only. No personal information is collected.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-orange-600 dark:text-orange-400">Conceptual Framework</h3>
            <p className="text-sm text-muted-foreground">
              The immunohistochemistry, flow cytometry, and molecular testing information provided is conceptual
              and high-level. Actual laboratory testing requires specialized training, quality control, and
              validation. Do not use this app as a reference for laboratory procedures or test interpretation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-orange-600 dark:text-orange-400">Consult Expert Resources</h3>
            <p className="text-sm text-muted-foreground">
              While this app aims to provide accurate educational content, learners should always consult
              authoritative textbooks, primary literature, and seek expert consultation for complex cases.
              Hematopathology is a specialized field requiring years of training and experience.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-orange-600 dark:text-orange-400">No Warranty</h3>
            <p className="text-sm text-muted-foreground">
              This educational app is provided "as is" without warranty of any kind. The developers assume no
              liability for any errors, omissions, or consequences arising from use of this application.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Privacy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              Lymph Node Master is designed with privacy in mind:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>No user accounts or registration required</li>
              <li>No personal data collection</li>
              <li>No tracking or analytics</li>
              <li>No cookies beyond essential app functionality</li>
              <li>All data is session-only and stored locally in your browser</li>
              <li>No data is transmitted to external servers</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
