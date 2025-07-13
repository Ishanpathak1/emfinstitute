
import React from 'react'

interface Props {
  title: string
  description: string
  note?: string
}

const ProgramCard: React.FC<Props> = ({ title, description, note }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold text-[#222] mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
      {note && (
        <p className="text-sm italic border border-gray-400 px-4 py-2 mt-4 text-center">
          {note}
        </p>
      )}
    </div>
  )
}

export default ProgramCard
