CSV Runner Dashboard
## 1. Project Overview

Challenge: CSV Runner Dashboard
Tech Stack: React.js (Vite), Tailwind CSS, shadcn/ui, Recharts

This project is a frontend dashboard application that allows users to upload a CSV file containing running activity data with the columns date, person, and miles. The application validates the CSV, computes summary metrics, and visualizes the data using interactive charts. Users can view insights for all runners or filter by individual persons.

## 2. Assumptions

- The CSV file must contain headers exactly named: date, person, miles  
- Dates are provided in a valid ISO / YYYY-MM-DD format
- Miles run is a numeric value (integer or decimal)

Data is processed entirely on the client side

No backend, authentication, or database is required

The CSV file size is assumed to be small to medium

## 3. Prerequisites

Node.js: v18 or higher

npm: v9 or higher

Tools:

Modern browser (Chrome / Firefox / Edge)

Git (optional)

No local database or backend services are required.

## 4. Setup
4.1 Clone the Repository
```git clone <repository-url>
cd csv-runner-dashboard
```

4.2 Install All Dependencies

Install all required dependencies using npm:

```
npm install
```


If installing or verifying dependencies manually, the project uses:

```
npm install papaparse recharts
```


Initialize and install shadcn/ui components:

```
npx shadcn@latest init
npx shadcn@latest add button card select
```

4.3 Environment Variables

This project does not require any environment variables.

If required in the future, create a .env file from .env.example and add the relevant keys.

4.4 Seed / Sample Data

No database seeding is required.

A sample CSV file is provided at:

/public/sample.csv


This file can be uploaded directly to test the application.

## 5. Run & Verify
Start Development Server
```
npm run dev
```


Open the application in your browser:

```
http://localhost:5173
```

Verification Steps (Acceptance Checklist)
Upload & Parse CSV

Upload sample.csv

CSV headers and data are validated

Error messages appear for invalid CSV files

Overall Metrics

Average miles

Minimum miles

Maximum miles

Per-Person View

Select a person from the dropdown

Metrics and charts update dynamically

Charts

Line chart displays miles run over time

Works for both overall and per-person views

## 6. Features & Limitations
Features

CSV upload with validation

Overall and per-person analytics

Summary metrics (average, min, max)

Interactive line chart visualization

Professional and responsive UI

Limitations

No persistent data storage

Not optimized for very large CSV files

No CSV export functionality

Future Improvements

Drag-and-drop CSV upload

Raw data table view

CSV export of filtered data

Additional chart types and aggregations

## 7. Notes on Architecture
Folder Structure
src/
├── components/
│   ├── CsvUploader.jsx
│   ├── MetricsCard.jsx
│   ├── PersonSelector.jsx
│   └── Charts.jsx
├── pages/
│   └── Dashboard.jsx
├── utils/
│   ├── csvParser.js
│   └── metrics.js
├── App.jsx
└── main.jsx

State & Data Management

CSV data is stored in local React state

Derived state is used for filtering and metric calculation

No global state management library is used to keep the app simple and maintainable

## 8. Accessibility & UI

Semantic HTML elements for structure

Keyboard-accessible inputs and dropdowns

Clear labels and placeholders

Adequate color contrast using shadcn/ui defaults

Consistent spacing and readable typography

Responsive layout for different screen sizes

✅ Summary

This project demonstrates clean frontend architecture, proper CSV validation, dynamic data visualization, and professional UI design. It fully meets the challenge requirements while remaining simple, extensible, and easy to understand.
