import spacy

# Load the spaCy model once when the module is imported
nlp = spacy.load("en_core_web_sm")

def analyze_resume(resume_text, job_description_text):
    """
    Analyzes the resume against the job description.
    Returns two lists: found_keywords and missing_keywords.
    """
    # Process the job description
    doc = nlp(job_description_text)

    # Extract keywords (Nouns and Proper Nouns)
    keywords = set()
    for token in doc:
        if token.pos_ in ["NOUN", "PROPN"]:
            # Use the lemma (root form) in lowercase for better matching
            keywords.add(token.lemma_.lower())

    # Check which keywords are in the resume
    found_keywords = []
    missing_keywords = []
    resume_lower = resume_text.lower()

    for keyword in keywords:
        if keyword in resume_lower:
            found_keywords.append(keyword)
        else:
            missing_keywords.append(keyword)

    return found_keywords, missing_keywords