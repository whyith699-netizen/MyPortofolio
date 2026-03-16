import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { premiumEase, staggerParent, staggerChild } from '../lib/motion'

const Motion = motion

const focusableSelectors = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

const readText = (value, language) => (typeof value === 'string' ? value : value?.[language] ?? '')

export function ProjectModal({ language, project, translations, onClose }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!project || !containerRef.current) {
      return undefined
    }

    const focusable = containerRef.current.querySelectorAll(focusableSelectors)
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    first?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || focusable.length === 0) {
        return
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, project])

  return (
    <AnimatePresence>
      {project ? (
        <Motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          onClick={onClose}
          transition={{ duration: 0.32, ease: premiumEase }}
        >
          <Motion.div
            ref={containerRef}
            animate="visible"
            aria-labelledby="project-modal-title"
            aria-modal="true"
            className="relative w-full max-w-4xl overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/95 shadow-glow"
            exit={{ opacity: 0, y: 18, scale: 0.985 }}
            initial="hidden"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            transition={{ duration: 0.42, ease: premiumEase }}
            variants={{
              hidden: { opacity: 0, y: 18, scale: 0.985 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.42,
                  ease: premiumEase,
                  staggerChildren: 0.08,
                  delayChildren: 0.05,
                },
              },
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
            <Motion.div
              className="relative grid gap-8 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8"
              variants={staggerParent(0.08, 0.04)}
            >
              <Motion.div className="space-y-5" variants={staggerChild}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-white/70">{readText(project.tag, language)}</p>
                    <h3 id="project-modal-title" className="mt-3 font-display text-3xl font-bold text-white">
                      {readText(project.title, language)}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-slate-300">{readText(project.role, language)}</p>
                  </div>
                  <button
                    aria-label={readText(translations.close, language)}
                    className="rounded-full border border-white/15 bg-white/5 p-2 text-white transition hover:bg-white/10"
                    onClick={onClose}
                    type="button"
                  >
                    <X size={18} />
                  </button>
                </div>
                <p className="max-w-2xl text-base leading-7 text-slate-200">{readText(project.summary, language)}</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-black/55 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">{readText(translations.problem, language)}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{readText(project.problem, language)}</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/55 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">{readText(translations.solution, language)}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{readText(project.solution, language)}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-zinc-100">
                      {item}
                    </span>
                  ))}
                </div>
              </Motion.div>
              <Motion.div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-black/60 p-6" variants={staggerChild}>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">{readText(translations.challenge, language)}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{readText(project.detail.challenge, language)}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">{readText(translations.architecture, language)}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {project.detail.architecture.map((item) => (
                      <li key={item.id}>- {readText(item, language)}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">{readText(translations.outcome, language)}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {project.detail.outcome.map((item) => (
                      <li key={item.id}>- {readText(item, language)}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
                    href={project.repoUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Github size={16} />
                    {readText(translations.repository, language)}
                  </a>
                  <a
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    href={project.demoUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <ExternalLink size={16} />
                    {readText(translations.livePreview, language)}
                  </a>
                </div>
              </Motion.div>
            </Motion.div>
          </Motion.div>
        </Motion.div>
      ) : null}
    </AnimatePresence>
  )
}
