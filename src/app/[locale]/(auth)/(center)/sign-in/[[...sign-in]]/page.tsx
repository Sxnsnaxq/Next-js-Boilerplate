/* eslint-disable react-dom/no-missing-button-type */
/* eslint-disable @next/next/no-html-link-for-pages */
import PantipHeader from '@/components/DemoBanner';
import React from 'react';

export default function SignInPage() {
  return (
    <div>
      <PantipHeader />
      <div className="flex h-screen w-screen items-center justify-center bg-purple-900 text-white">
        <div className="mx-auto w-full max-w-4xl p-4">
          {/* หัวข้อ */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold text-purple-300">
              ลงชื่อเข้าใช้งาน
            </h1>
            <h2 className="mt-2 text-lg text-purple-400">
              ระบบจะจดจำข้อมูลการเข้าสู่ระบบของคุณแบบ "การลงชื่อเข้าใช้ถาวร"
            </h2>
          </div>

          {/* คอนเทนต์หลัก */}
          <div className="flex">
            {/* ด้านซ้าย */}
            <div>
              <div className="space-y-3">
                <input
                  id="username"
                  type="text"
                  placeholder="อีเมล / ชื่อผู้ใช้"
                  className="w-full rounded border-none bg-purple-700 px-4 py-2 text-white placeholder:text-purple-400 focus:outline-none"
                />
                <input
                  id="password"
                  type="password"
                  placeholder="รหัสผ่าน"
                  className="w-full rounded border-none bg-purple-700 px-4 py-2 text-white placeholder:text-purple-400 focus:outline-none"
                />

                {/* ลิงก์ลืมรหัสผ่าน */}
                <div className="text-right">
                  <a href="/" className="text-purple-300 hover:underline">
                    ลืมรหัสผ่าน
                  </a>
                </div>
              </div>

              {/* ปุ่มเข้าสู่ระบบ */}
              <button className="mt-4 w-full rounded bg-purple-600 py-2 text-white hover:bg-purple-700">
                เข้าสู่ระบบ
              </button>
            </div>

            {/* ตัวแบ่งด้วยคำว่า 'หรือ' และเส้นคั่น */}
            <div className="relative flex items-center justify-center self-stretch px-4">
              {/* เส้นคั่นแนวตั้ง */}
              <div className="absolute h-full w-px bg-purple-500"></div>
              {/* คำว่า 'หรือ' */}
              <span className="z-10 bg-purple-900 px-2 text-purple-300">หรือ</span>
            </div>

            {/* ด้านขวา */}
            <div className="w-1/2 pl-4">
              {/* ปุ่มเข้าสู่ระบบด้วยโซเชียลมีเดีย */}
              <div className="space-y-3">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/?stype=lo&flo=1&deoia=1&jlou=AffeVSwdd1wV2-y_ubHueYh4EYX4Nu73DE5zJbmS-0Xjs4XfE4o0Ic2b4dN3VOUwkr24755YWhqPIK976b0wDR_fOBHtvm6r5NgSYOK5ihf8FQ&smuh=5885&lh=Ac9w0xNSJutgpPnjVeY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center space-x-2 rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
                >
                  <span>ดำเนินการต่อด้วย Facebook</span>
                </a>

                {/* Google */}
                <a
                  href="https://accounts.google.com/InteractiveLogin/signinchooser?elo=1&ifkv=AcMMx-eTau-bi-YJvqteXP_-Mi2Rjebqz3dYhzq_NaaY0-IA_wwdtx6sUxyugDNm_ipGaDPfgjeCtg&ddm=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center space-x-2 rounded border border-gray-300 bg-white py-2 text-gray-800 hover:bg-gray-100"
                >
                  <span>ดำเนินการต่อด้วย Google</span>
                </a>

                {/* LINE */}
                <a
                  href="https://access.line.me/oauth2/v2.1/login?fromDomain=access-auto.line.me&loginState=nBeMaOY7Mdu5aFeSo1hVfn&line_auto_login_error=universal_link_error&loginChannelId=1445834080&returnUri=oauth2v2.1authorizeconsentbot_promptnormalscopeopenidprofileresponse_typecodestateRhiVgBoLDGredirect_urihttps3A2F2Fform.tonariwa.com2Fsuntory2Fmeasure_url3Fcpid3Dtennensui_sampling426lcd3D126type3D126nonceEvutxGZ894client_id1445834080#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center space-x-2 rounded bg-green-500 py-2 text-white hover:bg-green-600"
                >
                  <span>ดำเนินการต่อด้วย LINE</span>
                </a>

                {/* Apple */}
                <a
                  href="https://account.apple.com/sign-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center space-x-2 rounded bg-black py-2 text-white hover:bg-gray-800"
                >
                  <span>ดำเนินการต่อด้วย Apple</span>
                </a>
              </div>

              {/* ลิงก์สมัครสมาชิก */}
              <div className="mt-6 text-center text-sm">
                ยังไม่เป็นสมาชิก?
                {' '}
                <a href="sign-up" className="text-purple-300 hover:underline">
                  สมัครสมาชิกด้วยอีเมล
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
