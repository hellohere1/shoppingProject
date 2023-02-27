# shoppingProject
shopping list website
this is a readme file
הסבר על הפרויקט-
אפשר ליצור משתמש\להיכנס למשתמש שלך
בתוך משתמש אפשר לראות את הקנייה האחרונה שלך, ליצור קנייה חדשה, לסמן אם מוצר נקנה או לא, למחוק אותו, לעדכן את הבסיס נתונים, ולעבור לדף שמראה את היסטוריית הרשימות.
בדף ההיסטוריה אפשר לראות את הרשימות הקודמות שנעשו, כולל מה נקנה ומה לא, אפשר להוסיף משהו מההיסטוריה אל הרשימת קניות הנוכחית. בעיקרון אפשר גם להוסיף עוד
משתמש שנחשב כשותף. כרגע לא עושה כלום מעבר ללהוסיף אותו לבסיס נתונים.

הסבר הקבצים-
תיקיית src מכילה את הקבצים שמשנים מבחינת הפרויקט-כל התיקיות הבאות מוכלות בתוכה-

תיקיית-controllers
מכילה את הקבצים שמחברים בין הצד שרת אל בסיס הנתונים. בכל אחד מהקבצים יש פונקציות שמקבלות מידע, ומעדכנות את הבסיס נתונים לפי מה שנשלח. הקבצים האלה מחולקים לפי 
השם של הקבוץ, אומר בעצם איזה טבלה הוא מעדכן.

תיקיית -models
תיקייה שמכילה את הדרך שבה הטבלה נוצרץ בעצם יוצרים סוג של משתנה שאומר לבסיס הנתונים איך בדיוק צריך להראות משתמש\טבלת קניות, לפי הקובץ ומה שהוא יוצר. 

תיקיית mpngodb
בתוך התיקייה הזאת יש את הקובץ שיוצר את החיבור לבסיס הנתונים עצמו.


תיקיית routers-
הצד שת עצמו. כל קובץ יכול לקבל כל מיני בקשות עם URL שונה.
לפי הכתובת שנשלחת, השרת יודע איזה פונקציה להפעיל, והקבצים מסודרים לפי 3 דברים-
הקובץ שמעדכן את הדפים, הקובץ שמחבר את הלקוח אל טבלת הנתונים של הקניות, והאחד שמחבר את הלקוח עם טבלת הנתונים של המשתמשים עצמם.
תיקיית views- מכילה עוד 2 תיקיות-
מכילה את הקבצים שאפשר להראות ללקוח.


תיקיית pages-
התיקייה שמכילה את הדפים עצמם. משתמשת בESJ.
כל קובץ יכול לקבל נתונים, ובעצם להשתמש בנתונים האלה גם בתוך היצירה של הדף עצמו.


תיקיית partials-
התיקייה מכילה חלקים שאפשר להכניס בעצם לתוך דף אחר, אם הם נקראים. אלה בעצם חלקי דף שאפשר לקרוא להם בצורה דינאמית מדפים אחרים.

שני הקבצים- app.js , erver.js- 
מפעילים את כל הראוטרים ואת כל הצד שרת.
