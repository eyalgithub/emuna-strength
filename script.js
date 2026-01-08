const messagesByCategory = {
          emuna: [
            "גם כשלא מבינים את הדרך – מאמינים במי שמוביל אותה.",
            "הקב״ה לא מאחר אף פעם – הוא תמיד מגיע בדיוק בזמן.",
            "אמונה היא לדעת שאתה לא לבד, גם כשקשה.",
            "כשאין לך תשובות – תחזיק באמונה.",
            "גם אם אתה לא רואה את התמונה כולה – הקב״ה רואה.",
            "הקב״ה לא לוקח כוח בלי לתת סיבה, ולא נותן ניסיון בלי יכולת.",
            "יש ימים שהאמונה היא פשוט להמשיך צעד אחד קדימה.",
            "כשאין לך מילים – הלב מדבר לפני ה׳.",
            "גם כששקט — השגחה לא מפסיקה לעבוד.",
            "ה׳ לא עזב אותך; הוא בונה אותך.",
            "אמונה היא להיאחז בטוב גם כשהסערה עוד כאן.",
            "מה שלא מסתדר עכשיו — יכול להתברר לטובה אחר כך.",
            "יש הנהגה, גם כשאין הבנה.",
            "הקב״ה שומע גם את הבקשה שלא נאמרה בקול.",
            "ברגעים של ספק — תחזור לפשטות: ה׳ איתי.",
            "כשנופלים — זוכרים למי קמים.",
            "אל תמדוד את הדרך לפי הרגש של היום.",
            "ה׳ יודע למה התפילה מתעכבת — והוא מדייק.",
            "אמונה היא להפקיד את הדאגה בידיים הנכונות.",
            "גם אם הלב כבד — הנשמה זוכרת את האור.",
            "הקב״ה מנהל את מה שאתה לא מצליח לנהל.",
            "לא תמיד צריך תשובות; לפעמים צריך ביטחון.",
            "כל עיכוב יכול להיות הכנה.",
            "יש חסד גם בתוך הסתר פנים.",
            "ה׳ יודע את הכוונה שלך, גם אם לא יצא מושלם.",
            "אמונה קטנה שמחזיקים היום — עושה ישועה גדולה מחר.",
            "כשאתה מרגיש לבד — תזכור מי הולך איתך.",
            "גם דמעה היא תפילה.",
            "הקב״ה קרוב במיוחד ללב נשבר.",
            "ה׳ נמצא גם בפרטים הקטנים של היום.",
            "לפעמים הדרך עצמה היא התשובה.",
            "גם כשלא מרגישים — האמונה עדיין מחזיקה.",
            "הקב״ה לא מוותר עליך, גם אם אתה מתעייף.",
            "יש משמעות גם למה שלא הצליח היום.",
            "ה׳ מכיר את המחשבות שלך לפני שהן מילים.",
            "אמונה היא לדעת שיש סדר גם בתוך הבלבול.",
            "לא כל דבר צריך להבין — מספיק להאמין.",
            "הקב״ה פועל גם מאחורי הקלעים.",
            "מה שנראה מאוחר — מדויק בזמן שלו.",
            "אמונה שקטה מחזיקה חזק.",
            "ה׳ יודע לאן הוא מוביל אותך.",
            "גם אם התשובה שונה ממה שציפית — היא לטובתך.",
            "יש ליווי גם בדרך שלא בחרת.",
            "הקב״ה בונה גם דרך המעכבים.",
            "אמונה היא עוגן בזמנים סוערים.",
            "ה׳ לא שוכח אף תפילה.",
            "יש השגחה גם בפרטים שנראים מקריים.",
            "אל תזלזל בכוח של אמון פשוט.",
            "אמונה היא אור שנדלק מבפנים.",
            "הקב״ה קרוב יותר ממה שנדמה.",
            "גם אם הלב מתבלבל — הדרך נשמרת.",
            "יש יד שמכוונת גם כשלא רואים.",
            "ה׳ שומר עליך גם כשאתה שוכח לבקש.",
            "אמונה נותנת כוח להמשיך בלי לדעת הכול."

          ],
          tikva: [
            "גם לילה ארוך מסתיים בבוקר.",
            "צעד קטן של תקווה פותח שער גדול.",
            "אל תוותר — יש אור גם אחרי העיקול.",
            "היום עוד יכול להתהפך לטובה.",
            "היום עוד יכול להיפתח מחדש.",
            "גם אם עכשיו קשה — זה לא סוף הסיפור.",
            "תקווה היא אור קטן שלא נותנים לו לכבות.",
            "מה שנשבר — יכול גם להיבנות מחדש.",
            "צעד קטן קדימה הוא ניצחון.",
            "אל תפסיק לבקש טוב — גם אם הדרך ארוכה.",
            "יש בשורות טובות בדרך, גם אם הן עוד לא הגיעו.",
            "אל תוותר על עצמך — השמים לא ויתרו עליך.",
            "הישועה לפעמים מגיעה אחרי רגע של חושך.",
            "תקווה זה להאמין שמחר יכול להיות אחרת.",
            "כשאין כוח — עושים מה שאפשר, וה׳ משלים.",
            "גם דלת סגורה היא לפעמים הכוונה לדלת הנכונה.",
            "הקושי של היום לא מוחק את הטוב של מחר.",
            "תמשיך עוד קצת — לפעמים זה בדיוק הרגע לפני השינוי.",
            "יש סיבה שאתה עדיין עומד. זה לא במקרה.",
            "גם אם לא רואים — יש התקדמות.",
            "אל תתייאש ממה שעדיין לא קרה.",
            "תקווה לא מבטיחה קל, היא מבטיחה אפשר.",
            "כל יום הוא הזדמנות להתחלה נקייה.",
            "גם אם טעית — אפשר לתקן.",
            "לא כל עיכוב הוא הפסד.",
            "מי שמחזיק תקווה — מחזיק מפתח.",
            "יש אור שמגיע רק אחרי סבלנות.",
            "ה׳ יכול להפוך דף ברגע אחד.",
            "עוד תסתכל אחורה ותבין למה זה היה שווה.",
            "כל בוקר הוא סימן שעוד לא נגמר.",
            "גם נפילה יכולה להיות חלק מהעלייה.",
            "אל תוותר על הטוב שעוד לא הגיע.",
            "תקווה היא לבחור להמשיך גם כשקשה.",
            "יש סיבה שהלב עדיין מצפה.",
            "גם אם זה מתעכב — זה לא מתבטל.",
            "תקווה שקטה חזקה מצעקה.",
            "עוד תראה איך הדברים מתחברים.",
            "אל תתייאש מיום אחד אפור.",
            "יש הפתעות טובות שלא מתכננים.",
            "תקווה מחזיקה אותך עד שהישועה מגיעה.",
            "גם ציפייה היא חלק מהדרך.",
            "לא הכול אבוד רק כי עכשיו קשה.",
            "תקווה היא סבלנות עם אמונה.",
            "יש רגעים שבהם הכול יכול להתהפך.",
            "אל תסגור את הלב בפני מחר.",
            "תקווה היא נשימה עמוקה לנשמה.",
            "גם אחרי חורף — האביב מגיע.",
            "יש אור שמגיע בשקט.",
            "אל תמהר להסיק מסקנות מהיום.",
            "תקווה לא דורשת הוכחות — רק לב פתוח.",
            "עוד תודֶה על מה שעכשיו מאתגר.",
            "יש סיום טוב גם לסיפור מורכב.",
            "תקווה נותנת כוח להחזיק עוד רגע.",
            "ה׳ יודע מתי לפתוח את השער."


          ],
          toda: [
            "תודה קטנה פותחת לב גדול.",
            "מי שמודה על הטוב — רואה עוד טוב.",
            "גם על הדברים הקטנים אומרים תודה.",
            "הודיה הופכת מה שיש — למספיק.",
            "תודה לה׳ על מה שיש — ועל מה שבדרך.",
            "כשאומרים תודה — הלב נעשה קל יותר.",
            "הודיה פותחת שערים של שפע.",
            "גם על דבר קטן — תודה גדולה.",
            "תודה על נשימה. תודה על עוד יום.",
            "הטוב גדל כשמסתכלים עליו.",
            "מי שמודה — רואה ניסים יומיומיים.",
            "תודה על אנשים טובים בדרך.",
            "תודה על כוח לקום גם כשהעייפות כבדה.",
            "תודה על רגעים של שקט.",
            "תודה על משפחה, על חבר, על לב שמרגיש.",
            "גם באמצע הקושי — יש על מה להודות.",
            "תודה על הזדמנויות חדשות.",
            "תודה על כל צעד קטן קדימה.",
            "הודיה הופכת חסר — לברכה.",
            "תודה שמרגיעה את הדאגה.",
            "תודה שמחזירה פרופורציות.",
            "תודה שמזכירה שהכול מתנה.",
            "כשמודים — מתקרבים לטוב.",
            "תודה על שמירה שלא תמיד רואים.",
            "תודה על חסד נסתר.",
            "תודה על שיעורים שמגדלים אותנו.",
            "תודה על הרגעים שבהם ה׳ מציל בלי שנדע.",
            "תודה על לב שמנסה להיות טוב.",
            "הודיה היום היא ברכה למחר.",
            "תודה על עוד הזדמנות לנסות.",
            "תודה על דברים שנראים מובנים מאליהם.",
            "תודה על רגע של שקט בתוך הרעש.",
            "תודה על כל נשימה שמחזיקה חיים.",
            "הודיה משנה את זווית הראייה.",
            "תודה על אנשים שעוזרים בלי לדעת.",
            "תודה על שמירה יומיומית.",
            "תודה על כוח להתמודד.",
            "תודה גם על מה שלמדנו דרך הקושי.",
            "הטוב מתרבה כשמכירים בו.",
            "תודה על אור קטן ביום עמוס.",
            "תודה על לב שמרגיש.",
            "תודה על הכוח לבקש סליחה.",
            "תודה על חסד פשוט.",
            "הודיה מחזקת את האמונה.",
            "תודה על התחלה חדשה.",
            "תודה על הזדמנויות שלא פספסנו.",
            "תודה על שיעורים שבונים אותנו.",
            "תודה על הדרך, לא רק על היעד.",
            "תודה על מי שמקשיב.",
            "תודה על הגנה שלא תמיד שמים לב אליה.",
            "הודיה מקרבת את הלב לשלווה.",
            "תודה על מתנות קטנות.",
            "תודה על טוב שמתגלה לאט.",
            "תודה שמביאה שמחה פנימית."


          ],
          hitmodedut: [
            "כל קושי הוא הזמנה להתחזק.",
            "ה׳ רואה את המאמץ שלך, גם כשאף אחד אחר לא רואה.",
            "אם הגעת עד כאן — יש לך כוח להמשיך.",
            "אין תפילה שהולכת לאיבוד.",
            "זה שאתה מתמודד — זה אומר שאתה חזק.",
            "גם אם זה כבד — אתה לא חייב לשאת לבד.",
            "כל התקדמות, אפילו קטנה, נחשבת.",
            "כשקשה — עושים את הדבר הבא, לא את כל הדרך.",
            "אל תתבייש בקושי; תתגאה במאמץ.",
            "הקב״ה רואה אותך נלחם בשקט.",
            "יש ימים שמנצחים רק בזה שלא נשברים.",
            "גם אם נפלת — אתה עדיין בדרך.",
            "אל תדבר לעצמך בקשיחות; דבר לעצמך ברחמים.",
            "זה בסדר לעצור לנשום.",
            "גם לב עייף ראוי למנוחה.",
            "אל תתייאש בגלל יום אחד קשה.",
            "כל ניסיון הוא הזדמנות לגדול.",
            "מה שעובר עליך עכשיו — לא מגדיר אותך.",
            "אתה לא מאחור — אתה בדרך שלך.",
            "כשאין חשק — עושים מתוך אמונה.",
            "גם אם אתה לא מושלם — אתה יקר.",
            "תפילה קצרה בכאב שווה הרבה.",
            "אל תוותר על הטוב שבך בגלל רגע רע.",
            "גם אם אין פתרון מיד — יש ליווי מלמעלה.",
            "אל תסחוב הכול לבד. שתף מישהו קרוב.",
            "ה׳ נותן כוח לפי הצורך.",
            "כל לילה נגמר — גם זה יעבור.",
            "אתה יכול לבקש עזרה — וזה כוח, לא חולשה.",
            "הכאב לא נצחי, והלב לומד להחלים.",
            "לא חייבים להיות חזקים כל הזמן.",
            "גם מנוחה היא חלק מהתמודדות.",
            "זה בסדר לקחת צעד אחורה כדי להמשיך.",
            "אל תכעס על עצמך כשקשה.",
            "כל התמודדות מלמדת אותך משהו.",
            "גם אם אתה עייף — אתה לא כישלון.",
            "זה שאתה ממשיך זה כבר ניצחון.",
            "אל תשווה את הדרך שלך לאחרים.",
            "גם ימים איטיים נחשבים.",
            "אל תמעיט בערך המאמץ שלך.",
            "יש כוח גם בלהודות שקשה.",
            "לא הכול צריך להיפתר היום.",
            "צעד אחד בזמן זה מספיק.",
            "גם התמודדות שקטה היא גבורה.",
            "אל תוותר על עצמך ברגע של חולשה.",
            "יש מי שמחזיק אותך גם כשקשה.",
            "אל תמדוד את עצמך לפי רגעים קשים.",
            "זה בסדר לבקש הפסקה.",
            "כל יום שאתה קם הוא הישג.",
            "אל תישאר לבד עם העומס.",
            "גם אם זה חוזר — אתה לומד להתמודד.",
            "יש ערך בהתמדה שקטה.",
            "אל תפסיק להאמין בעצמך.",
            "כל קושי זמני, גם אם הוא ארוך.",
            "הלב לומד להתחזק עם הזמן."


          ]
        };


        function generate() {
          const category = document.getElementById("category").value;
          const list = messagesByCategory[category] || [];
        
          if (list.length === 0) {
            document.getElementById("result").innerText = "לא נמצאו משפטים בקטגוריה הזו.";
            document.getElementById("copyBtn").disabled = true;
            document.getElementById("waBtn").disabled = true;
            document.getElementById("favBtn").disabled = true;
            return;
          }
        
          const random = Math.floor(Math.random() * list.length);
          const text = list[random];
        
          document.getElementById("result").innerText = text;
          document.getElementById("copyBtn").disabled = false;
          document.getElementById("waBtn").disabled = false;
          document.getElementById("favBtn").disabled = false;

          document.getElementById("copyMsg").innerText = "";
        }


        async function copyText() {
            const text = document.getElementById("result").innerText.trim();
            if (!text) return;
    
            try {
                await navigator.clipboard.writeText(text);
                document.getElementById("copyMsg").innerText = "✅ הועתק ללוח!";
            } catch (err) {
                // fallback לדפדפנים/מצבים שחוסמים clipboard
                const textarea = document.createElement("textarea");
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
    
                document.getElementById("copyMsg").innerText = "✅ הועתק ללוח!";
            }
        }
        function shareWhatsApp() {
          const text = document.getElementById("result").innerText.trim();
          if (!text) return;
        
          const message = encodeURIComponent(text + "\n\nנשלח מאתר חיזוק באמונה 💙");
          const url = "https://wa.me/?text=" + message;

          window.open(url, "_blank");
        }
        const STORAGE_KEY = "emuna_favorites_v1";

        function loadFavorites() {
          try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
          } catch {
            return [];
          }
        }
        
        function saveFavorites(list) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
        }
        
        function renderFavorites() {
          const container = document.getElementById("favorites");
          const favs = loadFavorites();
        
          const q = (document.getElementById("favSearch")?.value || "").trim().toLowerCase();
        
          if (!favs.length) {
            container.innerHTML = "<p style='color:#666;'>אין מועדפים עדיין. שמור משפט שאהבת ⭐</p>";
            return;
          }
        
          const filtered = q
            ? favs
                .map((text, i) => ({ text, i }))
                .filter(x => x.text.toLowerCase().includes(q))
            : favs.map((text, i) => ({ text, i }));
        
          if (!filtered.length) {
            container.innerHTML = "<p style='color:#666;'>לא נמצאו תוצאות.</p>";
            return;
          }
        
          container.innerHTML = filtered
            .map(x => `
              <div class="fav-item">
                <div>${escapeHtml(x.text)}</div>
                <div class="fav-actions">
                  <button onclick="copyFavorite(${x.i})">העתק</button>
                  <button onclick="shareFavorite(${x.i})">וואטסאפ</button>
                  <button onclick="removeFavorite(${x.i})">מחק</button>
                </div>
              </div>
            `)
            .join("");
        }

        
        function addToFavorites() {
          const text = document.getElementById("result").innerText.trim();
          if (!text) return;
        
          const favs = loadFavorites();
        
          if (favs.includes(text)) {
            document.getElementById("copyMsg").innerText = "⭐ כבר שמור במועדפים";
            return;
          }
        
          favs.unshift(text); // מוסיף לראש הרשימה
          saveFavorites(favs);
          renderFavorites();
          document.getElementById("copyMsg").innerText = "⭐ נשמר במועדפים!";
        }
        
        async function copyFavorite(i) {
          const favs = loadFavorites();
          const text = (favs[i] || "").trim();
          if (!text) return;
        
          try {
            await navigator.clipboard.writeText(text);
            document.getElementById("copyMsg").innerText = "✅ הועתק ללוח!";
          } catch {
            const textarea = document.createElement("textarea");
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            document.getElementById("copyMsg").innerText = "✅ הועתק ללוח!";
          }
        }
        
        function shareFavorite(i) {
          const favs = loadFavorites();
          const text = (favs[i] || "").trim();
          if (!text) return;
        
          const message = encodeURIComponent(text + "\n\nנשלח מאתר חיזוק באמונה 💙");
          window.open("https://wa.me/?text=" + message, "_blank");
        }
        
        function removeFavorite(i) {
          const favs = loadFavorites();
          favs.splice(i, 1);
          saveFavorites(favs);
          renderFavorites();
        }
        
        function escapeHtml(str) {
          return str
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
        }
        
        // כשהעמוד נטען – מציג מועדפים קיימים
        renderFavorites();

        function clearFavorites() {
          if (!confirm("בטוח למחוק את כל המועדפים?")) return;
          saveFavorites([]);
          renderFavorites();
          document.getElementById("copyMsg").innerText = "🗑️ המועדפים נמחקו";
        }
        
        function exportFavorites() {
          const favs = loadFavorites();
          if (!favs.length) {
            document.getElementById("copyMsg").innerText = "אין מועדפים לייצוא.";
            return;
          }
        
          const content = favs.map((t, i) => `${i + 1}. ${t}`).join("\n\n");
          const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
          const url = URL.createObjectURL(blob);
        
          const a = document.createElement("a");
          a.href = url;
          a.download = "emuna-favorites.txt";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        
          URL.revokeObjectURL(url);
          document.getElementById("copyMsg").innerText = "📄 קובץ המועדפים ירד למחשב";
        }

        function clearFavSearch() {
          const input = document.getElementById("favSearch");
          if (!input) return;
        
          input.value = "";
          renderFavorites();
        }



