"use client";

import VendorApplication from "@/components/Vendors/vendorForm";
import { motion } from "framer-motion";

export default function VendorPage() {


  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">



          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center font-bold hover:text-red-600"
          >
            <Link href={`/vendor/application`}>
              <h2 className="cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-125 text-2xl">
                Click to Register As a Vendor!
              </h2>   </Link>       </motion.div> */}

          <VendorApplication />

        </div>
      </div>
    </main>
  );
}