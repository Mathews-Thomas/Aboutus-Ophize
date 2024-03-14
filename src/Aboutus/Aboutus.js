// import React from "react";
// import { useState } from "react";
// import serviceImage1 from "./assets/service section photo.jpg";
// import serviceImage2 from "./assets/howitworks section photo.jpg";
// import rightarrow from "./assets/right-arrow.png";
// import whyusimage from "./assets/whyussection.png";
// import deiveryimage from "./assets/deliveryontime.png";
// import serviceexcellenceimage from "./assets/service.png";
// import patternimage from "./assets/Pattern.png";
// import callicon from "./assets/callicon.png";
// import letstalkpattern from "./assets/letstalkpattern.png";
// import collapseiconright from "./assets/collapseiconright.png";
// import collapseicondown from "./assets/collapseicondown.png";
// import streamlinedImage from "./assets/streamlined.png";
// import expertiseImage from "./assets/expertise.png";
// import globalreachImage from "./assets/globalreach.png";

// function Aboutus() {
//      // State to manage collapse text sections
//    const [isCollapsed, setIsCollapsed] = useState([false, false, false, false]);

//    // Function to manage collapse text sections
//    const handleCollapse = (index) => {
//      const newCollapsedState = [...isCollapsed];
//      newCollapsedState[index] = !newCollapsedState[index];
//      setIsCollapsed(newCollapsedState);
//    };
//   return (
//     <>
//     {/* Grid layout */}
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
//       {/* Section: Benefit of Service */}
//       <div className="sm:p-6 pt-0 pb-0">
//         {/* Left side with benefits information */}
//         <div className="p-5 pt-0">
//           {/* Title and introductory text */}
//           <h1 className="text-2xl font-bold 2xl:text-4xl 4xl:text-5xl ">
//             Benefits of Service
//           </h1>
//           <p className="text-inherit mt-3 text-slate-500 text-base 2xl:text-2xl 4xl:text-4xl sm:text-xl md:text-base xs:text-lg">
//             Our BPO services are designed to enhance operational efficiency
//             and deliver measurable business outcomes.
//           </p>
//           <p className="text-medium text-inherit text-slate-500 text-base 2xl:text-2xl 4xl:text-4xl sm:text-xl md:text-base xs:text-lg">
//             Partner with us to enjoy:
//           </p>
//         </div>

//         {/* List of benefits */}
//         <div className="p-5 pb-0 pt-0">
//           <ul className="grid grid-cols-1">
//             <li className="font-medium items-start flex pb-2 2xl:text-2xl 4xl:text-4xl sm:text-xl md:text-base xs:text-lg">
//               <img src={rightarrow} className="mr-2 w-auto" alt="Arrow"></img>
//               Streamlined Operations
//             </li>
//             <li className="font-medium items-start flex pb-2 2xl:text-2xl 4xl:text-4xl sm:text-xl md:text-base xs:text-lg">
//               <img src={rightarrow} className="mr-2 w-auto" alt="Arrow"></img>
//               Expert Compliance Management
//             </li>
//             <li className="font-medium items-start flex pb-2 2xl:text-2xl 4xl:text-4xl sm:text-xl md:text-base xs:text-lg">
//               <img src={rightarrow} className="mr-2 w-auto" alt="Arrow"></img>
//               Technological Advancement
//             </li>
//             <li className="font-medium items-start flex pb-2 2xl:text-2xl 4xl:text-4xl sm:text-xl md:text-base xs:text-lg">
//               <img src={rightarrow} className="mr-2 w-auto" alt="Arrow"></img>
//               Cost Saving
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Right side with image */}
//       <div className="p-8 pt-0 pb-0 text-center">
//         <img src={serviceImage1} className="w-full" alt="Service Section" />
//       </div>

//       {/* Section: How It Works */}
//       {/* Left side with image */}
//       <div className="p-8 pb-0 pt-0 text-center">
//         <img
//           src={serviceImage2}
//           className="w-full pt-7"
//           alt="How It Works Section"
//         />
//       </div>

//       {/* Right side with information about how it works */}
//       <div className="p-8 pt-0">
//         <div className="p-5 pl-0 pt-0 xl:pt-5">
//           <h1 className="text-2xl font-bold pt-0 p-5 pl-0 pb-2 2xl:text-4xl 4xl:text-5xl">
//             How It Works
//           </h1>
//           <p className="text-slate-500 text-medium 2xl:text-2xl 4xl:text-3xl sm:text-xl md:text-base xs:text-lg">
//             We take a structured approach to manage your business processes:
//           </p>
//         </div>
//         <ul className="list-decimal text-bold text-slate-500 text-medium pt-2 2xl:text-2xl 4xl:text-3xl 4xl:pt-2 sm:text-xl md:text-base xs:text-lg">
//           <li>
//             <span className="font-bold">Assessment</span>: We begin by
//             evaluating your current processes to identify areas for
//             improvement.
//           </li>
//           <li>
//             <span className="font-bold">Customization</span>: Our team designs
//             a service model tailored to your specific business needs.
//           </li>
//           <li>
//             <span className="font-bold">Integration</span>: We seamlessly
//             integrate our solutions with your existing systems for minimal
//             disruption.
//           </li>
//           <li>
//             <span className="font-bold">Execution</span>: Our skilled
//             professionals take over the processes, ensuring high-quality
//             output and performance.
//           </li>
//           <li>
//             <span className="font-bold">Continuous Improvement</span>: We
//             regularly review and refine our strategies to ensure ongoing
//             efficiency and effectiveness.
//           </li>
//         </ul>
//       </div>
//     </div>

