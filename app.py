from flask import Flask, render_template, request
from analyzer import analyze_resume
import docx  # For reading .docx files
import fitz  # PyMuPDF, for reading .pdf files

app = Flask(__name__)

# Helper function to extract text from a .docx file
def extract_text_from_docx(file_stream):
    doc = docx.Document(file_stream)
    return "\n".join([para.text for para in doc.paragraphs])

# Helper function to extract text from a .pdf file
def extract_text_from_pdf(file_stream):
    doc = fitz.open(stream=file_stream.read(), filetype="pdf")
    text = ""
    for page in doc:
        text += page.get_text()
    return text

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        # --- NEW FILE HANDLING LOGIC ---
        resume_file = request.files['resume']
        job_description_text = request.form['job_description']
        
        resume_text = ""
        # Check if a file was uploaded and has a filename
        if resume_file and resume_file.filename != '':
            # Check the file extension
            if resume_file.filename.endswith('.pdf'):
                resume_text = extract_text_from_pdf(resume_file.stream)
            elif resume_file.filename.endswith('.docx'):
                resume_text = extract_text_from_docx(resume_file.stream)
            else:
                # Handle unsupported file type
                return "Error: Please upload a .pdf or .docx file.", 400

        # --- THE REST IS THE SAME ---
        found, missing = analyze_resume(resume_text, job_description_text)

        return render_template(
            'results.html',
            found_keywords=sorted(found),
            missing_keywords=sorted(missing),
            found_count=len(found),
            total_count=len(found) + len(missing)
        )

    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)