import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import {
  Home,
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
  ClipboardList,
  Settings
} from 'lucide-react'

const navigation = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Anatomy', path: '/anatomy', icon: Microscope },
  { name: 'Reactive Patterns', path: '/reactive', icon: Activity },
  { name: 'Hodgkin Lymphomas', path: '/hodgkin', icon: Hexagon },
  { name: 'B-Cell Lymphomas', path: '/bcell', icon: Layers },
  { name: 'T-Cell Lymphomas', path: '/tcell', icon: Zap },
  { name: 'Flow Cytometry', path: '/flow', icon: TestTube },
  { name: 'Immunohistochemistry', path: '/ihc', icon: Stethoscope },
  { name: 'Molecular Tools', path: '/molecular', icon: Dna },
  { name: 'Diagnostic Pitfalls', path: '/pitfalls', icon: AlertTriangle },
  { name: 'Integrated Reporting', path: '/reporting', icon: FileText },
  { name: 'Synthetic Cases', path: '/cases', icon: FolderOpen },
  { name: 'Assessment', path: '/assessment', icon: ClipboardList },
  { name: 'Settings', path: '/settings', icon: Settings },
]

interface NavigationProps {
  mobile?: boolean
  onItemClick?: () => void
}

export function Navigation({ mobile = false, onItemClick }: NavigationProps) {
  const location = useLocation()

  return (
    <nav className={cn(
      'space-y-1',
      mobile ? 'p-4' : 'py-4'
    )}>
      {navigation.map((item) => {
        const Icon = item.icon
        const isActive = location.pathname === item.path

        return (
          <Link
            key={item.path}
            to={item.path}
            onClick={onItemClick}
            className={cn(
              'flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              isActive
                ? 'bg-primary text-primary-foreground'
                : 'text-foreground hover:bg-accent hover:text-accent-foreground'
            )}
          >
            <Icon className="h-5 w-5" />
            <span>{item.name}</span>
          </Link>
        )
      })}
    </nav>
  )
}
