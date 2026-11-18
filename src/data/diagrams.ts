import type { Lane, Link } from '../components/FlowDiagram.astro';

export interface DiagramSpec { title: string; description: string; lanes: Lane[]; links: Link[] }

export const diagrams: Record<string, DiagramSpec> = {
  'puskesmas-chatbot': {
    title: 'Architecture of the Puskesmas WhatsApp chatbot',
    description: 'Training: a dataset of 1,505 questions goes through preprocessing and TF-IDF into a One-vs-One SVM that is saved as a model. Runtime: a patient message reaches a Flask webhook through the WhatsApp Cloud API, is preprocessed and vectorized, the SVM predicts the intent, and cosine similarity picks the answer, which is sent back in under 3 seconds.',
    lanes: [
      {
        label: 'Training (offline)',
        nodes: [
          { title: ['Questions dataset'], sub: ['1,505 questions,', '7 intents'] },
          { title: ['Preprocessing'], sub: ['Slang, stopwords,', 'Sastrawi stemming'] },
          { title: ['TF-IDF'], sub: ['Unigrams + bigrams,', '1,736 features'] },
          { title: ['SVM One-vs-One'], sub: ['C = 5, 5-fold', 'grid search'] },
          { title: ['Saved model'], sub: ['97.34% accuracy on', '301 test questions'], accent: true },
        ],
      },
      {
        label: 'Runtime (each message)',
        nodes: [
          { title: ['Patient on', 'WhatsApp'], sub: ['Asks in everyday', 'Indonesian'] },
          { title: ['Cloud API + Flask'], sub: ['WhatsApp Cloud API', 'to a Flask webhook'] },
          { title: ['Preprocess + TF-IDF'], sub: ['Same steps as', 'in training'] },
          { title: ['SVM intent'], sub: ['Predicts one of', 'the 7 intents'] },
          { title: ['Answer + reply'], sub: ['Cosine similarity picks', 'the answer, under 3 s'], accent: true },
        ],
      },
    ],
    links: [{ from: [0, 4], to: [1, 3], label: 'loads the model' }],
  },

  'peka-toksin': {
    title: 'Architecture of the Peka Toksin Android app',
    description: 'Training: field photos and public images are augmented and used to fine-tune MobileNetV2, validated at 88% accuracy with 0.99 mold recall, then converted to TensorFlow Lite. On the phone: a camera frame goes through the TensorFlow Lite model, which returns mold detected or safe with a confidence score, saved to a detection history, with an action guide for residents.',
    lanes: [
      {
        label: 'Training (offline)',
        nodes: [
          { title: ['Image dataset'], sub: ['Field photos + public', 'images, 2 classes'] },
          { title: ['Augmentation'], sub: ['Flip, rotation, zoom,', 'class weights'] },
          { title: ['MobileNetV2'], sub: ['Transfer learning,', '224 × 224 input'] },
          { title: ['Validation'], sub: ['88% accuracy,', '0.99 mold recall'] },
          { title: ['TensorFlow Lite'], sub: ['Model converted', 'for the phone'], accent: true },
        ],
      },
      {
        label: 'On the phone (Android app)',
        nodes: [
          { title: ['Camera frame'], sub: ['Resident points the', 'phone at a surface'] },
          { title: ['TFLite model'], sub: ['Runs inside the app'] },
          { title: ['Result'], sub: ['Mold or safe, with', 'a confidence score'] },
          { title: ['Detection history'], sub: ['Saved with time', 'and confidence'] },
          { title: ['Action guide'], sub: ['What to do next', 'for residents'], accent: true },
        ],
      },
    ],
    links: [{ from: [0, 4], to: [1, 1], label: 'bundled in the app' }],
  },

  'mlops-churn': {
    title: 'Architecture of the churn prediction MLOps pipeline',
    description: 'Pipeline: the Netflix engagement data is transformed with TensorFlow Transform, used to train a neural network, evaluated with TFMA, and saved as a model. Serving: a client sends a REST request to TensorFlow Serving running in Docker on Railway, which returns a churn probability, and Prometheus tracks request count and status.',
    lanes: [
      {
        label: 'Pipeline (TFX)',
        nodes: [
          { title: ['Engagement data'], sub: ['Netflix dataset,', '3,500 customers'] },
          { title: ['TensorFlow', 'Transform'], sub: ['Encode categories,', 'normalize numbers'] },
          { title: ['Neural network'], sub: ['3 dense layers,', 'sigmoid output'] },
          { title: ['TFMA evaluation'], sub: ['Binary accuracy:', '99% validation'] },
          { title: ['Saved model'], sub: ['Ready to serve'], accent: true },
        ],
      },
      {
        label: 'Serving and monitoring',
        nodes: [
          { title: ['Client request'], sub: ['REST call with', 'customer features'] },
          { title: ['TensorFlow Serving'], sub: ['Docker on Railway,', 'returns churn probability'], accent: true },
          { title: ['Prometheus'], sub: ['Tracks request count', 'and status'] },
        ],
      },
    ],
    links: [{ from: [0, 4], to: [1, 1], label: 'deployed' }],
  },
};
