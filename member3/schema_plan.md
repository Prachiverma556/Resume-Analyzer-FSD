# 📝 Database Schema Plan (By Member 3)

Team, here is the plan for how we will store Resume data in MongoDB.

## 1. Collection Name: `resumes`

## 2. Fields Structure
We will store the following data for every uploaded resume:

| Field Name | Type | Description |
| :--- | :--- | :--- |
| `filename` | String | Original name of the uploaded file |
| `name` | String | Candidate Name (extracted) |
| `email` | String | Candidate Email (extracted) |
| `skills` | Array | List of skills e.g. ["Java", "React"] |
| `experience` | String | Work experience summary |
| `extractedText`| String | The full text of the resume (raw data) |
| `score` | Number | Calculated score (0-100) |
| `uploadDate` | Date | Date when the user uploaded the file |

## 3. Next Steps (Day 2)
- I will create the Mongoose Model (`Resume.js`) based on this table.
- I will help Member 1 connect this database to the upload API.