import { useState } from 'react'
import Link from 'next/link'
import { MdMenu } from 'react-icons/md'
import MobileNavMenu from './mobile-nav-menu'
import ButtonLink from './button-link'
import CustomImage from './image'
import { getButtonAppearance } from 'utils/button'
import CustomLink from './custom-link'
import { BeakerIcon, StarIcon } from '@heroicons/react/solid'

interface NavbarProps {
  navbar?: {
    logo?: IMedia
    links?: ILink[]
    button?: IButton
  }
}

const Navbar = ({ navbar }: NavbarProps) => {
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false)

  return (
    <>
      {/* The actual navbar */}
      <nav className="py-6 bg-gradient-to-b from-gray-800 to-gray-700 border-b-2 shadow sm:py-2">
        <div className="container flex flex-row justify-between items-center">
          {/* Content aligned to the left */}
          <div className="flex flex-row items-center">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/[[...slug]]" as="/">
                <a>
                  <div className="grid grid-cols-1 justify-items-center rounded">
                    <CustomImage
                      media={navbar?.logo}
                      className="object-contain w-12 h-8 xl:h-12"
                      width={73}
                      height={45}
                    />
                  </div>
                  <div className="grid grid-cols-1 grid-rows-2 my-auto ml-4">
                    <span className="mx-auto font-bold text-white">
                      IDEAL-COACHING
                    </span>
                    <span className="hidden text-sm text-gray-300 md:block">
                      Information – Erkenntnis – Gestalten
                    </span>
                  </div>
                </a>
              </Link>
            </div>
            {/* List of links on desktop */}
            <ul className="hidden flex-row gap-4 items-baseline ml-10 list-none md:flex">
              {navbar.links.map((navLink) => (
                <li key={navLink.id}>
                  <CustomLink link={navLink}>
                    <div className="inline-flex items-center px-1 pt-1 text-xs font-bold leading-5 text-gray-300 border-b-2 border-transparent transition duration-150 ease-in-out xl:text-sm hover:text-gray-500 hover:border-gray-300 focus:text-gray-100 focus:border-gray-300 focus:outline-none">
                      {navLink?.text}
                    </div>
                  </CustomLink>
                </li>
              ))}
            </ul>
            {/* <div>
              <a
                href="https://www.google.com/maps/place/Online-Marketing+beammeup.today/@48.17254,11.5897513,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xab342674534c3ee9!8m2!3d48.1725632!4d11.5918897?hl=de"
                target="_blank"
                rel="noreferrer"
                title="Bewertungen zu Beammeup.today"
                id="Bewertungen zu Beammeup.today"
              >
                <div className="flex flex-row items-end ml-4">
                  <StarIcon className="w-5 h-5 text-yellow-500" />
                  <StarIcon className="w-5 h-5 text-yellow-500" />
                  <StarIcon className="w-5 h-5 text-yellow-500" />
                  <StarIcon className="w-5 h-5 text-yellow-500" />
                  <StarIcon className="w-5 h-5 text-yellow-500" />
                  <span className="ml-2">Bewertungen</span>
                </div>
              </a>
            </div>
          */}{' '}
          </div>
          {/* Hamburger menu on mobile */}
          <button
            onClick={() => setMobileMenuIsShown(true)}
            className="block p-1 md:hidden"
          >
            <MdMenu className="w-auto h-8" color="#fff" />
          </button>
          {/* CTA button on desktop */}
          {navbar.button && (
            <div className="hidden md:block">
              <ButtonLink
                button={navbar.button}
                appearance={getButtonAppearance(navbar.button.type, 'light')}
                compact
              />
            </div>
          )}
        </div>
      </nav>

      {/* Mobile navigation menu panel */}
      {mobileMenuIsShown && (
        <MobileNavMenu
          navbar={navbar}
          closeSelf={() => setMobileMenuIsShown(false)}
        />
      )}
    </>
  )
}

export default Navbar
