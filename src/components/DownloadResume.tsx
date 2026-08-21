import React from "react";
import { Download } from "lucide-react";
import { actionButtons } from "@/data/content";

const DownloadResume: React.FC = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/RubenFloresRuvalcaba_SeniorFrontendEngineer_2026.pdf";
    link.download = "Ruben-Flores-Ruvalcaba-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      type="button"
      onClick={downloadResume}
      className="inline-flex items-center gap-2 rounded-full border border-border cursor-pointer bg-card/80 px-4 py-2 text-xs backdrop-blur transition-colors hover:bg-secondary"
      data-umami-event="Resume download"
    >
      <Download className="size-4" />
      {actionButtons.resume}
    </button>
  );
};

export default DownloadResume;
