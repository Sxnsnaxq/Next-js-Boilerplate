/* eslint-disable @next/next/no-html-link-for-pages */
import { AppConfig } from '@/utils/AppConfig';

export const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full text-gray-700 antialiased">
      {/* Main Content */}
      <div className="mx-auto max-w-screen-md">
        <header className="border-b border-gray-300">
          <div className="pb-8 pt-16">
            <h1 className="text-3xl font-bold text-gray-900">
              {AppConfig.name}
            </h1>
          </div>

          <div className="flex justify-between">
            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.leftNav}
              </ul>
            </nav>

            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.rightNav}
              </ul>
            </nav>
          </div>
        </header>

        <main>{props.children}</main>
      </div>

      {/* Full Width Footer */}
      <footer className="m-0 w-full bg-purple-700 p-8 text-white">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">เกี่ยวกับเรา</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:underline">กฎ กติกาและมารยาท</a></li>
              <li><a href="/terms" className="hover:underline">คำแนะนำการโพสต์</a></li>
              <li><a href="/privacy" className="hover:underline">นโยบายเกี่ยวกับข้อมูลส่วนบุคคล</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">ช่วยเหลือ</h3>
            <ul className="space-y-2">
              <li><a href="/faq" className="hover:underline">สิทธิ์การใช้งานของสมาชิก</a></li>
              <li><a href="/contact" className="hover:underline">ติดต่อทีมงาน Pantip</a></li>
              <li><a href="/support" className="hover:underline">ติดต่อลงโฆษณา</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">ข้อมูลเพิ่มเติม</h3>
            <ul className="space-y-2">
              <li><a href="/forums" className="hover:underline">ร่วมงานกับ Pantip</a></li>
              <li><a href="/groups" className="hover:underline">Download App Pantip</a></li>
              <li><a href="/groups" className="hover:underline">Pantip Certified Developer</a></li>
            </ul>
          </div>
          <div className="flex justify-end">
            <div>
              <div className="flex flex-col items-center space-y-4">
                <h3 className="text-lg font-semibold">ติดตามเรา</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com/pantipdotcom" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495v-9.294H9.689v-3.622h3.131V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.794.143v3.24h-1.917c-1.504 0-1.796.714-1.796 1.762v2.309h3.588l-.467 3.622h-3.121V24h6.116C23.406 24 24 23.406 24 22.676V1.325C24 .593 23.406 0 22.675 0z" />
                    </svg>
                  </a>
                  <a href="https://twitter.com/pantip1996" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557a9.9 9.9 0 01-2.828.775 4.93 4.93 0 002.165-2.724 9.86 9.86 0 01-3.127 1.195 4.916 4.916 0 00-8.379 4.482 13.94 13.94 0 01-10.11-5.13 4.822 4.822 0 00-.666 2.475 4.917 4.917 0 002.188 4.097 4.903 4.903 0 01-2.229-.616v.062a4.919 4.919 0 003.946 4.827 4.897 4.897 0 01-2.224.085 4.92 4.92 0 004.596 3.417A9.867 9.867 0 010 19.54a13.924 13.924 0 007.548 2.212c9.056 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.637A10.012 10.012 0 0024 4.557z" />
                    </svg>
                  </a>
                  <a href="https://instagram.com/pantipdotcom" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.316.975.975 1.254 2.241 1.316 3.608.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.316 3.608-.975.975-2.241 1.254-3.608 1.316-1.265.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.316-.975-.975-1.254-2.241-1.316-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.34-2.633 1.316-3.608.975-.975 2.241-1.254 3.608-1.316 1.265-.058 1.645-.07 4.85-.07zM12 0C8.741 0 8.332.014 7.052.072 5.773.13 4.662.37 3.757 1.276 2.852 2.182 2.613 3.293 2.555 4.572.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.279.37 2.39 1.276 3.296.906.906 2.017 1.146 3.296 1.204 1.279.058 1.688.072 4.948.072s3.668-.014 4.948-.072c1.279-.058 2.39-.37 3.296-1.276.906-.906 1.146-2.017 1.204-3.296.058-1.28.072-1.688.072-4.948s-.014-3.668-.072-4.948c-.058-1.279-.37-2.39-1.276-3.296C17.332.37 16.221.13 14.942.072 13.662.014 13.253 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.18a4.019 4.019 0 110-8.038 4.019 4.019 0 010 8.038zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a href="https://www.youtube.com/@pantipchannel" aria-label="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a2.92 2.92 0 0 0-2.052-2.065C19.211 3.5 12 3.5 12 3.5s-7.211 0-9.446.621A2.92 2.92 0 0 0 .502 6.186 30.554 30.554 0 0 0 0 12a30.553 30.553 0 0 0 .502 5.814 2.92 2.92 0 0 0 2.052 2.065c2.235.621 9.446.621 9.446.621s7.211 0 9.446-.621a2.92 2.92 0 0 0 2.052-2.065A30.554 30.554 0 0 0 24 12a30.553 30.553 0 0 0-.502-5.814zM9.75 15.008V8.992l6.278 3.008-6.278 3.008z" />
                    </svg>
                  </a>
                  {/* TikTok */}
                  <a href="https://www.tiktok.com/@pantip1996" aria-label="TikTok">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 hover:text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 3a6 6 0 016 6v1.63a4.65 4.65 0 003.25 1.35 4.7 4.7 0 001.25-.18v3.12a7.91 7.91 0 01-4.5-1.37v3.17a6.38 6.38 0 01-6.38 6.38A6.38 6.38 0 013 15.87a6.38 6.38 0 016.38-6.38c.23 0 .45.02.67.05V9a3.75 3.75 0 00-3.75 3.75 3.75 3.75 0 103.75 3.75V3h3z" />
                    </svg>

                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ข้อความลิขสิทธิ์ */}
        <div className="mt-8 text-center text-sm text-gray-300">
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          Internet Marketing co., ltd
        </div>
      </footer>
    </div>
  );
};

export default BaseTemplate;

