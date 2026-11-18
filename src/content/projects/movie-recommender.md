---
title: "Indonesian Movie Recommender"
summary: "A content-based and a collaborative filtering recommender built on a catalog of 1,272 Indonesian films."
kind: "Course project"
category: "Recommender Systems"
period: "Mar 2025"
role: "Sole developer"
stack: ["Python", "TensorFlow", "Keras", "scikit-learn"]
metric: { value: "2 methods", label: "content-based and collaborative filtering" }
order: 11
featured: false
links:
  github: "https://github.com/rizkidwi07/Proyek-Akhir-Membuat-Model-Sistem-Rekomendasi"
---
## Problem

With so many films available, viewers struggle to find ones that suit them. The project builds two recommenders for Indonesian films, one based on film similarity and one on user ratings.

## Data

The [Indonesian film database on Kaggle](https://www.kaggle.com/datasets/haryodwi/database-film-indonesia/data) (from IMDb) has 1,272 unique films across 16 genres, with ratings from 1.2 to 9.4. It has no user IDs, so I added a `user_id` column. Missing values were dropped, genres were harmonized, and the data was split 80/20.

## Approach

- **Content-based filtering:** TF-IDF on genre and cosine similarity to rank similar films.
- **Collaborative filtering:** matrix factorization with user and film embeddings, a dot product plus biases, and a sigmoid output, trained for 100 epochs with RMSE as the metric.

## Results

For a drama film as the query, all five content-based recommendations were also dramas. For the collaborative model, the top 10 list for each user mixes genres and includes titles in genres the user rated highly. In the training curve, training RMSE falls to about 0.02 while validation RMSE stays flat near 0.20.

## Limitations

The users are synthetic, because the dataset had no user IDs, so the collaborative model cannot learn real taste. The flat validation error next to a falling training error means it memorizes the training ratings and does not generalize. The content-based check (5 of 5 dramas) only confirms that genre matching works, because similarity is defined by genre in the first place. A real evaluation needs actual user ratings and ranking metrics.
