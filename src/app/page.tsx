import Image from 'next/image'
import Link from 'next/link'
import { featuredProducts } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-olive to-golden py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              مذاق الجوف - منتجات طبيعية من الجوف
            </h1>
            <p className="text-lg mb-8 opacity-90">
              نقدم لكم أجود المنتجات الطبيعية والعضوية من منطقة الجوف
            </p>
            <Link
              href="/products"
              className="btn-primary inline-block"
            >
              تسوق الآن
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">منتجاتنا المميزة</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="btn-secondary inline-block"
            >
              عرض جميع المنتجات
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-beige/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-olive">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">جودة عالية</h3>
              <p className="text-gray-600">منتجات طبيعية 100% من أجود المزارع في الجوف</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-olive">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8 4-8-4V5l8 4 8-4v2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">توصيل سريع</h3>
              <p className="text-gray-600">نوصل طلبك بسرعة وعناية إلى باب منزلك</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-olive">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">دعم متواصل</h3>
              <p className="text-gray-600">فريقنا متواجد دائماً لخدمتك والإجابة على استفساراتك</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-beige/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-olive">من نحن</h2>
              <p className="text-gray-700 leading-relaxed">
                نحن في مذاق الجوف نؤمن بأن أفضل المنتجات تأتي من أفضل المصادر. 
                نعمل مع المزارعين المحليين في منطقة الجوف لتقديم منتجات طبيعية 
                وعضوية عالية الجودة.
              </p>
              <Link 
                href="/about" 
                className="inline-block text-olive font-bold hover:text-olive/80 transition-colors"
              >
                اقرأ المزيد عن قصتنا
              </Link>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/about-image.jpg"
                alt="مزارع الجوف"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">لماذا مذاق الجوف؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-olive/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-olive mb-2">جودة عالية</h3>
              <p className="text-gray-600">منتجات طبيعية 100% من أفضل المزارع في الجوف</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-olive/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-olive mb-2">توصيل سريع</h3>
              <p className="text-gray-600">نضمن وصول منتجاتك في أسرع وقت ممكن</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-olive/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-olive mb-2">أسعار منافسة</h3>
              <p className="text-gray-600">أفضل الأسعار مع ضمان الجودة العالية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-beige/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-olive">اشترك في نشرتنا البريدية</h2>
            <p className="text-gray-700">
              اشترك ليصلك كل جديد عن منتجاتنا والعروض الحصرية
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:border-olive focus:ring-1 focus:ring-olive"
                required
              />
              <button
                type="submit"
                className="bg-olive text-white px-6 py-2 rounded-lg hover:bg-olive/90 transition-colors"
              >
                اشترك
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
