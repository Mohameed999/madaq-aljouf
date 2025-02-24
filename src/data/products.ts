export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'زيت زيتون بكر ممتاز',
    description: 'زيت زيتون عضوي 100% معصور على البارد من أجود أنواع الزيتون في الجوف',
    price: 85,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800',
    category: 'زيوت'
  },
  {
    id: '2',
    name: 'عسل سدر طبيعي',
    description: 'عسل سدر طبيعي 100% من مناحل الجوف، غني بالفوائد الطبيعية',
    price: 120,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800',
    category: 'عسل'
  },
  {
    id: '3',
    name: 'تمر سكري فاخر',
    description: 'تمر سكري فاخر من مزارع الجوف، معبأ بعناية للحفاظ على جودته',
    price: 45,
    image: 'https://images.unsplash.com/photo-1569870499705-504209102861?q=80&w=800',
    category: 'تمور'
  },
  {
    id: '4',
    name: 'زيت زيتون مع الأعشاب',
    description: 'زيت زيتون بكر ممتاز منكه بالأعشاب الطبيعية من الجوف',
    price: 95,
    image: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=800',
    category: 'زيوت'
  }
];
