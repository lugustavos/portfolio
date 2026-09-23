import { useState } from 'react'
import { FaBriefcase, FaEnvelope, FaGithub, FaGraduationCap, FaLinkedin, FaLocationDot } from 'react-icons/fa6'
import { profile } from '../data/profile'
import { TechLogo } from './ui/TechIcon'

const stackRow = ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'React Native', 'Python', 'Docker', 'Azure', 'Git']

export function Hero() {
  const [imgOk, setImgOk] = useState(true)
  const initials = profile.firstName
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <section id="top" className="pb-6 pt-12 md:pt-20">
      <div className="container-content grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-medium text-brand">Olá, eu sou</p>
          <h1 className="mt-1 text-4xl leading-tight sm:text-5xl">{profile.fullName}</h1>
          <p className="mt-3 text-xl font-medium text-muted sm:text-2xl">{profile.role}</p>

          <p className="mt-6 max-w-xl leading-relaxed text-ink/90">{profile.bio}</p>

          <ul className="mt-6 space-y-2 text-sm text-muted">
            <li className="flex items-center gap-2.5">
              <FaGraduationCap size={16} className="text-brand" /> FATEC Zona Leste, Desenvolvimento de Software
              Multiplataforma
            </li>
            <li className="flex items-center gap-2.5">
              <FaBriefcase size={15} className="text-brand" /> NOC da Binário.Net
            </li>
            <li className="flex items-center gap-2.5">
              <FaLocationDot size={15} className="text-brand" /> {profile.location}
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="btn-primary">
              <FaGithub size={16} /> GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="btn-outline">
              <FaLinkedin size={16} /> LinkedIn
            </a>
            <a href={`mailto:${profile.links.email}`} className="btn-outline">
              <FaEnvelope size={15} /> E-mail
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[300px]">
          <div className="overflow-hidden rounded-2xl border-4 border-white shadow-lg ring-1 ring-line">
            {imgOk ? (
              <img
                src={profile.photo}
                alt={`Foto de ${profile.fullName}`}
                onError={() => setImgOk(false)}
                className="aspect-square w-full object-cover"
              />
            ) : (
              <div className="flex aspect-square items-center justify-center bg-brand-soft text-6xl font-bold text-brand">
                {initials}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container-content mt-14">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 rounded-xl border border-line bg-surface px-5 py-4">
          <span className="text-sm font-medium text-muted">Tecnologias que mais uso</span>
          {stackRow.map((t) => (
            <TechLogo key={t} name={t} size={26} />
          ))}
        </div>
      </div>
    </section>
  )
}