//     {/* Streamlining Go-to-Market Strategies */}
//     <div className="grid grid-cols-1 md:grid-cols-2 justify-center p-3 mt-4 bg-[#EBEFFF]">
//       <div className="p-8 pt-0 pb-0">
//         {/* Title and introductory text */}
//         <div className="p-5 pt-2">
//           <h1 className="text-2xl  font-bold 2xl:text-4xl 4xl:text-5xl md:text-start">
//             Streamlining Go-to-Market Strategies with Advanced Technologies
//           </h1>
//         </div>
//       </div>
//       <div className="p-8 pt-0 pb-0 pl-1 text-start text-slate-500 font-medium 2xl:text-2xl 4xl:text-3xl sm:text-xl md:text-base xs:text-lg">
//         <div className="p-11 pt-0">
//           <p className="pt-3 ">
//             At Ophize, we simplify the complex. Our mission is to empower your
//             go-to-market teams with cutting-edge tools that foster
//             collaboration, drive innovation, and deliver deep analytical
//             insights.
//           </p>
//           <p className="pt-3">
//             We are dedicated to crafting comprehensive solutions that tackle
//             your most challenging problems and yield tangible results.
//           </p>
//           <p className="pt-3">
//             We're here to deliver exceptional services that resonate with your
//             business objectives.
//           </p>
//         </div>
//       </div>
//     </div>

