---
title: "Vegetable Image Classification"
summary: "A CNN trained from scratch to recognize 15 vegetables, exported as SavedModel, TensorFlow Lite, and TensorFlow.js."
kind: "Course project"
category: "Computer Vision"
period: "Aug 2026"
role: "Sole developer"
stack: ["TensorFlow", "Keras", "TensorFlow Lite", "TensorFlow.js"]
metric: { value: "97.76%", label: "test accuracy, 15 classes" }
order: 7
featured: false
links: {}
---
## Problem

Classify photos of 15 vegetable types with a convolutional network built from scratch, then export it for server, mobile, and browser use.

## Data

The [Vegetable Image Dataset on Kaggle](https://www.kaggle.com/datasets/misrakahmed/vegetable-image-dataset) has 21,000 images in 15 balanced classes. I merged its original subsets and split them again 80/10/10 into training, validation, and test sets.

## Model

A Sequential CNN with four blocks of Conv2D, batch normalization, and max pooling, followed by global average pooling and a dense output. Inputs are 128 × 128 images rescaled inside the model. Callbacks were EarlyStopping, ReduceLROnPlateau, ModelCheckpoint, and a custom stop once validation accuracy passes 95%.

## Results

| Split | Accuracy |
|---|---|
| Training | 98.46% |
| Test | 97.76% |

The test confusion matrix is almost entirely diagonal. Training ran for 7 epochs before the 95% target stopped it.

## Export

The model is saved as a SavedModel, a TensorFlow Lite model with a label file, and a TensorFlow.js model, and I checked TensorFlow Lite predictions on sample images.

## Limitations

The images are mostly single vegetables, so accuracy on cluttered scenes, mixed produce, or unusual lighting is untested. Early-epoch validation accuracy was unstable before it settled, which is common for a network trained from scratch.
