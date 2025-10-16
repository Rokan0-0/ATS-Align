from flask import Flask, render_template, request
# Import our analysis function from the other file
from analyzer import analyze_resume

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        # Get the text from the form
        resume_text = request.form['resume']
        job_description_text = request.form['job_description']

        # Call our analyzer function to get the results
        found, missing = analyze_resume(resume_text, job_description_text)

        # Pass the results to our new results.html page
        return render_template(
            'results.html',
            found_keywords=sorted(found),
            missing_keywords=sorted(missing),
            found_count=len(found),
            total_count=len(found) + len(missing)
        )

    # If it's a GET request, just show the homepage
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)