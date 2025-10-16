import spacy

# Load the spaCy model once when the module is imported
nlp = spacy.load("en_core_web_sm")

def analyze_resume(resume_text, job_description_text):
    """
    Analyzes the resume against the job description using noun chunks.
    Returns two lists: found_keywords and missing_keywords.
    """
    # Process the job description
    doc = nlp(job_description_text)
    resume_lower = resume_text.lower()

    # Extract keywords using noun chunks for better multi-word phrases
    keywords = set()
    for chunk in doc.noun_chunks:
        # We clean the chunk by removing stop words and punctuation
        # and use the root form (lemma) of the words.
        clean_chunk = ' '.join(token.lemma_.lower() for token in chunk if not token.is_stop and not token.is_punct)
        if clean_chunk: # Ensure the chunk is not empty after cleaning
            keywords.add(clean_chunk)
    
    # Also add important single proper nouns (like 'Python', 'AWS')
    for token in doc:
        if token.pos_ == "PROPN":
            keywords.add(token.text.lower())

    # Check which keywords are in the resume
    found_keywords = []
    missing_keywords = []

    for keyword in keywords:
        if keyword in resume_lower:
            found_keywords.append(keyword)
        else:
            missing_keywords.append(keyword)

    return found_keywords, missing_keywords