import React from 'react'
import ImageCarousel from './ImageCarousel.tsx'

export default function Navigation() {
 
  return (
    <>
    <ImageCarousel/>
    <section className="pb-12 pt-0 bg-white sm:pb-16 lg:pb-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">Stay informed and empowered</h2>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">. Our panel offers a comprehensive view of your child's academic<br></br> performance, health, and behavior, helping you support their growth and success.</p>
        </div>

        <div className="grid grid-cols-1 mt-5 text-center sm:mt-8 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-10">
      <a href="/performance" className="md:p-8 lg:p-14 block">
        <img src="/icons8-performance-100.png" className="mx-auto" width="120" height="120" alt="Performance" />
        <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Performance</h3>
        <p className="mt-5 text-base text-gray-600 font-pj">Track grades, assignments, and test scores to identify strengths and areas for improvement.</p>
      </a>

      <a href="/academic-calendar" className="md:p-8 lg:p-14 block md:border-l md:border-gray-200">
        <img src="/icons8-calendar-100.png" className="mx-auto" width="120" height="120" alt="Academic Calendar" />
        <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Academic Calendar</h3>
        <p className="mt-5 text-base text-gray-600 font-pj">View upcoming assignments, exams, and important dates in one place.</p>
      </a>

      <a href="/fee-payment" className="md:p-8 lg:p-14 block md:border-l md:border-gray-200">
        <img src="/icons8-fees-64.png" className="mx-auto" width="120" height="120" alt="Fee Payment" />
        <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Fee Payment</h3>
        <p className="mt-5 text-base text-gray-600 font-pj">Make secure online payments and track your transaction history.</p>
      </a>

      <a href="/student-health" className="md:p-8 lg:p-14 block md:border-t md:border-gray-200">
        <img src="/icons8-heart-with-pulse-100.png" className="mx-auto" width="120" height="120" alt="Student Health" />
        <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Student Health</h3>
        <p className="mt-5 text-base text-gray-600 font-pj">Access student health records, appointment schedules, and important health updates.</p>
      </a>

      <a href="/behavioral-insights" className="md:p-8 lg:p-14 block md:border-l md:border-gray-200 md:border-t">
        <img src="/icons8-customer-insights-manager-100.png" className="mx-auto" width="120" height="120" alt="Behavioral Insights" />
        <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Behavioral Insights</h3>
        <p className="mt-5 text-base text-gray-600 font-pj">Gain valuable insights into your child's behavior.</p>
      </a>

      <a href="/assignment-exam-schedules" className="md:p-8 lg:p-14 block md:border-l md:border-gray-200 md:border-t">
        <img src="/icons8-assigment-100.png" className="mx-auto" width="120" height="120" alt="Assignment & Exam Schedules" />
        <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Assignment & Exam Schedules</h3>
        <p className="mt-5 text-base text-gray-600 font-pj">View detailed schedules for assignments, exams, and other important events.</p>
      </a>
    </div>
    </div>
</section>
</>
  )
}
