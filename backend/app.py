from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from .analyzer import analyze_resume
import docx
import fitz
import os # Good to import this for later

app = Flask(__name__)

# Set up CORS. This tells the browser to allow
# requests from our frontend (http://localhost:3000)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# --- Helper functions for text extraction ---
# (These are unchanged)
def extract_text_from_docx(file_stream):
    doc = docx.Document(file_stream)
    return "\n".join([para.text for para in doc.paragraphs])

def extract_text_from_pdf(file_stream):
    doc = fitz.open(stream=file_stream.read(), filetype="pdf")
    text = ""
    for page in doc:
        text += page.get_text()
    return text

# --- NEW: The Main API Route ---
@app.route('/api/analyze', methods=['POST'])
def analyze_api():
    """
    This is the new API endpoint. It receives a file and form data,
    and returns a JSON response.
    """
    try:
        # Check if the 'resume' file is in the request
        if 'resume' not in request.files:
            return jsonify({"error": "No resume file part"}), 400

        resume_file = request.files['resume']
        # Get the job description from the form data
        job_description_text = request.form['job_description']

        resume_text = ""
        if resume_file and resume_file.filename != '':
            if resume_file.filename.endswith('.pdf'):
                resume_text = extract_text_from_pdf(resume_file.stream)
            elif resume_file.filename.endswith('.docx'):
                resume_text = extract_text_from_docx(resume_file.stream)
            else:
                return jsonify({"error": "Unsupported file type"}), 400
        else:
            return jsonify({"error": "No resume file selected"}), 400

        # --- ANALYSIS & SCORE CALCULATION ---
        found, missing = analyze_resume(resume_text, job_description_text)
        total_count = len(found) + len(missing)
        match_score = int((len(found) / total_count) * 100) if total_count > 0 else 0

        # --- THE NEW JSON RESPONSE ---
        # This is what we send back to the React frontend
        return jsonify({
            "success": True,
            "score": match_score,
            "found_keywords": sorted(found),
            "missing_keywords": sorted(missing),
            "found_count": len(found),
            "total_count": total_count
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# A simple route to check if the API is running
@app.route('/')
def index():
    return "<h1>ATS-Align Backend API</h1><p>The API is running. Connect from your frontend.</p>"


if __name__ == '__main__':
    # Run on port 5000 (React will be on 3000)
    app.run(debug=True, port=5000)