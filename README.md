# 🚀 Car25 Privacy Policy & Account Deletion Portal

صفحة سياسة الخصوصية وحذف الحساب الرسمية لتطبيق **Car25** (`com.codeb.car25`)، مصممة خصيصاً لتلبية والامتثال الكامل لمتطلبات متجر **Google Play Console** (Google Play Data Safety & Account Deletion Policy).

---

## 🔗 الروابط المخصصة لمتجر Google Play Console

عند ملء بيانات التطبيق في **Google Play Console**، استخدم الروابط التالية:

### 1. رابط سياسة الخصوصية (Privacy Policy URL):
```text
https://<YOUR_GITHUB_USERNAME>.github.io/car25-policy/?mode=privacy&lang=ar
```
> أو باللغة الإنجليزية:
> `https://<YOUR_GITHUB_USERNAME>.github.io/car25-policy/?mode=privacy&lang=en`

---

### 2. رابط طلب حذف الحساب والبيانات (Account Deletion URL):
*(هذا الرابط مطلوب إلزامي من قِبل Google Play في قسم أمان البيانات وحذف الحسابات)*
```text
https://<YOUR_GITHUB_USERNAME>.github.io/car25-policy/?mode=delete_account&lang=ar
```
> أو باللغة الإنجليزية:
> `https://<YOUR_GITHUB_USERNAME>.github.io/car25-policy/?mode=delete_account&lang=en`

---

## 🌟 الميزات والمواصفات المعتمدة لـ Google Play

1. **الامتثال التام لسياسة Google Play 2024–2026**:
   - توضيح اسم التطبيق (`Car25`) وحزمة التطبيق (`com.codeb.car25`).
   - بيان صريح لما يتم حذفه فوراً (الملف الشخصي، بيانات تسجيل الدخول، أرقام الهواتف، العناوين، معرف الإعلانات AD_ID).
   - بيان البيانات التي يتم الاحتفاظ بها وأسبابها القانونية (الفواتير والمحاسبة والضرائب ومكافحة الاحتيال).
   - توضيح مدة وزمن المعالجة (خلال 14 إلى 30 يوماً).
   - خطوات حذف الحساب من داخل التطبيق (الملف الشخصي -> الإعدادات -> حذف الحساب).
   - **نموذج إلكتروني مباشر (Web Form)** يسمح للمستخدم بطلب الحذف دون الحاجة لتثبيت التطبيق.
2. **أوضاع العرض عبر الرابط (Modes)**:
   - `?mode=privacy`: يعرض سياسة الخصوصية الكاملة.
   - `?mode=delete_account`: يعرض مباشرة صفحة طلب حذف الحساب والبيانات مع النموذج.
   - `?mode=terms`: يعرض شروط وأحكام الاستخدام.
3. **دعم متعدد اللغات (Languages)**:
   - `?lang=ar`: النسخة العربية كاملة مع دعم RTL وخطوط عربية احترافية (`Tajawal` / `Cairo`).
   - `?lang=en`: النسخة الإنجليزية كاملة مع دعم LTR وخطوط (`Plus Jakarta Sans`).
   - زر تبديل فوري للغة بدون إعادة تحميل الصفحة مع تحديث الرابط تلقائياً.
4. **تصميم عصري متجاوب**:
   - دعم الوضع الداكن / الفاتح (Dark Mode / Light Mode).
   - زر طباعة وتصدير كـ PDF.
   - تصميم خفيف وسريع بنسبة 100% بدون أي مكتبات ثقيلة أو خطوات بناء معقدة.

---

## 🛠️ خطوات النشر على GitHub Pages (Deployment Guide)

### الطريقة الأولى: إنشاء مستودع جديد على GitHub (الأسهل والموصى بها)

1. أنشئ مستودعاً جديداً (Public Repository) على حسابك في GitHub باسم:
   `car25-policy`
2. ادخل إلى مجلد `car25-policy`:
   ```bash
   cd car25-policy
   git init
   git add .
   git commit -m "feat: initial car25 policy and account deletion portal"
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/car25-policy.git
   git push -u origin main
   ```
3. في صفحة المستودع على GitHub:
   - اذهب إلى **Settings** (الإعدادات).
   - اختر **Pages** من القائمة الجانبية.
   - في خانة **Branch** اختر `main` ومجلد `/ (root)`.
   - اضغط **Save**.
4. خلال دقيقة سيصبح موقعك متاحاً على الرابط:
   ```text
   https://<YOUR_GITHUB_USERNAME>.github.io/car25-policy/?mode=delete_account&lang=ar
   ```

---

### الطريقة الثانية: النشر عبر فرع `gh-pages` في نفس مستودع المشروع الحالي

إذا أردت نشره داخل نفس المستودع الحالي (`tools_cars_vendor`):
```bash
# نسخ محتويات المجلد إلى فرع gh-pages
git subtree push --prefix car25-policy origin gh-pages
```
وسيكون الرابط:
`https://MoazReactTsx.github.io/tools_cars_vendor/?mode=delete_account&lang=ar`

---

## 🧪 التجربة محلياً

يمكنك فتح ملف `index.html` مباشرة في متصفحك أو تشغيل خادم محلي:

```bash
# عبر بايثون:
python -m http.server 8080 --directory car25-policy

# أو عبر Node npx:
npx serve car25-policy
```

ثم زيارة الروابط:
- `http://localhost:8080/?mode=delete_account&lang=ar`
- `http://localhost:8080/?mode=privacy&lang=en`
