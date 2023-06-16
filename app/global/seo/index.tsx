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
        content={
          props?.description ??
          "Protect yourself from phone scams. Search, rate, & comment on numbers at The Number."
        }
      />
      <meta
        name="keywords"
        content={`${
          props?.keywords ? props?.keywords : ""
        } mobile number lookup, scammer lookup, phone number lookup, phone number rating, phone number comments, scam identification, phone number details, protect from scams, whatsapp scam, facebook scam, call scam`}
      />
      <meta name="author" content="Kiran Nambiar" />
      <title>
        {props?.title ??
          "The Number - Mobile Number Lookup and Scam Identification"}
      </title>
      <meta
        property="og:title"
        key="og:title"
        content={
          props?.title ??
          "The Number - Mobile Number Lookup and Scam Identification"
        }
      />
      <meta
        property="og:description"
        key="og:description"
        content={
          props?.description ??
          "Protect yourself from phone scams. Search, rate, & comment on numbers at The Number."
        }
      />
      <meta property="og:url" content={`${url}${asPath}`} />
      <meta property="og:site_name" content="The Number" />
      <meta property="og:image" content="/logo.png" />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default SeoHead;
