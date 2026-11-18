---
title: "Churn Prediction MLOps Pipeline"
summary: "A production-style ML pipeline for customer churn, from TFX training to a monitored serving endpoint."
kind: "Course project"
category: "MLOps"
period: "Mar 2025"
role: "Sole developer"
stack: ["TFX", "TensorFlow Serving", "Docker", "Railway", "Prometheus"]
metric: { value: "TFX", label: "pipeline served and monitored" }
order: 3
featured: true
links:
  github: "https://github.com/rizkidwi07/Proyek-Akhir-MLOps"
---
## Problem

Churn, customers who cancel their subscription, is a major challenge for subscription services such as Netflix. The goal is to predict whether a customer will cancel from their engagement, viewing habits, and account details, and to serve that model the way a production team would, not as a notebook.

## Data

The Netflix Engagement Dataset has 3,500 customers and 16 columns, such as subscription length, satisfaction score, daily watch time, payment history, plan, and promotional offers used. About 11% of customers churned, so the label is imbalanced. Subscription length has the strongest linear relationship with churn (correlation of -0.37).

## Pipeline

```
Raw data → TensorFlow Transform → training → TFMA evaluation
→ TensorFlow Serving (Docker, Railway) → Prometheus
```

Preprocessing encodes the categorical features, normalizes the numeric ones, selects the most relevant features, and splits the data 80:20 into training and test sets.

## Model

A neural network with three dense hidden layers (ReLU) and a sigmoid output that gives the probability of churn.

## Evaluation

The model was evaluated with binary accuracy.

| Split | Binary accuracy |
|---|---|
| Training | 100% |
| Validation | 99% |

## Deployment and monitoring

The model is served as `cc-model` through TensorFlow Serving on Railway. Prometheus tracks the number of requests the service receives and their status.

## Limitations

Only accuracy was reported. Because about 89% of customers do not churn, a model that always predicts "no churn" would score close to 89%, so precision and recall on the churn class would give a fuller picture. Training accuracy of 100% on 3,500 rows is also a sign to check for overfitting. This is a course project on a public dataset, so there is no live traffic, drift detection, or retraining loop. Adding those is the natural next step.
