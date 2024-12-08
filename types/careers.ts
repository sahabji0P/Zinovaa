export type ChatStep = 
  | "welcome"
  | "profile"
  | "email"
  | "phone"
  | "jobs"
  | "questions"
  | "complete";

export interface Message {
  id: string;
  type: "bot" | "user";
  content: string;
  avatar?: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  questions: string[];
}