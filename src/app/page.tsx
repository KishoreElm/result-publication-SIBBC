// import Image from "next/image";
// import AirtablePage from "./airtable/page";

// export default function Home() {
//   return (
//    <div className="bg-[url('/images/college-main-block.jpg')] bg-cover bg-center h-screen">
//   <AirtablePage />
// </div>

//   );
// }

import Image from "next/image";
import AirtablePage from "./airtable/page";

export default function Page() {
  return (
    <div className="relative  h-screen w-full">

      <Image
        src="/images/Copy of COLLEGE MAIN BLOCK.jpg"
        alt="College Main Block"
        fill
        className="object-cover "
        priority
      />
      <div className="absolute inset-0 bg-black/40" >
      </div>

      <div className="z-index-10 relative h-full w-full flex items-center justify-center">
        <AirtablePage />
      </div>
    </div>
  );
}
