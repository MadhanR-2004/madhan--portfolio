// import React, { useState, useEffect } from 'react';
// import { Github, Mail, ExternalLink, Code, Award, GraduationCap, Phone, MapPin, Star, Trophy, Target, Home, User, Briefcase, Trophy as TrophyIcon, PhoneCall } from 'lucide-react';
// import Lottie from 'react-lottie-player';
// import profile from './assets/1.jpg';

// const Portfolio = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [scrollY, setScrollY] = useState(0);
//   const [glitchActive, setGlitchActive] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     const glitchInterval = setInterval(() => {
//       setGlitchActive(true);
//       setTimeout(() => setGlitchActive(false), 400);
//     }, 2000 + Math.random() * 1500);

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('scroll', handleScroll);
//       clearInterval(glitchInterval);
//     };
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const Glitchtext = ({ children, className = "", large = false }) => (
//     <div className={`relative inline-block ${className}`}>
//       <span className={`relative z-20 transition-all duration-100 font-unbounded ${glitchActive ? 'animate-glitch' : ''}`}>
//         {children}
//       </span>
//       <span 
//         className={`absolute top-0 left-0 text-red-500 transition-opacity duration-100 ${glitchActive ? 'opacity-70' : 'opacity-0'} ${large ? 'animate-bounce' : ''}`}
//         style={{ 
//           transform: 'translate(-2px, 0px)',
//           filter: 'blur(0.5px)',
//           clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
//           zIndex: 10,
//           fontFamily: 'Unbounded, sans-serif'
//         }}
//       >
//         {children}
//       </span>
//       <span 
//         className={`absolute top-0 left-0 text-cyan-400 transition-opacity duration-100 ${glitchActive ? 'opacity-70' : 'opacity-0'} ${large ? 'animate-pulse' : ''}`}
//         style={{ 
//           transform: 'translate(2px, 0px)',
//           filter: 'blur(0.5px)',
//           clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
//           zIndex: 10,
//           fontFamily: 'Unbounded, sans-serif'
//         }}
//       >
//         {children}
//       </span>
//     </div>
//   );

//   // const WebShooterEffect = () => (
//   //   <div className="fixed inset-0 pointer-events-none z-20">
//   //     <Lottie
//   //       loop
//   //       play
//   //       path="https://lottie.host/7a3f3e8e-0f5b-4e1b-a2e7-4a76b5b4e9b2/1cXFL9D2i8.json"
//   //       style={{ 
//   //         width: '300px', 
//   //         height: '300px', 
//   //         position: 'absolute', 
//   //         top: `${mousePosition.y - 150}px`, 
//   //         left: `${mousePosition.x - 150}px`,
//   //         opacity: 0.3,
//   //         transform: 'scale(0.5)'
//   //       }}
//   //     />
//   //   </div>
//   // );

//   const GlassCard = ({ children, className = "", glowColor = "red", image = null, showWeb = false }) => (
//     <div 
//       className={`relative group backdrop-blur-xl bg-black/20 border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-black/30 transition-all duration-500 hover:scale-105 overflow-hidden ${className}`}
//       style={{
//         boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
//       }}
//     >
//       {/* {image && (
//         <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
//           <img src={image} alt="" className="w-full h-full object-cover rounded-3xl" />
//         </div>
//       )} */}
//       <div 
//         className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
//         style={{
//           background: glowColor === 'red' 
//             ? 'linear-gradient(45deg, #ff0040, #ff6b9d)' 
//             : glowColor === 'blue'
//             ? 'linear-gradient(45deg, #0099ff, #66d9ff)'
//             : 'linear-gradient(45deg, #ffd700, #ffed4e)',
//         }}
//       />
//       {/* {showWeb && (
//         <Lottie
//           loop
//           play
//           path="https://lottie.host/0e2b5f2e-0c7a-4b8e-8b3f-7b7f5a5c4b1a/Sp0j8B7g4Y.json"
//           style={{ 
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             opacity: 0.2,
//             zIndex: 0
//           }}
//         />
//       )} */}
//       <div className="absolute top-4 right-4 text-white/50 font-oswald text-lg italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//         Web-Stuck!
//       </div>
//       <div className="absolute bottom-4 left-4 text-yellow-400 font-oswald text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//         Thwip!
//       </div>
//       {/* <div className="absolute top-12 left-8 text-green-400 font-oswald text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//         Pow!
//       </div> */}
//       <div className="absolute bottom-12 right-8 text-pink-400 font-oswald text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//         Bam!
//       </div>
//       <div className="relative z-10">
//         {children}
//       </div>
//     </div>
//   );

//   const projects = [
//     {
//       title: "CodeCraft",
//       tech: "React & Ollama",
//       description: "Interactive platform to help users strengthen core programming concepts through personalized challenges and intelligent feedback.",
//       gradient: "from-red-500 to-pink-500",
//       image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
//     },
//     {
//       title: "Vision LLM for 6G Networks",
//       tech: "Python & Ollama",
//       description: "Research-driven system leveraging Vision LLM to enhance perception, decision-making, and communication in 6G-enabled autonomous vehicular networks.",
//       gradient: "from-blue-500 to-cyan-500",
//       image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop"
//     },
//     {
//       title: "AI Tutor",
//       tech: "Python & Generative AI",
//       description: "AI-powered tutor application utilizing Generative AI with Python to provide personalized learning experiences for students.",
//       gradient: "from-purple-500 to-pink-500",
//       image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
//     },
//     {
//       title: "Video Transcription Tool",
//       tech: "Python & LLM",
//       description: "Built a tool with LLM integration to transcribe videos and automatically generate accurate subtitles, enhancing accessibility.",
//       gradient: "from-green-500 to-teal-500",
//       image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop"
//     }
//   ];

//   const skills = [
//     "Python", "React", "Node.js", "MongoDB", "AI/ML", "YOLO & CNN",
//     "Java", "SQL/NoSQL", "Express", "Git", "IoT", "LLM", "Flask", "JavaScript"
//   ];

//   const awards = [
//     {
//       title: "Best Performer in Research Projects",
//       year: "2025",
//       icon: <Star className="text-yellow-500" size={48} />,
//       image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop"
//     },
//     {
//       title: "Best Performer in Societal Applications",
//       year: "2025",
//       icon: <Target className="text-green-500" size={48} />,
//       image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop"
//     },
//     {
//       title: "Aptithon'25 Winner - 4th Place",
//       year: "2025",
//       icon: <Trophy className="text-orange-500" size={48} />,
//       image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
//     },
//     {
//       title: "Academic Excellence",
//       year: "2022-2024",
//       icon: <GraduationCap className="text-blue-500" size={48} />,
//       image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop"
//     },
//     {
//       title: "LeetCode 365-day Badge",
//       year: "730+ Problems",
//       icon: <Code className="text-red-500" size={48} />,
//       image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
//     },
//     {
//       title: "NPTEL IoT Course",
//       year: "85% Score",
//       icon: <Award className="text-purple-500" size={48} />,
//       image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white overflow-x-hidden">
//       <div className="fixed inset-0 z-0">
//         <div 
//           className="absolute w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"
//           style={{
//             transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
//             left: '10%',
//             top: '20%'
//           }}
//         />
//         <div 
//           className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
//           style={{
//             transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
//             right: '10%',
//             bottom: '20%',
//             animationDelay: '1s'
//           }}
//         />
//         <div 
//           className="absolute w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"
//           style={{
//             transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
//             left: '50%',
//             top: '50%',
//             animationDelay: '2s'
//           }}
//         />
//       </div>

//       <nav className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
//         <div className="flex flex-col space-y-4 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10">
//           {[
//             { icon: <Home size={20} />, section: 'home' },
//             { icon: <User size={20} />, section: 'about' },
//             { icon: <Briefcase size={20} />, section: 'projects' },
//             { icon: <TrophyIcon size={20} />, section: 'achievements' },
//             { icon: <PhoneCall size={20} />, section: 'connect' },
//           ].map(({ icon, section }, index) => (
//             <button
//               key={index}
//               onClick={() => scrollToSection(section)}
//               className="text-white hover:text-red-400 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
//             >
//               {icon}
//             </button>
//           ))}
//         </div>
//       </nav>

//  <section id="Home" className="py-32 px-4 relative z-20">
//   <div className="max-w-6xl mx-auto">
//     <div className="grid lg:grid-cols-2 gap-10">
//       {/* Left GlassCard with profile picture */}
//       <GlassCard glowColor="yellow" className="group cursor-pointer" showWeb={false} style={{ padding: '2rem', borderRadius: '1.5rem' }}>
//         <div className="relative flex items-center justify-center">
//            <img
//       src={profile} // Use the imported profile picture
//       alt="Profile Picture"
//       className="rounded-lg shadow-lg w-64 h-64 object-cover"
//     />
//         </div>
//       </GlassCard>

//       {/* Right GlassCard with text */}
//       <GlassCard glowColor="blue" className="group cursor-pointer" showWeb={true}>
//         <div className="relative">
//           <div className="flex justify-between items-start mb-6">
//             <text className="text-2xl font-black tracking-wide group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-500 font-unbounded">
//               MADHAN R
//             </text>
//           </div>
//           <p className="text-gray-300 leading-relaxed font-medium group-hover:text-white transition-colors duration-300 font-oswald">
//             An enthusiastic B.Tech student specializing in AI and Data Science, proficient in Python, JavaScript and its frameworks. Successfully completed AI-driven projects. Demonstrated leadership by organizing impactful tech
//             events within the college community.
//           </p>
//            <div className="flex gap-4 mt-4">
//             <a
//               href="https://github.com/madhan2004"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center px-5 py-2 bg-black/60 border border-white/20 rounded-full font-bold text-white hover:bg-black/80 transition-colors duration-300 shadow hover:scale-105"
//             >
//               <Github className="mr-2" size={20} />
//               GitHub
//             </a>
//             <a
//               href="https://linkedin.com/in/madhan2004"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center px-5 py-2 bg-blue-600 border border-blue-400 rounded-full font-bold text-white hover:bg-blue-700 transition-colors duration-300 shadow hover:scale-105"
//             >
//               <svg className="mr-2" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.271c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.271h-3v-4.604c0-1.099-.021-2.513-1.531-2.513-1.531 0-1.767 1.195-1.767 2.431v4.686h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.562 2.838-1.562 3.036 0 3.6 2 3.6 4.59v4.739z"/>
//               </svg>
//               LinkedIn
//             </a>
//           </div>
//         </div>
//       </GlassCard>
//     </div>
//   </div>
// </section>

//       <section id="about" className="py-32 px-4 relative z-20">
//         <div className="max-w-6xl mx-auto">
//            <text className="text-6xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-blue-500 via-white to-red-500 bg-clip-text text-transparent tracking-wider block">
//             ABOUT ME
//           </text>
//           <Glitchtext className="text-6xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-blue-500 via-white to-red-500 bg-clip-text text-transparent tracking-wider block">
//             ABOUT ME
//           </Glitchtext>
          
//           <div className="grid md:grid-cols-2 gap-12">
//             <GlassCard image={profile} showWeb={true}>
//               <GraduationCap className="text-red-500 mb-6" size={48} />
//               <text className="text-3xl font-black mb-6 tracking-wide">EDUCATION</text>
//               <div className="space-y-6">
//                 <div>
//                   <h4 className="font-black text-xl tracking-wide font-unbounded">B.TECH (AI&DS)</h4>
//                   <p className="text-gray-300 font-semibold font-oswald">Sona College of Technology</p>
//                   <p className="text-gray-400 font-medium font-oswald italic">2022 - 2026 | GPA: 8.72/10</p>
//                 </div>
//                 <div >
//                   <h4 className="font-black text-lg tracking-wide font-unbounded">HSC - 89%</h4>
//                   <p className="text-gray-300 font-oswald">Vidhyalakshmi Matric Higher Secondary School</p>
//                 </div>
//                 <div >
//                   <h4 className="font-black text-lg tracking-wide font-unbounded">SSLC - 99%</h4>
//                   <p className="text-gray-300 font-oswald">Ambalal Jain Saraswathi Matriculation Vidyalaya</p>
//                 </div>
//               </div>
//             </GlassCard>

//             <GlassCard image="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop" showWeb={true}>
//               <Code className="text-blue-500 mb-6" size={48} />
//               <text className="text-3xl font-black mb-6 tracking-wide">TECHNICAL SKILLS</text>
//               <div className="flex flex-wrap gap-3">
//                 {skills.map((skill, index) => (
//                   <span 
//                     key={index}
//                     className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-blue-500/20 border border-white/30 rounded-full text-xl tracking-wide hover:scale-110 hover:bg-white/10 transition-all duration-300 cursor-pointer font-oswald"
//                   >
//                     <text>{skill}</text>
//                   </span>
//                 ))}
//               </div>
//             </GlassCard>
//           </div>
//         </div>
//       </section>

//       <section id="projects" className="py-32 px-4 relative z-20">
//         <div className="max-w-6xl mx-auto">
//           <text className="text-6xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-blue-500 via-white to-red-500 bg-clip-text text-transparent tracking-wider block">
//             PROJECTS
//           </text>
//           <Glitchtext className="text-6xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-red-500 via-white to-blue-500 bg-clip-text text-transparent tracking-wider block">
//             PROJECTS
//           </Glitchtext>
          
//           <div className="grid lg:grid-cols-2 gap-10">
//             {projects.map((project, index) => (
//               <GlassCard key={index} glowColor={index % 2 === 0 ? "red" : "blue"} className="group cursor-pointer" image={project.image} showWeb={true}>
//                 <div className="relative">
//                   <div className="flex justify-between items-start mb-6">
//                     <text className="text-2xl font-black tracking-wide group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-500 font-unbounded">
//                       {project.title}
//                     </text>
//                   </div>
//                   <div className={`inline-block px-4 py-2 rounded-full font-bold text-sm tracking-wide bg-gradient-to-r ${project.gradient} text-white mb-6 font-unbounded`}>
//                     {project.tech}
//                   </div>
//                   <p className="text-gray-300 leading-relaxed font-medium group-hover:text-white transition-colors duration-300 font-oswald">
//                     {project.description}
//                   </p>
//                 </div>
//               </GlassCard>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="achievements" className="py-32 px-4 relative z-20">
//         <div className="max-w-6xl mx-auto">
//           <text className="text-6xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-blue-500 via-white to-red-500 bg-clip-text text-transparent tracking-wider block">
//             ACHIEVEMENTS
//           </text>
//           <Glitchtext className="text-6xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-blue-500 via-white to-red-500 bg-clip-text text-transparent tracking-wider block">
//             ACHIEVEMENTS
//           </Glitchtext>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {awards.map((award, index) => (
//               <GlassCard key={index} className="text-center hover:rotate-1 transition-transform duration-500" glowColor={index % 3 === 0 ? "red" : index % 3 === 1 ? "blue" : "yellow"} image={award.image} showWeb={true}>
//                 <div className="mb-6 flex justify-center">
//                   {award.icon}
//                 </div>
//                 <text className="font-bold text-lg leading-relaxed tracking-wide block mb-2 font-unbounded">
//                   {award.title}
//                 </text>
//                 <p className="text-gray-400 font-semibold font-oswald">{award.year}</p>
//               </GlassCard>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="connect" className="py-32 px-4 relative z-20">
//         <div className="max-w-4xl mx-auto text-center">
//           <text className="text-6xl md:text-7xl font-black mb-16 bg-gradient-to-r from-blue-500 via-white to-blue-500 bg-clip-text text-transparent tracking-wider block">
//             CONNECT
//           </text>
//           <Glitchtext className="text-6xl md:text-7xl font-black mb-16 text-blue-500 bg-clip-text text-transparent tracking-wider block">
//             CONNECT
//           </Glitchtext>
          
//           <GlassCard className="max-w-3xl mx-auto" image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop" showWeb={true}>
//             <p className="text-2xl mb-12 text-gray-200 font-medium leading-relaxed font-oswald italic">
//               Ready to build something <text className="text-blue-500 font-black">EXTRAORDINARY</text>? 
//               Let's swing into the future together.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
//               <a 
//                 href="mailto:madhan2004offcl@gmail.com"
//                 className="group flex items-center justify-center px-10 py-5 border-2 border-blue-500 hover:bg-blue-500/20 rounded-full font-black text-lg tracking-wider transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30"
//               >
//                 <Mail className="mr-4 group-hover:scale-110 transition-transform duration-300" size={24} />
//                 <text>EMAIL ME</text>
//                 {/* <span className="absolute bottom-2 right-2 text-oswald text-xs italic text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   Thwip!
//                 </span>
//                 <span className="absolute top-2 left-2 text-oswald text-xs italic text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   Zap!
//                 </span> */}
//               </a>
              
//               <a 
//                 href="tel:+916374722300"
//                 className="group flex items-center justify-center px-10 py-5 border-2 border-blue-500 hover:bg-blue-500/20 rounded-full font-black text-lg tracking-wider transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30"
//               >
//                 <Phone className="mr-4 group-hover:scale-110 transition-transform duration-300" size={24} />
//                 <text>CALL ME</text>
//                 {/* <span className="absolute bottom-2 right-2 text-oswald text-xs italic text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   Swing!
//                 </span>
//                 <span className="absolute top-2 left-2 text-oswald text-xs italic text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   Pow!
//                 </span> */}
//               </a>
//             </div>

//             <div className="pt-8 border-t border-white/20">
//               <div className="flex items-center justify-center text-gray-300 mb-4 font-semibold">
//                 <MapPin size={24} className="mr-3" />
//                 <text className="tracking-wide font-unbounded">Vellore, TAMIL NADU, INDIA</text>
//               </div>
//               {/* <p className="text-gray-400 font-medium tracking-wide font-oswald italic">
//                 <text>GPA: 8.72/10 | 730+ LEETCODE PROBLEMS SOLVED</text>
//               </p> */}
//             </div>
//           </GlassCard>
//         </div>
//       </section>

//       <style jsx>{`
//         * {
//           font-family: 'Oswald', 'Bebas Neue', 'Unbounded', 'oswald Display', Impact, Arial Black, sans-serif !important;
//         }

//         .font-unbounded {
//           font-family: 'Unbounded', sans-serif !important;
//         }

//         .font-oswald {
//           font-family: 'oswald Display', cursive !important;
//         }

//         @keyframes glitch {
//           0% { transform: translate(0); }
//           20% { transform: translate(-2px, 2px); }
//           40% { transform: translate(-2px, -2px); }
//           60% { transform: translate(2px, 2px); }
//           80% { transform: translate(2px, -2px); }
//           100% { transform: translate(0); }
//         }

//         .animate-glitch {
//           animation: glitch 0.3s infinite;
//         }

//         @media (max-width: 768px) {
//           .text-8xl {
//             font-size: 4rem !important;
//           }
//           .text-7xl {
//             font-size: 3.5rem !important;
//           }
//           .text-6xl {
//             font-size: 3rem !important;
//           }
//           .text-3xl {
//             font-size: 1.5rem !important;
//           }
//           .text-2xl {
//             font-size: 1.25rem !important;
//           }
//           .text-xl {
//             font-size: 1rem !important;
//           }
//           .w-48.h-48 {
//             width: 8rem !important;
//             height: 8rem !important;
//           }
//         }

//         @media (min-width: 768px) and (max-width: 1024px) {
//           .text-8xl {
//             font-size: 6rem !important;
//           }
//           .text-7xl {
//             font-size: 5rem !important;
//           }
//           .text-6xl {
//             font-size: 4rem !important;
//           }
//           .text-3xl {
//             font-size: 2rem !important;
//           }
//           .text-2xl {
//             font-size: 1.5rem !important;
//           }
//           .text-xl {
//             font-size: 1.25rem !important;
//           }
//           .w-48.h-48 {
//             width: 10rem !important;
//             height: 10rem !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Portfolio;

// import React, { useState, useEffect } from 'react';
// import { Github, Mail, Code, Award, GraduationCap, Phone, MapPin, Star, Trophy, Target, Home, User, Briefcase, PhoneCall } from 'lucide-react';
// import profile from './assets/1.jpg'; // Ensure the profile image is in the correct path

// const Portfolio = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const ComicPopText = ({ children, className = "" }) => (
//     <div className={`relative inline-block ${className}`}>
//       <span 
//         className="relative z-20 font-Shadows text-white transition-all duration-300 group-hover:scale-110 group-hover:text-yellow-400"
//         style={{
//           // textShadow: '2px 2px 0 #ff0040, -2px -2px 0 #0099ff',
//         }}
//       >
//         {children}
//       </span>
//       <span 
//         className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-300"
//         style={{
//           // background: 'linear-gradient(45deg, #ff0040, #0099ff)',
//           WebkitBackgroundClip: 'text',
//           WebkitTextFillColor: 'transparent',
//           transform: 'translate(3px, 3px)',
//           zIndex: 10,
//           fontFamily: 'Unbounded, sans-serif',
//         }}
//       >
//         {children}
//       </span>
//       <div 
//         className="absolute -inset-2 opacity-0 group-hover:opacity-50 transition-opacity duration-500"
//         style={{
//           // background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
//           // animation: 'webPulse 1.5s infinite',
//         }}
//       />
//     </div>
//   );

//   const GlassCard = ({ children, className = "", glowColor = "red" }) => (
//     <div 
//       className={`relative group backdrop-blur-xl bg-black/20 border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-black/30 transition-all duration-500 hover:scale-105 overflow-hidden ${className}`}
//       style={{
//         boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
//       }}
//     >
//       <div 
//         className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
//         style={{
//           background: glowColor === 'red' 
//             ? 'linear-gradient(45deg, #ff0040, #ff6b9d)' 
//             : glowColor === 'blue'
//             ? 'linear-gradient(45deg, #0099ff, #66d9ff)'
//             : 'linear-gradient(45deg, #ffd700, #ffed4e)',
//         }}
//       />
//       <div className="absolute top-6 right-4 text-blue/50 font-Shadows text-lg italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//         Thwip!
//       </div>
//       <div className="absolute bottom-4 left-4 text-yellow-400 font-Shadows text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//         Zap!
//       </div>
//       <div className="absolute bottom-2 right-8 text-pink-400 font-Shadows text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//         Bam!
//       </div>
//       <div className="relative z-10">
//         {children}
//       </div>
//     </div>
//   );

//   const projects = [
//     {
//       title: "CodeCraft-AI powered competitive coding platform",
//       tech: "React & Ollama",
//       description: "Built an interactive platform to help users strengthen core programming concepts through personalized challenges and intelligent feedback. Features include progress tracking, visual skill analytics, gamified achievements, and AI-driven content generation. Developed using React and Ollama, with plans to expand into real code implementation.",
//       gradient: "from-red-500 to-pink-500",
//     },
//     {
//       title: "AI Tutor Powered by Generative AI",
//       tech: "Python",
//       description: "Built an AI-powered tutor application utilizing Generative AI with Python to provide personalized learning experiences for students.",
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       title: "Vision LLM for 6G Vehicular Networks",
//       tech: "Python & Ollama",
//       description: "Developed a research-driven system leveraging Vision LLM to enhance perception, decision-making, and communication in 6G-enabled autonomous vehicular networks, ensuring efficiency and safety.",
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       title: "Video Transcription and Subtitle Generator",
//       tech: "Python & Whisper AI",
//       description: "Built a tool in Python with LLM integration to transcribe videos and automatically generate accurate subtitles, enhancing accessibility and content comprehension.",
//       gradient: "from-green-500 to-teal-500",
//     },
//     {
//       title: "Aptithon Event Website",
//       tech: "HTML, CSS & JavaScript",
//       description: "Designed and developed a website for Aptithon'25, featuring event details, blogs, photo gallery, FAQs, and participant management, ensuring seamless user engagement and accessibility.",
//       gradient: "from-yellow-500 to-orange-500",
//     },
//     {
//       title: "Techathon Event Website",
//       tech: "React",
//       description: "Built and maintained the official website for Techathon, a technical hackathon, providing event information and seamless communication between organizers and attendees.",
//       gradient: "from-indigo-500 to-blue-500",
//     },
//     {
//       title: "Automated Pseudocode Evaluation System",
//       tech: "HTML, CSS & Flask",
//       description: "Developed a web-based system using Flask to automate the evaluation of pseudocode, providing efficient feedback to users on their programming solutions for our college programming club.",
//       gradient: "from-teal-500 to-green-500",
//     },
//   ];

//   const skills = [
//     "C", "Python", "Java", "DBMS", "SQL", "NoSQL", "React", "Express", "Node", "MongoDB", 
//     "OOPS", "YOLO & CNN", "UI Development", "Problem Solving", "Git Version Control",
//   ];

//   const areasOfExpertise = [
//     "Artificial Intelligence", "Machine Learning", "Internet of Things", 
//     "Object Detection Algorithms", "Large Language Models", "Full Stack Development",
//   ];

//   const certifications = [
//     { title: "Python Fundamentals", issuer: "Infosys Springboard" },
//     { title: "Data Analytics", issuer: "Google" },
//     { title: "Introduction to Internet of Things", issuer: "NPTEL" },
//     { title: "Design Thinking - A Primer", issuer: "NPTEL" },
//   ];

//   const awards = [
//     {
//       title: "Best Performer in Research Projects",
//       year: "2025",
//       description: "Recognized by the IT Department for exceptional contributions and performance in academic research initiatives.",
//       icon: <Star className="text-yellow-500" size={48} />,
//     },
//     {
//       title: "Best Performer in Developing Societal Applications",
//       year: "2025",
//       description: "Awarded by the IT Department for impactful work on applications addressing real-world societal needs.",
//       icon: <Target className="text-green-500" size={48} />,
//     },
//     {
//       title: "Aptithon'25 Winner - 4th Place",
//       year: "2025",
//       description: "Secured 4th place in Aptithon, a competitive aptitude-focused hackathon organized by the Training Department, showcasing strong problem-solving and teamwork skills.",
//       icon: <Trophy className="text-orange-500" size={48} />,
//     },
//     {
//       title: "Academic Excellence",
//       year: "2022-2024",
//       description: "Won the Academic Excellence Award for three consecutive semesters, demonstrating strong academic performance and effective learning skills.",
//       icon: <GraduationCap className="text-blue-500" size={48} />,
//     },
//     {
//       title: "LeetCode 365-day Badge",
//       year: "730+ Problems",
//       description: "Achieved the LeetCode 365-day badge and successfully solved over 730+ problems, ranking among the top tier of competitors.",
//       icon: <Code className="text-red-500" size={48} />,
//     },
//     {
//       title: "NPTEL IoT Course",
//       year: "2024-2025",
//       description: "Achieved 85% score in the Introduction to Internet of Things course, demonstrating a strong understanding of IoT concepts and applications.",
//       icon: <Award className="text-purple-500" size={48} />,
//     },
//     {
//       title: "Finalist in Verveathon",
//       year: "2023-2024",
//       description: "Participated in Verveathon, advancing to the final round with 'QP Generator with AI' - an app designed to automate and enhance question paper generation using AI.",
//       icon: <Trophy className="text-yellow-600" size={48} />,
//     },
//   ];

//   const experiences = [
//     {
//       role: "Joint Secretary - SPROC",
//       description: "Orchestrated programming events and activities, promoting technological skills among college students.",
//     },
//     {
//       role: "Verveathon 2024",
//       description: "Led Verveathon 2024, fostering innovation and collaboration among participants.",
//     },
//     {
//       role: "PORT-2024",
//       description: "Contributed to the success of the departmental symposium, ensuring a positive experience for all.",
//     },
//     {
//       role: "Intel OneAPI Workshop",
//       description: "Conducted a workshop on 'Leveraging AI and ML using Intel OneAPI toolkits.'",
//     },
//     {
//       role: "LLM Workshop",
//       description: "Conducted a session on applications and fine-tuning of Large Language Models for AI-driven solutions.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white overflow-x-hidden">
//       <div className="fixed inset-0 z-0">
//         <div 
//           className="absolute w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"
//           style={{
//             transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
//             left: '10%',
//             top: '20%'
//           }}
//         />
//         <div 
//           className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
//           style={{
//             transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
//             right: '10%',
//             bottom: '20%',
//             animationDelay: '1s'
//           }}
//         />
//         <div 
//           className="absolute w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"
//           style={{
//             transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
//             left: '50%',
//             top: '50%',
//             animationDelay: '2s'
//           }}
//         />
//       </div>

//       <nav className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
//         <div className="flex flex-col space-y-4 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10">
//           {[
//             { icon: <Home size={20} />, section: 'home' },
//             { icon: <User size={20} />, section: 'about' },
//             { icon: <Briefcase size={20} />, section: 'projects' },
//             { icon: <Trophy size={20} />, section: 'achievements' },
//             { icon: <Briefcase size={20} />, section: 'experience' },
//             { icon: <PhoneCall size={20} />, section: 'connect' },
//           ].map(({ icon, section }, index) => (
//             <button
//               key={index}
//               onClick={() => scrollToSection(section)}
//               className="text-white hover:text-red-400 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
//             >
//               {icon}
//             </button>
//           ))}
//         </div>
//       </nav>

//      <section id="home" className="min-h-screen py-20 px-4 relative z-20 flex items-center justify-center">
//         <div className="w-full max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            
//             {/* Profile Card - Enhanced and Cooler */}
//             <div className="relative group">
//               {/* Floating Elements */}
//               <div className="absolute -top-10 -left-10 w-20 h-20 bg-red-500/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '0s'}}></div>
//               <div className="absolute -top-5 -right-5 w-16 h-16 bg-blue-500/20 rounded-full blur-lg animate-bounce" style={{animationDelay: '1s'}}></div>
//               <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-yellow-500/20 rounded-full blur-lg animate-bounce" style={{animationDelay: '2s'}}></div>
              
//               <GlassCard glowColor="blue" className="group cursor-pointer transform hover:rotate-1 transition-all duration-700">
//                 <div className="relative">
//                   {/* Profile Image with Enhanced Effects */}
//                   <div className="flex flex-col items-center mb-8">
//                     <div className="relative group/image mb-6">
//                       {/* Glowing Ring */}
//                       <div className="absolute -inset-4 bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-700 blur-lg animate-spin-slow"></div>
                      
//                       {/* Profile Image */}
//                       <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500">
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
//                         <img
//                           src={profile}
//                           alt="Profile Picture"
//                           className="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700"
//                         />
//                         {/* Overlay Effects */}
//                         <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                       </div>
                      
//                       {/* Floating Status Indicators */}
//                       <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-black animate-pulse shadow-lg shadow-green-500/50"></div>
//                     </div>
                    
//                     {/* Enhanced Name with Multiple Effects */}
//                     <div className="text-center relative">
//                       <ComicPopText className="text-4xl md:text-5xl font-oswald font-black tracking-wider font-unbounded mb-2 block">
//                         MADHAN R
//                       </ComicPopText>
//                       <div className="text-3xl font-oswald text-blue-400">
//                         AI & Data Science Engineer
//                       </div>
                      
//                       {/* Animated Underline */}
//                       {/* <div className="w-0 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mt-4 group-hover:w-full transition-all duration-1000 rounded-full"></div> */}
//                     </div>
//                   </div>
                  
//                   {/* Enhanced Description */}
//                   <div className="relative">
//                     <p className="text-gray-300 leading-relaxed font-medium text-lg group-hover:text-white transition-colors duration-300 font-oswald text-center mb-8">
//                       An enthusiastic B.Tech student specializing in  
//                       <span className="text-red-400 font-oswald">  AI and Data Science</span>, 
//                       proficient in <span className="text-blue-400 font-oswald">Python, JavaScript and its frameworks.</span> Successfully completed AI-driven projects. 
//                       Demonstrated leadership by organizing impactful tech events within the college community.
//                     </p>
                    
//                     {/* Stats Cards */}
//                     <div className="grid grid-cols-3 gap-4 mb-8">
//                       <div className="text-center bg-red-500/10 rounded-xl p-3 border border-red-500/20">
//                         <div className="text-2xl font-black text-red-400">750+</div>
//                         <div className="text-xs text-gray-400 font-oswald">Problems Solved</div>
//                       </div>
//                       <div className="text-center bg-blue-500/10 rounded-xl p-3 border border-blue-500/20">
//                         <div className="text-2xl font-black text-blue-400">7+</div>
//                         <div className="text-xs text-gray-400 font-oswald">Projects</div>
//                       </div>
//                       <div className="text-center bg-green-500/10 rounded-xl p-3 border border-green-500/20">
//                         <div className="text-2xl font-black text-green-400">8.72</div>
//                         <div className="text-xs text-gray-400 font-oswald">GPA</div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Enhanced Social Links */}
//                   <div className="flex gap-6 justify-center">
//                     <a
//                       href="https://github.com/MadhanR-2004"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="group/btn flex items-center px-6 py-3 bg-black/60 border-2 border-white/20 rounded-full font-bold text-white hover:bg-black/80 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-white/20 hover:border-white/40"
//                     >
//                       <Github className="mr-3 group-hover/btn:rotate-12 transition-transform duration-300" size={24} />
//                       <span className="group-hover/btn:tracking-wider transition-all duration-300">GitHub</span>
//                     </a>
//                     <a
//                       href="https://www.linkedin.com/in/madhan4/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="group/btn flex items-center px-6 py-3 bg-blue-600/80 border-2 border-blue-400/50 rounded-full font-bold text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/30 hover:border-blue-400"
//                     >
//                       <svg className="mr-3 group-hover/btn:rotate-12 transition-transform duration-300" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.271c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.271h-3v-4.604c0-1.099-.021-2.513-1.531-2.513-1.531 0-1.767 1.195-1.767 2.431v4.686h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.562 2.838-1.562 3.036 0 3.6 2 3.6 4.59v4.739z"/>
//                       </svg>
//                       <span className="group-hover/btn:tracking-wider transition-all duration-300">LinkedIn</span>
//                     </a>
//                   </div>
//                 </div>
//               </GlassCard>
//             </div>

//             {/* Welcome Text Section - Enhanced */}
//             <div className="text-center lg:text-left space-y-8">
//               {/* Main Hero Text */}
//               <div className="space-y-6">
//                 {/* Animated Subtitle */}
//                 <div className="text-2xl md:text-3xl font-bold text-gray-300 font-oswald animate-fade-in-up" style={{animationDelay: '0.5s'}}>
//                   Your <span className="font-Shadows text-red-400"> friendly</span> neighborhood <span className="font-Shadows text-blue-400">Developer</span>
//                 </div>
//               </div>

//               {/* Feature Highlights */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up" style={{animationDelay: '1s'}}>
//                 <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 p-6 rounded-2xl border border-red-500/20 transform hover:scale-105 transition-all duration-300">
//                   <Code className="text-red-400 mb-3" size={32} />
//                   <h3 className="font-bold text-xl mb-2 font-unbounded">Full Stack Developer</h3>
//                   <p className="text-gray-400 font-oswald">Building end-to-end solutions with modern technologies</p>
//                 </div>
                
//                 <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-2xl border border-blue-500/20 transform hover:scale-105 transition-all duration-300">
//                   <Star className="text-blue-400 mb-3" size={32} />
//                   <h3 className="font-bold text-xl mb-2 font-unbounded">AI Enthusiast</h3>
//                   <p className="text-gray-400 font-oswald">Exploring the frontiers of artificial intelligence</p>
//                 </div>
//               </div>

//               {/* CTA Section */}
//               <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in-up" style={{animationDelay: '1.5s'}}>
//                 <button
//                   onClick={() => scrollToSection('projects')}
//                   className="group px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full font-bold text-lg tracking-wider transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-red-500/30 transform hover:-translate-y-1"
//                 >
//                   <span className="group-hover:tracking-widest transition-all duration-300">VIEW PROJECTS</span>
//                 </button>
//                 <button
//                   onClick={() => scrollToSection('connect')}
//                   className="group px-8 py-4 border-2 border-blue-500 rounded-full font-bold text-lg tracking-wider transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/30 hover:bg-blue-500/20 transform hover:-translate-y-1"
//                 >
//                   <span className="group-hover:tracking-widest transition-all duration-300">GET IN TOUCH</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>


//       <section id="about" className="py-32 px-4 relative z-20">
//         <div className="max-w-6xl mx-auto">
//           <ComicPopText className="text-6xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-blue-500 via-white to-red-500 bg-clip-text text-transparent tracking-wider block">
//             ABOUT ME
//           </ComicPopText>
          
//           <div className="grid md:grid-cols-2 gap-12">
//             <GlassCard glowColor="red">
//               <GraduationCap className="text-red-500 mb-6" size={48} />
//               <ComicPopText className="text-3xl font-black mb-6 tracking-wide font-unbounded">
//                 EDUCATION
//               </ComicPopText>
//               <div className="space-y-6">
//                 <div>
//                   <h4 className="font-black text-xl tracking-wide font-unbounded">B.Tech (AI&DS)</h4>
//                   <p className="text-gray-300 font-semibold font-oswald">Sona College of Technology</p>
//                   <p className="text-gray-400 font-medium font-oswald italic">2022 - 2026 | GPA: 8.72/10</p>
//                 </div>
//                 <div>
//                   <h4 className="font-black text-lg tracking-wide font-unbounded">HSC - 89%</h4>
//                   <p className="text-gray-300 font-oswald">Vidhyalakshmi Matric Higher Secondary School, Vellore</p>
//                   <p className="text-gray-400 font-medium font-oswald italic">2020 - 2022</p>
//                 </div>
//                 <div>
//                   <h4 className="font-black text-lg tracking-wide font-unbounded">SSLC - 99%</h4>
//                   <p className="text-gray-300 font-oswald">Ambalal Jain Saraswathi Matriculation Vidyalaya, Vellore</p>
//                   <p className="text-gray-400 font-medium font-oswald italic">2018 - 2020</p>
//                 </div>
//               </div>
//             </GlassCard>

//             <GlassCard glowColor="blue">
//               <Code className="text-blue-500 mb-6" size={48} />
//               <ComicPopText className="text-3xl font-black mb-6 tracking-wide font-Shadows">
//                 TECHNICAL SKILLS
//               </ComicPopText>
//               <div className="flex flex-wrap gap-3">
//                 {skills.map((skill, index) => (
//                   <span 
//                     key={index}
//                     className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-blue-500/20 border border-white/30 rounded-full text-xl tracking-wide hover:scale-110 hover:bg-white/10 transition-all duration-300 cursor-pointer font-oswald"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//               <ComicPopText className="text-3xl font-black mt-8 mb-4 tracking-wide font-unbounded">
//                 AREAS OF EXPERTISE
//               </ComicPopText>
//               <div className="flex flex-wrap gap-3">
//                 {areasOfExpertise.map((expertise, index) => (
//                   <span 
//                     key={index}
//                     className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/30 rounded-full text-xl tracking-wide hover:scale-110 hover:bg-white/10 transition-all duration-300 cursor-pointer font-oswald"
//                   >
//                     {expertise}
//                   </span>
//                 ))}
//               </div>
//             </GlassCard>
//           </div>
//         </div>
//       </section>

//       <section id="projects" className="py-32 px-4 relative z-20">
//         <div className="max-w-6xl mx-auto">
//           <ComicPopText className="text-6xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-blue-500 via-white to-red-500 bg-clip-text text-transparent tracking-wider block">
//             PROJECTS
//           </ComicPopText>
          
//           <div className="grid lg:grid-cols-2 gap-10">
//             {projects.map((project, index) => (
//               <GlassCard key={index} glowColor={index % 2 === 0 ? "red" : "blue"} className="group cursor-pointer">
//                 <div className="relative">
//                   <ComicPopText className="text-2xl font-black tracking-wide mb-6 font-unbounded">
//                     {project.title}
//                   </ComicPopText>
//                   <div className={`inline-block px-4 py-2 rounded-full font-bold text-sm tracking-wide bg-gradient-to-r ${project.gradient} text-white mb-6 font-unbounded`}>
//                     {project.tech}
//                   </div>
//                   <p className="text-gray-300 leading-relaxed font-medium group-hover:text-white transition-colors duration-300 font-oswald">
//                     {project.description}
//                   </p>
//                 </div>
//               </GlassCard>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="achievements" className="py-32 px-4 relative z-20">
//         <div className="max-w-6xl mx-auto">
//           <ComicPopText className="text-6xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-blue-500 via-white to-red-500 bg-clip-text text-transparent tracking-wider block">
//             ACHIEVEMENTS
//           </ComicPopText>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {awards.map((award, index) => (
//               <GlassCard key={index} className="text-center hover:rotate-1 transition-transform duration-500" glowColor={index % 3 === 0 ? "red" : index % 3 === 1 ? "blue" : "yellow"}>
//                 <div className="mb-6 flex justify-center">
//                   {award.icon}
//                 </div>
//                 <ComicPopText className="font-bold text-lg leading-relaxed tracking-wide block mb-2 font-unbounded">
//                   {award.title}
//                 </ComicPopText>
//                 <p className="text-gray-400 font-semibold font-oswald">{award.year}</p>
//                 <p className="text-gray-300 text-sm font-oswald mt-2">{award.description}</p>
//               </GlassCard>
//             ))}
//           </div>

//           <div className="mt-12">
//             <ComicPopText className="text-3xl font-black text-center mb-8 bg-gradient-to-r from-blue-500 via-white to-red-500 bg-clip-text text-transparent tracking-wider block">
//               CERTIFICATIONS
//             </ComicPopText>
//             <div className="grid md:grid-cols-2 gap-8">
//               {certifications.map((cert, index) => (
//                 <GlassCard key={index} glowColor={index % 2 === 0 ? "red" : "blue"} className="text-center">
//                   <Award className="text-purple-500 mb-4 mx-auto" size={36} />
//                   <ComicPopText className="font-bold text-lg tracking-wide font-unbounded">{cert.title}</ComicPopText>
//                   <p className="text-gray-400 font-oswald">{cert.issuer}</p>
//                 </GlassCard>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="experience" className="py-32 px-4 relative z-20">
//         <div className="max-w-6xl mx-auto">
//           <ComicPopText className="text-6xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-blue-500 via-white to-red-500 bg-clip-text text-transparent tracking-wider block">
//             EXPERIENCE
//           </ComicPopText>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             {experiences.map((exp, index) => (
//               <GlassCard key={index} glowColor={index % 2 === 0 ? "red" : "blue"} className="group cursor-pointer">
//                 <ComicPopText className="text-xl font-black tracking-wide mb-4 font-unbounded">
//                   {exp.role}
//                 </ComicPopText>
//                 <p className="text-gray-300 leading-relaxed font-medium group-hover:text-white transition-colors duration-300 font-oswald">
//                   {exp.description}
//                 </p>
//               </GlassCard>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="connect" className="py-32 px-4 relative z-20">
//         <div className="max-w-4xl mx-auto text-center">
//           <ComicPopText className="text-6xl md:text-7xl font-black mb-16 bg-gradient-to-r from-blue-500 via-white to-red-500 bg-clip-text text-transparent tracking-wider block">
//             CONNECT
//           </ComicPopText>
          
//           <GlassCard className="max-w-3xl mx-auto">
//             <p className="text-2xl mb-12 text-gray-200 font-medium leading-relaxed font-oswald italic">
//               Ready to build something <span className="text-blue-500 font-black">EXTRAORDINARY</span>? 
//               Let's swing into the future together.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
//               <a 
//                 href="mailto:madhan2004offcl@gmail.com"
//                 className="group flex items-center justify-center px-10 py-5 border-2 border-blue-500 hover:bg-blue-500/20 rounded-full font-black text-lg tracking-wider transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30"
//               >
//                 <Mail className="mr-4 group-hover:scale-110 transition-transform duration-300" size={24} />
//                 EMAIL ME
//               </a>
              
//               <a 
//                 href="tel:+916374722300"
//                 className="group flex items-center justify-center px-10 py-5 border-2 border-blue-500 hover:bg-blue-500/20 rounded-full font-black text-lg tracking-wider transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30"
//               >
//                 <Phone className="mr-4 group-hover:scale-110 transition-transform duration-300" size={24} />
//                 CALL ME
//               </a>
//             </div>

//             <div className="pt-8 border-t border-white/20">
//               <div className="flex items-center justify-center text-gray-300 mb-4 font-semibold">
//                 <MapPin size={24} className="mr-3" />
//                 <span className="tracking-wide font-unbounded">Vellore, Tamil Nadu, India</span>
//               </div>
//             </div>
//           </GlassCard>
//         </div>
//       </section>

//       <style jsx>{`
//         * {
//           font-family: 'Oswald', 'Bebas Neue', 'Unbounded', 'oswald Display', 'Shadows Into Light', Impact, Arial Black, sans-serif !important;
//         }

//         .font-unbounded {
//           font-family: 'Unbounded', sans-serif !important;
//         }

//         .font-oswald {
//           font-family: 'Oswald', cursive !important;
//         }
//       .font-Shadows{
//           font-family: 'Shadows Into Light', cursive !important;
//       }

//         @keyframes webPulse {
//           0% { transform: scale(1); opacity: 0.5; }
//           50% { transform: scale(1.2); opacity: 0.8; }
//           100% { transform: scale(1); opacity: 0.5; }
//         }

//         @media (max-width: 768px) {
//           .text-7xl {
//             font-size: 3rem !important;
//           }
//           .text-6xl {
//             font-size: 2.5rem !important;
//           }
//           .text-3xl {
//             font-size: 1.5rem !important;
//           }
//           .text-2xl {
//             font-size: 1.25rem !important;
//           }
//           .text-xl {
//             font-size: 1rem !important;
//           }
//           .w-32.h-32 {
//             width: 6rem !important;
//             height: 6rem !important;
//           }
//         }

//         @media (min-width: 768px) and (max-width: 1024px) {
//           .text-7xl {
//             font-size: 4rem !important;
//           }
//           .text-6xl {
//             font-size: 3.5rem !important;
//           }
//           .text-3xl {
//             font-size: 2rem !important;
//           }
//           .text-2xl {
//             font-size: 1.5rem !important;
//           }
//           .text-xl {
//             font-size: 1.25rem !important;
//           }
//           .w-32.h-32 {
//             width: 8rem !important;
//             height: 8rem !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Portfolio;

import React, { useState, useEffect, useRef } from 'react';
import { Github, Mail, Code, Award, GraduationCap, Phone, MapPin, Star, Trophy, Target, Home, User, Briefcase, PhoneCall } from 'lucide-react';
import profile from './assets/1.jpg'; // Import the profile image

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [touchedCards, setTouchedCards] = useState(new Set());
  const sectionsRef = useRef({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
      updateActiveSection();
    };

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 200;
      let newActiveSection = 'home';
      
      Object.entries(sectionsRef.current).forEach(([id, element]) => {
        if (!element) return;
        
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          newActiveSection = id;
        }
      });
      
      setActiveSection(newActiveSection);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Initialize sections ref
    const sectionIds = ['home', 'about', 'projects', 'achievements', 'experience', 'connect'];
    sectionIds.forEach(id => {
      sectionsRef.current[id] = document.getElementById(id);
    });

    // Initial check
    updateActiveSection();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleCardTouch = (cardId) => {
    setTouchedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  const ComicPopText = ({ children, className = "" }) => (
    <div className={`relative inline-block ${className}`}>
      <span 
        className="relative z-20 font-Shadows text-white transition-all duration-300 group-hover:scale-110 group-hover:text-yellow-400"
      >
        {children}
      </span>
      <span 
        className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-300"
        style={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          transform: 'translate(3px, 3px)',
          zIndex: 10,
          fontFamily: 'Unbounded, sans-serif',
        }}
      >
        {children}
      </span>
      <div 
        className="absolute -inset-2 opacity-0 group-hover:opacity-50 transition-opacity duration-500"
      />
    </div>
  );

  const GlassCard = ({ children, className = "", glowColor = "red", onClick, cardId }) => {
    const [isActive, setIsActive] = useState(false);
    
    const handleInteraction = (e) => {
      if (onClick) {
        onClick(e);
      }
      
      // Toggle active state for visual feedback
      setIsActive(prev => !prev);
      
      // Reset after animation
      setTimeout(() => setIsActive(false), 300);
    };

    const handleTouchStart = (e) => {
      e.preventDefault(); // Prevent default touch behavior
      setIsActive(true);
    };

    const handleTouchEnd = (e) => {
      e.preventDefault();
      handleInteraction(e);
    };
    
    return (
      <div 
        className={`relative group backdrop-blur-xl bg-black/20 border border-white/10 rounded-3xl p-8 shadow-2xl transition-all transform duration-500 overflow-hidden ${className}
          ${onClick ? 'cursor-pointer' : ''}
          ${isActive ? 'bg-black/30 scale-105' : ''}
          hover:bg-black/30 hover:scale-105 active:bg-black/30 active:scale-105 touch-manipulation`}
        style={{
          boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
        }}
        onClick={handleInteraction}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className={`absolute inset-0 rounded-3xl transition-opacity duration-500 blur-xl
            ${isActive ? 'opacity-20' : 'opacity-0 group-hover:opacity-20 group-active:opacity-20'}`}
          style={{
            background: glowColor === 'red' 
              ? 'linear-gradient(45deg, #ff0040, #ff6b9d)' 
              : glowColor === 'blue'
              ? 'linear-gradient(45deg, #0099ff, #66d9ff)'
              : 'linear-gradient(45deg, #ffd700, #ffed4e)',
          }}
        />
        <div className={`absolute top-6 right-4 text-blue-400/70 font-Shadows text-lg italic transition-opacity duration-500
          ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-active:opacity-100'}`}>
          Thwip!
        </div>
        <div className={`absolute bottom-4 left-4 text-yellow-400 font-Shadows text-sm italic transition-opacity duration-500
          ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-active:opacity-100'}`}>
          Zap!
        </div>
        <div className={`absolute bottom-2 right-8 text-pink-400 font-Shadows text-sm italic transition-opacity duration-500
          ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-active:opacity-100'}`}>
          Bam!
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  };

  const projects = [
    {
      title: "CodeCraft-AI powered competitive coding platform",
      tech: "React & Ollama",
      description: "Built an interactive platform to help users strengthen core programming concepts through personalized challenges and intelligent feedback. Features include progress tracking, visual skill analytics, gamified achievements, and AI-driven content generation. Developed using React and Ollama, with plans to expand into real code implementation.",
      gradient: "from-red-500 to-pink-500",
    },
    {
      title: "AI Tutor Powered by Generative AI",
      tech: "Python",
      description: "Built an AI-powered tutor application utilizing Generative AI with Python to provide personalized learning experiences for students.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Vision LLM for 6G Vehicular Networks",
      tech: "Python & Ollama",
      description: "Developed a research-driven system leveraging Vision LLM to enhance perception, decision-making, and communication in 6G-enabled autonomous vehicular networks, ensuring efficiency and safety.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Video Transcription and Subtitle Generator",
      tech: "Python & Whisper AI",
      description: "Built a tool in Python with LLM integration to transcribe videos and automatically generate accurate subtitles, enhancing accessibility and content comprehension.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Aptithon Event Website",
      tech: "HTML, CSS & JavaScript",
      description: "Designed and developed a website for Aptithon'25, featuring event details, blogs, photo gallery, FAQs, and participant management, ensuring seamless user engagement and accessibility.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Techathon Event Website",
      tech: "React",
      description: "Built and maintained the official website for Techathon, a technical hackathon, providing event information and seamless communication between organizers and attendees.",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "Automated Pseudocode Evaluation System",
      tech: "HTML, CSS & Flask",
      description: "Developed a web-based system using Flask to automate the evaluation of pseudocode, providing efficient feedback to users on their programming solutions for our college programming club.",
      gradient: "from-teal-500 to-green-500",
    },
  ];

  const skills = [
    "C", "Python", "Java", "DBMS", "SQL", "NoSQL", "React", "Express", "Node", "MongoDB", 
    "OOPS", "YOLO & CNN", "UI Development", "Problem Solving", "Git Version Control",
  ];

  const areasOfExpertise = [
    "Artificial Intelligence", "Machine Learning", "Internet of Things", 
    "Object Detection Algorithms", "Large Language Models", "Full Stack Development",
  ];

  const certifications = [
    { title: "Python Fundamentals", issuer: "Infosys Springboard" },
    { title: "Data Analytics", issuer: "Google" },
    { title: "Introduction to Internet of Things", issuer: "NPTEL" },
    { title: "Design Thinking - A Primer", issuer: "NPTEL" },
  ];

  const awards = [
    {
      title: "Best Performer in Research Projects",
      year: "2025",
      description: "Recognized by the IT Department for exceptional contributions and performance in academic research initiatives.",
      icon: <Star className="text-yellow-500" size={48} />,
    },
    {
      title: "Best Performer in Developing Societal Applications",
      year: "2025",
      description: "Awarded by the IT Department for impactful work on applications addressing real-world societal needs.",
      icon: <Target className="text-green-500" size={48} />,
    },
    {
      title: "Aptithon'25 Winner - 4th Place",
      year: "2025",
      description: "Secured 4th place in Aptithon, a competitive aptitude-focused hackathon organized by the Training Department, showcasing strong problem-solving and teamwork skills.",
      icon: <Trophy className="text-orange-500" size={48} />,
    },
    {
      title: "Academic Excellence",
      year: "2022-2024",
      description: "Won the Academic Excellence Award for three consecutive semesters, demonstrating strong academic performance and effective learning skills.",
      icon: <GraduationCap className="text-blue-500" size={48} />,
    },
    {
      title: "LeetCode 365-day Badge",
      year: "730+ Problems",
      description: "Achieved the LeetCode 365-day badge and successfully solved over 730+ problems, ranking among the top tier of competitors.",
      icon: <Code className="text-red-500" size={48} />,
    },
    {
      title: "NPTEL IoT Course",
      year: "2024-2025",
      description: "Achieved 85% score in the Introduction to Internet of Things course, demonstrating a strong understanding of IoT concepts and applications.",
      icon: <Award className="text-purple-500" size={48} />,
    },
    {
      title: "Finalist in Verveathon",
      year: "2023-2024",
      description: "Participated in Verveathon, advancing to the final round with 'QP Generator with AI' - an app designed to automate and enhance question paper generation using AI.",
      icon: <Trophy className="text-yellow-600" size={48} />,
    },
  ];

  const experiences = [
    {
      role: "Joint Secretary - SPROC",
      description: "Orchestrated programming events and activities, promoting technological skills among college students.",
    },
    {
      role: "Verveathon 2024",
      description: "Led Verveathon 2024, fostering innovation and collaboration among participants.",
    },
    {
      role: "PORT-2024",
      description: "Contributed to the success of the departmental symposium, ensuring a positive experience for all.",
    },
    {
      role: "Intel OneAPI Workshop",
      description: "Conducted a workshop on 'Leveraging AI and ML using Intel OneAPI toolkits.'",
    },
    {
      role: "LLM Workshop",
      description: "Conducted a session on applications and fine-tuning of Large Language Models for AI-driven solutions.",
    },
  ];

  const navItems = [
    { icon: <Home size={20} />, section: 'home', label: 'Home' },
    { icon: <User size={20} />, section: 'about', label: 'About' },
    { icon: <Briefcase size={20} />, section: 'projects', label: 'Projects' },
    { icon: <Trophy size={20} />, section: 'achievements', label: 'Achievements' },
    { icon: <Briefcase size={20} />, section: 'experience', label: 'Experience' },
    { icon: <PhoneCall size={20} />, section: 'connect', label: 'Connect' },
  ];


  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '20%'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
            right: '10%',
            bottom: '20%',
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            left: '50%',
            top: '50%',
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:block fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-4 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10">
          {navItems.map(({ icon, section }, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(section)}
              className={`p-2 rounded-full transition-all duration-300 ${
                activeSection === section
                  ? 'bg-white/20 text-red-400 scale-110'
                  : 'text-white hover:text-red-400 hover:bg-white/10'
              }`}
            >
              {icon}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-t border-white/10">
        <div className="flex justify-around py-3">
          {navItems.map(({ icon, section, label }, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(section)}
              className={`flex flex-col items-center px-2 py-1 rounded-lg transition-all duration-300 ${
                activeSection === section
                  ? 'text-red-400 scale-105'
                  : 'text-white'
              }`}
            >
              <div className={`p-1 ${
                activeSection === section ? 'bg-white/10 rounded-full' : ''
              }`}>
                {icon}
              </div>
              <span className="text-xs mt-1">{label}</span>
            </button>
          ))}
        </div>
      </nav>

      <section 
        id="home" 
        ref={el => sectionsRef.current.home = el}
        className="min-h-screen py-20 px-4 relative z-20 flex items-center justify-center"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="relative group">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-red-500/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '0s'}}></div>
              <div className="absolute -top-5 -right-5 w-16 h-16 bg-blue-500/20 rounded-full blur-lg animate-bounce" style={{animationDelay: '1s'}}></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-yellow-500/20 rounded-full blur-lg animate-bounce" style={{animationDelay: '2s'}}></div>
              
              <GlassCard glowColor="blue" className="group cursor-pointer transform hover:rotate-1 transition-all duration-700">
                <div className="relative">
                  <div className="flex flex-col items-center mb-8">
                    <div className="relative group/image mb-6">
                      <div className="absolute -inset-4 bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-700 blur-lg animate-spin-slow"></div>
                      
                      <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                        <img
                          src={profile}
                          alt="Profile Picture"
                          className="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-black animate-pulse shadow-lg shadow-green-500/50"></div>
                    </div>
                    
                    <div className="text-center relative">
                      <ComicPopText className="text-4xl md:text-5xl font-black tracking-wider mb-2 block">
                        MADHAN R
                      </ComicPopText>
                      <div className="text-3xl text-blue-400">
                        AI & Data Science Engineer
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <p className="text-gray-300 leading-relaxed font-medium text-lg group-hover:text-white transition-colors duration-300 text-center mb-8">
                      An enthusiastic B.Tech student specializing in  
                      <span className="text-red-400"> AI and Data Science</span>, 
                      proficient in <span className="text-blue-400">Python, JavaScript and its frameworks.</span> Successfully completed AI-driven projects. 
                      Demonstrated leadership by organizing impactful tech events within the college community.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center bg-red-500/10 rounded-xl p-3 border border-red-500/20">
                        <div className="text-2xl font-black text-red-400">750+</div>
                        <div className="text-xs text-gray-400">Problems Solved</div>
                      </div>
                      <div className="text-center bg-blue-500/10 rounded-xl p-3 border border-blue-500/20">
                        <div className="text-2xl font-black text-blue-400">7+</div>
                        <div className="text-xs text-gray-400">Projects</div>
                      </div>
                      <div className="text-center bg-green-500/10 rounded-xl p-3 border border-green-500/20">
                        <div className="text-2xl font-black text-green-400">8.72</div>
                        <div className="text-xs text-gray-400">GPA</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 justify-center">
                    <a
                      href="https://github.com/MadhanR-2004"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center px-6 py-3 bg-black/60 border-2 border-white/20 rounded-full font-bold text-white hover:bg-black/80 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-white/20 hover:border-white/40"
                    >
                      <Github className="mr-3 group-hover/btn:rotate-12 transition-transform duration-300" size={24} />
                      <span className="group-hover/btn:tracking-wider transition-all duration-300">GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/madhan4/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center px-6 py-3 bg-blue-600/80 border-2 border-blue-400/50 rounded-full font-bold text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/30 hover:border-blue-400"
                    >
                      <svg className="mr-3 group-hover/btn:rotate-12 transition-transform duration-300" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.271c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.271h-3v-4.604c0-1.099-.021-2.513-1.531-2.513-1.531 0-1.767 1.195-1.767 2.431v4.686h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.562 2.838-1.562 3.036 0 3.6 2 3.6 4.59v4.739z"/>
                      </svg>
                      <span className="group-hover/btn:tracking-wider transition-all duration-300">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </GlassCard>
            </div>

            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-6">
                <div className="text-2xl md:text-3xl font-bold text-gray-300 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                  Your <span className="font-Shadows text-red-400"> friendly</span> neighborhood <span className="font-Shadows text-blue-400">Developer</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up" style={{animationDelay: '1s'}}>
                <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 p-6 rounded-2xl border border-red-500/20 transform hover:scale-105 transition-all duration-300">
                  <Code className="text-red-400 mb-3" size={32} />
                  <h3 className="font-bold text-xl mb-2">Full Stack Developer</h3>
                  <p className="text-gray-400">Building end-to-end solutions with modern technologies</p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-2xl border border-blue-500/20 transform hover:scale-105 transition-all duration-300">
                  <Star className="text-blue-400 mb-3" size={32} />
                  <h3 className="font-bold text-xl mb-2">AI Enthusiast</h3>
                  <p className="text-gray-400">Exploring the frontiers of artificial intelligence</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in-up" style={{animationDelay: '1.5s'}}>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full font-bold text-lg tracking-wider transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-red-500/30 transform hover:-translate-y-1"
                >
                  <span className="group-hover:tracking-widest transition-all duration-300">VIEW PROJECTS</span>
                </button>
                <button
                  onClick={() => scrollToSection('connect')}
                  className="group px-8 py-4 border-2 border-blue-500 rounded-full font-bold text-lg tracking-wider transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/30 hover:bg-blue-500/20 transform hover:-translate-y-1"
                >
                  <span className="group-hover:tracking-widest transition-all duration-300">GET IN TOUCH</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="about" 
        ref={el => sectionsRef.current.about = el}
        className="py-32 px-4 relative z-20"
      >
        <div className="max-w-6xl mx-auto">
          <ComicPopText className="text-6xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-blue-500 via-white to-red-500 bg-clip-text text-transparent tracking-wider block">
            ABOUT ME
          </ComicPopText>
          
          <div className="grid md:grid-cols-2 gap-12">
            <GlassCard glowColor="red">
              <GraduationCap className="text-red-500 mb-6" size={48} />
              <ComicPopText className="text-3xl font-black mb-6 tracking-wide">
                EDUCATION
              </ComicPopText>
              <div className="space-y-6">
                <div>
                  <h4 className="font-black text-xl tracking-wide">B.Tech (AI&DS)</h4>
                  <p className="text-gray-300 font-semibold">Sona College of Technology</p>
                  <p className="text-gray-400 font-medium italic">2022 - 2026 | GPA: 8.72/10</p>
                </div>
                <div>
                  <h4 className="font-black text-lg tracking-wide">HSC - 89%</h4>
                  <p className="text-gray-300">Vidhyalakshmi Matric Higher Secondary School, Vellore</p>
                  <p className="text-gray-400 font-medium italic">2020 - 2022</p>
                </div>
                <div>
                  <h4 className="font-black text-lg tracking-wide">SSLC - 99%</h4>
                  <p className="text-gray-300">Ambalal Jain Saraswathi Matriculation Vidyalaya, Vellore</p>
                  <p className="text-gray-400 font-medium italic">2018 - 2020</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard glowColor="blue">
              <Code className="text-blue-500 mb-6" size={48} />
              <ComicPopText className="text-3xl font-black mb-6 tracking-wide">
                TECHNICAL SKILLS
              </ComicPopText>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-blue-500/20 border border-white/30 rounded-full text-xl tracking-wide hover:scale-110 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <ComicPopText className="text-3xl font-black mt-8 mb-4 tracking-wide">
                AREAS OF EXPERTISE
              </ComicPopText>
              <div className="flex flex-wrap gap-3">
                {areasOfExpertise.map((expertise, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/30 rounded-full text-xl tracking-wide hover:scale-110 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  >
                    {expertise}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section 
        id="projects" 
        ref={el => sectionsRef.current.projects = el}
        className="py-32 px-4 relative z-20"
      >
        <div className="max-w-6xl mx-auto">
          <ComicPopText className="text-6xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-blue-500 via-white to-red-500 bg-clip-text text-transparent tracking-wider block">
            PROJECTS
          </ComicPopText>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <GlassCard key={index} glowColor={index % 2 === 0 ? "red" : "blue"} className="group cursor-pointer">
                <div className="relative">
                  <ComicPopText className="text-2xl font-black tracking-wide mb-6">
                    {project.title}
                  </ComicPopText>
                  <div className={`inline-block px-4 py-2 rounded-full font-bold text-sm tracking-wide bg-gradient-to-r ${project.gradient} text-white mb-6`}>
                    {project.tech}
                  </div>
                  <p className="text-gray-300 leading-relaxed font-medium group-hover:text-white transition-colors duration-300">
                    {project.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="achievements" 
        ref={el => sectionsRef.current.achievements = el}
        className="py-32 px-4 relative z-20"
      >
        <div className="max-w-6xl mx-auto">
          <ComicPopText className="text-6xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-blue-500 via-white to-red-500 bg-clip-text text-transparent tracking-wider block">
            ACHIEVEMENTS
          </ComicPopText>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <GlassCard key={index} className="text-center hover:rotate-1 transition-transform duration-500" glowColor={index % 3 === 0 ? "red" : index % 3 === 1 ? "blue" : "yellow"}>
                <div className="mb-6 flex justify-center">
                  {award.icon}
                </div>
                <ComicPopText className="font-bold text-lg leading-relaxed tracking-wide block mb-2">
                  {award.title}
                </ComicPopText>
                <p className="text-gray-400 font-semibold">{award.year}</p>
                <p className="text-gray-300 text-sm mt-2">{award.description}</p>
              </GlassCard>
            ))}
          </div>

          <div className="mt-12">
            <ComicPopText className="text-3xl font-black text-center mb-8 bg-gradient-to-r from-blue-500 via-white to-red-500 bg-clip-text text-transparent tracking-wider block">
              CERTIFICATIONS
            </ComicPopText>
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <GlassCard key={index} glowColor={index % 2 === 0 ? "red" : "blue"} className="text-center">
                  <Award className="text-purple-500 mb-4 mx-auto" size={36} />
                  <ComicPopText className="font-bold text-lg tracking-wide">{cert.title}</ComicPopText>
                  <p className="text-gray-400">{cert.issuer}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section 
        id="experience" 
        ref={el => sectionsRef.current.experience = el}
        className="py-32 px-4 relative z-20"
      >
        <div className="max-w-6xl mx-auto">
          <ComicPopText className="text-6xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-blue-500 via-white to-red-500 bg-clip-text text-transparent tracking-wider block">
            EXPERIENCE
          </ComicPopText>
          
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <GlassCard key={index} glowColor={index % 2 === 0 ? "red" : "blue"} className="group cursor-pointer">
                <ComicPopText className="text-xl font-black tracking-wide mb-4">
                  {exp.role}
                </ComicPopText>
                <p className="text-gray-300 leading-relaxed font-medium group-hover:text-white transition-colors duration-300">
                  {exp.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="connect" 
        ref={el => sectionsRef.current.connect = el}
        className="py-32 px-4 relative z-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <ComicPopText className="text-6xl md:text-7xl font-black mb-16 bg-gradient-to-r from-blue-500 via-white to-red-500 bg-clip-text text-transparent tracking-wider block">
            CONNECT
          </ComicPopText>
          
          <GlassCard className="max-w-3xl mx-auto">
            <p className="text-2xl mb-12 text-gray-200 font-medium leading-relaxed italic">
              Ready to build something <span className="text-blue-500 font-black">EXTRAORDINARY</span>? 
              Let's swing into the future together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
              <a 
                href="mailto:madhan2004offcl@gmail.com"
                className="group flex items-center justify-center px-10 py-5 border-2 border-blue-500 hover:bg-blue-500/20 rounded-full font-black text-lg tracking-wider transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30"
              >
                <Mail className="mr-4 group-hover:scale-110 transition-transform duration-300" size={24} />
                EMAIL ME
              </a>
              
              <a 
                href="tel:+916374722300"
                className="group flex items-center justify-center px-10 py-5 border-2 border-blue-500 hover:bg-blue-500/20 rounded-full font-black text-lg tracking-wider transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30"
              >
                <Phone className="mr-4 group-hover:scale-110 transition-transform duration-300" size={24} />
                CALL ME
              </a>
            </div>

            <div className="pt-8 border-t border-white/20">
              <div className="flex items-center justify-center text-gray-300 mb-4 font-semibold">
                <MapPin size={24} className="mr-3" />
                <span className="tracking-wide">Vellore, Tamil Nadu, India</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <style >{`
        * {
          font-family: 'Oswald', 'Bebas Neue', 'Unbounded', 'oswald Display', 'Shadows Into Light', Impact, Arial Black, sans-serif !important;
        }
.font-unbounded {
          font-family: 'Unbounded', sans-serif !important;
       }

        .font-oswald {
          font-family: 'Oswald', cursive !important;
        }
      .font-Shadows{
          font-family: 'Shadows Into Light', cursive !important;
      }
        @keyframes webPulse {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.8; }
          100% { transform: scale(1); opacity: 0.5; }
        }

        @media (max-width: 768px) {
          .text-7xl {
            font-size: 3rem !important;
          }
          .text-6xl {
            font-size: 2.5rem !important;
          }
          .text-3xl {
            font-size: 1.5rem !important;
          }
          .text-2xl {
            font-size: 1.25rem !important;
          }
          .text-xl {
            font-size: 1rem !important;
          }
          .w-32.h-32 {
            width: 6rem !important;
            height: 6rem !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .text-7xl {
            font-size: 4rem !important;
          }
          .text-6xl {
            font-size: 3.5rem !important;
          }
          .text-3xl {
            font-size: 2rem !important;
          }
          .text-2xl {
            font-size: 1.5rem !important;
          }
          .text-xl {
            font-size: 1.25rem !important;
          }
          .w-32.h-32 {
            width: 8rem !important;
            height: 8rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
