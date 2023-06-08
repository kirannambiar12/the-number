import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  data: {
    title: string;
    description: string;
  };
};

const SeoHead = (props: any) => {
  const { asPath } = useRouter();
  const url =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  return (
    <Head>
      <link rel="canonical" href={`${url}${asPath}`} />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon-precomposed" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Lookup and rate mobile numbers to protect yourself from scams. Search, rate, and comment on phone numbers to identify potential scammers and get detailed information about them at The Number"
      />
      <meta
        name="keywords"
        content="mobile number lookup, scammer lookup, phone number lookup, phone number rating, phone number comments, scam identification, phone number details, protect from scams, whatsapp scam, facebook scam, call scam"
      />
      <meta name="author" content="Kiran Nambiar" />
      <title>The Number - Mobile Number Lookup and Scam Identification</title>
      <meta
        property="og:title"
        key="og:title"
        content="The Number - Mobile Number Lookup and Scam Identification"
      />
      <meta
        property="og:description"
        key="og:description"
        content="Lookup and rate mobile numbers to protect yourself from scams. Search, rate, and comment on phone numbers to identify potential scammers and get detailed information about them at TheNumber.in."
      />
      <meta property="og:url" content="https://www.thenumber.in/" />
      <meta property="og:site_name" content="The Number" />
      <meta property="og:image" content="/logo.png" />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default SeoHead;
