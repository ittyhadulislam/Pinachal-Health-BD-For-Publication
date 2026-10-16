import React, { useState } from 'react';
import { DOCTORS_DATA } from '../../data/mockData';
import { 
  X, 
  Sparkles, 
  AlertTriangle, 
  Stethoscope, 
  CheckCircle2, 
  ShieldAlert, 
  Calendar, 
  Send
} from 'lucide-react';

export default function AiSymptomModal({
  isOpen,
  onClose,
  lang,
  onSelectDoctor,
}) {
  const [inputSymptom, setInputSymptom] = useState('');
  const [matchResult, setMatchResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  if (!isOpen) return null;

  const sampleSymptoms = [
    { text: 'দাঁত শিরশির করছে ও মাড়ির তীব্র ব্যথা', labelBn: 'দাঁতে ব্যথা / মাড়ি ফোলা', labelEn: 'Toothache & Gum Bleeding' },
    { text: 'ঘন ঘন প্রস্রাব, অতিরিক্ত পিপাসা ও দুর্বলতা', labelBn: 'ডায়াবেটিস / দুর্বলতা', labelEn: 'Excessive Thirst & Fatigue' },
    { text: 'হাঁটুর তীব্র বাত-ব্যথা ও উঠতে-বসতে কষ্ট', labelBn: 'হাঁটু ও কোমরের ব্যথা', labelEn: 'Knee & Joint Pain' },
    { text: 'ত্বকে চুলকানি, লালচে দাগ ও এলার্জি', labelBn: 'চর্মরোগ ও এলার্জি', labelEn: 'Skin Rash & Itching' },
    { text: 'বুকে তীব্র চাপ, শ্বাসকষ্ট ও ঘাম হচ্ছে', labelBn: 'বুকে ব্যথা / শ্বাসকষ্ট (জরুরি)', labelEn: 'Severe Chest Pressure & Breathing' },
  ];

  const handleAnalyze = (symptomText) => {
    if (!symptomText.trim()) return;
    setIsAnalyzing(true);

    setTimeout(() => {
      const lower = symptomText.toLowerCase();
      let result;

      if (lower.includes('শ্বাসকষ্ট') || lower.includes('বুকে তীব্র চাপ') || lower.includes('chest pressure') || lower.includes('breathing') || lower.includes('convulsion') || lower.includes('unconscious')) {
        result = {
          departmentId: 'medicine',
          departmentName: 'Emergency & Internal Medicine',
          departmentNameBn: 'জরুরি বিভাগ ও ইন্টারনাল মেডিসিন',
          urgency: 'emergency',
          reason: 'Severe chest tightness or breathing distress requires immediate clinical assessment. Please visit our 24/7 Emergency Room or call 10620.',
          reasonBn: 'বুকে চাপ বা শ্বাসকষ্টের মতো লক্ষণ তাৎক্ষণিক জরুরি চিকিৎসার দাবি রাখে। অনুগ্রহ করে দ্রুত আমাদের ২৪/৭ জরুরি বিভাগে আসুন অথবা ১০৬২০ হটলাইনে কল করুন।',
          suggestedDoctorId: 'doc-1',
          recommendedTests: ['12-Lead Emergency ECG', 'Cardiac Troponin-I', 'Digital Chest X-ray'],
          recommendedTestsBn: ['জরুরি ১২-লিড ইসিজি', 'কার্ডিয়াক ট্রোপোনিন-আই', 'ডিজিটাল চেস্ট এক্স-রে'],
        };
      } else if (lower.includes('দাঁত') || lower.includes('মাড়ি') || lower.includes('tooth') || lower.includes('teeth') || lower.includes('gum') || lower.includes('dental') || lower.includes('শিরশির')) {
        result = {
          departmentId: 'dental',
          departmentName: 'Pinnacle Dental Specialty',
          departmentNameBn: 'পিনাকল ডেন্টাল কেয়ার',
          urgency: 'priority',
          reason: 'Symptoms indicate potential pulpal inflammation, tooth decay, or periodontal infection. An intraoral digital scan and rotary RCT or restoration is recommended.',
          reasonBn: 'আপনার লক্ষণ অনুযায়ী দাঁতের রুট ক্যানাল ইনফেকশন বা মাড়ির প্রদাহ হতে পারে। ডিজিটাল ওপিজি ও বিশেষজ্ঞ ডেন্টাল সার্জনের পরামর্শ নেওয়া প্রয়োজন।',
          suggestedDoctorId: 'doc-2',
          recommendedTests: ['Digital OPG Panoramic X-ray', 'Intraoral Camera Examination', 'Pulp Vitality Test'],
          recommendedTestsBn: ['ডিজিটাল প্যানোরামিক ওপিজি এক্স-রে', 'এইচডি ইন্ট্রাওরাল ক্যামেরা স্ক্রিনিং', 'পাল্প ভাইটালিটি টেস্ট'],
        };
      } else if (lower.includes('প্রস্রাব') || lower.includes('ডায়াবেটিস') || lower.includes('সুগার') || lower.includes('thirst') || lower.includes('sugar') || lower.includes('diabet') || lower.includes('fatigue') || lower.includes('জ্বর') || lower.includes('fever')) {
        result = {
          departmentId: 'medicine',
          departmentName: 'Internal Medicine & Diabetology',
          departmentNameBn: 'ইন্টারনাল মেডিসিন ও ডায়াবেটোলজি',
          urgency: 'priority',
          reason: 'Frequent urination, thirst, and fatigue are hallmark signs of dysglycemia. Prompt HbA1c and metabolic profiling can prevent chronic organ damage.',
          reasonBn: 'ঘন ঘন পিপাসা ও দুর্বলতা ডায়াবেটিস বা মেটাবলিক সমস্যার প্রাথমিক লক্ষণ। রক্তে শর্করার মাত্রা ও কিডনি পরীক্ষা করানো জরুরি।',
          suggestedDoctorId: 'doc-1',
          recommendedTests: ['Fasting Blood Sugar & HbA1c', 'Lipid Profile', 'Serum Creatinine'],
          recommendedTestsBn: ['ফাস্টিং ব্লাড সুগার ও HbA1c', 'লিপিড প্রোফাইল', 'সিরাম ক্রিয়েটিনিন'],
        };
      } else if (lower.includes('হাঁটু') || lower.includes('কোমর') || lower.includes('knee') || lower.includes('joint') || lower.includes('pain') || lower.includes('বাত') || lower.includes('back') || lower.includes('spine')) {
        result = {
          departmentId: 'physio',
          departmentName: 'Physiotherapy & Musculoskeletal Rehab',
          departmentNameBn: 'ফিজিওথেরাপি ও রিহ্যাবিলিটেশন সেন্টার',
          urgency: 'routine',
          reason: 'Joint stiffness and postural ache benefit greatly from computerized traction, therapeutic ultrasound, and targeted manual manipulation.',
          reasonBn: 'হাঁটু বা কোমরের ব্যথায় ব্যথানাশক ওষুধের অতিরিক্ত ব্যবহার না করে আধুনিক ইলেক্ট্রোথেরাপি ও ট্র্যাকশন ফিজিওথেরাপি নেওয়া সবচেয়ে নিরাপদ।',
          suggestedDoctorId: 'doc-5',
          recommendedTests: ['Digital Joint X-ray', 'Serum Uric Acid & Calcium', 'Postural Range of Motion Scan'],
          recommendedTestsBn: ['ডিজিটাল জয়েন্ট এক্স-রে', 'সিরাম ইউরিক এসিড ও ক্যালসিয়াম', 'জয়েন্ট মোশন স্ক্যান'],
        };
      } else if (lower.includes('ত্বক') || lower.includes('চুলকানি') || lower.includes('এলার্জি') || lower.includes('skin') || lower.includes('rash') || lower.includes('itch') || lower.includes('eczema')) {
        result = {
          departmentId: 'skin',
          departmentName: 'Dermatology & Skin Allergy',
          departmentNameBn: 'চর্ম, যৌন ও এলার্জি রোগ বিভাগ',
          urgency: 'routine',
          reason: 'Cutaneous irritation or chronic eczema requires specialized dermoscopic examination and barrier repair management.',
          reasonBn: 'চুলকানি ও ফুসকুড়ি দীর্ঘস্থায়ী হওয়ার আগেই চর্মরোগ বিশেষজ্ঞের পরামর্শ ও স্কিন স্ক্রিনিং প্রয়োজন।',
          suggestedDoctorId: 'doc-4',
          recommendedTests: ['Serum IgE (Total Allergy Count)', 'Complete Blood Count (CBC with ESR)'],
          recommendedTestsBn: ['সিরাম আইজিই (এলার্জি মাত্রা)', 'সিবিসি উইথ ইএসআর'],
        };
      } else {
        result = {
          departmentId: 'medicine',
          departmentName: 'General & Internal Medicine',
          departmentNameBn: 'জেনারেল ও ইন্টারনাল মেডিসিন',
          urgency: 'routine',
          reason: 'Based on your described health symptoms, consultation with a senior Internal Medicine consultant will provide comprehensive systemic diagnosis.',
          reasonBn: 'আপনার বর্ণিত লক্ষণের ভিত্তিতে একজন অভিজ্ঞ মেডিসিন বিশেষজ্ঞের পরামর্শ নেওয়া সবচেয়ে উপযুক্ত হবে।',
          suggestedDoctorId: 'doc-1',
          recommendedTests: ['Comprehensive Metabolic Profile', 'Complete Blood Count'],
          recommendedTestsBn: ['কম্প্রিহেনসিভ মেটাবলিক প্রোফাইল', 'সিবিসি রক্ত পরীক্ষা'],
        };
      }

      setMatchResult(result);
      setIsAnalyzing(false);
    }, 500);
  };

  const suggestedDoctor = matchResult 
    ? DOCTORS_DATA.find((d) => d.id === matchResult.suggestedDoctorId) || DOCTORS_DATA[0]
    : null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95">
        <div className="bg-[#0B1E33] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-teal-300" />
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-tight">
                {lang === 'bn' ? 'এআই হেলথ অ্যাসিস্ট্যান্ট ও ডক্টর ম্যাচিং' : 'AI Symptom Guidance & Doctor Matching'}
              </h2>
              <p className="text-xs text-slate-300">
                {lang === 'bn' 
                  ? 'আপনার উপসর্গ লিখুন—সঠিক ডিপার্টমেন্ট ও বিশেষজ্ঞ ডাক্তার খুঁজে নিন' 
                  : 'Describe how you feel to find the most appropriate medical department'}
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

        <div className="p-5 sm:p-6 space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              {lang === 'bn' ? 'আপনার শারীরিক সমস্যা বা লক্ষণগুলো লিখুন:' : 'Describe your symptoms or discomfort:'}
            </label>
            <div className="relative">
              <textarea
                value={inputSymptom}
                onChange={(e) => setInputSymptom(e.target.value)}
                placeholder={lang === 'bn' ? 'উদাহরণ: ৩ দিন ধরে দাঁতে তীব্র ব্যথা ও মাড়ি ফুলে গেছে...' : 'e.g. Sharp pain in lower back, difficulty standing straight...'}
                className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#009688] min-h-[90px] resize-none"
              />
              <button
                onClick={() => handleAnalyze(inputSymptom)}
                disabled={isAnalyzing || !inputSymptom.trim()}
                className="absolute right-3 bottom-3 px-4 py-1.5 text-xs font-bold text-white bg-[#009688] hover:bg-[#00897b] disabled:opacity-50 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
              >
                <span>{isAnalyzing ? (lang === 'bn' ? 'বিশ্লেষণ হচ্ছে...' : 'Analyzing...') : (lang === 'bn' ? 'ডাক্তার ম্যাচ করুন' : 'Match Specialist')}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div>
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
              {lang === 'bn' ? 'অথবা দ্রুত পরীক্ষা করতে ক্লিক করুন:' : 'Or tap a common health symptom:'}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {sampleSymptoms.map((sample, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setInputSymptom(sample.text);
                    handleAnalyze(sample.text);
                  }}
                  className="px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-teal-50 hover:text-[#009688] text-slate-700 rounded-lg border border-slate-200 transition-colors text-left cursor-pointer"
                >
                  {lang === 'bn' ? sample.labelBn : sample.labelEn}
                </button>
              ))}
            </div>
          </div>

          {matchResult && suggestedDoctor && (
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/90 shadow-xs space-y-4 animate-in fade-in">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {lang === 'bn' ? 'সুপারিশকৃত বিভাগ' : 'Recommended Department'}
                </span>

                {matchResult.urgency === 'emergency' ? (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-100 px-2.5 py-0.5 rounded-full border border-rose-200">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>{lang === 'bn' ? 'জরুরি চিকিৎসা প্রয়োজন (Immediate ER)' : 'Immediate ER Attention'}</span>
                  </span>
                ) : matchResult.urgency === 'priority' ? (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{lang === 'bn' ? 'অগ্রাধিকার ভিত্তিতে পরামর্শ' : 'Priority Consultation'}</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{lang === 'bn' ? 'নিয়মিত চেম্বার পরামর্শ' : 'Routine Consultation'}</span>
                  </span>
                )}
              </div>

              <h3 className="text-lg font-extrabold text-[#009688]">
                {lang === 'bn' ? matchResult.departmentNameBn : matchResult.departmentName}
              </h3>

              <p className="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-lg border border-slate-200">
                {lang === 'bn' ? matchResult.reasonBn : matchResult.reason}
              </p>

              <div className="bg-white rounded-xl p-4 border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-[#009688] shrink-0 font-bold">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1E33]">
                      {lang === 'bn' ? suggestedDoctor.nameBn : suggestedDoctor.name}
                    </h4>
                    <p className="text-xs font-semibold text-[#009688]">
                      {lang === 'bn' ? suggestedDoctor.specialtyBn : suggestedDoctor.specialty}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {lang === 'bn' ? suggestedDoctor.chamberDaysBn : suggestedDoctor.chamberDays} · {suggestedDoctor.roomNumber}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onSelectDoctor(suggestedDoctor);
                  }}
                  className="px-4 py-2.5 text-xs font-bold text-white bg-[#009688] hover:bg-[#00897b] rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 shrink-0 shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'এই ডাক্তারের সিরিয়াল নিন' : 'Book with Doctor'}</span>
                </button>
              </div>

              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                  {lang === 'bn' ? 'প্রয়োজনীয় প্রাথমিক টেস্টসমূহ:' : 'Recommended Diagnostic Tests:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(lang === 'bn' ? matchResult.recommendedTestsBn : matchResult.recommendedTests).map((test, i) => (
                    <span key={i} className="text-xs font-semibold text-slate-700 bg-white px-2.5 py-1 rounded border border-slate-200">
                      🧪 {test}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="p-3 bg-slate-100 rounded-xl text-[11px] text-slate-500 leading-relaxed border border-slate-200 flex items-start gap-2">
            <span className="text-slate-400 shrink-0 font-bold">⚠️</span>
            <span>
              {lang === 'bn'
                ? 'সতর্কতা: এই এআই সহায়ক কেবল সঠিক বিশেষজ্ঞ ডাক্তার নির্বাচনের নির্দেশিকা প্রদান করে। এটি কোনো চূড়ান্ত রোগ নির্ণয় বা ঔষধের প্রেসক্রিপশন নয়।'
                : 'Medical Disclaimer: This AI tool provides department matching and triage guidance only. It does not provide medical diagnoses or prescriptions.'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
