import React from 'react'
import { Target, Leaf, Users } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-green-600 to-orange-500 text-white py-16">
        <div className="container-max text-center">
          <h1 className="text-5xl font-bold mb-4">About SALADGO</h1>
          <p className="text-xl">Eat Fresh, Live Healthy</p>
        </div>
      </section>

      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              To provide hygienic, fresh, and ready-to-use fruits and vegetables to households, professionals, and businesses across India.
            </p>
            <p className="text-lg text-gray-700">
              We believe in sustainable agriculture, fair practices, and delivering the freshest produce directly from farms to your table.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-400 to-orange-400 rounded-2xl h-96 flex items-center justify-center text-white">
            <Leaf size={100} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: 'Quality', desc: 'Premium, fresh produce' },
            { icon: Users, title: 'Community', desc: 'Serving thousands daily' },
            { icon: Leaf, title: 'Sustainability', desc: 'Eco-friendly practices' },
          ].map((item, idx) => (
            <div key={idx} className="card text-center">
              <item.icon className="text-green-600 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
