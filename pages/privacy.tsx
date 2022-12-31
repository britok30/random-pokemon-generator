import type { NextPage } from "next";
import React from "react";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { Seo } from "../components/Seo";

const Privacy: NextPage = () => {
  const router = useRouter();
  return (
    <div className="flex min-h-screen text-white bg-black flex-col items-center justify-center py-2">
      <Seo />

      <main className="flex w-full flex-1 flex-col items-center justify-center p-10 text-center">
        <button
          onClick={() => router.push("/")}
          className="px-4 py-3 mb-3 rounded-md text-sm mt-3 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:scale-105 transition duration-300 ease-in-out"
        >
          Home
        </button>
        <header>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p>Last Updated: December 31, 2022</p>
        </header>
        <div className="flex flex-col text-sm space-y-4 text-left w-1/2 mt-3">
          <p>
            At Random Pok&eacute;mon Generator, we are committed to protecting
            the privacy of our users. This privacy policy outlines the
            information we collect and how it is used.
          </p>
          <h2 className="font-bold text-lg">Information We Collect</h2>
          <p>
            We do not collect any personal information from our users. We do not
            use cookies or similar technologies to collect or store information
            about your use of our site.
          </p>
          <h2 className="font-bold text-lg">Use of Information</h2>
          <p>
            We do not collect any personal information, therefore we do not use
            any information for any purpose.
          </p>
          <h2 className="font-bold text-lg">Advertising Privacy Policy</h2>
          <p>
            This Site is affiliated with Ezoic for the purposes of placing
            advertising on the Site, and Ezoic will collect and use certain data
            for advertising purposes. To learn more about Ezoic’s data usage,{" "}
            <a
              className="underline text-blue-500"
              href="https://www.ezoic.com/privacy-policy/"
            >
              click here
            </a>
            .
          </p>
          <p>
            A cookie is a file containing an identifier (a string of letters and
            numbers) that is sent by a web server to a web browser and is stored
            by the browser. The identifier is then sent back to the server each
            time the browser requests a page from the server. Cookies may be
            either “persistent” cookies or “session” cookies: a persistent
            cookie will be stored by a web browser and will remain valid until
            its set expiry date, unless deleted by the user before the expiry
            date; a session cookie, on the other hand, will expire at the end of
            the user session, when the web browser is closed. Cookies do not
            typically contain any information that personally identifies a user,
            but personal information that we store about you may be linked to
            the information stored in and obtained from cookies.
          </p>
          <p>
            By using this Site, you consent to the use of such cookies and the
            sharing of data captured by such cookies with Google, and our other
            third-party partners. You can view, delete or add interest
            categories associated with your browser by visiting:{" "}
            <a
              href="https://adssettings.google.com"
              className="underline text-blue-500"
            >
              https://adssettings.google.com
            </a>
            . You can also opt-out of the network cookie using those settings or
            using the Network Advertising Initiative’s multi-cookie opt-out
            mechanism at:{" "}
            <a
              href="http://optout.networkadvertising.org"
              className="underline text-blue-500"
            >
              http://optout.networkadvertising.org
            </a>
            . However, these opt-out mechanisms themselves use cookies, and if
            you clear the cookies from your browser your opt-out will not be
            maintained.
          </p>
          <h2 className="font-bold text-lg">Changes to This Privacy Policy</h2>
          <p>
            We may change this Privacy Policy from time to time. If we do, we
            will let you know by revising the date at the top of the policy. If
            we make a change to this policy that, in our sole discretion, is
            material, we will provide you with additional notice. We encourage
            you to review the Privacy Policy whenever you access or use our
            Services or otherwise interact with us to stay informed about our
            information practices and the ways you can help protect your
            privacy. If you continue to use our Services after Privacy Policy
            changes go into effect, you consent to the revised policy.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
