'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 bg-white shadow-sm z-50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="مذاق الجوف"
              width={40}
              height={40}
              className="ml-2"
            />
            <span className="text-xl font-bold text-olive">مذاق الجوف</span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-olive transition-colors">
              الرئيسية
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-olive transition-colors">
              منتجاتنا
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-olive transition-colors">
              من نحن
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-olive transition-colors">
              اتصل بنا
            </Link>
          </nav>

          {/* Cart and Account */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-700 hover:text-olive transition-colors">
              <span className="absolute -top-1 -right-1 bg-terracotta text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <button className="p-2 text-gray-700 hover:text-olive transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-olive transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <Link href="/" className="block py-2 text-gray-700 hover:text-olive transition-colors">
              الرئيسية
            </Link>
            <Link href="/products" className="block py-2 text-gray-700 hover:text-olive transition-colors">
              منتجاتنا
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-olive transition-colors">
              من نحن
            </Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-olive transition-colors">
              اتصل بنا
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
