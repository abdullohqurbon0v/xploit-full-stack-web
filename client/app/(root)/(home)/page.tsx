import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { features } from '@/constants'

const MainPage = () => {
  return (
    <>
    <div className="mt-16 min-h-screen bg-black text-green-400 font-mono flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Learn Cybersecurity<br />with <span className="text-green-500">XPLOIT</span>
          </h1>
          <p className="text-lg md:text-xl text-green-300">
            Master hacking skills and protect the digital world.
          </p>
          <div>
            <Button className="border-green-500 text-green-400 hover:bg-green-500 hover:text-green-400 cursor-pointer transition font-mono text-md" variant="outline">
              Join Today
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="animate-bounce-slow">
            <Image 
              src="/mainLinuxImage.png"
              alt="Hacker Animation"
              width={300}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
    <section className="bg-black text-green-400 font-mono py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Master cybersecurity through real-world learning
        </h2>
        <p className="text-green-300 text-lg mb-12 max-w-2xl mx-auto">
          Through our platform, you'll gain offensive and defensive skills using hands-on, practical environments tailored for beginners and experts alike.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-4 hover:bg-slate-900 transition rounded-lg">
              <div className="w-20 h-20 mx-auto mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-green-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default MainPage
