import type { IconType } from 'react-icons'
import {
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaEnvelope,
  FaGlobe,
  FaGoogle,
  FaHtml5,
  FaLock,
  FaMicrosoft,
  FaNetworkWired,
  FaPlug,
  FaReact,
  FaShieldAlt,
  FaUserLock,
} from 'react-icons/fa'
import {
  SiBootstrap,
  SiCloudinary,
  SiDocker,
  SiExpo,
  SiExpress,
  SiGit,
  SiGooglecloud,
  SiHandlebarsdotjs,
  SiJavascript,
  SiJitsi,
  SiJsonwebtokens,
  SiLinux,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNginx,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiReactrouter,
  SiRender,
  SiStripe,
  SiTailwindcss,
  SiVercel,
  SiVite,
} from 'react-icons/si'

type Rule = [RegExp, IconType, string]

// A ordem importa: regras mais específicas primeiro.
const rules: Rule[] = [
  [/react native/i, FaReact, '#2a9fd6'],
  [/expo/i, SiExpo, '#000020'],
  [/react (router|navigation)/i, SiReactrouter, '#ca4245'],
  [/react/i, SiReact, '#2a9fd6'],
  [/vite/i, SiVite, '#646cff'],
  [/javascript/i, SiJavascript, '#c9a800'],
  [/html/i, FaHtml5, '#e34f26'],
  [/css3/i, FaCss3Alt, '#1572b6'],
  [/bootstrap/i, SiBootstrap, '#7952b3'],
  [/tailwind|nativewind/i, SiTailwindcss, '#06b6d4'],
  [/node/i, SiNodedotjs, '#5fa04e'],
  [/express/i, SiExpress, '#1b1b1b'],
  [/mysql/i, SiMysql, '#4479a1'],
  [/mongo/i, SiMongodb, '#47a248'],
  [/handlebars/i, SiHandlebarsdotjs, '#f0772b'],
  [/nodemailer|e-mail/i, FaEnvelope, '#d6336c'],
  [/cloudinary/i, SiCloudinary, '#3448c5'],
  [/material ui|mui/i, SiMui, '#007fff'],
  [/autentica/i, FaUserLock, '#1d3557'],
  [/jwt/i, SiJsonwebtokens, '#b02ee0'],
  [/vercel/i, SiVercel, '#1b1b1b'],
  [/render/i, SiRender, '#1fae88'],
  [/jitsi/i, SiJitsi, '#6b6b72'],
  [/stripe/i, SiStripe, '#635bff'],
  [/python/i, SiPython, '#3776ab'],
  [/docker/i, SiDocker, '#2496ed'],
  [/nginx/i, SiNginx, '#009639'],
  [/linux/i, SiLinux, '#b58900'],
  [/git/i, SiGit, '#f05032'],
  [/azure|entra/i, FaMicrosoft, '#0078d4'],
  [/google cloud|gcp/i, SiGooglecloud, '#4285f4'],
  [/google/i, FaGoogle, '#4285f4'],
  [/ibge/i, FaGlobe, '#1d3557'],
  [/fortigate|firewall/i, FaShieldAlt, '#da291c'],
  [/tcp|vlan|rede/i, FaNetworkWired, '#1d3557'],
  [/zero trust|lgpd/i, FaLock, '#1d3557'],
  [/asyncstorage/i, FaDatabase, '#5a574d'],
  [/api|integra/i, FaPlug, '#1d3557'],
]

export function techMeta(name: string): { Icon: IconType; color: string } {
  for (const [re, Icon, color] of rules) if (re.test(name)) return { Icon, color }
  return { Icon: FaCode, color: '#5a574d' }
}

/** Só o logo, para linhas compactas. */
export function TechLogo({ name, size = 22 }: { name: string; size?: number }) {
  const { Icon, color } = techMeta(name)
  return (
    <span title={name} className="inline-flex" style={{ color }}>
      <Icon size={size} aria-label={name} />
    </span>
  )
}

/** Etiqueta com logo + nome. */
export function Tech({ name }: { name: string }) {
  const { Icon, color } = techMeta(name)
  return (
    <span className="tag">
      <Icon size={14} style={{ color }} aria-hidden />
      {name}
    </span>
  )
}
