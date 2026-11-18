---
title: "Citizen Tweet Classification: Classical ML vs IndoBERT"
summary: "Compares 35 classical model setups, recurrent networks, and a fine-tuned IndoBERT on Indonesian tweets sorted into three classes."
kind: "Team project"
category: "NLP"
period: "2026"
role: "NLP and machine learning, as part of a team"
stack: ["Python", "scikit-learn", "TensorFlow", "IndoBERT", "SMOTE"]
metric: { value: "88.4%", label: "IndoBERT test accuracy, 3 classes" }
order: 4
featured: false
links: {}
---
## Problem

Classify Indonesian tweets into three classes: Keluhan (complaints), Respon (responses), and NotKR (everything else). The question we wanted to answer is how far classical models get compared with neural networks and a pretrained Indonesian language model.

## Data

The dataset has 7,527 tweets, and 5,091 remained after cleaning (4,072 for training and 1,019 for testing). Two classes are close in size and the third is smaller: roughly 45% Keluhan, 43% NotKR, and 12% Respon.

## Approach

1. **Classical models:** SVM, Naive Bayes, Logistic Regression, KNN, and Random Forest, each on seven text representations (CountVectorizer and TF-IDF with unigrams, bigrams, and both, plus word embeddings). That gives 35 model setups, each tested with and without SMOTE.
2. **Neural networks:** RNN, LSTM, and BiLSTM.
3. **IndoBERT:** fine-tuned for the three-class task.

## Results

| Model | Macro F1 |
|---|---|
| SVM + CountVectorizer unigram (best classical) | 0.81 |
| RNN | 0.67 |
| LSTM | 0.83 |
| BiLSTM | 0.37 |
| IndoBERT (fine-tuned) | 0.89 |

IndoBERT reached 88.4% accuracy on its test set of 1,019 tweets, with F1 scores of 0.89 for Keluhan, 0.86 for NotKR, and 0.93 for Respon.

Findings from the 35 classical setups:

- Unigrams beat bigrams, TF-IDF, and word embeddings, and bigrams alone were consistently the worst.
- SMOTE lowered the F1 score in about 63% of the models. The classes were already fairly balanced, and synthetic samples on sparse vectors did not help.
- Random Forest overfit heavily in every setup, and Naive Bayes had the smallest gap between training and test accuracy.

## Limitations

The models were evaluated on separate test splits (1,019 tweets for IndoBERT and 986 for the recurrent networks), so the comparison is indicative, not exact. The BiLSTM score (0.37) is far below the LSTM's (0.83), which likely points to an untuned setup rather than a limit of the architecture. We did not measure the reliability of the annotations, and the scores depend on them.
