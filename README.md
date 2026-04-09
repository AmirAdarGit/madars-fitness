# אתר תדמית - ספיר מדר

אתר React + Vite בעברית (RTL) למאמנת כושר.

## הרצה מקומית

```bash
npm install
npm run dev
```

## פריסה ל-GitHub Pages

1. צור ריפו חדש ב-GitHub.
2. דחוף את הקוד לריפו.
3. הרץ:

```bash
npm run deploy
```

4. ב-GitHub פתח `Settings` -> `Pages` וודא שהמקור הוא `gh-pages branch`.

## הוספת תמונות גלריה

- שים את התמונות בתיקייה `public/images/gallery`.
- שמות מומלצים: `trainer-01.jpg`, `trainer-02.jpg`, `trainer-03.jpg`, `trainer-04.jpg`.
- אם מוסיפים יותר תמונות, עדכן גם את המערך `galleryImages` בקובץ `src/App.jsx`.
