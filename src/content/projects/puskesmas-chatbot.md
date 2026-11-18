---
title: "Puskesmas WhatsApp Chatbot"
summary: "An intent-based WhatsApp chatbot that answers patient questions for a public health center."
kind: "Thesis"
category: "NLP"
period: "Mar – Aug 2026"
role: "Sole developer and researcher"
stack: ["Python", "Flask", "scikit-learn", "TF-IDF", "SVM", "WhatsApp Cloud API"]
metric: { value: "97.34%", label: "intent accuracy, 7 intents" }
order: 1
featured: true
links:
  github: "https://github.com/rizkidwi07"
---
## Problem

Patients at Puskesmas Cijagra Baru keep asking the same questions about opening hours, services, and procedures. A chatbot on WhatsApp, which patients already use, can answer them without adding to staff workload.

## Data

The dataset has 1,505 synthetic questions written from staff interviews and service posters, labeled into 7 intents. The data is synthetic because real patient conversations were not available.

| Intent | Questions |
|---|---|
| Minor complaints (which clinic for a symptom) | 430 |
| Clinic schedules | 215 |
| Service and opening hours | 195 |
| Counseling services | 185 |
| Registration requirements | 170 |
| Fallback (out-of-scope questions) | 160 |
| Greetings | 150 |

I split the data 80:20 with stratification (1,204 training and 301 test questions) and used balanced class weights, because the largest intent has 2.9 times more questions than the smallest.

## Approach

```
WhatsApp message → Cloud API → Flask webhook → text preprocessing
→ TF-IDF → SVM (One-vs-One) intent classification
→ cosine similarity picks the best answer within the intent → reply
```

Preprocessing lowercases the text, normalizes slang with a 1,290-entry corpus, removes stopwords while keeping domain words, and stems with a customized Sastrawi stemmer. A grid search over 36 settings with 5-fold cross-validation (180 fits) chose TF-IDF with unigrams and bigrams (1,736 features) and a linear SVM with C = 5. The final model uses One-vs-One, which trains 21 pairwise classifiers for the 7 intents.

## Evaluation

| Model | Accuracy | Macro F1 |
|---|---|---|
| TF-IDF + SVM (One-vs-One) | 97.34% | 0.9721 |
| Complement Naive Bayes | 97.34% | 0.9702 |
| Random Forest | 92.69% | 0.9227 |

The SVM classified 293 of 301 test questions correctly. SVM and Naive Bayes tie on accuracy, and I chose the SVM for its higher macro F1 and cross-validated F1. Counseling questions were classified perfectly, and clinic schedules were the weakest intent (F1 0.93), mostly mixed up with service-hours questions.

I also compared design choices. One-vs-One and One-vs-Rest score the same (0.9721 and 0.9728 macro F1), unigrams and bigrams are nearly equal on the test set (0.9733 and 0.9721), but regularization strength matters a lot (test macro F1 of 0.897 at C = 0.01 against 0.972 at C = 5).

Health center staff also reviewed 30 chatbot answers: 24 were rated appropriate (Cohen's kappa 0.77).

## Deployment

The chatbot runs through the WhatsApp Cloud API with a Flask webhook and replies in under 3 seconds.

## Limitations and next steps

The training data is synthetic and the test set comes from the same synthetic collection, so the 97% is likely higher than what real patient phrasing would produce. Testing with actual patients is the next step. Six of the 30 answers reviewed by staff were not rated appropriate, which shows there is room to improve answer coverage and quality.
