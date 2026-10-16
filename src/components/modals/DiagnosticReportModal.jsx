import React, { useState } from 'react';
import { SAMPLE_DIAGNOSTIC_REPORT } from '../../data/mockData';
import { 
  X, 
  Search, 
  FileText, 
  Download, 
  CheckCircle2, 
  AlertTriangle, 
  QrCode, 
  MessageSquare,
  ShieldCheck,
  Check
} from 'lucide-react';

export default function DiagnosticReportModal({
  isOpen,
  onClose,
  lang,
}) {
  const [patientId, setPatientId] = useState('PHC-882194');
  const [phone, setPhone] = useState('01711223344');
  const [isSearched, setIsSearched] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSearched(true);
    }, 600);
  };

  const handleDownloadPdf = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const report = SAMPLE_DIAGNOSTIC_REPORT;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95">
        <div className="bg-[#0B1E33] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">
                {lang === 'bn' ? 'অনলাইন ডায়াগনস্টিক রিপোর্ট পোর্টাল' : 'Online Diagnostic Report Portal'}
              </h2>
              <p className="text-xs text-slate-300">
                {lang === 'bn' ? 'পেশেন্ট আইডি বা মোবাইল নম্বর দিয়ে রিপোর্ট ডাউনলোড ও যাচাই' : 'Enter Patient ID or Mobile to view and download verified lab reports'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200">
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
            <div className="sm:col-span-5">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {lang === 'bn' ? 'পেশেন্ট আইডি (Patient ID)' : 'Patient ID / Invoice #'}
              </label>
              <input
                type="text"
                value={patientId}
                onChange={(e) => setPatientId(e.target.value)}
                placeholder="e.g. PHC-882194"
                className="w-full px-3.5 py-2 text-xs font-semibold bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009688]"
                required
              />
            </div>

            <div className="sm:col-span-4">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {lang === 'bn' ? 'রেজিস্টার্ড মোবাইল নম্বর' : 'Registered Mobile Number'}
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="017XXXXXXXX"
                className="w-full px-3.5 py-2 text-xs font-semibold bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009688]"
                required
              />
            </div>

            <div className="sm:col-span-3">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 text-xs font-bold text-white bg-[#009688] hover:bg-[#00897b] rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Search className="w-4 h-4" />
                <span>{isLoading ? (lang === 'bn' ? 'খোঁজা হচ্ছে...' : 'Searching...') : (lang === 'bn' ? 'রিপোর্ট খুঁজুন' : 'Search Report')}</span>
              </button>
            </div>
          </form>
          <div className="flex items-center gap-2 mt-2 text-[11px] text-slate-500">
            <span>💡 {lang === 'bn' ? 'ডেমো দেখতে উপরের আইডি ব্যবহার করুন (PHC-882194)' : 'Use demo ID: PHC-882194 to test verified report verification'}</span>
          </div>
        </div>

        {isSearched && (
          <div className="p-5 sm:p-6 max-h-[60vh] overflow-y-auto space-y-6">
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-[#009688]">{report.reportId}</span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>{lang === 'bn' ? 'সত্যায়িত ও প্রস্তুত' : 'Digitally Verified'}</span>
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-[#0B1E33]">
                    {report.patientName}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {report.ageGender} · {lang === 'bn' ? 'রেফারেন্স:' : 'Ref by:'} {report.referredBy}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-slate-100 rounded-lg border border-slate-200 p-1 flex items-center justify-center">
                    <QrCode className="w-12 h-12 text-slate-800" />
                  </div>
                  <div className="text-xs text-slate-500">
                    <p className="font-semibold text-slate-800">{lang === 'bn' ? 'ডেলিভারি সময়' : 'Report Time'}</p>
                    <p>{report.deliveryDate}</p>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {lang === 'bn' ? 'পরীক্ষার নাম' : 'Investigative Panel'}
                </span>
                <p className="text-sm font-bold text-slate-900">
                  {report.testName}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="px-5 py-3 bg-slate-100/70 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700">
                <span>{lang === 'bn' ? 'প্যারামিটার (Test Parameter)' : 'Test Parameter'}</span>
                <div className="flex items-center gap-8">
                  <span>{lang === 'bn' ? 'ফলাফল (Result)' : 'Result'}</span>
                  <span className="hidden sm:inline">{lang === 'bn' ? 'স্বাভাবিক মাত্রা (Reference)' : 'Reference Range'}</span>
                </div>
              </div>

              <div className="divide-y divide-slate-100 text-xs">
                {report.parameters.map((param, i) => (
                  <div 
                    key={i} 
                    className={`px-5 py-3 flex items-center justify-between transition-colors ${
                      param.isAbnormal ? 'bg-amber-50/50' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="max-w-[200px] sm:max-w-xs">
                      <span className="font-bold text-slate-900 block">{param.name}</span>
                      <span className="text-[11px] text-slate-500 sm:hidden">
                        Ref: {param.referenceRange}
                      </span>
                    </div>

                    <div className="flex items-center gap-6 text-right">
                      <div className="font-mono">
                        <span className={`text-sm font-extrabold ${param.isAbnormal ? 'text-amber-700' : 'text-slate-900'}`}>
                          {param.value}
                        </span>
                        <span className="text-[11px] text-slate-500 ml-1">{param.unit}</span>
                        {param.isAbnormal && (
                          <span className="ml-2 inline-flex items-center gap-0.5 text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                            <AlertTriangle className="w-2.5 h-2.5 text-amber-600" />
                            <span>High / Review</span>
                          </span>
                        )}
                      </div>

                      <span className="hidden sm:inline font-mono text-slate-500 text-[11px] w-40 text-right">
                        {param.referenceRange}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-teal-50/80 rounded-xl p-4 border border-teal-200">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#009688] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1">
                    {lang === 'bn' ? 'প্রধান প্যাথলজিস্টের মতামত (Pathologist Note)' : 'Chief Pathologist Observations'}
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {report.pathologistNote}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-[11px] text-slate-500 font-semibold">
                    <span>Prof. Dr. M. A. Kashem, FCPS (Pathology)</span>
                    <span>·</span>
                    <span className="text-[#009688]">Lab Director, Pinnacle Healthcare</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="p-4 sm:p-5 bg-slate-100 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>ISO 15189 Certified Diagnostic Laboratory Standards</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://api.whatsapp.com/send?text=My%20Pinnacle%20Healthcare%20Report%20ID:%20PHC-882194"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-emerald-700 bg-white border border-slate-300 hover:border-emerald-300 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে পাঠান' : 'Share via WhatsApp'}</span>
            </a>

            <button
              onClick={handleDownloadPdf}
              className="px-4 py-2 text-xs font-bold text-white bg-[#009688] hover:bg-[#00897b] rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>{lang === 'bn' ? 'ডাউনলোড সফল!' : 'Downloaded!'}</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-white" />
                  <span>{lang === 'bn' ? 'অফিসিয়াল PDF ডাউনলোড' : 'Download Verified PDF'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
