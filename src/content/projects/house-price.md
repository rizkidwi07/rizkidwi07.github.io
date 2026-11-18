---
title: "Bandung House Price Prediction"
summary: "Compares KNN, Random Forest, and AdaBoost regressors on scraped house listings from 27 areas of Bandung."
kind: "Course project"
category: "Machine Learning"
period: "Dec 2024"
role: "Sole developer"
stack: ["Python", "Pandas", "scikit-learn", "Seaborn"]
metric: { value: "3 models", label: "KNN, Random Forest, AdaBoost compared" }
order: 10
featured: false
links:
  github: "https://github.com/rizkidwi07/Proyek-Pertama-Predictive-Analytics"
---
## Problem

Buyers and sellers rarely have transparent price information. The goal is to estimate a Bandung house price from its location and size, and to see which features matter most.

## Data

The [Bandung housing dataset on Kaggle](https://www.kaggle.com/datasets/khaleeel347/harga-rumah-seluruh-kecamatan-di-kota-bandung) was scraped from Rumah123 in March 2024. It has 7,611 listings and 11 columns across 27 locations. After handling missing values, invalid zero counts, duplicates, and outliers (IQR method), 3,751 listings remained.

Preparation included fixing data types, one-hot encoding status and location, standardizing numeric features, and a 90/10 train/test split. The property type (one value for every row) and the house name (3,701 unique values) carry no useful signal, so they were dropped.

## Findings from EDA

- Prices are right-skewed, and most houses cost under Rp 2 billion.
- Land area and building area correlate strongly with price (0.79 and 0.78).
- The average price differs a lot by area, so location matters.

## Models and results

KNN (10 neighbors), Random Forest (50 trees, depth 16), and AdaBoost (learning rate 0.05), compared by mean squared error. Random Forest had the lowest error on both the training and test data, and KNN had the highest, as the chart shows. The errors are in squared rupiah, which makes the raw numbers hard to read.

## Limitations

Monthly installment correlates with price at 1.0, so it is almost exactly proportional to price. Using it as an input leaks the answer, and the low error is likely overstated. Rerunning the models without it would show the real predictive power. The prices are listing prices, not final sale prices, and reporting RMSE or percentage error would be easier to interpret than squared rupiah.
