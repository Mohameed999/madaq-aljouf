export const metadata = {
  title: 'اتصل بنا | مذاق الجوف',
  description: 'تواصل مع فريق مذاق الجوف - نحن هنا لمساعدتك',
}

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-olive mb-8 text-center">اتصل بنا</h1>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    الاسم
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-olive focus:ring-1 focus:ring-olive"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-olive focus:ring-1 focus:ring-olive"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  الموضوع
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-olive focus:ring-1 focus:ring-olive"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-olive focus:ring-1 focus:ring-olive"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-olive text-white py-3 rounded-lg hover:bg-olive/90 transition-colors"
              >
                إرسال الرسالة
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-olive/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">اتصل بنا</h3>
              <p className="text-gray-600">+966 XX XXX XXXX</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-olive/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">راسلنا</h3>
              <p className="text-gray-600">info@madaqaljouf.com</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-olive/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">موقعنا</h3>
              <p className="text-gray-600">منطقة الجوف، المملكة العربية السعودية</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
