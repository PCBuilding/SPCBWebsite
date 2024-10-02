export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-600 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a href="/" className="font-semibold text-2xl tracking-tight">The Society of PC Building</a>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block lg:flex lg:items-center lg:w-auto">
        <div className="text-base lg:flex-grow">
          <a href="/projects" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-6">
            Projects
          </a>
          <a href="/events" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-6">
            Events
          </a>
          <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}
