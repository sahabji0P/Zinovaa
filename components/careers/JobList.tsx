"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Job } from "@/types/careers";
import { jobOpenings } from "@/lib/career-data";

interface JobListProps {
  onSelect: (job: Job) => void;
  selectedJob?: Job;
}

export function JobList({ onSelect, selectedJob }: JobListProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-4"
    >
      {jobOpenings.map((job) => (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-lg border transition-colors ${
            selectedJob?.id === job.id
              ? "border-red-600 bg-red-50"
              : "border-gray-200 hover:border-red-600"
          }`}
        >
          <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
          <p className="text-gray-600 mb-4">{job.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {job.requirements.map((req, index) => (
              <span
                key={index}
                className="bg-white px-3 py-1 rounded-full text-sm text-gray-600 border"
              >
                {req}
              </span>
            ))}
          </div>
          <Button
            onClick={() => onSelect(job)}
            variant={selectedJob?.id === job.id ? "default" : "outline"}
            className={selectedJob?.id === job.id ? "bg-red-600" : ""}
          >
            {selectedJob?.id === job.id ? "Selected" : "Select Position"}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
}