import JobApplication from "../models/jobApplication.model.js";
import Job from "../models/job.model.js";

// Submit job application
export const applyJob = async (req, res) => {
  try {
    const { jobId, name, email, phone, resumeLink, message } = req.body;

    if (!jobId || !name || !email) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    const application = await JobApplication.create({
      jobId,
      name,
      email,
      phone,
      resumeLink,
      message
    });

    res.status(201).json({
      message: "Job application submitted successfully!",
      application
    });
  } catch (error) {
    res.status(400).json({ message: "Error submitting application", error });
  }
};

// Admin: view all applications
export const getJobApplications = async (req, res) => {
  try {
    const apps = await JobApplication.find().populate("jobId", "title location");
    res.json(apps);
  } catch (error) {
    res.status(500).json({ message: "Error fetching applications", error });
  }
};
