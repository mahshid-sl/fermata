"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-12 bg-bg">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
          تماس با ما
        </h1>
        <p className="text-primary-600 max-w-2xl mx-auto">
          سوالات، پیشنهادات و انتقادات خود را با ما در میان بگذارید. تیم
          پشتیبانی فرماتا آماده پاسخگویی به شماست.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-3xl border border-primary-100 shadow-xl">
          <h2 className="text-xl font-bold text-primary-900 mb-6">
            ارسال پیام
          </h2>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-700">
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  className="w-full bg-primary-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-200 transition"
                  placeholder="مثلا: علی رضایی"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-700">
                  شماره تماس
                </label>
                <input
                  type="text"
                  className="w-full bg-primary-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-200 transition"
                  placeholder="۰۹..."
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary-700">
                موضوع پیام
              </label>
              <input
                type="text"
                className="w-full bg-primary-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-200 transition"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary-700">
                متن پیام
              </label>
              <textarea
                rows={4}
                className="w-full bg-primary-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-200 transition resize-none"
                placeholder="پیام خود را اینجا بنویسید..."
              />
            </div>
            <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary-200 transition flex items-center justify-center gap-2">
              <Send size={18} />
              ارسال پیام
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <ContactInfoCard
              icon={<Phone className="text-primary-500" />}
              title="تلفن تماس"
              value="۰۹۱۲۳۴۵۶۷۸۹"
            />
            <ContactInfoCard
              icon={<Mail className="text-primary-500" />}
              title="ایمیل"
              value="info@fermata.com"
            />

            <ContactInfoCard
              icon={<MapPin className="text-primary-500" />}
              title="آدرس شعب"
              value={
                <div className="space-y-3">
                  <div>
                    <span className="text-primary-500 text-[10px] block mb-0.5">
                      شعبه مهرشهر
                    </span>
                    <p>کرج، مهرشهر، بلوار شهرداری، پلاک ۱۲۳</p>
                  </div>
                  <div className="h-px bg-primary-100 w-1/2 mx-auto" />
                  <div>
                    <span className="text-primary-500 text-[10px] block mb-0.5">
                      شعبه عظیمیه
                    </span>
                    <p>کرج، عظیمیه، خیابان فرهنگ، پلاک ۴۵</p>
                  </div>
                </div>
              }
            />

            <ContactInfoCard
              icon={<Clock className="text-primary-500" />}
              title="ساعات کاری"
              value="همه روزه ۸ صبح تا ۱۱ شب"
            />
          </div>

          <div className="relative h-64 rounded-3xl overflow-hidden border border-primary-100 shadow-sm">
            <div className="absolute inset-0 bg-primary-50 flex items-center justify-center text-primary-300">
              [ محل قرارگیری نقشه یا تصویر شعبه ]
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-primary-900 italic">
            سوالات متداول
          </h2>
          <p className="text-primary-600 mt-2">پاسخ سوالات پرتکرار کاربران</p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="grid md:grid-cols-2 gap-x-6 gap-y-1"
        >
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-primary-100 bg-white rounded-2xl px-4 mb-4"
            >
              <AccordionTrigger className="text-primary-800 hover:text-primary-500 hover:no-underline font-medium py-5 text-right text-sm">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-primary-600 leading-7 pb-5 text-xs">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function ContactInfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode;
}) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-primary-50 shadow-sm flex flex-col items-center text-center gap-3 h-full">
      <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-[10px] font-medium text-primary-400 mb-1">
          {title}
        </h3>
        <div className="text-sm font-bold text-primary-800 leading-relaxed">
          {value}
        </div>
      </div>
    </div>
  );
}

const faqData = [
  {
    question: "چطور می‌توانم سفارش آنلاین ثبت کنم؟",
    answer:
      "شما می‌توانید با مراجعه به بخش منو، غذاهای مورد نظر خود را انتخاب کرده و پس از ورود به حساب کاربری، آدرس و زمان تحویل را مشخص کنید.",
  },
  {
    question: "آیا امکان رزرو میز وجود دارد؟",
    answer:
      "بله، از طریق بخش رزرو میز در سایت یا تماس تلفنی با شعبات فرماتا، می‌توانید برای تاریخ و ساعت مورد نظر خود میز رزرو کنید.",
  },
  {
    question: "هزینه ارسال سفارش چقدر است؟",
    answer:
      "هزینه ارسال بسته به محدوده شعبه انتخابی و فاصله شما متغیر است که در مرحله نهایی ثبت سفارش نمایش داده می‌شود.",
  },
  {
    question: "ساعات کاری رستوران به چه صورت است؟",
    answer:
      "ما همه روزه از ساعت ۸ صبح برای صرف صبحانه تا ۱۱ شب برای شام در خدمت شما هستیم.",
  },
  {
    question: "آیا منوی گیاهخواری هم دارید؟",
    answer:
      "بله، در منوی فرماتا بخش ویژه‌ای برای غذاهای گیاهی و سالادهای متنوع در نظر گرفته شده است.",
  },
  {
    question: "چگونه می‌توانم با مدیریت در ارتباط باشم؟",
    answer:
      "شما می‌توانید از طریق فرم تماس همین صفحه یا ایمیل مستقیم مدیریت، نظرات خود را ارسال کنید.",
  },
];
