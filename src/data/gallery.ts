export interface Shot {
  file: string;
  alt: string;
  caption: string;
  /** wide: full width; phone/tall: narrow column */
  kind?: 'wide' | 'phone' | 'tall';
  /** no border/background, for transparent device mockups */
  bare?: boolean;
}
export interface Media { logo?: string; hero?: Shot; shots: Shot[]; }

// Files live in src/assets/projects/<project-id>/
export const media: Record<string, Media> = {
  'puskesmas-chatbot': {
    hero: {
      file: 'chat-laptop.png', kind: 'wide', bare: true,
      alt: 'WhatsApp conversation with the Puskesmas Cijagra Baru chatbot shown on a laptop',
      caption: 'The chatbot answering test questions about services, schedules, and procedures.',
    },
    shots: [
      { file: 'chat-phone.png', kind: 'phone', bare: true, alt: 'The same conversation on a phone', caption: 'The same conversation on a phone.' },
      { file: 'confusion-matrix.png', kind: 'wide', alt: 'Confusion matrix of the intent classifier on the test set', caption: 'Test-set confusion matrix for the 7 intents: 293 of 301 questions were classified correctly.' },
      { file: 'intent-distribution.png', kind: 'wide', alt: 'Number of questions per intent in the dataset', caption: 'Questions per intent in the dataset (1,505 in total).' },
    ],
  },
  'peka-toksin': {
    logo: 'logo.png',
    shots: [
      { file: 'app-home.jpg', kind: 'phone', alt: 'Peka Toksin home screen', caption: 'Home screen of the Android app.' },
      { file: 'app-detect-safe.jpg', kind: 'phone', alt: 'Camera detection showing no mold detected', caption: 'Live camera detection: no mold detected, with a confidence score.' },
      { file: 'app-detect-mold.jpg', kind: 'phone', alt: 'Camera detection showing black mold detected', caption: 'Live camera detection: black mold detected.' },
      { file: 'app-history.jpg', kind: 'phone', alt: 'Detection history screen', caption: 'Saved detections with confidence and time.' },
      { file: 'confusion-matrix.png', kind: 'wide', alt: 'Confusion matrix on the validation set', caption: 'Validation confusion matrix: 19 of 1,528 mold images were missed, and 345 of 1,440 clean surfaces were flagged as mold.' },
      { file: 'training-curves.png', kind: 'wide', alt: 'Training and validation accuracy and loss per epoch', caption: 'Training curves over 10 epochs. Validation accuracy fluctuates while training accuracy keeps rising.' },
    ],
  },
  'mlops-churn': {
    hero: {
      file: 'prometheus.png', kind: 'wide',
      alt: 'Prometheus graph of TensorFlow Serving request count',
      caption: 'Prometheus graph of the request count for the cc-model served on Railway, with status OK.',
    },
    shots: [
      { file: 'serving-metadata.png', kind: 'wide', alt: 'TensorFlow Serving model metadata in the browser', caption: 'Model metadata returned by the live TensorFlow Serving REST endpoint.' },
    ],
  },
  'news-classification': {
    hero: {
      file: 'app.png', kind: 'wide',
      alt: 'Streamlit app that classifies a news headline and shows probabilities per category',
      caption: 'The Streamlit app: type a headline and get the predicted category with a score for each category.',
    },
    shots: [],
  },
  maha: {
    logo: 'logo.png',
    shots: [
      { file: 'app-gym.jpg', kind: 'phone', alt: 'MAHA app screen with exercise recommendations', caption: 'Exercise recommendations in the Android app.' },
      { file: 'app-food.jpg', kind: 'phone', alt: 'MAHA app screen with healthy food recommendations', caption: 'Diet recommendations in the Android app.' },
      { file: 'curves-exercises.png', kind: 'wide', alt: 'Exercise output loss and accuracy per epoch', caption: 'Exercise output: loss and accuracy over 50 epochs.' },
      { file: 'curves-diet.png', kind: 'wide', alt: 'Diet output loss and accuracy per epoch', caption: 'Diet output: loss and accuracy over 50 epochs.' },
    ],
  },
  'ecommerce-dashboard': {
    hero: {
      file: 'dashboard.png', kind: 'wide',
      alt: 'Streamlit e-commerce dashboard with date range filter and category charts',
      caption: 'The live dashboard, with a date-range filter in the sidebar.',
    },
    shots: [
      { file: 'rfm.png', kind: 'tall', alt: 'Best customers by recency, frequency, and monetary value', caption: 'Top customers ranked by each RFM measure.' },
    ],
  },
  'complaint-tweets': {
    shots: [
      { file: 'model-comparison.png', kind: 'wide', alt: 'Test accuracy of 35 classical models with and without SMOTE', caption: 'Test accuracy of the 35 classical model setups, with and without SMOTE.' },
      { file: 'class-distribution.png', kind: 'tall', alt: 'Class proportions in the tweet dataset', caption: 'Class proportions: 0 = Keluhan, 1 = NotKR, 2 = Respon.' },
    ],
  },
  'shopee-sentiment': {
    shots: [
      { file: 'model-comparison.png', kind: 'wide', alt: 'Train and test accuracy of the three modeling schemes', caption: 'Train and test accuracy of the three schemes. The MLP used a 70/30 split.' },
    ],
  },
  'vegetable-classification': {
    hero: { file: 'tflite-inference.png', kind: 'wide', alt: 'TensorFlow Lite predictions on vegetable photos', caption: 'TensorFlow Lite predictions on test images, with the predicted and actual class.' },
    shots: [
      { file: 'samples.png', kind: 'wide', alt: 'One sample image per vegetable class', caption: 'One sample image from each of the 15 classes.' },
      { file: 'training-curves.png', kind: 'wide', alt: 'Training and validation accuracy and loss', caption: 'Accuracy and loss per epoch. Training stopped at 95% validation accuracy.' },
      { file: 'confusion-matrix.png', kind: 'wide', alt: 'Confusion matrix on the test set', caption: 'Confusion matrix on the test set.' },
    ],
  },
  'mlops-sarcasm': { shots: [] },
  'house-price': {
    hero: { file: 'mse-comparison.png', kind: 'wide', alt: 'Mean squared error of KNN, AdaBoost, and Random Forest on train and test data', caption: 'Mean squared error of the three models on training and test data (in squared rupiah).' },
    shots: [
      { file: 'price-by-location.png', kind: 'wide', alt: 'Average house price by location', caption: 'Average price by location, with confidence intervals.' },
      { file: 'correlation.png', kind: 'wide', alt: 'Correlation matrix of numeric features', caption: 'Correlation matrix. Installment correlates 1.0 with price.' },
      { file: 'histograms.png', kind: 'wide', alt: 'Histograms of the numeric features', caption: 'Distributions of the numeric features.' },
    ],
  },
  'movie-recommender': {
    shots: [
      { file: 'rmse-curve.png', kind: 'wide', alt: 'Training and validation RMSE per epoch', caption: 'Training RMSE keeps falling while validation RMSE stays flat.' },
      { file: 'collaborative-output.png', kind: 'tall', alt: 'Top 10 collaborative filtering recommendations for two users', caption: 'Top 10 recommendations for two users.' },
      { file: 'content-based.png', kind: 'tall', alt: 'Sample films with their genres', caption: 'Films and genres used by the content-based model.' },
    ],
  },
  'financial-clustering': {
    shots: [
      { file: 'silhouette.png', kind: 'wide', alt: 'Silhouette score by number of clusters', caption: 'Silhouette score by number of clusters; k = 2 scores highest.' },
      { file: 'pca-clusters.png', kind: 'wide', alt: 'Two clusters shown in two PCA dimensions', caption: 'The two clusters in two PCA dimensions.' },
    ],
  },
  'excel-bootcamp': {
    hero: { file: 'dashboard.png', kind: 'wide', alt: 'Excel dashboard with a year slicer, monthly sales, category contribution, and sales by region', caption: 'The final Excel dashboard: year slicer, customer lookup, monthly sales, category contribution, and region by segment.' },
    shots: [],
  },
};
