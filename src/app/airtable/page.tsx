"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [rollNo, setRollNo] = useState("");
  const [course, setCourse] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rollNo || !course) {
      alert("Please enter Roll Number and select a Course");
      return;
    }
    router.push(`/result?rollNo=${rollNo}&course=${course}`);
  };

  return (
    <div className="p-6  w-150 h-auto border border-gray-400 shadow-md rounded-[50px] bg-transparent backdrop-blur-lg">
      <div className="flex justify-center mb-8 gap-4 items-center">
        <Image
          src="/images/SIBBC_LOGO.png"
          alt="Logo"
          height={90}
          width={90}
        />
        <h1 className="text-5xl font-bold text-gray-900 ">Student Login</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 px-10 w-full flex flex-col "
      >
        <label
          htmlFor="rollNo"
          className="block text-xl font-bold text-gray-300"
        >
          Roll Number
        </label>
        <input
          type="text"
          placeholder="Enter Roll Number"
          className="border border-gray-200 p-4 font-medium rounded-[10px] w-full text-gray-100 bg-gray-800 placeholder-gray-200 "
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
        <label
          htmlFor="course"
          className="block text-xl font-bold text-gray-300"
        >
          Course
        </label>
        <select
          className="border border-gray-200 p-4 font-medium rounded-[10px] w-full text-gray-100 bg-gray-800 "
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select Course</option>
          <option value="bth1">BTH I</option>
          <option value="bth2">BTH II</option>
          <option value="bth3">BTH III</option>
          <option value="diploma1">Diploma I</option>
          <option value="diploma2">Diploma II</option>
          <option value="mdiv1">MDIV I</option>
          <option value="mdiv2">MDIV II</option>
          <option value="mdiv3">MDIV III</option>
          <option value="mth2">MTH II</option>
          <option value="mth3">MTH III</option>
        </select>
        <div className="flex justify-center">
          <button className="bg-blue-600 text-white font-semibold text-xl p-4 w-50 rounded-full mt-3 hover:bg-blue-700 ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
