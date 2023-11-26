import Link from "next/link";

import { MainLayout } from "@/components/layouts/MainLayout";
import { LightLayout } from "../components/layouts/LightLayout";

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <div className={"description"}>
        <h2>
          Ir a <Link href="/">Home Page</Link>
        </h2>
        <p>
          Get started by editing&nbsp;
          <code className={"code"}>pages/about.tsx</code>
        </p>
      </div>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <LightLayout>{page}</LightLayout>
    </MainLayout>
  );
};
