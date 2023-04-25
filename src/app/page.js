'use client'
import { useState } from 'react'
import {
  differenceInDays,
  differenceInYears,
  differenceInMonths,
} from 'date-fns'

import arrow from '../images/icon-arrow.svg'
import Image from 'next/image'

export default function Home() {
  const [days, setDays] = useState('')
  const [months, setMonths] = useState('')
  const [years, setYears] = useState('')

  const diffInDays = differenceInDays(
    new Date(years, months, 31),
    new Date(years, months, days),
  )

  const diffInMonths = differenceInMonths(
    new Date(years, 12, 31),
    new Date(years, months, days),
  )

  const diffInYears = differenceInYears(
    new Date(2023, 12, 31),
    new Date(years, months, years),
  )

  return (
    <>
      <main className="lg:flex lg:items-center lg:justify-center lg:h-screen">
        <div
          style={{
            borderBottomRightRadius: 100,
          }}
          className="max-w-lg mx-auto bg-white rounded rounded-3xl shadow p-8"
        >
          <div>
            {/* FORM */}
            <form className="flex gap-4">
              {/* days */}
              <article>
                <label
                  htmlFor="day"
                  className={`${days > 31 && 'text-rose-600'}`}
                >
                  day
                </label>
                <input
                  type="number"
                  name="day"
                  id="day"
                  placeholder="DD"
                  min="1"
                  max="31"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                />
                {days > 31 && (
                  <small className="text-rose-600 font-normal block mt-2">
                    Must be a valid day
                  </small>
                )}
              </article>
              {/* month */}
              <article>
                <label
                  htmlFor="month"
                  className={`${months > 12 && 'text-rose-600'}`}
                >
                  month
                </label>
                <input
                  type="number"
                  name="month"
                  id="month"
                  placeholder="MM"
                  min="1"
                  max="12"
                  value={months}
                  onChange={(e) => setMonths(e.target.value)}
                />
                {months > 12 && (
                  <small className="text-rose-600 font-normal block mt-2">
                    Must be a valid month
                  </small>
                )}
              </article>
              {/* years */}
              <article>
                <label
                  htmlFor="year"
                  className={`${years > 2023 && 'text-rose-600'}`}
                >
                  year
                </label>
                <input
                  type="number"
                  name="year"
                  id="year"
                  placeholder="YYYY"
                  min="1900"
                  max="2023"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                />
                {years > 2023 && (
                  <small className="text-rose-600 font-normal block mt-2">
                    Must be in the past
                  </small>
                )}
              </article>
            </form>
          </div>

          {/* Arrow image and Line */}
          <div className="mt-10 relative">
            <article className="border-b border-slate-400"></article>
            <article className="absolute right-0 -top-6">
              <Image
                width={50}
                height={50}
                src={arrow}
                alt="arrow icon>"
                className="bg-purple-500 p-2 rounded-full"
              />
            </article>
          </div>

          {/* ChangedForm */}
          <div className="mt-10">
            <ul className="flex flex-col gap-2">
              <li>
                <span className="text-purple-600">{diffInYears}</span>years
              </li>
              <li>
                <span className="text-purple-600">{diffInMonths}</span>months
              </li>
              <li>
                <span className="text-purple-600">{diffInDays}</span>days
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
