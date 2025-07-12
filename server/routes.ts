import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEnrollmentSchema, insertContactSchema } from "@shared/schema";
import { sendEnrollmentEmail, sendContactEmail } from "./email";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Enrollment endpoint
  app.post("/api/enrollments", async (req, res) => {
    try {
      const enrollmentData = insertEnrollmentSchema.parse(req.body);
      const enrollment = await storage.createEnrollment(enrollmentData);
      
      // Send email notification
      const emailResult = await sendEnrollmentEmail(enrollmentData);
      if (emailResult.success) {
        console.log('Enrollment email sent successfully');
      } else {
        console.error('Failed to send enrollment email:', emailResult.error);
      }
      
      res.json({ success: true, enrollment });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, error: "Invalid enrollment data", details: error.errors });
      } else {
        res.status(500).json({ success: false, error: "Failed to create enrollment" });
      }
    }
  });

  // Get enrollments endpoint
  app.get("/api/enrollments", async (req, res) => {
    try {
      const enrollments = await storage.getEnrollments();
      res.json({ success: true, enrollments });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to fetch enrollments" });
    }
  });

  // Contact endpoint
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      
      // Send email notification
      const emailResult = await sendContactEmail(contactData);
      if (emailResult.success) {
        console.log('Contact email sent successfully');
      } else {
        console.error('Failed to send contact email:', emailResult.error);
      }
      
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, error: "Invalid contact data", details: error.errors });
      } else {
        res.status(500).json({ success: false, error: "Failed to create contact" });
      }
    }
  });

  // Get contacts endpoint
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json({ success: true, contacts });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to fetch contacts" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
