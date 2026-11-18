---
title: "Bandung Raya News Headline Classification"
summary: "A classifier that sorts Indonesian news headlines into four categories, with a web app that shows a score per category."
kind: "Team project"
category: "NLP"
period: "Jul 2026"
role: "NLP and machine learning: data collection, modeling, and model export"
stack: ["Python", "scikit-learn", "Sastrawi", "TF-IDF", "Streamlit"]
metric: { value: "84%", label: "test accuracy, four categories" }
order: 6
featured: false
links:
  demo: "https://kategori-berita.streamlit.app/"
---
## Problem

Sort Indonesian news headlines into four categories automatically: General News, Lifestyle, Education and Inspiration, and Technology and Business.

## Data and pipeline

I built the model end to end, starting with finding and collecting the data: 3,591 headlines scraped from a Bandung Raya news portal. I merged the portal's 12 original categories into four broader ones. The text was cleaned, stemmed with Sastrawi, and vectorized with TF-IDF using unigrams and bigrams. The model was exported as a `.pkl` file and served in a Streamlit app that the team built together.

## Model and evaluation

A linear SVM (LinearSVC) with a One-vs-One strategy, tuned with GridSearchCV (36 parameter combinations, 5-fold cross-validation) and evaluated on 719 held-out headlines.

| Category | F1-score |
|---|---|
| Lifestyle | 0.90 |
| Technology and Business | 0.83 |
| General News | 0.81 |
| Education and Inspiration | 0.77 |

Overall test accuracy is 84%, with a macro F1-score of 0.83.

## Deployment

A Streamlit app where you type a headline and get the predicted category with a score for each category. The app also has a page with the model's statistics.

## Limitations

Education and Inspiration is the weakest category (F1 0.77) and overlaps with the others. There are four coarse categories and a single news source, so the model may not generalize to other outlets. A linear SVM does not output probabilities, so the scores in the app are softmax-normalized decision scores and should be read as relative confidence, not calibrated probabilities.
