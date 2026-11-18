---
title: "MAHA: Gym and Diet Recommendation"
summary: "A multi-output neural network that recommends exercise and diet plans inside a mobile health app."
kind: "Capstone project"
category: "Recommender Systems"
period: "Sep – Dec 2024"
role: "Machine learning engineer in a team of seven"
stack: ["TensorFlow", "Keras", "TensorFlow Lite"]
metric: { value: "7", label: "people: 3 ML, 2 Cloud, 2 Mobile" }
order: 8
featured: false
links:
  github: "https://github.com/Ryhnslmn13/MAHA"
---
## Problem

Recommend exercise and diet plans that fit a user's profile, inside a mobile health app built by a team of seven (3 Machine Learning, 2 Cloud Computing, 2 Mobile Development).

## Data

The [Gym and Diet Recommendation dataset on Kaggle](https://www.kaggle.com/datasets/manohar025/gym-and-diet-recommendation) has 14,553 rows with sex, age, height, weight, hypertension, diabetes, and the recommended exercises and diet. There were no missing values or duplicates. I encoded the categorical columns, standardized the numeric ones, and split the data 80:20 (11,642 training rows and 2,911 test rows).

## My part

Data preparation, EDA, and feature selection, then a multi-output TensorFlow/Keras neural network, converted to TensorFlow Lite for the Android team. The Android integration was done by the Mobile Development team.

## Model

Six input features feed three shared dense layers (128, 64, and 32 units, with 30% dropout), which split into two softmax outputs: exercise (5 classes) and diet (10 classes). Trained with Adam for 50 epochs.

## Results

| Output | Test accuracy |
|---|---|
| Exercise recommendation (5 classes) | 99.28% |
| Diet recommendation (10 classes) | 90.97% |

## Limitations

In the dataset, the same body profile appears once for each combination of hypertension and diabetes, which suggests the recommendations follow fixed rules. The accuracy therefore shows that the model learned the dataset's rules, not that the advice is clinically validated. The held-out split was also used as validation data during training, so there is no fully separate test set.
