---
title: "Peka Toksin"
summary: "An Android app that detects black mold from a phone camera, built with and for residents of Pamekaran Village."
kind: "Funded community project"
category: "Computer Vision"
period: "Jul – Sep 2025"
role: "Machine learning engineer and Android developer"
stack: ["TensorFlow", "MobileNetV2", "TensorFlow Lite", "Android Studio"]
metric: { value: "52", label: "residents have used the app" }
order: 2
featured: true
links:
  github: "https://github.com/rizkidwi07/PekaToksin"
  papers:
    - { label: "Paper: KACANEGARA", url: "https://doi.org/10.28989/kacanegara.v9i3.3514" }
    - { label: "Paper: @is The Best", url: "https://doi.org/10.34010/aisthebest.v10i1.17909" }
---
## Problem

Residents of Pamekaran Village judged black mold by eye alone and did not know how harmful it can be. They needed a quick way to check a surface with the phone they already own.

## Data

The model is a binary classifier with two classes, black mold and non-black mold. The dataset has 7,557 training images and 2,968 validation images. The team collected field photos in the village and combined them with public image collections.

## Approach

A MobileNetV2 classifier pretrained on ImageNet, fine-tuned on 224 × 224 images with transfer learning. Random flips, rotation, and zoom augment the training images, and class weights computed from the training distribution correct for class imbalance. The model trained for 10 epochs and was converted to TensorFlow Lite so it runs on the phone.

## Evaluation

| Metric | Validation result |
|---|---|
| Accuracy | 88% |
| Black mold recall | 0.99 (1,509 of 1,528 found) |
| Black mold precision | 0.81 |
| No-mold recall | 0.76 (1,095 of 1,440 correct) |

The model favors catching mold: only 19 of 1,528 mold images were missed. The cost is false alarms, with 345 of 1,440 clean surfaces (24%) flagged as mold.

## Deployment

I built the app end to end: model integration, UI/UX design, and APK packaging. It includes a detection history and an action guide, and it is used by residents and the youth organization (Karang Taruna). 52 users have logged in and used it.

## Impact

The project received national PKM-PM 2025 funding from the Ministry of Higher Education, Science, and Technology and led to two journal articles.

## Limitations

Validation accuracy moved between about 81% and 89% from epoch to epoch while training accuracy rose to 97%, so the model overfits somewhat and the 88% figure is approximate. There is no separate test set, so results are measured on the validation set only. In the app's detection history, confidence scores sit around 63–68%, so it expresses moderate rather than high certainty. The app is a screening aid that tells residents when to take a closer look, not a replacement for a lab test.
