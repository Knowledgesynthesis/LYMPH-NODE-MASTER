import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Navigation } from './Navigation'
import { cn } from '@/lib/utils'

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)} />

      <div className="container flex">
        {/* Desktop Sidebar */}
        <aside className="hidden w-64 shrink-0 md:block">
          <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto border-r px-4">
            <Navigation />
          </div>
        </aside>

        {/* Mobile Menu */}
        <div
          className={cn(
            'fixed inset-0 top-14 z-40 bg-background md:hidden',
            mobileMenuOpen ? 'block' : 'hidden'
          )}
        >
          <div className="h-full overflow-y-auto border-r">
            <Navigation mobile onItemClick={() => setMobileMenuOpen(false)} />
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 px-4 py-6 md:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