//     {/* Statistics Section */}
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-8  bg-[#EBEFFF] sm:items-center">
//       <div className="p-8 pt-0 pb-0">
//         <h1 className="text-2xl font-medium 2xl:text-2xl 4xl:text-5xl">
//           200+ Experts
//         </h1>
//         <p className="text-slate-500 pt-3 2xl:text-2xl 4xl:text-3xl sm:text-xl md:text-base xs:text-lg">
//           Ophize has expanded from a specialized team to over 200 experts in
//           services, committed to simplifying business.
//         </p>
//       </div>
//       <div className="p-8 pt-0 pb-0">
//         <h1 className="text-2xl font-medium 2xl:text-2xl 4xl:text-5xl">
//           1000+ Businesses Served
//         </h1>
//         <p className="text-slate-500 pt-3 2xl:text-2xl 4xl:text-2xl sm:text-xl md:text-base xs:text-lg">
//           More than 10,000 businesses have entrusted Ophize with their service
//           needs, a testament to our effective strategies and client-focused
//           services.
//         </p>
//       </div>
//       <div className="p-8 pt-0">
//         <h1 className="text-2xl font-medium 2xl:text-2xl 4xl:text-5xl">
//           160,000+ Customers
//         </h1>
//         <p className="text-slate-500 pt-3 2xl:text-2xl 4xl:text-2xl sm:text-xl md:text-base xs:text-lg">
//           More than 160,000 happy customers, who explore our wide variety of
//           services, which helps to enhance their business strategies.
//         </p>
//       </div>
//     </div>

//     {/* why us section  */}
//     <div className="grid grid-cols-1 md:grid-cols-2 justify-center p-3 mt-4">
//       <div className="p-8 pt-0 pb-0">
//         {/* Title and introductory text */}
//         <div className="p-5 pt-2">
//           <p className="text-lg flex items-center 2xl:text-2xl 4xl:text-2xl">
//             <img src={patternimage} className="mr-2 " />
//             Why Us
//           </p>
//           <h1 className="text-2xl pt-2  font-bold 2xl:text-4xl 4xl:text-5xl">
//             Why Ophize is Your Ideal BPO Partner
//           </h1>
//           <p className="text-slate-500 pt-3 2xl:text-2xl 4xl:text-3xl sm:text-xl md:text-base xs:text-lg">
//             At Ophize,we redefine business process outsourcing by providing
//             exceptional customer service, technical support, and back-office
//             solutions. Our global reach and expertise empower your business to
//             excel in a competitive marketplace.
//           </p>
//           <p className="text-slate-500 pt-3 2xl:text-2xl 4xl:text-3xl sm:text-xl md:text-base xs:text-lg">
//             With our innovative approaches and commitment to quality, we help
//             you transform challenges into opportunities.
//           </p>
//           <p className="flex items-center text-xl pt-5 2xl:text-2xl 4xl:text-4xl">
//             <img src={deiveryimage} className="mr-3" />
//             Delivery on Time
//           </p>
//           <p className="flex items-center text-xl pt-5 2xl:text-2xl 4xl:text-4xl">
//             <img src={serviceexcellenceimage} className="mr-3" />
//             Service Excellence
//           </p>
//         </div>
//       </div>
//       <div className="p-8 pt-0 pb-0 pl-1 text-start font-medium 2xl:text-xl 4xl:text-4xl">
//         <div className="p-9 pt-2">
//           {/* image section */}
//           <img src={whyusimage} className="w-full" />
//         </div>
//       </div>
//     </div>

//     {/* faq section */}
//     <div className="grid grid-cols-1 md:grid-cols-2 justify-center p-3 mt-4 bg-[#EBEFFF]">
//       <div className="p-8 pt-0 pb-0">
//         {/* Title and introductory text */}
//         <div className="p-5 pt-2">
//           <p className="text-lg flex items-center 2xl:text-2xl 4xl:text-2xl">
//             <img src={patternimage} className="mr-2 " />
//             FAQ
//           </p>
//           <h1 className="text-2xl pt-2  font-bold 2xl:text-4xl 4xl:text-5xl">
//             Frequently Asked Questions
//           </h1>
//           {/* text collapse section 1*/}
//           <div className="mt-5">
//             <button
//               className="flex items-center text-lg text-start 2xl:text-2xl 4xl:text-4xl sm:text-xl  xs:text-lg md:text-lg p-2"
//               onClick={()=>handleCollapse(0)}
//             >
//               How can outsourcing benefit my business?{" "}
//               {isCollapsed[0] ? (
//                 <img src={collapseicondown} className="ml-52 w-4" />
//               ) : (
//                 <img src={collapseiconright} className="ml-52 w-2" />
//               )}
//             </button>
//             {isCollapsed[0] && (
//               <div>
//                 <p className="text-slate-500 text-sm mt-2 2xl:text-2xl 4xl:text-2xl sm:text-xl md:text-base xs:text-lg">
//                   Outsourcing to our BPO center can reduce costs,improve
//                   service quality,and allow you to focus on core business
//                   activities while we handle the rest.
//                 </p>
//               </div>
//             )}
//           </div>
//           {/* text collapse section 2 */}
//           <div className="mt-8">
//             <button
//               className="flex items-center text-lg text-start 2xl:text-2xl 4xl:text-4xl sm:text-xl  xs:text-lg md:text-lg p-2" 
//               onClick={()=> handleCollapse(1)}
//             >
//               How do you ensure the quality if your BPO services?{" "}
//               {isCollapsed[1] ? (
//                 <img src={collapseicondown} className="ml-36 w-4" />
//               ) : (
//                 <img src={collapseiconright} className="ml-36 w-2" />
//               )}
//             </button>
//             {isCollapsed[1] && (
//               <div>
//                 <p className="text-slate-500 text-sm mt-2 2xl:text-2xl 4xl:text-2xl sm:text-xl md:text-base xs:text-lg">
//                   Outsourcing to our BPO center can reduce costs,improve
//                   service quality,and allow you to focus on core business
//                   activities while we handle the rest.
//                 </p>
//               </div>
//             )}
//           </div>
//           {/* text collapse section 3*/}
//           <div className="mt-8">
//             <button
//               className="flex items-center text-lg text-start 2xl:text-2xl 4xl:text-4xl sm:text-xl  xs:text-lg md:text-lg p-2"
//               onClick={()=>handleCollapse(2)}
//             >
//               Can I customize the BPO services based on my company's needs?{" "}
//               {isCollapsed[2] ? (
//                 <img src={collapseicondown} className="ml-36 w-4" />
//               ) : (
//                 <img src={collapseiconright} className="ml-36 w-2" />
//               )}
//             </button>
//             {isCollapsed[2] && (
//               <div>
//                 <p className="text-slate-500 text-sm mt-2 2xl:text-2xl 4xl:text-2xl sm:text-xl md:text-base xs:text-lg ">
//                   Outsourcing to our BPO center can reduce costs,improve
//                   service quality,and allow you to focus on core business
//                   activities while we handle the rest.
//                 </p>
//               </div>
//             )}
//           </div>
//           {/* text collapse section 4*/}
//           <div className="mt-8">
//             <button
//               className="flex items-center text-lg text-start 2xl:text-2xl 4xl:text-4xl sm:text-xl  xs:text-lg md:text-lg  p-2"
//               onClick={()=>handleCollapse(3)}
//             >
//               How is customer data protected in your BPO services?{" "}
//               {isCollapsed[3] ? (
//                 <img src={collapseicondown} className="ml-36 w-4" />
//               ) : (
//                 <img src={collapseiconright} className="ml-36 w-2" />
//               )}
//             </button>
//             {isCollapsed[3] && (
//               <div>
//                 <p className="text-slate-500 text-sm mt-2 2xl:text-2xl 4xl:text-2xl sm:text-xl md:text-base xs:text-lg">
//                   Outsourcing to our BPO center can reduce costs,improve
//                   service quality,and allow you to focus on core business
//                   activities while we handle the rest.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="p-8 pt-0 pb-0 pl-1 text-start font-medium 2xl:text-xl 4xl:text-4xl mx-auto mt-10">
//         <div className="p-11 pt-0">
//           <div className="bg-[#305197] w-80 p-8">
//             <p className="flex items-center text-sm bg-[#111C55] text-white w-20 mt-3 mb-5">
//               <img src={letstalkpattern} className="mr-2" />
//               Let's Talk
//             </p>
//             <h3 className="font-bold text-white mt-5 mb-5 text-[20px]">
//               You Need Any Help? Get Free Consultation
//             </h3>
//             <div className="flex items-center">
//               <div>
//                 <img src={callicon} className="w-12"/>
//               </div>
//               <div className="ml-3 text-white text-sm">
//                 {" "}
//                 <p>Have Any Questions</p>
//                 <p>(+91) 844-633-7646</p>
//               </div>
//             </div>
//             <button
//               type="button"
//               className="mt-5 rounded bg-gradient-to-r from-[#3B50BA]  via-[#305197] to-[#182553] p-2"
//             >
//               contact us
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* Tailored Solutions for Every Challenge section */}

