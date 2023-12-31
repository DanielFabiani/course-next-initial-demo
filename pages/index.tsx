import { MainLayout } from "../components/layouts/MainLayout";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home Page</h1>

      <div className={"description"}>
        <h2>
          Ir a <Link href="/">Home Page</Link>
        </h2>
        <p>
          Get started by editing&nbsp;
          <code className={"code"}>pages/home.tsx</code>
        </p>
      </div>
    </MainLayout>
  );
}
