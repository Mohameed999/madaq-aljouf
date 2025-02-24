import Image from 'next/image'

export const metadata = {
  title: 'عن مذاق الجوف | منتجات طبيعية من الجوف',
  description: 'تعرف على قصة مذاق الجوف وكيف نقدم أجود المنتجات الطبيعية والعضوية من منطقة الجوف',
}

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container">
        {/* Hero Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-16">
          <Image
            src="/images/about-image.jpg"
            alt="مزارع الجوف"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-olive/80 to-transparent flex items-center">
            <div className="p-8 text-white max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">قصة مذاق الجوف</h1>
              <p className="text-lg">
                نحن نؤمن بأن أفضل المنتجات تأتي من أفضل المصادر
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-olive">رحلتنا</h2>
            <p className="text-gray-700 leading-relaxed">
              بدأت رحلة مذاق الجوف من رؤية بسيطة: تقديم أجود المنتجات الطبيعية من منطقة الجوف 
              إلى كل بيت في المملكة. نحن نؤمن بأن الطبيعة تقدم أفضل ما لديها عندما نحترمها 
              ونعتني بها.
            </p>
            <p className="text-gray-700 leading-relaxed">
              من خلال شراكتنا مع المزارعين المحليين وتطبيق أفضل الممارسات الزراعية، 
              نضمن لكم منتجات عضوية عالية الجودة تحمل طعم وعبق منطقة الجوف.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-olive">قيمنا</h2>
            <div className="space-y-4">
              <div className="p-4 bg-beige/20 rounded-lg">
                <h3 className="text-xl font-bold text-olive mb-2">الجودة</h3>
                <p>نلتزم بتقديم منتجات تتجاوز توقعات عملائنا من حيث الجودة والمذاق.</p>
              </div>
              <div className="p-4 bg-beige/20 rounded-lg">
                <h3 className="text-xl font-bold text-olive mb-2">الاستدامة</h3>
                <p>نتبنى ممارسات زراعية مستدامة تحافظ على البيئة وتضمن جودة منتجاتنا.</p>
              </div>
              <div className="p-4 bg-beige/20 rounded-lg">
                <h3 className="text-xl font-bold text-olive mb-2">الشفافية</h3>
                <p>نشارك عملائنا كل تفاصيل رحلة منتجاتنا من المزرعة إلى منازلهم.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-olive text-center mb-12">فريقنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-olive/10 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold text-olive">أحمد السعيد</h3>
              <p className="text-gray-600">المؤسس والرئيس التنفيذي</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-olive/10 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold text-olive">محمد العنزي</h3>
              <p className="text-gray-600">مدير العمليات</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-olive/10 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold text-olive">سارة الشمري</h3>
              <p className="text-gray-600">مديرة ضمان الجودة</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
