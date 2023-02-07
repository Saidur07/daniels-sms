import Head from "next/head";
import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";
import DashboardLayout from "../dashboard/layout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Danniel SMS</title>
      </Head>
      {!router.pathname.includes("/auth") ? (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
