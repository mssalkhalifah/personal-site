"use client";

import { MDXRemoteProps, MDXRemote } from "next-mdx-remote";
import React from "react";

interface IMDXContent {
  source: MDXRemoteProps;
}

const MDXContent: React.FC<IMDXContent> = ({ source }) => {
  return <MDXRemote {...source} />;
};

export default MDXContent;
