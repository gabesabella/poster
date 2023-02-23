import { FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiRailway,
} from "react-icons/si";
import { RxVercelLogo } from "react-icons/rx";
import { TbBrandNextjs } from "react-icons/tb";

export default function Icons() {
  return (
    <div className="absolute top-4 flex space-x-5 text-2xl">
      <a href="https://nextjs.org/">
        <TbBrandNextjs />
      </a>
      <a href="https://reactjs.org/">
        <FaReact />
      </a>
      <a href="https://tailwindcss.com/">
        <SiTailwindcss />
      </a>
      <a href="https://vercel.com/">
        <RxVercelLogo />
      </a>
      <a href="https://www.postgresql.org/">
        <SiPostgresql />
      </a>
      <a href="https://www.typescriptlang.org/">
        <SiTypescript />
      </a>
      <a href="https://www.prisma.io/">
        <SiPrisma />
      </a>
      <a href="https://railway.app/">
        <SiRailway />
      </a>
    </div>
  );
}
