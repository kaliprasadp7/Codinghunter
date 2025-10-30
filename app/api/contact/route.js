// app/api/contact/route.js
import { promises as fs } from "fs";
import path from "path";

export async function POST(request) {
  try {
    // Parse the incoming JSON data from the request body
    const { name, email, message } = await request.json();

    // Define the path to your JSON file
    const filePath = path.join(process.cwd(), "data", "contactData.json");

    // Try to read existing data (or start with an empty array if file not found)
    let existingData = [];
    try {
      const fileData = await fs.readFile(filePath, "utf8");
      existingData = JSON.parse(fileData);
    } catch {
      existingData = [];
    }

    // Create a new entry
    const newEntry = {
      id: Date.now(),
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    };

    // Add the new entry to existing data
    existingData.push(newEntry);

    // Save back to the file
    await fs.writeFile(filePath, JSON.stringify(existingData, null, 2), "utf8");

    // Respond back to the frontend
    return Response.json({
      success: true,
      message: "Message saved successfully!",
      data: newEntry,
    });
  } catch (error) {
    console.error("Error saving message:", error);
    return Response.json(
      { success: false, message: "Failed to save message." },
      { status: 500 }
    );
  }
}
