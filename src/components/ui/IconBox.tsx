import type { IconType } from "react-icons";
import {
  FiBarChart2,
  FiBookOpen,
  FiBriefcase,
  FiCalendar,
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
  FiTool,
  FiUser,
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaBrain } from "react-icons/fa";
import { TbNetwork, TbPuzzle, TbCloudCog } from "react-icons/tb";
import { FiAward } from "react-icons/fi";
import { PiCertificate } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";

type IconBoxProps = {
  icon: string;
  className?: string;
  iconClassName?: string;
};

const iconMap: Record<string, IconType> = {
  code: FiCode,
  monitor: FiMonitor,
  server: FiServer,
  chart: FiBarChart2,
  brain: FaBrain,
  tools: FiTool,
  neural: TbNetwork,
  database: FiDatabase,
  layers: FiLayers,
  puzzle: TbPuzzle,
  "bar-chart": FiBarChart2,
  wrench: FiTool,
  cloud: TbCloudCog,
  mail: FiMail,
  linkedin: FaLinkedin,
  github: FaGithub,
  location: FiMapPin,
  calendar: FiCalendar,
  folder: FiFolder,
  external: FiExternalLink,
  download: FiDownload,
  user: FiUser,
  send: FiSend,
  book: FiBookOpen,
  briefcase: FiBriefcase,
  pie: FiPieChart,

    graduation: LuGraduationCap,
  award: FiAward,
  certificate: PiCertificate,
};

export default function IconBox({
  icon,
  className = "",
  iconClassName = "",
}: IconBoxProps) {
  const Icon = iconMap[icon] || FiCode;

  return (
    <div
      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#24304A] bg-[#111827]/80 text-[#22D3EE] ${className}`}
    >
      <Icon className={`text-2xl ${iconClassName}`} />
    </div>
  );
}