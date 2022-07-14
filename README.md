# Helicarrier Frontend Engineer Test

## Frontend Technologies Used
- React
- TypeScript
- Material UI
- GraphQL

## Commands

After you download this project, these commands are available in `package.json`.

Make sure [NodeJS](https://www.nodejs.org/) or [Yarn](https://www.yarnpkg.com) is installed on your machine.

```bash
'yarn install' or 'npm install' to install dependencies # run the app in development mode
```

## Playing locally

After installing dependencies,

```bash
$ yarn start or npm start
```

You app will open at http://localhost:3000

> Note that the server may start on a different port if :3000 is in use.

## Directory structure

### Overview

```tree
├─ public/
│  ├─ index.html
├─ src/
|  ├─ assets/
│  ├─ |- css/
│  ├─ |- img/
|  |  ├---|-logo.png
|  ├─ components/
|  |  ├─AutoCompleteCheckboxes.tsx
|  |  ├─DataTable.tsx
|  |  ├─Divider.tsx
|  |  ├─DropdownWrapper.tsx
|  |  ├─MultiSelect.tsx
|  |  ├─RangeSlider.tsx
|  |  ├─SearchBar.tsx
|  ├─ containers/
|  |  ├─Filters.tsx
|  ├─ styles/
|  |  ├─App.css
|  |  ├─divider.css
|  |  ├─filter.css
|  |  ├─index.css
│  ├─ App.tsx
│  ├─ index.tsx
├─ package.json
├─ tsconfig.json
└─ README.md
```
## Issues faced

I faced some challenges with the AutoCompleteCheckboxes component & DataTable component which took most of the time.

## Feedback

I agree that this task was given me, since last week, but If I had more time, I would have refactored & conditional rendered the data gotten from graphql 
