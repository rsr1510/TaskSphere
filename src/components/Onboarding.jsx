// import React, { useState } from 'react';
// import './Onboarding.css';
// import { FaArrowRight, FaArrowLeft, FaTimes } from 'react-icons/fa';

// function Onboarding({ completeOnboarding }) {
//   const [step, setStep] = useState(0);

//   const steps = [
//     {
//       title: "Welcome to ProcessPlan",
//       description: "Let's get you started with our process planning software. We'll show you the key features in just a few steps.",
//       image: "/api/placeholder/300/200"
//     },
//     {
//       title: "Interactive Dashboards",
//       description: "Get insights at a glance with our statistical dashboards. Monitor tasks, track performance, and analyze your workflow.",
//       image: "/api/placeholder/300/200"
//     },
//     {
//       title: "Chat & Collaboration",
//       description: "Easily communicate with your team, schedule meetings, and share updates all in one place.",
//       image: "/api/placeholder/300/200"
//     },
//     {
//       title: "Keyboard Shortcuts",
//       description: "Work faster with keyboard shortcuts. Press ⌘/ anytime to see all available shortcuts.",
//       image: "/api/placeholder/300/200"
//     },
//     {
//       title: "Personalization",
//       description: "Make ProcessPlan yours by customizing the theme, font size, and layout.",
//       image: "/api/placeholder/300/200"
//     }
//   ];

//   const nextStep = () => {
//     if (step < steps.length - 1) {
//       setStep(step + 1);
//     } else {
//       completeOnboarding();
//     }
//   };

//   const prevStep = () => {
//     if (step > 0) {
//       setStep(step - 1);
//     }
//   };

//   return (
//     <div className="onboarding-container">
//       <div className="onboarding-header">
//         <h2>{steps[step].title}</h2>
//         <button className="close-btn" onClick={completeOnboarding}><FaTimes /></button>
//       </div>
//       <img src={steps[step].image} alt={steps[step].title} className="onboarding-image" />
//       <p>{steps[step].description}</p>
//       <div className="onboarding-footer">
//         {step > 0 && (
//           <button className="nav-btn" onClick={prevStep}><FaArrowLeft /> Back</button>
//         )}
//         <button className="nav-btn" onClick={nextStep}>
//           {step < steps.length - 1 ? 'Next' : 'Finish'} <FaArrowRight />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Onboarding;



import React, { useState } from 'react';
import './Onboarding.css';
import { FaArrowRight, FaArrowLeft, FaTimes } from 'react-icons/fa';

function Onboarding({ completeOnboarding }) {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Welcome to TaskSphere",
      description: "Let's get you started with our process planning software. We'll show you the key features in just a few steps.",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Interactive Dashboards",
      description: "Get insights at a glance with our statistical dashboards. Monitor tasks, track performance, and analyze your workflow.",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Chat & Collaboration",
      description: "Easily communicate with your team, schedule meetings, and share updates all in one place.",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Keyboard Shortcuts",
      description: "Work faster with keyboard shortcuts. Press ⌘/ anytime to see all available shortcuts.",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Personalization",
      description: "Make TaskSphere yours by customizing the theme, font size, and layout.",
      image: "https://via.placeholder.com/300x200"
    }
  ];

  return (
    <div className="onboarding-container">
      <div className="onboarding-header">
        <h2>{steps[step].title}</h2>
        <button className="close-btn" onClick={completeOnboarding} aria-label="Close Onboarding">
          <FaTimes />
        </button>
      </div>

      {/* <img src={steps[step].image} alt={steps[step].title} className="onboarding-image" /> */}

      <p>{steps[step].description}</p>

      <div className="onboarding-footer">
        <button className="nav-btn" onClick={() => setStep(step - 1)} disabled={step === 0}>
          <FaArrowLeft /> Back
        </button>

        <button className="nav-btn" onClick={() => step < steps.length - 1 ? setStep(step + 1) : completeOnboarding()}>
          {step < steps.length - 1 ? 'Next' : 'Finish'} <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Onboarding;
