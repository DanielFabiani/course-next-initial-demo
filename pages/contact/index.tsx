import styles from "@/styles/Home.module.css";
import Link from "next/link";

import { MainLayout } from "@/components/layouts/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>

      <div className={"description"}>
        <h2>
          Ir a <Link href="/">Home Page</Link>
        </h2>
        <p>
          Get started by editing&nbsp;
          <code className={"code"}>pages/contact.tsx</code>
        </p>
      </div>
    </MainLayout>
  );
}
