
import React, { useState } from 'react';
import { Code, Download, Check, Loader, AlertTriangle } from 'lucide-react';
import { generateThemeZip } from '../../services/shopifyExportService';

export const ShopifyExporter: React.FC = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleExport = async () => {
    try {
      setIsExporting(true);
      setError(null);
      const blob = await generateThemeZip();
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'rich-habits-theme-v3.zip';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Export failed:", error);
      setError("Failed to generate theme zip. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-8 z-40 group flex flex-col items-end gap-2">
      {error && (
         <div className="bg-red-500 text-white px-4 py-2 rounded-md text-xs font-bold mb-2 flex items-center gap-2">
           <AlertTriangle className="w-4 h-4" /> {error}
         </div>
      )}
      <button 
        onClick={handleExport}
        disabled={isExporting}
        className={`
          flex items-center justify-center gap-2 
          bg-white text-brand-black border border-brand-charcoal
          shadow-2xl rounded-full p-4
          hover:bg-neutral-200 transition-all duration-300
          ${isExporting ? 'opacity-75 cursor-wait' : ''}
        `}
        title="Export Shopify Theme (OS 2.0)"
      >
        {isExporting ? (
          <Loader className="w-6 h-6 animate-spin" />
        ) : isSuccess ? (
          <Check className="w-6 h-6 text-green-600" />
        ) : (
          <Code className="w-6 h-6" />
        )}
        <span className="font-bold text-xs uppercase hidden group-hover:block">
          {isSuccess ? 'Theme Exported' : 'Download Theme'}
        </span>
      </button>
    </div>
  );
};
