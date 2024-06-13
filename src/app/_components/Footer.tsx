export default function Footer() {
  return (
    <footer className="bg-black p-8 text-white">
      <div className="container mx-auto grid w-fit grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-4 text-lg font-bold">
            Al-Kadhim Journal for Computer Science
          </h3>
          <div className="pb-2">INFORMATION</div>
          <ul>
            <li className="mb-1">
              <a href="#about" className="text-gray-400 hover:text-white">
                For Readers
              </a>
            </li>
            <li className="mb-1">
              <a href="#locations" className="text-gray-400 hover:text-white">
                For Authors
              </a>
            </li>
            <li className="mb-1">
              <a href="#offices" className="text-gray-400 hover:text-white">
                For Librarians
              </a>
            </li>
          </ul>
        </div>
        <div className="md:border-l-2 md:border-r-2 md:border-white md:pl-8">
          <h3 className="mb-2 text-lg font-bold">ABOUT SPACE</h3>
          <ul>
            <li className="mb-2">
              <a href="#about" className="text-gray-400 hover:text-white">
                ABOUT THE JOURNAL
              </a>
            </li>
            <li className="mb-2">
              <a href="#locations" className="text-gray-400 hover:text-white">
                AUTHOR GUIDES
              </a>
            </li>
            <li className="mb-2">
              <a href="#offices" className="text-gray-400 hover:text-white">
                EDITORIAL TEAM
              </a>
            </li>
            <li className="mb-2">
              <a href="#team" className="text-gray-400 hover:text-white">
                PRIVACY STATEMENT
              </a>
            </li>
            <li className="mb-2">
              <a href="#services" className="text-gray-400 hover:text-white">
                PRIVACY STATEMENT
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-bold">USEFUL LINKS</h3>
          <ul>
            <li className="mb-2">
              <a href="#events" className="text-gray-400 hover:text-white">
                Latest Events
              </a>
            </li>
            <li className="mb-2">
              <a href="#faq" className="text-gray-400 hover:text-white">
                FAQ
              </a>
            </li>
            <li className="mb-2">
              <a href="#blog" className="text-gray-400 hover:text-white">
                Blog
              </a>
            </li>
            <li className="mb-2">
              <a href="#gallery" className="text-gray-400 hover:text-white">
                Gallery
              </a>
            </li>
            <li className="mb-2">
              <a href="#shop" className="text-gray-400 hover:text-white">
                Shop
              </a>
            </li>
            <li className="mb-2">
              <a href="#how-we-work" className="text-gray-400 hover:text-white">
                How We Work
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm">
          © Al-Kadhim Journal for Computer Science. All Rights Reserved 2024.
        </p>
        <div className="flex space-x-4 pt-4 md:pt-0">
          <p className="text-sm">
            ISSN: 3007-1437 (Online), ISSN: 3007-1429 (Print)
          </p>
        </div>
      </div>
    </footer>
  );
}
