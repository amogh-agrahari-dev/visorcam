// "use client";

// import React, { useRef, useState, useEffect, useCallback } from 'react';
// import Webcam from 'react-webcam';
// import { Shield, ShieldAlert, ShieldCheck, Bell } from 'lucide-react';

// export default function PrivacyGuard() {
//     const webcamRef = useRef<Webcam>(null);
//     const [status, setStatus] = useState<"IDLE" | "SCANNING" | "AUTHORIZED" | "INTRUDER">("IDLE");
//     const [distance, setDistance] = useState<number | null>(null);
//     const [lastAlert, setLastAlert] = useState<string | null>(null);

//     // 1. Request Browser Notification Permission
//     useEffect(() => {
//         if ("Notification" in window && Notification.permission !== "granted") {
//             Notification.requestPermission();
//         }
//     }, []);

//     // 2. WebSocket for Real-time Push Notifications
//     useEffect(() => {
//         const socket = new WebSocket('ws://localhost:8000/ws/alerts/');

//         socket.onmessage = (event) => {
//             const data = JSON.parse(event.data);
//             if (data.status === "CRITICAL") {
//                 triggerLocalAlert(data.message);
//             }
//         };

//         return () => socket.close();
//     }, []);

//     const triggerLocalAlert = (msg: string) => {
//         setLastAlert(msg);
//         if (Notification.permission === "granted") {
//             new Notification("🚨 SECURITY ALERT", { body: msg });
//         }
//         // Clear the UI alert after 4 seconds
//         setTimeout(() => setLastAlert(null), 4000);
//     };

//     // 3. Send Frame to Django API
//     const captureAndVerify = useCallback(async () => {
//         if (!webcamRef.current) return;

//         const imageSrc = webcamRef.current.getScreenshot();
//         if (!imageSrc) return;

//         try {
//             setStatus("SCANNING");
//             const response = await fetch('http://localhost:8000/accounts/live/', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ image: imageSrc }),
//             });

//             const data = await response.json();

//             if (data.verified) {
//                 setStatus("AUTHORIZED");
//             } else {
//                 setStatus("INTRUDER");
//             }
//             setDistance(data.distance);
//         } catch (error) {
//             console.error("Verification failed:", error);
//         }
//     }, []);

//     // 4. Set interval to scan every 2 seconds
//     useEffect(() => {
//         const interval = setInterval(captureAndVerify, 2000);
//         return () => clearInterval(interval);
//     }, [captureAndVerify]);

//     return (
//         <main className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-slate-100 p-4">
//             {/* Header */}
//             <div className="flex items-center gap-3 mb-8">
//                 <Shield className="w-8 h-8 text-blue-500" />
//                 <h1 className="text-3xl font-extrabold tracking-tight">VISORCAM v1.0</h1>
//             </div>

//             {/* Main Camera Container */}
//             <div className="relative group">
//                 {/* Glow effect based on status */}
//                 <div className={`absolute -inset-1 rounded-2xl blur opacity-30 transition-all duration-500 ${status === "AUTHORIZED" ? "bg-green-500" : status === "INTRUDER" ? "bg-red-500" : "bg-blue-500"
//                     }`} />

//                 <div className="relative bg-slate-900 rounded-xl overflow-hidden border-2 border-slate-800 shadow-2xl">
//                     <Webcam
//                         audio={false}
//                         ref={webcamRef}
//                         screenshotFormat="image/jpeg"
//                         className="w-full max-w-2xl h-auto"
//                         videoConstraints={{ width: 1280, height: 720, facingMode: "user" }}
//                     />

//                     {/* Overlay Status */}
//                     <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
//                         {status === "AUTHORIZED" && <ShieldCheck className="w-4 h-4 text-green-400" />}
//                         {status === "INTRUDER" && <ShieldAlert className="w-4 h-4 text-red-400" />}
//                         <span className={`text-sm font-bold uppercase tracking-widest ${status === "AUTHORIZED" ? "text-green-400" : status === "INTRUDER" ? "text-red-400" : "text-blue-400"
//                             }`}>
//                             {status} {distance !== null && `(${distance})`}
//                         </span>
//                     </div>
//                 </div>
//             </div>

//             {/* Floating Push Notification UI */}
//             {lastAlert && (
//                 <div className="fixed bottom-10 right-10 flex items-center gap-4 bg-red-600 p-6 rounded-2xl shadow-[0_0_50px_rgba(220,38,38,0.5)] border-2 border-white animate-in slide-in-from-right-full">
//                     <Bell className="w-8 h-8 animate-ring text-white" />
//                     <div>
//                         <p className="font-black text-xl leading-none italic uppercase">Critical Intruder</p>
//                         <p className="text-sm opacity-90 font-medium">MAA KA BHOSDA DUSRA AADMI</p>
//                     </div>
//                 </div>
//             )}

//             {/* Instructions */}
//             <p className="mt-8 text-slate-500 text-sm font-medium">
//                 Monitoring active. System scans biometric data every 2s.
//             </p>

//             <style jsx global>{`
//         @keyframes ring {
//           0%, 100% { transform: rotate(0); }
//           25% { transform: rotate(15deg); }
//           75% { transform: rotate(-15deg); }
//         }
//         .animate-ring {
//           animation: ring 0.2s ease-in-out infinite;
//         }
//       `}</style>
//         </main>
//     );
// }
"use client"
import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';

const PrivacyGuard = () => {
    const webcamRef = useRef(null);
    const [status, setStatus] = useState("Initializing...");

    const captureAndCheck = async () => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            if (!imageSrc) return;

            try {
                const response = await fetch('http://localhost:8000/accounts/live/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ image: imageSrc }),
                });
                const data = await response.json();

                if (data.authorized) {
                    setStatus(`Authorized: ${data.confidence}%`);
                } else if (data.status === "intruder") {
                    setStatus("🚨 INTRUDER ALERT 🚨");
                } else {
                    setStatus("No Face Detected");
                }
            } catch (error) {
                console.error("Error connecting to Django:", error);
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(captureAndCheck, 1000); // Check every 1 second
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center">
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="rounded-lg border-4 shadow-xl"
                style={{ borderColor: status.includes('Authorized') ? 'green' : 'red' }}
            />
            <h2 className="mt-4 text-2xl font-bold">{status}</h2>
        </div>
    );
};

export default PrivacyGuard;