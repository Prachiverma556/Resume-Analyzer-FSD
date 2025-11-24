# 📡 Backend API Documentation
**Prepared by:** Member 3
**Base URL:** `/api/resume`

---

## 1. Save a New Resume
**Endpoint:** `POST /api/resume/save`
**Description:** Saves a parsed resume into the MongoDB database.

**Request Body (JSON):**
```json
{
  "filename": "john_cv.pdf",
  "name": "John Doe",
  "email": "john@example.com",
  "skills": ["JavaScript", "React", "Node.js"],
  "experience": "2 years at Tech Corp...",
  "education": "B.Tech CSE...",
  "extractedText": "Raw text content of the pdf...",
  "score": 85,
  "suggestions": ["Add GitHub link", "Format skills section"]
}

2. Get All Resumes (History)
Endpoint: GET /api/resume/all Description: Returns a list of all uploaded resumes, sorted by newest first.

3. Get Single Resume Details
Endpoint: GET /api/resume/detail/:id Description: Fetch details for a specific candidate. Example: /api/resume/detail/65f2b8...

4. Search Candidates by Skill
Endpoint: GET /api/resume/search/:skill Description: Finds candidates who have a specific skill (case-insensitive). Example: /api/resume/search/python