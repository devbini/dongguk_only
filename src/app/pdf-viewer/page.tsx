"use client";

import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import Link from "next/link";
import styles from "./page.module.css";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PdfViewer: React.FC = () => {
  const pdfFile = "/docs/rulebook.pdf";

  const defaultLayout = defaultLayoutPlugin({
    sidebarTabs: () => [], // 좌측 열 가리기
  });

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Link href="/" className={styles.button}>
        돌아가기
      </Link>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer fileUrl={pdfFile} plugins={[defaultLayout]} />
      </Worker>
    </div>
  );
};

export default PdfViewer;
