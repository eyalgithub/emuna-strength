const messagesByCategory = {
          emuna: [
            "גם כשלא מבינים את הדרך – מאמינים במי שמוביל אותה.",
            "הקב״ה לא מאחר אף פעם – הוא תמיד מגיע בדיוק בזמן.",
            "אמונה היא לדעת שאתה לא לבד, גם כשקשה.",
            "כשאין לך תשובות – תחזיק באמונה."
          ],
          tikva: [
            "גם לילה ארוך מסתיים בבוקר.",
            "צעד קטן של תקווה פותח שער גדול.",
            "אל תוותר — יש אור גם אחרי העיקול.",
            "היום עוד יכול להתהפך לטובה."
          ],
          toda: [
            "תודה קטנה פותחת לב גדול.",
            "מי שמודה על הטוב — רואה עוד טוב.",
            "גם על הדברים הקטנים אומרים תודה.",
            "הודיה הופכת מה שיש — למספיק."
          ],
          hitmodedut: [
            "כל קושי הוא הזמנה להתחזק.",
            "ה׳ רואה את המאמץ שלך, גם כשאף אחד אחר לא רואה.",
            "אם הגעת עד כאן — יש לך כוח להמשיך.",
            "אין תפילה שהולכת לאיבוד."
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