//     {/* benefits section */}
//     <div className="grid grid-cols-1 md:grid-cols-2 justify-center p-3 mt-4 pb-0">
//       <div className="p-8 pt-0 pb-0">
//         {/* Title and introductory text */}
//         <div className="p-5 pt-2">
//           <p className="text-[#3B50BA] font-semibold sm:text-xl md:text-base xs:text-lg">Benefits</p>
//           <h1 className="md:text-[44px]  font-medium  2xl:text-4xl 4xl:text-5xl md:text-start mt-3 xs:text-[30px]">
//             Tailored Solutions for Every Challenge
//           </h1>
//         </div>
//       </div>
//       <div className="p-8 pt-0 pb-0 pl-1 text-start font-medium 2xl:text-2xl 4xl:text-3xl text-[18px] sm:text-xl md:text-base xs:text-lg">
//         <div className="p-11 pt-0">
//           <p className="pt-3 mt-12 ">
//             Our BPO services are not one-size-fits-all.We work with you
//           </p>
//           <p>to understand your unique challenges and create</p>
//           <p> customized solutions that fit just right.</p>
//         </div>
//       </div>
//     </div>

//     {/* efficiency, expertise, global reach section */}
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 justify-center">
//       <div className="p-8 pt-0 pb-0">
//         <div className="text-start">
//           <img src={streamlinedImage} className="w-20" />
//         </div>
//         <h1 className="text-2xl font-bold 2xl:text-2xl 4xl:text-5xl ">
//           Streamlined Efficiency
//         </h1>
//         <p className="text-[14px] pt-3 2xl:text-xl 4xl:text-2xl sm:text-xl md:text-base xs:text-lg">
//           Our BPO services streamline your operations, allowing your in-house
//           team to focus on strategic growth. With our support, you can enjoy
//           improved process efficiency and productivity.
//         </p>
//       </div>
//       <div className="p-8 pt-0 pb-0">
//         <div>
//           <img src={expertiseImage} className="w-20" />
//         </div>
//         <h1 className="text-2xl font-bold 2xl:text-2xl 4xl:text-5xl">
//           Expertise at Your Fingertips
//         </h1>
//         <p className="text-[14px] pt-3 2xl:text-xl 4xl:text-2xl sm:text-xl md:text-base xs:text-lg">
//           Tap into our vast pool of industry experts who bring specialized
//           knowledge and experience to your business, ensuring that every task
//           is managed with the utmost proficiency.
//         </p>
//       </div>
//       <div className="p-8 pt-0">
//         <div>
//           <img src={globalreachImage} className="w-20" />
//         </div>
//         <h1 className="text-2xl font-bold 2xl:text-2xl 4xl:text-5xl">
//           Global Reach, Local Expertise
//         </h1>
//         <p className="text-[14px] pt-3 2xl:text-xl 4xl:text-2xl sm:text-xl md:text-base xs:text-lg">
//           Our global presence means you get the benefits of international
//           expertise combined with local knowledge, ensuring service excellence
//           no matter where you operate.
//         </p>
//       </div>
//     </div>
//   </>
//   )
// }

// export default Aboutus