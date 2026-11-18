---
title: "Shopee App Review Sentiment Analysis"
summary: "Scrapes and labels 12,818 Indonesian app reviews, then compares IndoBERT, BiLSTM, and an MLP with TF-IDF."
kind: "Course project"
category: "NLP"
period: "Aug 2026"
role: "Sole developer: scraping, labeling, modeling"
stack: ["Python", "IndoBERT", "TensorFlow/Keras", "scikit-learn", "Sastrawi"]
metric: { value: "90.72%", label: "IndoBERT test accuracy, 3 classes" }
order: 5
featured: false
links: {}
---
## Problem

Classify Shopee app reviews from the Google Play Store as negative, neutral, or positive, and compare three modeling approaches for Indonesian text.

## Data

I scraped 13,111 reviews myself, balanced across star ratings (roughly 2,000 to 2,900 per rating). The text went through case folding, cleaning, slang normalization, stopword removal (keeping negation words), and Sastrawi stemming.

Labels are hybrid. The InSet Indonesian sentiment lexicon marks reviews with few sentiment words as neutral, and the star rating sets positive or negative for the rest. After removing ambiguous reviews, 12,818 remained: 7,790 negative (61%), 4,024 neutral (31%), and 1,004 positive (8%). I used class weights to handle the imbalance.

## Models and results

| Scheme | Split | Train accuracy | Test accuracy |
|---|---|---|---|
| IndoBERT (fine-tuned) | 80/20 | 99.75% | 90.72% |
| BiLSTM with word embeddings | 80/20 | 94.28% | 86.74% |
| MLP with TF-IDF (1–2 grams) | 70/30 | 96.67% | 82.94% |

IndoBERT's F1 scores are 0.93 for negative, 0.92 for neutral, and 0.63 for positive (macro F1 0.83). I also ran the model on four hand-written sentences, and it returned sensible labels (negative, neutral, positive, and negative).

## Limitations

The labels come from a lexicon and star ratings, so the accuracy measures agreement with that labeling rule, not with human judgment. Positive reviews make up only 8% of the data and are the weak class (precision 0.69, recall 0.58). The gap between 99.75% training and 90.72% test accuracy shows overfitting, and the MLP used a different split (70/30), so the three schemes are not perfectly comparable.
