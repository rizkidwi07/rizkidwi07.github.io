---
title: "Sarcasm Detection TFX Pipeline"
summary: "A TFX pipeline that validates, transforms, trains, evaluates, and packages a sarcasm classifier for TensorFlow Serving."
kind: "Course project"
category: "MLOps"
period: "Mar 2025"
role: "Sole developer"
stack: ["TFX", "TensorFlow Transform", "TFMA", "TensorFlow Serving", "Docker"]
metric: { value: "TFX", label: "pipeline from validation to serving" }
order: 9
featured: false
links:
  github: "https://github.com/rizkidwi07/Proyek-Pengembangan-Machine-Learning-Pipeline"
---
## Problem

Sarcasm is hard for sentiment systems because its meaning depends on context. This project builds a binary classifier for tweets, and the focus is the pipeline around the model: validating data, transforming it, training, evaluating, and serving.

## Data

The [Twitter Sarcastic Classification Dataset on Kaggle](https://www.kaggle.com/datasets/farhanch67/twitter-sracastic-classification-dataset/data). I cleaned it with Pandas (unneeded columns, missing values, duplicates) and split it 80/20 inside the TFX pipeline.

## Pipeline

```
StatisticsGen → SchemaGen → ExampleValidator → Transform
→ Trainer → Evaluator (TFMA) → model resolution → TensorFlow Serving
```

Transform lowercases the text and builds a text-vectorization layer. The model embeds each tweet (16 dimensions), passes it through dense layers of 64 and 32 units, and outputs a sigmoid probability. It trains with Adam at a learning rate of 0.01 and early stopping. The repository includes a Dockerfile for serving.

## Results

| Metric | Training | Validation |
|---|---|---|
| Binary accuracy | 83.52% | 68.35% |
| Loss | 0.3759 | 1.1111 |

The validation AUC is 0.578. On the evaluation set the model had 35 true negatives, 78 false positives, and 141 false negatives.

## Limitations

This is a weak classifier. Validation accuracy of 68% and an AUC of 0.58 show that it separates the classes only slightly better than chance, and the loss gap points to overfitting. Sarcasm needs context that a small embedding model does not capture, and a pretrained language model would be the next step. The value of this project is the reproducible pipeline, not the model quality.
