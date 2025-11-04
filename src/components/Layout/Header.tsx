import Logo from '../../assets/Logo/The Evergreen Hill.svg'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import BookForm from './BookForm'

const leftNavigation = [
  { name: 'Rooms & Suites', page: 'roomsAndSuites' },
  { name: 'Experiences', page: 'experiences' },
  { name: 'Gallery', page: 'gallery' },
]

const rightNavigation = [
  { name: 'Our Story', page: 'ourStory' },
  { name: 'Location', page: 'location' },
  { name: 'Contact', page: 'contact' },
]

interface HeaderProps {
  onNavigate?: (page: string) => void
  activePage?: string
}

export default function Header({ onNavigate, activePage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [bookFormOpen, setBookFormOpen] = useState(false)

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page)
    }
  }

  const handleLogoClick = () => {
    if (onNavigate) {
      onNavigate('home')
    }
  }

  return (
    <>
      <header className="sticky top-5 z-50 transition-all duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav aria-label="Global" className="flex items-center justify-between p-4 sm:p-4 lg:p-6 bg-slate-700/80 backdrop-blur-sm shadow-lg rounded-md overflow-visible">
          {/* Left Navigation - Desktop only */}
          <div className="flex flex-1">
            <div className="hidden lg:flex lg:gap-x-8">
              {leftNavigation.map((item) => (
                <button 
                  type="button"
                  key={item.name} 
                  onClick={() => handleNavigation(item.page)}
                  aria-current={activePage === item.page ? 'page' : undefined}
                  className={`text-sm/6 font-semibold transition-colors bg-transparent border-none cursor-pointer ${
                    activePage === item.page ? 'text-teal-600' : 'text-white hover:text-teal-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            
            {/* Mobile/Tablet Book Now Button - Left side */}
            <div className="flex lg:hidden">
              <button 
                type="button"
                onClick={() => setBookFormOpen(true)}
                className="text-sm font-semibold text-white hover:bg-teal-700/30 px-3 py-2 pl-0 sm:pl-2 lg:pl-2 rounded-md transition-colors flex items-center whitespace-nowrap"
              >
                Book Now
                <span aria-hidden="true" className="ml-1">→</span>
              </button>
            </div>
          </div>

          {/* Center Logo */}
          <button type="button" onClick={handleLogoClick} className="-m-1.5 p-1.5 bg-transparent border-none cursor-pointer hover:bg-teal-950/50 rounded-md hover:scale-105  transition-colors">
            <span className="sr-only">The Evergreen Hill</span>
            <img
              alt="The Evergreen Hill Logo"
              src={Logo}
              className="object-cover h-16 w-auto sm:h-20"
            />
          </button>

          {/* Right Navigation & Book Now Button - Desktop */}
          <div className="flex flex-1 justify-end items-center gap-8">
            <div className="hidden lg:flex lg:gap-x-8">
              {rightNavigation.map((item) => (
                <button 
                  type="button"
                  key={item.name} 
                  onClick={() => handleNavigation(item.page)}
                  aria-current={activePage === item.page ? 'page' : undefined}
                  className={`text-sm/6 font-semibold transition-colors bg-transparent border-none cursor-pointer ${
                    activePage === item.page ? 'text-teal-600' : 'text-white hover:text-teal-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            
            {/* Desktop Book Now Button */}
            <button 
              type="button"
              onClick={() => setBookFormOpen(true)}
              className="hidden lg:flex text-sm font-semibold text-white hover:bg-teal-950/50 hover:scale-105 px-3 py-2 pr-1 rounded-md transition-colors items-center whitespace-nowrap"
            >
              Book Now
              <span aria-hidden="true" className="ml-1">→</span>
            </button>
            
            {/* Mobile/Tablet Hamburger Menu - Right side */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 pr-2 sm:pr-4 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:bg-teal-700/50 transition-colors"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
          </div>
        </nav>
      </div>

        {/* Mobile/Tablet Menu - Right side slide-in */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b from-teal-900 via-emerald-900 to-teal-800 text-teal-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10 shadow-xl">
            <div className="flex items-center justify-between">
              <button type="button" onClick={handleLogoClick} className="-m-1.5 p-1.5 bg-transparent border-none cursor-pointer hover:bg-white/10 rounded-md transition-colors">
                <span className="sr-only">The Evergreen Hill</span>
                <img
                  alt="The Evergreen Hill Logo"
                  src={Logo}
                  className="h-16 w-auto sm:h-20"
                />
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-teal-100 hover:bg-white/10 transition-colors"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {[...leftNavigation, ...rightNavigation].map((item) => (
                    <button
                      type="button"
                      key={item.name}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        handleNavigation(item.page)
                      }}
                      aria-current={activePage === item.page ? 'page' : undefined}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold w-full text-left bg-transparent border-none cursor-pointer transition-colors ${
                        activePage === item.page ? 'bg-white/10 text-teal-200' : 'text-teal-50 hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Book Form Modal */}
      {bookFormOpen && (
        <BookForm 
          isOpen={bookFormOpen} 
          onClose={() => setBookFormOpen(false)} 
        />
      )}
    </>
  )
}