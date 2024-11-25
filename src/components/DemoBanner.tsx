/* eslint-disable @next/next/no-html-link-for-pages */
export const PantipHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-purple-700 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="/">
            <img
              src="/pantip-logo.svg"
              alt="Pantip Logo"
              className="h-8"
            />
          </a>
        </div>

        {/* Search Bar */}
        <div className="relative w-1/2 max-w-xl">
          <input
            type="text"
            placeholder="ค้นหาบน Pantip"
            className="w-full rounded-full bg-purple-600 px-4 py-2 text-sm text-white placeholder:text-white placeholder:text-opacity-70 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-purple-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm-6 8a6 6 0 1110.242 4.242l4.516 4.516a1 1 0 01-1.414 1.414l-4.516-4.516A6 6 0 014 10z"
              />
            </svg>
          </button>
        </div>

        {/* Menu */}
        <div className="flex items-center space-x-4">
          <a
            href="/create-post"
            className="rounded-md px-3 py-2 text-white transition duration-300 hover:bg-purple-600"
          >
            ตั้งกระทู้
          </a>
          <a
            href="/community"
            className="rounded-md px-3 py-2 text-white transition duration-300 hover:bg-purple-600"
          >
            คอมมูนิตี้
          </a>
          <a
            href="/sign-in"
            className="rounded-md px-3 py-2 text-white transition duration-300 hover:bg-purple-600"
          >
            เข้าสู่ระบบ / สมัครสมาชิก
          </a>
        </div>
      </div>
    </header>
  );
};

export default PantipHeader;
