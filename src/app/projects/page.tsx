'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Filter, ArrowUpDown, Users, Calendar, Tag } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "AI-powered Task Manager",
    description: "Develop a task management app that uses AI to prioritize and suggest tasks.",
    category: "Web Development",
    teamSize: 4,
    deadline: "2023-12-31",
    skills: ["React", "Node.js", "Machine Learning"]
  },
  {
    id: 2,
    title: "Blockchain-based Voting System",
    description: "Create a secure and transparent voting system using blockchain technology.",
    category: "Blockchain",
    teamSize: 5,
    deadline: "2024-03-15",
    skills: ["Solidity", "Ethereum", "Web3.js"]
  },
  {
    id: 3,
    title: "AR Interior Design App",
    description: "Build an app that allows users to visualize furniture in their space using AR.",
    category: "Mobile Development",
    teamSize: 3,
    deadline: "2023-11-30",
    skills: ["Unity", "ARKit", "3D Modeling"]
  },
  // Add more projects as needed
]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || project.category === selectedCategory)
  )

  const categories = ['All', ...new Set(projects.map(project => project.category))]

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <ArrowUpDown size={20} className="mr-2" />
              Sort
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Tag size={16} className="mr-2" />
                  {project.category}
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Users size={16} className="mr-2" />
                  Team size: {project.teamSize}
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar size={16} className="mr-2" />
                  Deadline: {project.deadline}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                      {skill}
                    </span>
                  ))}
                </div>
                <Link href={`/projects/${project.id}`} className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

