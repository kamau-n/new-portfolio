import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { downloads } from "./files";

const Downoads = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href")?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            });
          }
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", function (e) {
          // Cleanup
        });
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="grid gap-6 p-4 max-w-xl my-16  mx-auto">
          {downloads.map((file, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-5 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {file.name}
              </h2>
              <p className="text-gray-600 mb-4">{file.description}</p>
              <a
                href={file.filePath}
                download
                className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                Download
              </a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Downoads;
