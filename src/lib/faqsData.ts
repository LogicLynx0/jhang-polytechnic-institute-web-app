import { faqShowGvtTechCourses, faqShowPvtSafetyCourses, faqShowPvtTechCourses, instituteTiming } from "./configrations";

 export const contactFAQs = [
    {
      question: 'What are your office hours?',
      answer: `Our office is open Monday to Friday from ${instituteTiming}, and Saturday from ${instituteTiming}. We are closed on Sundays and public holidays.`
    },
    {
      question: 'How quickly will I receive a response to my inquiry?',
      answer: 'We aim to respond to all inquiries within 24 hours during business days. For urgent matters, you can call us directly at +92-47-1234567.'
    },
    {
      question: 'Can I visit the campus for a tour?',
      answer: 'Yes! Campus tours are available by appointment. Please contact us in advance to schedule your visit and ensure our staff can provide you with a comprehensive tour of our facilities.'
    },
    {
      question: 'Do you offer counseling sessions for course selection?',
      answer: 'Absolutely! Our academic counselors are available to help you choose the right course based on your interests, career goals, and educational background. Schedule a counseling session through our contact form.'
    },
    {
      question: 'Is financial assistance available?',
      answer: 'We offer various payment plans and installment options to make education more accessible. Contact our admissions office to discuss available financial assistance programs.'
    }
  ];

export const aboutFAQs = [
    {
      question: 'What types of courses do you offer?',
      answer: `We offer Tech Courses (${faqShowPvtTechCourses}) and Safety Courses (${faqShowPvtSafetyCourses}). Government courses are currently unavailable pending approvals.`
    },
    {
      question: 'Are your courses industry-recognized?',
      answer: `Yes, our courses are designed to meet industry standards. Safety courses provide international certifications (${faqShowPvtSafetyCourses}), while tech courses include industry-relevant skills and portfolio development.`
    },
    {
      question: 'Do you provide job placement assistance?',
      answer: 'We offer comprehensive career support including job placement assistance, resume building, interview preparation, and connections with industry partners.'
    },
    {
      question: 'What are the admission requirements?',
      answer: 'Requirements vary by course. Generally, we require basic educational qualifications (matriculation/intermediate) and specific prerequisites depending on the chosen program.'
    },
    {
      question: 'Do you offer flexible schedules?',
      answer: 'Yes, we offer multiple batches with morning, evening, and weekend options to accommodate working professionals and students.'
    },
    {
      question: 'What about the Government courses ?',
      answer: `Government courses like ${faqShowGvtTechCourses} are currently unavailable due to policy changes and pending approvals. We focus on private courses that are available year-round.`
    }
  ];

export const coursesFAQs = [
    {
      question: 'How do I enroll in a course?',
      answer: 'You can enroll by visiting our Admissions page, filling out the application form, and selecting your desired course. Our admissions team will contact you within 24 hours to guide you through the process.'
    },
    {
      question: 'What are the prerequisites for tech courses?',
      answer: 'Most tech courses require basic computer knowledge and at least matriculation level education. Specific requirements vary by course - Graphics Design needs creative aptitude, while Web Development benefits from basic programming understanding.'
    },
    {
      question: 'Are online classes available?',
      answer: 'We offer hybrid learning options with both in-person and online components. Some theoretical portions can be attended online, while practical sessions require physical presence in our labs.'
    },
    {
      question: 'What certification do I receive upon completion?',
      answer: `You receive industry-recognized certificates. Tech courses provide skill-based certificates, while Safety courses (${faqShowPvtSafetyCourses}) provide international certifications recognized globally.`
    },
    {
      question: 'Do you provide job placement assistance?',
      answer: 'Yes, we have a dedicated placement cell that helps students with job placement, resume building, interview preparation, and connecting with industry partners.'
    },
    {
      question: 'What is the duration of courses?',
      answer: 'Course duration varies: Tech courses range from 3-6 months, Safety courses are typically 1-3 months, and Government courses (when available) can be 3-6 months depending on the program.'
    }
];
