import React, { useState, useEffect } from 'react';
import { DOCTORS_DATA } from '../../data/mockData';
import { 
  X, 
  Check, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  Printer, 
  MessageSquare
} from 'lucide-react';

export default function AppointmentModal({
  isOpen,
  onClose,
  lang,
  preselectedDoctor,
  preselectedPackage,
}) {
  const [step, setStep] = useState(1);
  const [selectedDoctorId, setSelectedDoctorId] = useState(
    preselectedDoctor ? preselectedDoctor.id : DOCTORS_DATA[0].id
  );
  const [appointmentDate, setAppointmentDate] = useState('Tomorrow');
  const [timeSlot, setTimeSlot] = useState('06:00 PM - 06:30 PM');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientGender, setPatientGender] = useState('Male');
  const [paymentMethod, setPaymentMethod] = useState('counter');
  const [generatedToken, setGeneratedToken] = useState('TK-24');

  useEffect(() => {
    if (preselectedDoctor) {
      setSelectedDoctorId(preselectedDoctor.id);
      setStep(2);
    } else if (preselectedPackage) {
      setStep(2);
    }
  }, [preselectedDoctor, preselectedPackage]);

  if (!isOpen) return null;

  const currentDoctor = DOCTORS_DATA.find((d) => d.id === selectedDoctorId) || DOCTORS_DATA[0];

  const timeSlots = [
    '05:00 PM - 05:30 PM',
    '05:30 PM - 06:00 PM',
    '06:00 PM - 06:30 PM',
    '06:30 PM - 07:00 PM',
    '07:00 PM - 07:30 PM',
    '08:00 PM - 08:30 PM',
  ];

  const handleConfirm = (e) => {
    e.preventDefault();
    const randomToken = `TK-${Math.floor(Math.random() * 30) + 15}`;
    setGeneratedToken(randomToken);
    setStep(4);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95">
        
        {/* Header */}
        <div className="bg-[#0B1E33] text-white p-5 sm:p-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">
              {lang === 'bn' ? 'অনলাইন ডাক্তার ও টেস্ট সিরিয়াল বুকিং' : 'Book Medical Appointment'}
            </h2>
            <p className="text-xs text-slate-300">
              {preselectedPackage 
                ? (lang === 'bn' ? `প্যাকেজ: ${preselectedPackage.titleBn}` : `Package: ${preselectedPackage.title}`)
                : (lang === 'bn' ? 'পছন্দের ডাক্তার ও সময় নির্বাচন করুন' : 'Select doctor, chamber slot & patient information')}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {step < 4 && (
          <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-500">
            <span className={step >= 1 ? 'text-[#009688] font-bold' : ''}>
              1. {lang === 'bn' ? 'ডাক্তার' : 'Specialist'}
            </span>
            <span>→</span>
            <span className={step >= 2 ? 'text-[#009688] font-bold' : ''}>
              2. {lang === 'bn' ? 'তারিখ ও স্লট' : 'Date & Slot'}
            </span>
            <span>→</span>
            <span className={step >= 3 ? 'text-[#009688] font-bold' : ''}>
              3. {lang === 'bn' ? 'রোগীর তথ্য' : 'Patient Details'}
            </span>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-5 sm:p-6">
          {/* STEP 1: Select Doctor */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900">
                {lang === 'bn' ? 'বিশেষজ্ঞ ডাক্তার নির্বাচন করুন:' : 'Select Specialist Doctor:'}
              </h3>

              <div className="space-y-2.5 max-h-[350px] overflow-y-auto pr-1">
                {DOCTORS_DATA.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => setSelectedDoctorId(doc.id)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      selectedDoctorId === doc.id
                        ? 'border-[#009688] bg-teal-50/60 ring-2 ring-[#009688]/20'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {lang === 'bn' ? doc.nameBn : doc.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#009688]">
                        {lang === 'bn' ? doc.specialtyBn : doc.specialty}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {lang === 'bn' ? doc.chamberDaysBn : doc.chamberDays} · {doc.chamberTime}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-sm font-bold text-[#0B1E33] font-mono block">
                        ৳{doc.consultationFee}
                      </span>
                      {selectedDoctorId === doc.id && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#009688]">
                          <Check className="w-3.5 h-3.5" />
                          <span>{lang === 'bn' ? 'নির্বাচিত' : 'Selected'}</span>
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-[#009688] hover:bg-[#00897b] rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>{lang === 'bn' ? 'পরবর্তী ধাপ' : 'Continue to Date & Slot'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Date & Slot */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="p-3.5 bg-teal-50/60 rounded-xl border border-teal-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#009688] block">
                    {lang === 'bn' ? 'নির্বাচিত কনসালট্যান্ট' : 'Selected Consultant'}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">
                    {lang === 'bn' ? currentDoctor.nameBn : currentDoctor.name}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {lang === 'bn' ? currentDoctor.specialtyBn : currentDoctor.specialty} · {currentDoctor.roomNumber}
                  </p>
                </div>
                {!preselectedDoctor && (
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs font-semibold text-[#009688] hover:underline cursor-pointer"
                  >
                    {lang === 'bn' ? 'পরিবর্তন' : 'Change'}
                  </button>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  {lang === 'bn' ? 'তারিখ নির্বাচন করুন:' : 'Select Appointment Date:'}
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {['Today (আজ)', 'Tomorrow (কাল)', 'Day After (পরশু)'].map((dateOption) => (
                    <button
                      key={dateOption}
                      type="button"
                      onClick={() => setAppointmentDate(dateOption)}
                      className={`py-2.5 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        appointmentDate === dateOption
                          ? 'border-[#009688] bg-[#009688] text-white shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                      }`}
                    >
                      {dateOption}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  {lang === 'bn' ? 'উপলব্ধ চেম্বার সময়সূচী:' : 'Available Time Slots:'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`py-2 px-3 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                        timeSlot === slot
                          ? 'border-[#009688] bg-teal-50 text-[#009688] font-bold ring-1 ring-[#009688]'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'আগের ধাপ' : 'Back'}</span>
                </button>

                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-[#009688] hover:bg-[#00897b] rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>{lang === 'bn' ? 'পরবর্তী ধাপ' : 'Patient Information'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Patient Form */}
          {step === 3 && (
            <form onSubmit={handleConfirm} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'bn' ? 'রোগীর পুরো নাম *' : 'Patient Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="e.g. Syed Ittyhadul Islam"
                    className="w-full px-3 py-2 text-xs font-semibold bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009688]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'bn' ? 'মোবাইল নম্বর * (এসএমএস যাবে)' : 'Mobile Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="017XXXXXXXX"
                    className="w-full px-3 py-2 text-xs font-semibold bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009688]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'bn' ? 'বয়স (Age) *' : 'Age *'}
                  </label>
                  <input
                    type="number"
                    required
                    value={patientAge}
                    onChange={(e) => setPatientAge(e.target.value)}
                    placeholder="e.g. 34"
                    className="w-full px-3 py-2 text-xs font-semibold bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009688]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'bn' ? 'লিঙ্গ (Gender) *' : 'Gender *'}
                  </label>
                  <select
                    value={patientGender}
                    onChange={(e) => setPatientGender(e.target.value)}
                    className="w-full px-3 py-2 text-xs font-semibold bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009688]"
                  >
                    <option value="Male">Male (পুরুষ)</option>
                    <option value="Female">Female (মহিলা)</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  {lang === 'bn' ? 'পেমেন্ট মাধ্যম (Payment Preference):' : 'Payment Preference:'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('counter')}
                    className={`p-2.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === 'counter'
                        ? 'border-[#009688] bg-teal-50 text-[#009688]'
                        : 'border-slate-200 text-slate-700 bg-white'
                    }`}
                  >
                    {lang === 'bn' ? 'হাসপাতাল কাউন্টারে পরিশোধ' : 'Pay at Counter'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bkash')}
                    className={`p-2.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === 'bkash'
                        ? 'border-pink-500 bg-pink-50 text-pink-600'
                        : 'border-slate-200 text-slate-700 bg-white'
                    }`}
                  >
                    bKash Online
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('nagad')}
                    className={`p-2.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === 'nagad'
                        ? 'border-orange-500 bg-orange-50 text-orange-600'
                        : 'border-slate-200 text-slate-700 bg-white'
                    }`}
                  >
                    Nagad / Card
                  </button>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'আগের ধাপ' : 'Back'}</span>
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-bold text-white bg-[#009688] hover:bg-[#00897b] rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 shadow-md"
                >
                  <span>{lang === 'bn' ? 'সিরিয়াল নিশ্চিত করুন' : 'Confirm Appointment'}</span>
                  <Check className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Token Confirmation */}
          {step === 4 && (
            <div className="text-center py-4 space-y-5 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                  {lang === 'bn' ? 'অ্যাপয়েন্টমেন্ট সফলভাবে নিশ্চিত হয়েছে!' : 'Appointment Successfully Confirmed!'}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1E33]">
                  {patientName || 'Syed Ittyhadul Islam'}
                </h3>
              </div>

              <div className="max-w-md mx-auto bg-slate-50 border-2 border-dashed border-teal-300 rounded-2xl p-5 text-left space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">
                      {lang === 'bn' ? 'আপনার টোকেন নম্বর' : 'Your Token Number'}
                    </span>
                    <p className="text-2xl font-extrabold text-[#009688] font-mono">
                      {generatedToken}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">
                      {lang === 'bn' ? 'আনুমানিক সময়' : 'Estimated Time'}
                    </span>
                    <p className="text-xs font-bold text-slate-900">
                      {appointmentDate} · {timeSlot}
                    </p>
                  </div>
                </div>

                <div className="text-xs text-slate-700 space-y-1">
                  <p><span className="font-semibold text-slate-900">{lang === 'bn' ? 'ডাক্তার:' : 'Doctor:'}</span> {lang === 'bn' ? currentDoctor.nameBn : currentDoctor.name}</p>
                  <p><span className="font-semibold text-slate-900">{lang === 'bn' ? 'চেম্বার:' : 'Chamber:'}</span> {currentDoctor.roomNumber}</p>
                  <p><span className="font-semibold text-slate-900">{lang === 'bn' ? 'মোবাইল:' : 'Contact:'}</span> {patientPhone || '01711223344'}</p>
                  <p><span className="font-semibold text-slate-900">{lang === 'bn' ? 'কনসালটেশন ফি:' : 'Fee:'}</span> ৳{currentDoctor.consultationFee} ({paymentMethod === 'counter' ? (lang === 'bn' ? 'কাউন্টারে দেয়' : 'Pay at counter') : 'Online Paid'})</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 max-w-md mx-auto py-2 rounded-lg border border-emerald-200">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>{lang === 'bn' ? 'কনফার্মেশন এসএমএস ও হোয়াটসঅ্যাপ নোটিফিকেশন পাঠানো হয়েছে।' : 'Confirmation SMS & WhatsApp notification sent.'}</span>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'স্লিপ প্রিন্ট করুন' : 'Print Slip'}</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-6 py-2 text-xs font-bold text-white bg-[#009688] hover:bg-[#00897b] rounded-lg transition-colors cursor-pointer"
                >
                  {lang === 'bn' ? 'সম্পন্ন' : 'Done'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
