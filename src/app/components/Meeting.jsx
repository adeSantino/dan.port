'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Meeting() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [meetingType, setMeetingType] = useState('video');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Generate calendar days for current month
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleDateSelect = (day) => {
    setSelectedDate(day);
    setSelectedTime(''); // Reset time when date changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // EmailJS configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      
      const templateParams = {
        to_email: process.env.NEXT_PUBLIC_EMAIL_ADDRESS || 'adriannetelan20@gmail.com',
        from_name: name,
        from_email: email,
        meeting_date: `${currentDate.toLocaleDateString('en-US', { month: 'long' })} ${selectedDate}, ${currentYear}`,
        meeting_time: selectedTime,
        meeting_type: meetingType === 'video' ? 'Video Call' : 'Phone Call',
        message: message || 'No additional message provided',
        reply_to: email
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      alert('Meeting request submitted successfully! I\'ll get back to you soon.');
      
      // Reset form
      setSelectedDate(null);
      setSelectedTime('');
      setName('');
      setEmail('');
      setMessage('');
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error submitting your request. Please try again or contact me directly.');
    }
  };

  return (
    <div className="bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Schedule a Meeting</h1>
          <p className="text-gray-400 text-lg">Let's discuss your project and how I can help you</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">Select Date & Time</h2>
            
            {/* Calendar */}
            <div className="mb-6">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-white">
                  {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </h3>
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {/* Day headers */}
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center text-gray-400 text-sm font-medium py-2">
                    {day}
                  </div>
                ))}
                
                {/* Empty cells for days before month starts */}
                {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                  <div key={`empty-${index}`} className="h-10"></div>
                ))}
                
                {/* Calendar days */}
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
                  const isSelected = selectedDate === day;
                  const isToday = day === currentDate.getDate();
                  const isPast = day < currentDate.getDate();
                  
                  return (
                    <button
                      key={day}
                      onClick={() => !isPast && handleDateSelect(day)}
                      disabled={isPast}
                      className={`h-10 w-10 rounded-full text-sm font-medium transition-colors ${
                        isSelected
                          ? 'bg-white text-black'
                          : isToday
                          ? 'bg-gray-700 text-white'
                          : isPast
                          ? 'text-gray-600 cursor-not-allowed'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Available Times</h4>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 rounded text-sm font-medium transition-colors ${
                        selectedTime === time
                          ? 'bg-white text-black'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Meeting Details Form */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">Meeting Details</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Meeting Type */}
              <div>
                <label className="block text-white font-medium mb-2">Meeting Type</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="video"
                      checked={meetingType === 'video'}
                      onChange={(e) => setMeetingType(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-gray-300">Video Call</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="phone"
                      checked={meetingType === 'phone'}
                      onChange={(e) => setMeetingType(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-gray-300">Phone Call</span>
                  </label>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-white font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-white font-medium mb-2">Message (Optional)</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Tell me about your project or what you'd like to discuss..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!selectedDate || !selectedTime || !name || !email}
                className="w-full bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
              >
                Schedule Meeting
              </button>
            </form>

            {/* Selected Details Summary */}
            {selectedDate && selectedTime && (
              <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Meeting Summary</h4>
                <p className="text-gray-300 text-sm">
                  <strong>Date:</strong> {currentDate.toLocaleDateString('en-US', { month: 'long' })} {selectedDate}, {currentYear}
                </p>
                <p className="text-gray-300 text-sm">
                  <strong>Time:</strong> {selectedTime}
                </p>
                <p className="text-gray-300 text-sm">
                  <strong>Type:</strong> {meetingType === 'video' ? 'Video Call' : 'Phone Call'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            Need to reschedule? Contact me at{' '}
            <a href="mailto:adriannetelan20@gmail.com" className="text-white hover:underline">
              adriannetelan20@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
