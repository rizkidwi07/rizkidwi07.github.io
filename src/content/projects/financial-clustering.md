---
title: "Bank Transaction Clustering and Classification"
summary: "K-Means clustering of bank transactions followed by Decision Tree and Random Forest classifiers, with an honest look at what the clusters mean."
kind: "Course project"
category: "Machine Learning"
period: "2026"
role: "Sole developer"
stack: ["Python", "Pandas", "scikit-learn", "K-Means", "Decision Tree"]
metric: { value: "0.57", label: "silhouette score, 2 clusters" }
order: 12
featured: false
links: {}
---
## Problem

Group bank transactions into segments, then train classifiers that predict the segment. This was a Dicoding submission, and I use it here to show where the method breaks down.

## Data

A bank transaction dataset with 2,537 rows and 16 columns. I removed rows with missing values and 21 duplicates, dropped the ID, date, and IP address columns, label-encoded the categorical columns, standardized the numeric ones, and removed outliers, which left 1,945 rows.

## Clustering

The silhouette-based elbow plot picked k = 2 for K-Means (silhouette score 0.572). I used PCA to visualize the clusters (980 and 965 transactions) and saved the model with joblib.

## Classification

I trained a Decision Tree, a Random Forest, and a Random Forest tuned with GridSearchCV (27 settings, 5-fold) to predict the cluster label on an 80/20 split (1,556 training and 389 test rows). All three scored 100% accuracy.

## What the clusters actually capture

The two clusters are almost identical on every behavioral feature: the average transaction amount is 255.5 in one and 258.1 in the other, and the average account balance is 5,142 and 5,059. The distributions of transaction type, channel, and occupation also match. What does differ is the encoded location column (average value 10.7 against 32.0). It was label-encoded and not scaled, so its large numeric range likely dominates the distance calculation. The clusters therefore reflect the arbitrary numbering of locations, not customer behavior.

## Limitations and next steps

The 100% classification accuracy is expected, since the labels came from clustering on the same features, so it measures nothing beyond that. Next steps would be to one-hot encode locations, scale every feature, and test other values of k and algorithms before interpreting any segments.
