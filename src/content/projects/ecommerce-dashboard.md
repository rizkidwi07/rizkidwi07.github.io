---
title: "E-commerce Analysis and Dashboard"
summary: "An RFM analysis of a public e-commerce dataset, published as an interactive Streamlit dashboard."
kind: "Course project"
category: "Analytics"
period: "Oct 2024"
role: "Sole developer"
stack: ["Python", "Pandas", "Seaborn", "Streamlit"]
metric: { value: "5 stars", label: "Dicoding reviewer rating" }
order: 13
featured: false
links:
  github: "https://github.com/rizkidwi07/Proyek-Analisis-Data"
  demo: "https://analysis-ecommerce-rizkidwi07.streamlit.app/"
---
## Business questions

1. Which product categories bring in the most and the least sales value?
2. Where are customers located, by city and state?
3. Who are the best customers, by recency, frequency, and monetary value (RFM)?

## Data

A public e-commerce dataset with 99,441 orders, 112,650 order items, 32,951 products, and 3,095 sellers. Cleaning covered missing values in the order and product tables and converting the date columns to datetime.

## Findings

- **Categories:** health and beauty (`beleza_saude`) has the highest total sales value at about 1.26 million, followed by bed, bath and table (`cama_mesa_banho`, 1.22 million) and watches and gifts (`relogios_presentes`, 1.21 million). Insurance and services (`seguros_e_servicos`) is the lowest.
- **Locations:** São Paulo city has 15,540 of the 99,441 customers (about 16%), and São Paulo state has 41,746 (about 42%). Rio de Janeiro is second with 6,882 customers.
- **Delivery:** the average delivery time is about 12 days.
- **Customer value:** in the dashboard's default date range, the average customer placed a single order (average frequency 1.0), so repeat purchases are rare.

## Approach

Data wrangling, EDA, and visualization, then RFM analysis to rank customers. The results are published as an interactive dashboard with a date-range filter.

## Limitations

The category ranking uses total sales value, so it reflects both price and sales volume, not unit price. The data is historical, so the dashboard has no live feed.
