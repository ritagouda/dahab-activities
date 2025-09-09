diff --git a//dev/null b/script.js
index 0000000000000000000000000000000000000000..5a5fe4aec47ba5e8bc675ccc4cc31ae0eea3bdd8 100644
--- a//dev/null
+++ b/script.js
@@ -0,0 +1,15 @@
+document.querySelectorAll('.filter-btn').forEach(btn => {
+  btn.addEventListener('click', () => {
+    const type = btn.dataset.filter;
+    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
+    btn.classList.add('active');
+
+    document.querySelectorAll('.activity').forEach(card => {
+      if (type === 'all' || card.dataset.type === type) {
+        card.style.display = '';
+      } else {
+        card.style.display = 'none';
+      }
+    });
+  });
+});
