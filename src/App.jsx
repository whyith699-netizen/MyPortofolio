import {
  lazy,
  startTransition,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";
import {
  ArrowRight,
  CircleDot,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
} from "lucide-react";
import claudeLogo from "./assets/ai-logos/claude.svg";
import geminiLogo from "./assets/ai-logos/gemini.svg";
import grokLogo from "./assets/ai-logos/grok.svg";
import openAiLogo from "./assets/ai-logos/openai.svg";
import dockerStackLogo from "./assets/stack-logos/docker.svg";
import githubStackLogo from "./assets/stack-logos/github.svg";
import nextStackLogo from "./assets/stack-logos/nextjs.svg";
import nodeStackLogo from "./assets/stack-logos/nodejs.svg";
import postgresStackLogo from "./assets/stack-logos/postgresql.svg";
import reactStackLogo from "./assets/stack-logos/react.svg";
import tailwindStackLogo from "./assets/stack-logos/tailwind.svg";
import typescriptStackLogo from "./assets/stack-logos/typescript.svg";
import { siteContent } from "./data/siteContent";
import {
  cardHoverVariants,
  defaultViewport,
  fadeInVariants,
  fadeUpVariants,
  loaderVariants,
  marqueeFloat,
  navHideShowVariants,
  panelRevealVariants,
  staggerChild,
  staggerParent,
} from "./lib/motion";

const ProjectModal = lazy(() =>
  import("./components/ProjectModal").then((module) => ({
    default: module.ProjectModal,
  })),
);
const Motion = motion;
const frameworkLogos = {
  react: reactStackLogo,
  node: nodeStackLogo,
  next: nextStackLogo,
  postgres: postgresStackLogo,
  tailwind: tailwindStackLogo,
  typescript: typescriptStackLogo,
  docker: dockerStackLogo,
  github: githubStackLogo,
};
const frameworkLogoClasses = {
  react: "h-8 w-8",
  node: "h-6 w-auto max-w-[3.15rem]",
  next: "h-5 w-auto max-w-[3rem]",
  postgres: "h-8 w-8",
  tailwind: "h-7 w-auto max-w-[2.9rem]",
  typescript: "h-8 w-8",
  docker: "h-6 w-auto max-w-[3.2rem]",
  github: "h-8 w-8",
};

const readText = (value, language) => {
  if (typeof value === "string") {
    return value;
  }

  if (Array.isArray(value)) {
    return value;
  }

  return value?.[language] ?? "";
};

function Panel({ children, className = "" }) {
  return (
    <div
      className={`rounded-[1.8rem] border border-white/10 bg-white/[0.04] shadow-glow backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function PanelLabel({ children, align = "left" }) {
  return (
    <p
      className={`text-[11px] uppercase tracking-[0.35em] text-white/50 ${align === "right" ? "text-right" : ""}`}
    >
      {children}
    </p>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="space-y-4">
      <PanelLabel>{eyebrow}</PanelLabel>
      <h2 className="max-w-4xl font-display text-3xl font-bold leading-[1.02] text-white md:text-5xl">
        {title}
      </h2>
      <p className="max-w-3xl text-base leading-8 text-zinc-300 md:text-lg">
        {description}
      </p>
    </div>
  );
}

function RevealSection({ children, className = "", id, amount = 0.16 }) {
  return (
    <Motion.section
      id={id}
      className={className}
      initial="hidden"
      variants={fadeUpVariants}
      viewport={{ ...defaultViewport, amount }}
      whileInView="visible"
    >
      {children}
    </Motion.section>
  );
}

function StaggerGroup({
  children,
  className = "",
  amount = 0.16,
  delayChildren = 0.04,
  stagger = 0.1,
}) {
  return (
    <Motion.div
      className={className}
      initial="hidden"
      variants={staggerParent(stagger, delayChildren)}
      viewport={{ ...defaultViewport, amount }}
      whileInView="visible"
    >
      {children}
    </Motion.div>
  );
}

function RevealItem({
  children,
  className = "",
  variants = panelRevealVariants,
}) {
  return (
    <Motion.div className={className} variants={variants}>
      {children}
    </Motion.div>
  );
}

function ProximityCard({ children, className = "", disabled = false }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const springRotateX = useSpring(rotateX, {
    stiffness: 180,
    damping: 20,
    mass: 0.4,
  });
  const springRotateY = useSpring(rotateY, {
    stiffness: 180,
    damping: 20,
    mass: 0.4,
  });
  const springGlowX = useSpring(glowX, {
    stiffness: 160,
    damping: 18,
    mass: 0.4,
  });
  const springGlowY = useSpring(glowY, {
    stiffness: 160,
    damping: 18,
    mass: 0.4,
  });

  const handleMove = (event) => {
    if (disabled) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;

    glowX.set(px * 100);
    glowY.set(py * 100);
    rotateY.set((px - 0.5) * 8);
    rotateX.set((0.5 - py) * 8);
  };

  const resetMotion = () => {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <Motion.div
      className={`group relative [transform-style:preserve-3d] ${className}`}
      onMouseLeave={resetMotion}
      onMouseMove={handleMove}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
      }}
      whileHover={disabled ? undefined : { y: -4, scale: 1.01 }}
    >
      <Motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [springGlowX, springGlowY],
            ([x, y]) =>
              `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.18), rgba(255,255,255,0.03) 28%, transparent 62%)`,
          ),
        }}
      />
      <Motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/0 transition duration-300 group-hover:border-white/16"
      />
      <div className="relative">{children}</div>
    </Motion.div>
  );
}

function FrameworkGlyph({ iconKey }) {
  return (
    <div className="relative flex h-12 min-w-[4rem] items-center justify-center rounded-[0.95rem] border border-white/16 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
      <img
        alt=""
        aria-hidden="true"
        className={`object-contain ${frameworkLogoClasses[iconKey] ?? "h-7 w-7"}`}
        src={frameworkLogos[iconKey]}
      />
    </div>
  );
}

function ArsenalKey({
  active,
  index,
  item,
  language,
  onSelect,
  reduceMotion,
}) {
  const [pressed, setPressed] = useState(false);
  const pressedOffset = pressed ? 12 : active ? 8 : 0;

  return (
    <Motion.button
      className="relative h-[7.9rem] w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-white/40 md:h-[8.8rem]"
      onClick={() => onSelect(item.id)}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchEnd={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      transition={{ type: "spring", stiffness: 360, damping: 24 }}
      type="button"
      whileTap={reduceMotion ? undefined : { scale: 0.995 }}
    >
      <Motion.div
        animate={{
          height: pressed ? 8 : active ? 10 : 18,
          opacity: pressed ? 0.7 : 1,
        }}
        className="absolute inset-x-1 bottom-0 rounded-b-[1.15rem] border border-white/8 bg-white/[0.05]"
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
      />
      <Motion.div
        animate={{
          y: pressedOffset,
          borderColor: active
            ? "rgba(255,255,255,0.26)"
            : "rgba(255,255,255,0.09)",
          backgroundColor: active
            ? "rgba(255,255,255,0.10)"
            : "rgba(255,255,255,0.04)",
          boxShadow: pressed
            ? "0 6px 16px rgba(0,0,0,0.22)"
            : "0 18px 30px rgba(0,0,0,0.28)",
        }}
        className="absolute inset-0 rounded-[1.15rem] border px-4 py-4 md:px-4 md:py-4"
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
      >
        <div className="flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-3">
            <FrameworkGlyph iconKey={item.iconKey} />
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/28 md:text-[11px]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-white/80 md:text-[13px]">
            {readText(item.label, language)}
          </p>
        </div>
      </Motion.div>
    </Motion.button>
  );
}

function BrandLoader({ language, reduceMotion }) {
  const roles = siteContent.profile.roleSequence[language];

  return (
    <Motion.div
      animate="visible"
      className="fixed inset-0 z-[70] overflow-hidden bg-black"
      exit="exit"
      initial="hidden"
      variants={loaderVariants.overlay}
    >
      <Motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_28%),linear-gradient(180deg,#000000_0%,#030303_100%)]"
        variants={fadeInVariants}
      />
      <Motion.div
        animate={reduceMotion ? undefined : marqueeFloat(18, 10)}
        className="absolute -left-24 top-14 h-72 w-72 rounded-full border border-white/10"
      />
      <Motion.div
        animate={reduceMotion ? undefined : marqueeFloat(14, 12)}
        className="absolute -right-20 bottom-12 h-80 w-80 rounded-full border border-white/10"
      />
      <Motion.div
        className="relative mx-auto flex h-full max-w-7xl items-center px-5 md:px-8"
        variants={loaderVariants.shell}
      >
        <div className="space-y-7">
          <Motion.p
            className="text-xs uppercase tracking-[0.42em] text-white/45"
            variants={loaderVariants.item}
          >
            {siteContent.profile.brandName}
          </Motion.p>
          <Motion.h1
            className="max-w-4xl font-display text-5xl font-bold leading-[0.9] text-white md:text-7xl"
            variants={loaderVariants.item}
          >
            {readText(siteContent.profile.personalName, language)}
          </Motion.h1>
          <Motion.div
            className="flex flex-wrap gap-3"
            variants={loaderVariants.item}
          >
            {roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/72"
              >
                {role}
              </span>
            ))}
          </Motion.div>
        </div>
      </Motion.div>
    </Motion.div>
  );
}

function highlightSyntax(line, lineIndex) {
  const parts = [];
  let remaining = line;
  let key = 0;

  while (remaining.length > 0) {
    if (remaining.startsWith("//")) {
      parts.push(
        <span key={`l${lineIndex}-k${key++}`} className="text-zinc-500 italic">
          {remaining}
        </span>,
      );
      break;
    }

    const stringMatch = remaining.match(
      /^("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/,
    );
    if (stringMatch) {
      parts.push(
        <span key={`l${lineIndex}-k${key++}`} className="text-emerald-400">
          {stringMatch[1]}
        </span>,
      );
      remaining = remaining.slice(stringMatch[1].length);
      continue;
    }

    const keywordMatch = remaining.match(
      /^(const|let|var|function|return|export|default|import|from|if|else|for|while|switch|case|break|continue|new|this|typeof|instanceof)\b/,
    );
    if (keywordMatch) {
      parts.push(
        <span key={`l${lineIndex}-k${key++}`} className="text-purple-400">
          {keywordMatch[1]}
        </span>,
      );
      remaining = remaining.slice(keywordMatch[1].length);
      continue;
    }

    const numberMatch = remaining.match(/^(\d+)/);
    if (numberMatch) {
      parts.push(
        <span key={`l${lineIndex}-k${key++}`} className="text-orange-400">
          {numberMatch[1]}
        </span>,
      );
      remaining = remaining.slice(numberMatch[1].length);
      continue;
    }

    const propertyMatch = remaining.match(
      /^([a-zA-Z_$][a-zA-Z0-9_$]*)(?=\s*:)/,
    );
    if (propertyMatch) {
      parts.push(
        <span key={`l${lineIndex}-k${key++}`} className="text-cyan-400">
          {propertyMatch[1]}
        </span>,
      );
      remaining = remaining.slice(propertyMatch[1].length);
      continue;
    }

    const bracketMatch = remaining.match(/^([[\]{}(),;:.])/);
    if (bracketMatch) {
      parts.push(
        <span key={`l${lineIndex}-k${key++}`} className="text-zinc-400">
          {bracketMatch[1]}
        </span>,
      );
      remaining = remaining.slice(bracketMatch[1].length);
      continue;
    }

    const operatorMatch = remaining.match(
      /^(===|!==|==|!=|<=|>=|=>|&&|\|\||[+\-*/%=<>!&|^~?:])/,
    );
    if (operatorMatch) {
      parts.push(
        <span key={`l${lineIndex}-k${key++}`} className="text-pink-400">
          {operatorMatch[1]}
        </span>,
      );
      remaining = remaining.slice(operatorMatch[1].length);
      continue;
    }

    const identifierMatch = remaining.match(/^([a-zA-Z_$][a-zA-Z0-9_$]*)/);
    if (identifierMatch) {
      const word = identifierMatch[1];
      const isFirstCharUpper = word[0] === word[0].toUpperCase();
      if (isFirstCharUpper) {
        parts.push(
          <span key={`l${lineIndex}-k${key++}`} className="text-yellow-300">
            {word}
          </span>,
        );
      } else {
        parts.push(
          <span key={`l${lineIndex}-k${key++}`} className="text-zinc-200">
            {word}
          </span>,
        );
      }
      remaining = remaining.slice(word.length);
      continue;
    }

    const whitespaceMatch = remaining.match(/^(\s+)/);
    if (whitespaceMatch) {
      parts.push(
        <span key={`l${lineIndex}-k${key++}`}>{whitespaceMatch[1]}</span>,
      );
      remaining = remaining.slice(whitespaceMatch[1].length);
      continue;
    }

    parts.push(<span key={`l${lineIndex}-k${key++}`}>{remaining[0]}</span>);
    remaining = remaining.slice(1);
  }

  return parts;
}

function CodeBlock({ code }) {
  const lines = code.split("\n");

  return (
    <pre className="!bg-transparent !p-0 !m-0 !overflow-visible font-mono text-sm">
      {lines.map((line, index) => (
        <div key={`line-${index}`} className="flex hover:bg-white/[0.02]">
          <span className="select-none text-right pr-4 text-white/20 min-w-[2.5rem] text-zinc-600">
            {index + 1}
          </span>
          <span className="flex-1 whitespace-pre text-zinc-300">
            {highlightSyntax(line, index)}
          </span>
        </div>
      ))}
    </pre>
  );
}

function PortraitMock({ title, subtitle, compact = false }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#0a0a0a] ${compact ? "min-h-[15rem]" : "min-h-[22rem]"}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,_rgba(255,255,255,0.14),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0.04),_rgba(0,0,0,0.2))]" />
      <div className="absolute inset-x-6 bottom-6 top-6 rounded-[1.2rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.06),_rgba(255,255,255,0.01))]" />
      <div className="absolute left-1/2 top-[20%] h-24 w-24 -translate-x-1/2 rounded-full border border-white/15 bg-[radial-gradient(circle_at_35%_35%,_rgba(255,255,255,0.24),_rgba(255,255,255,0.04))]" />
      <div className="absolute left-1/2 top-[35%] h-36 w-40 -translate-x-1/2 rounded-[2rem_2rem_1.25rem_1.25rem] border border-white/12 bg-[linear-gradient(180deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.02))]" />
      <div className="absolute inset-x-8 bottom-8 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/45">
            {subtitle}
          </p>
          <p className="mt-2 font-display text-3xl font-bold text-white">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

function TypedRoles({
  identityLabel,
  reduceMotion,
  roleSignatureLabel,
  roles,
}) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isHolding, setIsHolding] = useState(false);

  const splitRoleIntoLines = (role) => {
    const words = role.split(" ");

    if (words.length <= 1) {
      return [role];
    }

    if (words.length === 2) {
      return [words[0], words[1]];
    }

    const midpoint = Math.ceil(words.length / 2);
    return [
      words.slice(0, midpoint).join(" "),
      words.slice(midpoint).join(" "),
    ];
  };

  const roleLayouts = roles.map(splitRoleIntoLines);
  const activeRoleLines = roleLayouts[roleIndex] ?? [];
  const maxLineCount = roleLayouts.reduce(
    (current, lines) => Math.max(current, lines.length),
    1,
  );
  const placeholderLines = Array.from({ length: maxLineCount }, (_, index) =>
    roleLayouts.reduce((longest, lines) => {
      const candidate = lines[index] ?? "";
      return candidate.length > longest.length ? candidate : longest;
    }, ""),
  );
  const resolvedText = reduceMotion ? (roles[roleIndex] ?? "") : displayText;
  const typedLines = activeRoleLines.map((line, index) => {
    let remaining = resolvedText.length;

    for (let currentIndex = 0; currentIndex < index; currentIndex += 1) {
      remaining -= activeRoleLines[currentIndex].length;

      if (currentIndex < activeRoleLines.length - 1 && remaining > 0) {
        remaining -= 1;
      }
    }

    return line.slice(0, Math.max(0, Math.min(line.length, remaining)));
  });
  const cursorLineIndex = reduceMotion
    ? -1
    : typedLines.reduce(
        (lastIndex, line, index) => (line.length > 0 ? index : lastIndex),
        0,
      );

  useEffect(() => {
    if (reduceMotion) {
      return undefined;
    }

    const currentRole = roles[roleIndex];

    if (isHolding) {
      const holdTimer = window.setTimeout(() => {
        setIsHolding(false);
        setIsDeleting(true);
      }, 2600);

      return () => window.clearTimeout(holdTimer);
    }

    const delay = isDeleting ? 110 : 220;
    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentRole.slice(0, displayText.length + 1);
        setDisplayText(nextText);

        if (nextText === currentRole) {
          setIsHolding(true);
        }

        return;
      }

      const nextText = currentRole.slice(
        0,
        Math.max(0, displayText.length - 1),
      );
      setDisplayText(nextText);

      if (nextText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((current) => (current + 1) % roles.length);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [displayText, isDeleting, isHolding, reduceMotion, roleIndex, roles]);

  return (
    <Panel className="p-5 md:p-6">
      <PanelLabel>{roleSignatureLabel}</PanelLabel>
      <div className="mt-4 grid gap-5 md:grid-cols-[minmax(0,1fr)_15rem] md:items-center">
        <div className="min-h-[8.75rem] md:min-h-[9.5rem]">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-white/35">
            {identityLabel}
          </p>
          <div className="mt-3 flex items-start gap-3">
            <span className="pt-2 font-mono text-lg text-white">&gt;</span>
            <div className="min-w-0 flex-1 space-y-1 md:space-y-2">
              {placeholderLines.map((line, index) => (
                <div
                  key={`${line}-${index}`}
                  className="relative h-[3rem] overflow-visible md:h-[4.75rem]"
                >
                  <span className="invisible block whitespace-nowrap font-display text-4xl font-bold leading-[1.05] md:text-6xl">
                    {line || " "}
                  </span>
                  <h2 className="absolute inset-0 whitespace-nowrap font-display text-4xl font-bold leading-[1.05] text-white md:text-6xl">
                    {typedLines[index] ?? ""}
                    {!reduceMotion && cursorLineIndex === index ? (
                      <span className="ml-1 inline-block h-[0.95em] w-[0.08em] animate-pulse rounded-full bg-white align-[-0.08em]" />
                    ) : null}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid w-full gap-2 md:w-[15rem]">
          {roles.map((role) => (
            <span
              key={role}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-center text-xs uppercase tracking-[0.24em] text-zinc-300"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function HeroRoleTicker({ roles, reduceMotion }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const currentRole = roles[roleIndex] ?? "";
  const tickerHeight = "clamp(7.8rem, 18vw, 12.8rem)";
  const roleLines =
    currentRole === "Full Stack Developer"
      ? ["Full Stack", "Developer"]
      : [currentRole];
  const isTwoLineRole = roleLines.length > 1;

  useEffect(() => {
    if (reduceMotion) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, [reduceMotion, roles.length]);

  return (
    <div className="relative overflow-hidden" style={{ height: tickerHeight }}>
      <AnimatePresence initial={false} mode="wait">
        <Motion.div
          key={currentRole}
          animate={{ opacity: 1, y: 0 }}
          className={`absolute inset-0 ${isTwoLineRole ? "flex items-center" : "flex items-center gap-3"}`}
          exit={{ opacity: 0, y: -26 }}
          initial={{ opacity: 0, y: 26 }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {isTwoLineRole ? (
            <div className="flex flex-col justify-center gap-1 leading-[0.88]">
              {roleLines.map((line, index) => (
                <div key={line} className="flex items-center gap-3">
                  <span className="block whitespace-nowrap font-display text-[clamp(2.1rem,7.4vw,5.9rem)] font-bold uppercase tracking-[-0.08em] text-black">
                    {line}
                  </span>
                  {index === roleLines.length - 1 ? (
                    <span className="mt-[0.04em] inline-block h-[0.72em] w-[0.08em] animate-pulse rounded-full bg-black/85" />
                  ) : null}
                </div>
              ))}
            </div>
          ) : (
            <>
              <span className="block whitespace-nowrap font-display text-[clamp(2.9rem,11vw,8.2rem)] font-bold uppercase leading-[0.9] tracking-[-0.08em] text-black">
                {currentRole}
              </span>
              <span className="mt-[0.04em] inline-block h-[0.78em] w-[0.08em] animate-pulse rounded-full bg-black/85" />
            </>
          )}
        </Motion.div>
      </AnimatePresence>
    </div>
  );
}

function HeroLaptop({ isReady, language, reduceMotion }) {
  const heroRef = useRef(null);
  const roles = siteContent.profile.roleSequence[language];
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const screenRotateX = useTransform(
    heroProgress,
    [0, 0.58],
    [0, reduceMotion ? 0 : 82],
  );
  const screenScale = useTransform(
    heroProgress,
    [0, 0.58],
    [1, reduceMotion ? 1 : 0.93],
  );
  const screenY = useTransform(
    heroProgress,
    [0, 0.58],
    [0, reduceMotion ? 0 : 30],
  );
  const baseY = useTransform(
    heroProgress,
    [0, 0.58],
    [0, reduceMotion ? 0 : -14],
  );
  const heroOpacity = useTransform(heroProgress, [0, 0.78], [1, 0.82]);

  return (
    <section ref={heroRef} className="relative h-[180vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-5 pb-10 pt-24 md:px-8 md:pb-14">
        <Motion.div
          className="mx-auto w-full max-w-7xl"
          style={{ opacity: heroOpacity }}
        >
          <div className="[perspective:2200px]">
            <Motion.div
              className="mx-auto w-full max-w-6xl"
              style={{
                rotateX: screenRotateX,
                scale: screenScale,
                y: screenY,
                transformOrigin: "bottom center",
              }}
            >
              <div className="relative overflow-hidden rounded-[1.8rem_1.8rem_0.9rem_0.9rem] border-[6px] border-[#111827] bg-white shadow-[0_45px_140px_rgba(0,0,0,0.65)]">
                <div className="absolute left-1/2 top-0 h-6 w-36 -translate-x-1/2 rounded-b-[1rem] bg-black" />
                <Motion.div
                  animate={isReady ? "visible" : "hidden"}
                  className="grid min-h-[24rem] gap-10 px-6 pb-8 pt-12 sm:px-10 md:min-h-[36rem] md:px-14 md:pb-10 md:pt-14"
                  initial="hidden"
                  variants={staggerParent(0.12, 0.08)}
                >
                  <Motion.div
                    className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between"
                    variants={staggerChild}
                  >
                    <div className="max-w-sm space-y-2 text-black">
                      <p className="text-[11px] uppercase tracking-[0.32em] text-black/45">
                        {readText(siteContent.hero.eyebrow, language)}
                      </p>
                      <p className="max-w-[14rem] text-xl font-semibold leading-tight md:max-w-[18rem] md:text-[2rem]">
                        {readText(siteContent.hero.lead, language)}
                      </p>
                    </div>

                    <div className="grid gap-5 text-[11px] uppercase tracking-[0.18em] text-black/55 md:grid-cols-2 md:text-sm">
                      <div>
                        <p className="mb-2 text-black/35">
                          {siteContent.profile.brandName}
                        </p>
                        <p className="max-w-[12rem] leading-6">
                          {readText(siteContent.profile.location, language)}
                        </p>
                      </div>
                      <div>
                        <p className="mb-2 text-black/35">
                          {readText(siteContent.ui.startConversation, language)}
                        </p>
                        <p className="max-w-[12rem] leading-6">
                          {readText(siteContent.profile.availability, language)}
                        </p>
                      </div>
                    </div>
                  </Motion.div>

                  <Motion.div className="space-y-6" variants={staggerChild}>
                    <p className="text-sm uppercase tracking-[0.34em] text-black/40 md:text-base">
                      Hi, I am a
                    </p>
                    <HeroRoleTicker reduceMotion={reduceMotion} roles={roles} />
                  </Motion.div>

                  <Motion.div
                    className="mt-auto flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
                    variants={staggerChild}
                  >
                    <div className="max-w-2xl space-y-4">
                      <p className="max-w-xl text-sm leading-7 text-black/65 md:text-base md:leading-8">
                        {readText(siteContent.hero.support, language)}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <a
                          className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
                          href="#projects"
                        >
                          {readText(siteContent.hero.ctaPrimary, language)}
                          <ArrowRight size={16} />
                        </a>
                        <a
                          className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
                          href="#contact"
                        >
                          {readText(siteContent.hero.ctaSecondary, language)}
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>

                    <p className="text-[11px] uppercase tracking-[0.34em] text-black/40 md:text-right">
                      {siteContent.profile.brandName} /{" "}
                      {readText(siteContent.profile.personalName, language)}
                    </p>
                  </Motion.div>
                </Motion.div>
              </div>
            </Motion.div>

            <Motion.div
              animate={reduceMotion ? undefined : marqueeFloat(6, 7.5)}
              className="mx-auto mt-[-0.35rem] w-[94%] max-w-[68rem]"
              style={{ y: baseY }}
            >
              <div className="h-4 rounded-b-[1.25rem] bg-[linear-gradient(180deg,#0f172a_0%,#020617_100%)] shadow-[0_30px_100px_rgba(0,0,0,0.8)]" />
              <div className="mx-auto mt-2 h-24 w-[112%] -translate-x-[6%] rounded-t-[1rem] bg-[linear-gradient(180deg,#262626_0%,#090909_100%)] shadow-[0_35px_70px_rgba(0,0,0,0.75)]" />
            </Motion.div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}

const aiPremiumLogos = {
  OpenAI: openAiLogo,
  Gemini: geminiLogo,
  Grok: grokLogo,
  Claude: claudeLogo,
};

function AIPremiumBackdropLogo({
  brand,
  className,
  index,
  progress,
  reduceMotion,
}) {
  const start = 0.08 + index * 0.09;
  const mid = start + 0.16;
  const end = start + 0.34;
  const opacity = useTransform(
    progress,
    [0, start, mid, end, 1],
    [0, 0, 0.34, 0.22, 0.1],
  );
  const x = useTransform(
    progress,
    [0, start, mid, 1],
    [index % 2 === 0 ? -30 : 30, index % 2 === 0 ? -30 : 30, 0, 0],
  );
  const y = useTransform(progress, [0, start, mid, 1], [44, 44, 0, -10]);
  const scale = useTransform(
    progress,
    [0, start, mid, 1],
    [0.72, 0.72, 1.05, 1.02],
  );
  const rotate = useTransform(
    progress,
    [0, start, mid, 1],
    [
      reduceMotion ? 0 : brand.tilt + (index % 2 === 0 ? -4 : 4),
      reduceMotion ? 0 : brand.tilt + (index % 2 === 0 ? -4 : 4),
      reduceMotion ? 0 : brand.tilt,
      reduceMotion ? 0 : brand.tilt,
    ],
  );

  return (
    <Motion.div
      className={`pointer-events-none absolute ${className}`}
      style={{
        opacity,
        rotate,
        scale,
        x,
        y,
      }}
    >
      <div className="rounded-[1.8rem] border border-white/8 bg-white/[0.015] p-4 shadow-[0_30px_70px_rgba(0,0,0,0.42)] backdrop-blur-[2px]">
        <img
          alt={`${brand.name} monochrome logo`}
          className="h-auto w-full opacity-90"
          src={aiPremiumLogos[brand.name]}
        />
      </div>
    </Motion.div>
  );
}

function App() {
  const [language, setLanguage] = useState(
    () => window.localStorage.getItem("language") || "id",
  );
  const [showLoader, setShowLoader] = useState(
    () =>
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      window.sessionStorage.getItem("brand-loader-seen") !== "1",
  );
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedServiceId, setSelectedServiceId] = useState(
    siteContent.services.items[0]?.id ?? "",
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactError, setContactError] = useState("");
  const reduceMotion = useReducedMotion();
  const aiPremiumRef = useRef(null);
  const codeSectionRef = useRef(null);
  const codeContentRef = useRef(null);
  const [maxCodeScroll, setMaxCodeScroll] = useState(0);

  const { scrollY, scrollYProgress } = useScroll();
  const { scrollYProgress: aiPremiumProgress } = useScroll({
    target: aiPremiumRef,
    offset: ["start 85%", "end 20%"],
  });
  const { scrollYProgress: codeProgress } = useScroll({
    target: codeSectionRef,
    offset: ["start start", "end end"],
  });

  const codeScrollY = useTransform(codeProgress, [0, 1], [0, -maxCodeScroll]);

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.25,
  });
  const activeService =
    siteContent.services.items.find((item) => item.id === selectedServiceId) ??
    siteContent.services.items[0];
  const serviceTitle = readText(siteContent.services.title, language);
  const serviceTitleLead = serviceTitle.replace(/\s+Arsenal$/, "");
  const serviceCodeLines = activeService?.codeLines ?? [];

  useEffect(() => {
    if (reduceMotion || !showLoader) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem("brand-loader-seen", "1");
      setShowLoader(false);
    }, 1550);

    return () => window.clearTimeout(timer);
  }, [reduceMotion, showLoader]);

  useEffect(() => {
    if (!showLoader) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showLoader]);

  useEffect(() => {
    if (reduceMotion) {
      return undefined;
    }

    let previous = 0;

    return scrollY.on("change", (latest) => {
      if (showLoader || selectedProject) {
        setHeaderHidden(false);
        previous = latest;
        return;
      }

      const goingDown = latest > previous && latest > 120;
      const goingUp = latest < previous - 4;

      if (goingDown) {
        setHeaderHidden(true);
      } else if (goingUp || latest < 60) {
        setHeaderHidden(false);
      }

      previous = latest;
    });
  }, [reduceMotion, scrollY, selectedProject, showLoader]);

  useEffect(() => {
    const container = codeContentRef.current;
    if (!container) return;

    const measure = () => {
      setMaxCodeScroll(
        Math.max(0, container.scrollHeight - container.clientHeight),
      );
    };

    measure();
    const timeout = setTimeout(measure, 150);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const navItems = [
    [readText(siteContent.ui.nav.about, language), "#about"],
    [readText(siteContent.ui.nav.services, language), "#services"],
    [readText(siteContent.ui.nav.projects, language), "#projects"],
    [readText(siteContent.ui.nav.contact, language), "#contact"],
  ];

  useEffect(() => {
    window.localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);

    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setContactError(readText(siteContent.ui.form.error, language));
      return;
    }

    setContactError("");

    const subject = encodeURIComponent(
      `${readText(siteContent.ui.form.inquirySubject, language)} ${contactForm.name}`,
    );
    const body = encodeURIComponent(
      `${readText(siteContent.ui.form.name, language)}: ${contactForm.name}\n${readText(siteContent.ui.form.email, language)}: ${contactForm.email}\n\n${readText(siteContent.ui.form.message, language)}:\n${contactForm.message}`,
    );

    window.location.href = `mailto:hello@placeholder.dev?subject=${subject}&body=${body}`;
  };

  const openProject = (project) => {
    startTransition(() => {
      setSelectedProject(project);
    });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-white">
      <AnimatePresence mode="wait">
        {showLoader ? (
          <BrandLoader language={language} reduceMotion={reduceMotion} />
        ) : null}
      </AnimatePresence>

      <Motion.div
        className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-white via-zinc-300 to-white"
        style={{ scaleX: progress }}
      />
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <Motion.div
          animate={reduceMotion ? undefined : marqueeFloat(12, 11)}
          className="absolute -left-[18rem] top-10 h-[32rem] w-[32rem] rounded-full border border-white/10"
        />
        <Motion.div
          animate={reduceMotion ? undefined : marqueeFloat(18, 13)}
          className="absolute right-[-14rem] top-[18rem] h-[28rem] w-[28rem] rounded-full border border-white/10"
        />
        <Motion.div
          animate={reduceMotion ? undefined : marqueeFloat(10, 10)}
          className="absolute left-[-12rem] top-[54rem] h-[26rem] w-[26rem] rounded-full border border-white/10"
        />
        <Motion.div
          animate={reduceMotion ? undefined : marqueeFloat(16, 12)}
          className="absolute right-[-10rem] top-[84rem] h-[32rem] w-[32rem] rounded-full border border-white/10"
        />
        <Motion.div
          animate={reduceMotion ? undefined : marqueeFloat(8, 9)}
          className="absolute left-[15%] top-[120rem] h-[24rem] w-[24rem] rounded-full border border-white/10"
        />
        <Motion.div
          animate={reduceMotion ? undefined : marqueeFloat(14, 14)}
          className="absolute right-[6%] top-[160rem] h-[20rem] w-[20rem] rounded-full border border-white/10"
        />
        <Motion.div
          animate={
            reduceMotion
              ? undefined
              : { opacity: [0.08, 0.18, 0.08], x: ["-8%", "10%", "38%"] }
          }
          className="absolute left-[-20%] top-[26rem] h-px w-[45rem] bg-gradient-to-r from-transparent via-white/30 to-transparent"
          transition={{
            duration: 11,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
        <Motion.div
          animate={
            reduceMotion
              ? undefined
              : { opacity: [0.04, 0.14, 0.04], x: ["65%", "38%", "10%"] }
          }
          className="absolute top-[96rem] h-px w-[38rem] bg-gradient-to-r from-transparent via-white/20 to-transparent"
          transition={{
            duration: 13,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </div>

      <Motion.header
        animate={headerHidden ? "hidden" : "visible"}
        className="sticky top-0 z-40 border-b border-white/10 bg-black/75 backdrop-blur-xl"
        initial="visible"
        variants={navHideShowVariants}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Motion.a
            className="flex items-center gap-3"
            href="#top"
            whileHover={{ y: -2 }}
          >
            <div>
              <p className="font-display text-[1.75rem] font-bold leading-none tracking-tight text-white glitch-text">
                {siteContent.profile.brandName}
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                {readText(siteContent.ui.headerTag, language)}
              </p>
            </div>
          </Motion.a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map(([label, href]) => (
              <Motion.a
                key={label}
                className="text-sm font-medium text-zinc-300 transition hover:text-white"
                href={href}
                whileHover={{ y: -2 }}
              >
                {label}
              </Motion.a>
            ))}
            <Motion.a
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
              href="#contact"
              whileHover={{ y: -2, scale: 1.01 }}
            >
              {readText(siteContent.ui.startConversation, language)}
              <ArrowRight size={16} />
            </Motion.a>
            <div className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1">
              {["id", "en"].map((item) => (
                <Motion.button
                  key={item}
                  aria-pressed={language === item}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.22em] transition ${
                    language === item
                      ? "bg-white text-black"
                      : "text-white/70 hover:text-white"
                  }`}
                  onClick={() => setLanguage(item)}
                  type="button"
                  whileTap={{ scale: 0.97 }}
                >
                  {siteContent.ui.language[item]}
                </Motion.button>
              ))}
            </div>
          </nav>

          <button
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="rounded-full border border-white/10 p-3 text-slate-200 md:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            type="button"
          >
            <Menu size={18} />
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-white/10 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  className="text-sm font-medium text-zinc-300"
                  href={href}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2">
                {["id", "en"].map((item) => (
                  <button
                    key={item}
                    aria-pressed={language === item}
                    className={`rounded-full border px-3 py-2 text-xs font-semibold tracking-[0.22em] ${
                      language === item
                        ? "border-white bg-white text-black"
                        : "border-white/10 text-white/70"
                    }`}
                    onClick={() => {
                      setLanguage(item);
                      setMenuOpen(false);
                    }}
                    type="button"
                  >
                    {siteContent.ui.language[item]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </Motion.header>

      <main id="top" className="relative">
        <HeroLaptop
          isReady={!showLoader}
          language={language}
          reduceMotion={reduceMotion}
        />

        <RevealSection
          id="about"
          className="mx-auto max-w-7xl px-5 pb-16 pt-6 md:px-8 md:pb-20 md:pt-10"
        >
          <StaggerGroup className="grid gap-8 xl:grid-cols-[0.42fr_0.58fr] xl:items-start">
            <div className="space-y-6">
              <RevealItem>
                <Panel className="min-h-[15rem] p-6">
                  <PanelLabel>
                    {readText(siteContent.hero.eyebrow, language)}
                  </PanelLabel>
                  <div className="relative mt-6 flex h-full items-center justify-center rounded-full border border-white/10 px-6 py-14">
                    <div className="absolute left-5 top-5 flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    </div>
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                        {readText(siteContent.profile.location, language)}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-zinc-300">
                        {readText(siteContent.profile.intro, language)}
                      </p>
                    </div>
                  </div>
                </Panel>
              </RevealItem>

              <StaggerGroup
                className="grid gap-4 sm:grid-cols-2"
                stagger={0.08}
              >
                {siteContent.spotlightCards.map((card) => (
                  <RevealItem key={card.id}>
                    <ProximityCard disabled={reduceMotion}>
                      <Panel className="p-4">
                        <PortraitMock
                          compact
                          subtitle={readText(card.label, language)}
                          title={readText(card.title, language)}
                        />
                        <p className="mt-4 text-sm leading-7 text-zinc-300">
                          {readText(card.body, language)}
                        </p>
                      </Panel>
                    </ProximityCard>
                  </RevealItem>
                ))}
              </StaggerGroup>
            </div>

            <StaggerGroup className="space-y-7" stagger={0.1}>
              <RevealItem
                className="flex items-start justify-between gap-4"
                variants={staggerChild}
              >
                <div className="flex items-center gap-2 text-white/60">
                  <CircleDot size={18} />
                  <CircleDot size={18} />
                  <CircleDot size={18} />
                </div>
                <PanelLabel align="right">
                  {readText(siteContent.profile.personalName, language)}
                </PanelLabel>
              </RevealItem>

              <RevealItem>
                <TypedRoles
                  identityLabel={readText(
                    siteContent.ui.identityFile,
                    language,
                  )}
                  reduceMotion={reduceMotion}
                  roleSignatureLabel={readText(
                    siteContent.ui.roleSignature,
                    language,
                  )}
                  roles={siteContent.profile.roleSequence[language]}
                />
              </RevealItem>

              <RevealItem className="space-y-5" variants={staggerChild}>
                <h1 className="font-display text-5xl font-bold leading-[0.94] text-white md:text-7xl">
                  {readText(siteContent.profile.personalName, language)}
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
                  {readText(siteContent.hero.support, language)}
                </p>
              </RevealItem>

              <RevealItem
                className="flex flex-wrap gap-4"
                variants={staggerChild}
              >
                <Motion.a
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
                  href="#projects"
                  whileHover={{ y: -3, scale: 1.01 }}
                >
                  {readText(siteContent.hero.ctaPrimary, language)}
                  <ArrowRight size={16} />
                </Motion.a>
                <Motion.a
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                  href="#contact"
                  whileHover={{ y: -3, scale: 1.01 }}
                >
                  {readText(siteContent.hero.ctaSecondary, language)}
                  <ExternalLink size={16} />
                </Motion.a>
              </RevealItem>

              <StaggerGroup
                className="grid gap-4 md:grid-cols-3"
                stagger={0.08}
              >
                {siteContent.hero.meta.map((item) => (
                  <RevealItem key={item.label.id}>
                    <ProximityCard disabled={reduceMotion}>
                      <Panel className="p-5">
                        <PanelLabel>
                          {readText(item.label, language)}
                        </PanelLabel>
                        <p className="mt-4 font-display text-2xl font-semibold text-white">
                          {readText(item.value, language)}
                        </p>
                      </Panel>
                    </ProximityCard>
                  </RevealItem>
                ))}
              </StaggerGroup>
            </StaggerGroup>
          </StaggerGroup>
        </RevealSection>

        <RevealSection className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <StaggerGroup className="grid gap-8 xl:grid-cols-[0.34fr_0.66fr]">
            <RevealItem>
              <Panel className="p-6">
                <PanelLabel>
                  {readText(siteContent.about.eyebrow, language)}
                </PanelLabel>
                <p className="mt-6 text-sm leading-7 text-zinc-300">
                  {readText(siteContent.about.description, language)}
                </p>
              </Panel>
            </RevealItem>
            <StaggerGroup className="space-y-6">
              <SectionHeading
                description={readText(siteContent.about.description, language)}
                eyebrow={readText(siteContent.about.eyebrow, language)}
                title={readText(siteContent.about.title, language)}
              />
              <StaggerGroup
                className="grid gap-4 md:grid-cols-3"
                stagger={0.08}
              >
                {siteContent.about.metrics.map((item) => (
                  <RevealItem key={item.label.id}>
                    <ProximityCard disabled={reduceMotion}>
                      <Panel className="p-5">
                        <PanelLabel>
                          {readText(item.label, language)}
                        </PanelLabel>
                        <p className="mt-4 text-lg leading-7 text-white">
                          {readText(item.value, language)}
                        </p>
                      </Panel>
                    </ProximityCard>
                  </RevealItem>
                ))}
              </StaggerGroup>
            </StaggerGroup>
          </StaggerGroup>
        </RevealSection>

        <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <Panel className="p-5 md:p-8">
            <div className="grid gap-8 xl:grid-cols-[0.56fr_0.44fr]">
              <PortraitMock
                subtitle={readText(siteContent.profile.personalName, language)}
                title={readText(siteContent.profile.roleLabel, language)}
              />
              <div className="space-y-6">
                <SectionHeading
                  description={readText(
                    siteContent.profileBoard.summary,
                    language,
                  )}
                  eyebrow={readText(siteContent.profileBoard.eyebrow, language)}
                  title={readText(siteContent.profileBoard.title, language)}
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  {siteContent.profileBoard.facts.map((item) => (
                    <ProximityCard
                      key={item.label.id}
                      className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-4"
                      disabled={reduceMotion}
                    >
                      <PanelLabel>{readText(item.label, language)}</PanelLabel>
                      <p className="mt-3 text-sm leading-7 text-zinc-200">
                        {readText(item.value, language)}
                      </p>
                    </ProximityCard>
                  ))}
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {siteContent.profileBoard.bullets.map((item) => (
                    <ProximityCard
                      key={item.id}
                      className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-zinc-300"
                      disabled={reduceMotion}
                    >
                      - {readText(item, language)}
                    </ProximityCard>
                  ))}
                </div>
              </div>
            </div>
          </Panel>
        </section>

        <section ref={codeSectionRef} className="relative h-[200vh]">
          <div className="sticky top-0 flex h-screen items-center justify-center px-5 md:px-8">
            <div className="mx-auto w-full max-w-4xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#0a0a0a] p-4 shadow-2xl">
                <div className="relative z-10 flex items-center gap-2 border-b border-white/10 bg-[#0a0a0a] pb-3">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 font-mono text-xs text-white/50">
                    code.js
                  </span>
                </div>
                <div
                  ref={codeContentRef}
                  className="mt-4 h-[75vh] overflow-hidden"
                >
                  <Motion.div style={{ y: codeScrollY }}>
                    <CodeBlock code={siteContent.bulletin.code} />
                  </Motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <Panel className="p-6 md:p-8">
            <SectionHeading
              description={readText(siteContent.experience.intro, language)}
              eyebrow={readText(siteContent.experience.eyebrow, language)}
              title={readText(siteContent.experience.eyebrow, language)}
            />
            <div className="mt-8 grid gap-6 xl:grid-cols-[0.62fr_0.38fr]">
              <div className="grid gap-4 md:grid-cols-2">
                {siteContent.experience.items.map((item) => (
                  <ProximityCard
                    key={item.year}
                    className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5"
                    disabled={reduceMotion}
                  >
                    <PanelLabel>{item.year}</PanelLabel>
                    <p className="mt-4 font-display text-2xl font-semibold text-white">
                      {readText(item.title, language)}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-zinc-300">
                      {readText(item.body, language)}
                    </p>
                  </ProximityCard>
                ))}
              </div>
              <ProximityCard
                className="rounded-[1.5rem] border border-dashed border-white/15 bg-white/[0.03] p-6"
                disabled={reduceMotion}
              >
                <PanelLabel>
                  {readText(
                    siteContent.experience.workJourney.eyebrow,
                    language,
                  )}
                </PanelLabel>
                <p className="mt-4 font-display text-2xl font-semibold text-white">
                  {readText(siteContent.experience.workJourney.title, language)}
                </p>
                <p className="mt-4 text-sm leading-7 text-zinc-300">
                  {readText(
                    siteContent.experience.workJourney.description,
                    language,
                  )}
                </p>
              </ProximityCard>
            </div>
          </Panel>
        </section>

        <section
          ref={aiPremiumRef}
          className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24"
        >
          <AIPremiumBackdropLogo
            brand={siteContent.aiPremiumSection.brands[0]}
            className="-left-2 top-8 w-[12rem] sm:w-[14rem] md:-left-8 md:top-2 md:w-[17rem] xl:-left-12 xl:w-[20rem]"
            index={0}
            progress={aiPremiumProgress}
            reduceMotion={reduceMotion}
          />
          <AIPremiumBackdropLogo
            brand={siteContent.aiPremiumSection.brands[1]}
            className="right-[-3.5rem] top-[-0.75rem] w-[9rem] sm:right-[-4.5rem] sm:w-[11rem] md:-right-16 md:top-6 md:w-[13rem] xl:-right-28 xl:top-3 xl:w-[16rem]"
            index={1}
            progress={aiPremiumProgress}
            reduceMotion={reduceMotion}
          />
          <AIPremiumBackdropLogo
            brand={siteContent.aiPremiumSection.brands[2]}
            className="-left-10 bottom-6 w-[10.5rem] sm:-left-12 sm:w-[12rem] md:-left-18 md:bottom-2 md:w-[14.5rem] xl:-left-28 xl:bottom-0 xl:w-[17rem]"
            index={2}
            progress={aiPremiumProgress}
            reduceMotion={reduceMotion}
          />
          <AIPremiumBackdropLogo
            brand={siteContent.aiPremiumSection.brands[3]}
            className="bottom-2 right-[-3rem] w-[9.2rem] sm:right-[-4rem] sm:w-[11rem] md:-right-14 md:bottom-[-0.5rem] md:w-[13rem] xl:-right-24 xl:bottom-[-1rem] xl:w-[15rem]"
            index={3}
            progress={aiPremiumProgress}
            reduceMotion={reduceMotion}
          />

          <Panel className="relative z-10 border-white/12 bg-black/90 p-6 md:p-8 lg:p-10">
            <StaggerGroup className="space-y-8">
              <RevealItem className="space-y-5" variants={staggerChild}>
                <PanelLabel>
                  {readText(siteContent.aiPremiumSection.eyebrow, language)}
                </PanelLabel>
                <h2 className="max-w-none font-display text-3xl font-bold leading-[1.02] text-white md:text-5xl xl:text-[4.2rem]">
                  {readText(siteContent.aiPremiumSection.title, language)}
                </h2>
                <div className="max-w-5xl space-y-5">
                  <p className="max-w-none text-base leading-8 text-zinc-300 md:text-lg">
                    {readText(siteContent.aiPremiumSection.intro, language)}
                  </p>
                  <div className="max-w-3xl rounded-[1.15rem] border border-white/10 bg-white/[0.02] px-4 py-3">
                    <p className="text-sm leading-7 text-zinc-400 md:text-base">
                      {readText(siteContent.aiPremiumSection.footer, language)}
                    </p>
                  </div>
                </div>
              </RevealItem>

              <StaggerGroup className="grid gap-3 lg:grid-cols-3" stagger={0.1}>
                {siteContent.aiPremiumSection.valuePoints.map((item, index) => (
                  <RevealItem
                    key={item.label.id}
                    className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <ProximityCard disabled={reduceMotion}>
                      <div className="flex items-start justify-between gap-4">
                        <PanelLabel>
                          {readText(item.label, language)}
                        </PanelLabel>
                        <span className="text-[11px] uppercase tracking-[0.28em] text-white/32">
                          {siteContent.aiPremiumSection.brands[index].name}
                        </span>
                      </div>
                      <p className="mt-4 font-display text-[1.65rem] font-semibold leading-tight text-white">
                        {readText(item.title, language)}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-zinc-300">
                        {readText(item.body, language)}
                      </p>
                    </ProximityCard>
                  </RevealItem>
                ))}
              </StaggerGroup>
            </StaggerGroup>
          </Panel>
        </section>

        <RevealSection
          id="services"
          className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20"
        >
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-black px-5 py-8 shadow-[0_35px_90px_rgba(0,0,0,0.45)] md:px-8 md:py-10">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="absolute left-[28%] top-0 h-40 w-px bg-gradient-to-b from-white/20 to-transparent" />
            <div className="absolute right-[12%] top-0 h-24 w-px bg-gradient-to-b from-white/16 to-transparent" />
            <div className="absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-white/6" />
            <div className="absolute left-1/2 top-[28%] h-24 w-24 -translate-x-1/2 rotate-45 border border-white/6" />
            <div className="absolute left-[8%] top-[58%] h-20 w-20 rotate-[12deg] border border-white/6" />

            <StaggerGroup className="relative grid gap-10 xl:grid-cols-[minmax(0,0.92fr)_minmax(420px,1.08fr)] xl:items-center">
              <RevealItem className="relative">
                <PanelLabel>{readText(siteContent.services.eyebrow, language)}</PanelLabel>
                <div className="mt-4 max-w-xl">
                  <h2 className="font-display text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.92] tracking-[-0.08em] text-white">
                    {serviceTitleLead}
                    <br />
                    <span className="text-white/42">Arsenal</span>
                  </h2>
                </div>
                <div className="mt-6 h-[3px] w-18 bg-white/90 shadow-[0_0_18px_rgba(255,255,255,0.2)]" />

                <div className="mt-7 max-w-xl rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-base leading-8 text-zinc-300 md:text-lg">
                    {readText(siteContent.services.intro, language)}
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  <Motion.div
                    key={activeService.id}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-7 max-w-xl space-y-4"
                    exit={{ opacity: 0, y: -16 }}
                    initial={{ opacity: 0, y: 16 }}
                    transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.025] p-5">
                      <div className="flex items-center justify-between gap-4">
                        <PanelLabel>{readText(activeService.label, language)}</PanelLabel>
                        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/38">
                          {readText(siteContent.services.title, language)}
                        </span>
                      </div>
                      <p className="mt-4 font-display text-[1.8rem] font-semibold leading-tight text-white md:text-[2.1rem]">
                        {readText(activeService.title, language)}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-zinc-300 md:text-base">
                        {readText(activeService.description, language)}
                      </p>
                    </div>

                    <div className="rounded-[1.15rem] border border-white/10 bg-white/[0.02] p-4">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      </div>
                      <div className="mt-4 space-y-3 font-mono text-[12px] leading-6 text-zinc-300 md:text-[13px]">
                        {serviceCodeLines.map((line, index) => (
                          <div key={`${activeService.id}-${index}`} className="flex gap-4">
                            <span className="text-white/28">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span>{readText(line, language)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Motion.div>
                </AnimatePresence>
              </RevealItem>

              <RevealItem className="relative">
                <div className="absolute inset-x-[12%] bottom-[6%] h-20 rounded-full bg-white/[0.04] blur-3xl" />
                <div className="relative mx-auto w-full max-w-[42rem] [transform-style:preserve-3d]">
                  <div className="absolute inset-x-8 -bottom-6 h-14 rounded-[1.8rem] bg-black/85 blur-xl" />
                  <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 md:p-6 [transform:perspective(1400px)_rotateX(11deg)_rotateY(-14deg)_rotateZ(-6deg)]">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-4">
                      {siteContent.services.items.map((item, index) => (
                        <ArsenalKey
                          active={activeService.id === item.id}
                          index={index}
                          item={item}
                          key={item.id}
                          language={language}
                          onSelect={setSelectedServiceId}
                          reduceMotion={reduceMotion}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </RevealItem>
            </StaggerGroup>
          </div>
        </RevealSection>

        <RevealSection
          id="projects"
          className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20"
        >
          <Panel className="p-6 md:p-8">
            <SectionHeading
              description={readText(siteContent.hero.support, language)}
              eyebrow={readText(siteContent.ui.exploreLabel, language)}
              title={readText(siteContent.ui.exploreLabel, language)}
            />
            <StaggerGroup
              className="mt-8 grid gap-5 xl:grid-cols-3"
              stagger={0.1}
            >
              {siteContent.projects.map((project) => (
                <Motion.button
                  key={project.id}
                  className="group relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-black/70 p-5 text-left transition hover:-translate-y-1 hover:border-white/20"
                  onClick={() => openProject(project)}
                  type="button"
                  animate="rest"
                  initial="rest"
                  variants={cardHoverVariants}
                  whileHover="hover"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-80`}
                  />
                  <ProximityCard className="relative" disabled={reduceMotion}>
                    <Motion.div
                      className="relative space-y-5"
                      whileHover={{ y: -2 }}
                    >
                      <Motion.div whileHover={{ y: -4, scale: 1.01 }}>
                        <PortraitMock
                          compact
                          subtitle={readText(project.tag, language)}
                          title={readText(project.title, language)}
                        />
                      </Motion.div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                          {readText(project.role, language)}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-zinc-200">
                          {readText(project.summary, language)}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-black/65 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-white/65"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      <Motion.div
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white"
                        whileHover={{ x: 4 }}
                      >
                        {readText(siteContent.ui.openCaseStudy, language)}
                        <ArrowRight size={16} />
                      </Motion.div>
                    </Motion.div>
                  </ProximityCard>
                </Motion.button>
              ))}
            </StaggerGroup>
          </Panel>
        </RevealSection>

        <RevealSection className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <Panel className="p-6 md:p-8">
            <SectionHeading
              description={readText(siteContent.bulletin.title, language)}
              eyebrow={readText(siteContent.bulletin.eyebrow, language)}
              title={readText(siteContent.bulletin.eyebrow, language)}
            />
            <StaggerGroup className="mt-8 grid gap-6 xl:grid-cols-[0.68fr_0.32fr]">
              <RevealItem className="rounded-[1.5rem] border border-white/10 bg-black/60 p-5">
                <PanelLabel>notes.log</PanelLabel>
                <div className="mt-5 space-y-3 rounded-[1.3rem] border border-white/10 bg-black/70 p-5 font-mono text-sm text-zinc-300">
                  {siteContent.bulletin.codeLines.map((line, index) => (
                    <p key={`bulletin-line-${index}`}>{readText(line, language)}</p>
                  ))}
                </div>
                <StaggerGroup
                  className="mt-5 grid gap-3 sm:grid-cols-2"
                  stagger={0.08}
                >
                  {siteContent.bulletin.badges.map((badge, index) => (
                    <RevealItem
                      key={`bulletin-badge-${index}`}
                      className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-300"
                    >
                      <ProximityCard disabled={reduceMotion}>
                        {readText(badge, language)}
                      </ProximityCard>
                    </RevealItem>
                  ))}
                </StaggerGroup>
              </RevealItem>

              <StaggerGroup id="contact" className="space-y-5">
                <RevealItem>
                  <Panel className="p-6">
                    <SectionHeading
                      description={readText(
                        siteContent.contact.supportingText,
                        language,
                      )}
                      eyebrow={readText(siteContent.ui.quickMessage, language)}
                      title={readText(siteContent.contact.headline, language)}
                    />
                  </Panel>
                </RevealItem>
                <RevealItem>
                  <Panel className="p-6">
                    <StaggerGroup className="space-y-4" stagger={0.08}>
                      {siteContent.contact.channels.map((channel) => {
                        const Icon =
                          channel.type === "email"
                            ? Mail
                            : channel.type === "github"
                              ? Github
                              : Linkedin;

                        return (
                          <Motion.a
                            key={channel.type}
                            className="flex items-center justify-between rounded-[1.35rem] border border-white/10 bg-white/[0.03] px-4 py-4 transition hover:border-white/20"
                            href={channel.href}
                            rel="noreferrer"
                            target="_blank"
                            variants={staggerChild}
                            whileHover={{ y: -4, scale: 1.01 }}
                          >
                            <ProximityCard
                              className="w-full"
                              disabled={reduceMotion}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <span className="rounded-2xl border border-white/12 bg-white/[0.05] p-3 text-white">
                                    <Icon size={18} />
                                  </span>
                                  <div>
                                    <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                                      {readText(channel.label, language)}
                                    </p>
                                    <p className="mt-1 text-sm text-white">
                                      {channel.value}
                                    </p>
                                  </div>
                                </div>
                                <ExternalLink
                                  size={16}
                                  className="text-white/45"
                                />
                              </div>
                            </ProximityCard>
                          </Motion.a>
                        );
                      })}
                    </StaggerGroup>
                  </Panel>
                </RevealItem>
                <RevealItem>
                  <Panel className="p-6">
                    <PanelLabel>
                      {readText(siteContent.ui.quickMessage, language)}
                    </PanelLabel>
                    <h3 className="mt-4 font-display text-2xl font-bold text-white">
                      {readText(siteContent.ui.quickMessageTitle, language)}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-300">
                      {readText(
                        siteContent.ui.quickMessageDescription,
                        language,
                      )}
                    </p>
                    <StaggerGroup className="mt-6 grid gap-4" stagger={0.08}>
                      <form className="grid gap-4" onSubmit={handleSubmit}>
                        <label className="grid gap-2 text-sm text-zinc-300">
                          {readText(siteContent.ui.form.name, language)}
                          <input
                            className="rounded-2xl border border-white/10 bg-black/70 px-4 py-3.5 text-white outline-none transition focus:border-white/30"
                            name="name"
                            onChange={handleChange}
                            placeholder={readText(
                              siteContent.ui.form.namePlaceholder,
                              language,
                            )}
                            value={contactForm.name}
                          />
                        </label>
                        <label className="grid gap-2 text-sm text-zinc-300">
                          {readText(siteContent.ui.form.email, language)}
                          <input
                            className="rounded-2xl border border-white/10 bg-black/70 px-4 py-3.5 text-white outline-none transition focus:border-white/30"
                            name="email"
                            onChange={handleChange}
                            placeholder={readText(
                              siteContent.ui.form.emailPlaceholder,
                              language,
                            )}
                            type="email"
                            value={contactForm.email}
                          />
                        </label>
                        <label className="grid gap-2 text-sm text-zinc-300">
                          {readText(siteContent.ui.form.message, language)}
                          <textarea
                            className="min-h-32 rounded-2xl border border-white/10 bg-black/70 px-4 py-3.5 text-white outline-none transition focus:border-white/30"
                            name="message"
                            onChange={handleChange}
                            placeholder={readText(
                              siteContent.ui.form.messagePlaceholder,
                              language,
                            )}
                            value={contactForm.message}
                          />
                        </label>
                        {contactError ? (
                          <p className="text-sm text-white/70">
                            {contactError}
                          </p>
                        ) : null}
                        <button
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
                          type="submit"
                        >
                          {readText(siteContent.ui.form.submit, language)}
                          <ArrowRight size={16} />
                        </button>
                      </form>
                    </StaggerGroup>
                  </Panel>
                </RevealItem>
              </StaggerGroup>
            </StaggerGroup>
          </Panel>
        </RevealSection>

        <RevealSection className="mx-auto max-w-7xl px-5 pb-24 pt-14 md:px-8 md:pb-32 md:pt-20">
          <StaggerGroup className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <RevealItem
              className="flex gap-2 text-white/60"
              variants={staggerChild}
            >
              <CircleDot size={18} />
              <CircleDot size={18} />
              <CircleDot size={18} />
            </RevealItem>
            <RevealItem className="max-w-3xl" variants={staggerChild}>
              <PanelLabel>
                {readText(siteContent.closing.eyebrow, language)}
              </PanelLabel>
              <h2 className="mt-4 font-display text-5xl font-bold leading-[0.95] text-white md:text-7xl">
                {readText(siteContent.closing.title, language)}
              </h2>
              <p className="mt-4 text-sm uppercase tracking-[0.28em] text-white/45">
                {readText(siteContent.closing.meta, language)}
              </p>
            </RevealItem>
          </StaggerGroup>
        </RevealSection>
      </main>

      <Motion.footer
        className="relative border-t border-white/10 px-5 py-8 md:px-8"
        initial="hidden"
        variants={fadeInVariants}
        viewport={defaultViewport}
        whileInView="visible"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
          <p>
            {siteContent.profile.brandName} by{" "}
            {readText(siteContent.profile.personalName, language)} |{" "}
            {readText(siteContent.ui.footer.byline, language)}
          </p>
          <div className="flex items-center gap-4">
            <Motion.a
              className="transition hover:text-white"
              href="#top"
              whileHover={{ y: -2 }}
            >
              {readText(siteContent.ui.footer.backToTop, language)}
            </Motion.a>
            <Motion.a
              className="transition hover:text-white"
              href="#contact"
              whileHover={{ y: -2 }}
            >
              {readText(siteContent.ui.footer.resume, language)}
            </Motion.a>
          </div>
        </div>
      </Motion.footer>

      <Suspense fallback={null}>
        <ProjectModal
          language={language}
          project={selectedProject}
          translations={siteContent.ui.modal}
          onClose={() => setSelectedProject(null)}
        />
      </Suspense>
    </div>
  );
}

export default App;
