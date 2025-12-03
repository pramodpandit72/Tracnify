import mongoose from "mongoose";

const JobApplicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },

  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  resumeLink: String,
  message: String,

  appliedAt: { type: Date, default: Date.now }
});

export default mongoose.model("JobApplication", JobApplicationSchema);
