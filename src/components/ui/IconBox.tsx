import type { IconType } from "react-icons";
import { FaBrain, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  FiArrowUpRight,
  FiAward,
  FiBarChart2,
  FiBookOpen,
  FiBriefcase,
  FiCalendar,
  FiCloud,
  FiCode,
  FiDatabase,
  FiDownload,
  FiExternalLink,
  FiFolder,
  FiLayers,
  FiMail,
  FiMapPin,
  FiMonitor,
  FiPieChart,
  FiSend,
  FiServer,
  FiTarget,
  FiTool,
  FiUser,
} from "react-icons/fi";
import { LuGraduationCap, LuRocket } from "react-icons/lu";
import { PiCertificate } from "react-icons/pi";
import { SiDocker, SiFastapi, SiPostgresql, SiPython, SiReact } from "react-icons/si";
import { TbCloudCog, TbNetwork, TbPuzzle } from "react-icons/tb";

export const iconMap = {
  code: FiCode,
  monitor: FiMonitor,
  server: FiServer,
  chart: FiBarChart2,
  pie: FiPieChart,
  brain: FaBrain,
  neural: TbNetwork,
  tool: FiTool,
  database: FiDatabase,
  layers: FiLayers,
  puzzle: TbPuzzle,
  cloud: TbCloudCog,
  cloudPlain: FiCloud,
  mail: FiMail,
  linkedin: FaLinkedin,
  github: FaGithub,
  location: FiMapPin,
  calendar: FiCalendar,
  folder: FiFolder,
  external: FiExternalLink,
  arrowUpRight: FiArrowUpRight,
  download: FiDownload,
  user: FiUser,
  send: FiSend,
  book: FiBookOpen,
  briefcase: FiBriefcase,
  target: FiTarget,
  rocket: LuRocket,
  graduation: LuGraduationCap,
  award: FiAward,
  certificate: PiCertificate,
  react: SiReact,
  python: SiPython,
  fastapi: SiFastapi,
  postgresql: SiPostgresql,
  docker: SiDocker,
} satisfies Record<string, IconType>;

export type IconName = keyof typeof iconMap;

type IconBoxProps = {
  icon: IconName;
  className?: string;
  iconClassName?: string;
};

/** Rounded tile holding an icon. Pass `className` to change size or colours. */
export default function IconBox({
  icon,
  className = "",
  iconClassName = "",
}: IconBoxProps) {
  const Icon = iconMap[icon];

  return (
    <span
      aria-hidden="true"
      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-burgundy-soft text-burgundy ${className}`}
    >
      <Icon className={`text-xl ${iconClassName}`} />
    </span>
  );
}

/** Bare icon (no tile) for inline use. */
export function Icon({ icon, className = "" }: { icon: IconName; className?: string }) {
  const Component = iconMap[icon];
  return <Component aria-hidden="true" className={className} />;
}
