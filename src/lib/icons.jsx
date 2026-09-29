import {
  FiActivity,
  FiBriefcase,
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiFacebook,
  FiGithub,
  FiLayout,
  FiLinkedin,
  FiMail,
  FiServer,
  FiShield,
  FiSmartphone,
  FiTool,
  FiUsers,
  FiZap,
} from 'react-icons/fi'

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  facebook: FiFacebook,
  mail: FiMail,
  code: FiCode,
  users: FiUsers,
  bulb: FiZap,
  rocket: FiActivity,
  server: FiServer,
  layout: FiLayout,
  mobile: FiSmartphone,
  cloud: FiCloud,
  brain: FiCpu,
  bug: FiShield,
  database: FiDatabase,
  tool: FiTool,
  briefcase: FiBriefcase,
}

export function Icon({ name, ...props }) {
  const Component = iconMap[name] ?? FiCode
  return <Component {...props} />
}
