/**
 * Car25 Policy & Account Deletion Portal
 * Handles modes (?mode=delete_account | privacy | terms),
 * languages (?lang=ar | en), theme toggle, and interactive request generator.
 */

(function () {
  'use strict';

  // --- Localization Dictionary ---
  const i18n = {
    en: {
      site_title_privacy: "Privacy Policy — Car25",
      site_title_delete: "Account & Data Deletion — Car25",
      site_title_terms: "Terms of Service — Car25",
      nav_privacy: "Privacy Policy",
      nav_delete: "Delete Account",
      nav_terms: "Terms of Service",
      lang_name: "العربية",
      app_package: "Package: com.codeb.car25",
      badge_play_compliant: "Google Play Compliant",
      badge_last_updated: "Last Updated: October 2026",
      badge_app_version: "Car25 v1.1.5",

      // Hero - Privacy
      hero_title_privacy: "Car25 Privacy Policy",
      hero_desc_privacy: "Learn how Car25 (\"we\", \"our\", or \"us\") collects, protects, uses, and shares your personal information when you use our automotive spare parts application and related services.",

      // Hero - Delete Account
      hero_title_delete: "Account & Data Deletion Request",
      hero_desc_delete: "In full compliance with Google Play Store User Data and Account Deletion policies, you have complete control over your personal data and can request permanent account deletion at any time.",

      // Hero - Terms
      hero_title_terms: "Terms and Conditions of Use",
      hero_desc_terms: "Please read these terms carefully before using the Car25 mobile application and our e-commerce automotive spare parts services.",

      // Sidebar
      sidebar_title: "On this page",
      sidebar_sec_overview: "1. Overview & Identity",
      sidebar_sec_data_collected: "2. Data We Collect",
      sidebar_sec_usage: "3. How Data is Used",
      sidebar_sec_third_party: "4. Third Parties & Services",
      sidebar_sec_security: "5. Data Security",
      sidebar_sec_retention: "6. Data Retention",
      sidebar_sec_user_rights: "7. Your Rights (Access & Delete)",
      sidebar_sec_children: "8. Children's Privacy",
      sidebar_sec_contact: "9. Contact & Support",

      sidebar_del_overview: "1. Policy Compliance",
      sidebar_del_what: "2. Data Removed vs Retained",
      sidebar_del_app_steps: "3. In-App Deletion Steps",
      sidebar_del_web_form: "4. Web Deletion Request Form",
      sidebar_del_faq: "5. FAQ & Processing Timeline",

      sidebar_support_title: "Need immediate help?",
      sidebar_support_desc: "Our dedicated support team is available 24/7 to assist with your requests.",
      sidebar_support_email: "mh.data2020@gmail.com",

      // Delete Account Section Content
      del_card1_title: "Google Play Account Deletion Commitment",
      del_card1_p1: "At <strong>Car25</strong> (developed by CodeB), we respect your right to privacy and digital independence. As required by Google Play Store Developer Guidelines, you can delete your account directly using the built-in button inside the mobile app, or via this dedicated web page if you no longer have access to the app.",
      del_card1_callout: "Google Play Policy Notice: All personal identifying information, credentials, and associated profiles are permanently wiped within 14 to 30 days upon identity verification.",

      del_card2_title: "What Happens to Your Data",
      del_box_deleted_title: "Permanently Deleted Data",
      del_item_account: "Account credentials (name, email, encrypted password)",
      del_item_contacts: "Registered phone numbers and contact details",
      del_item_addresses: "Saved shipping addresses and delivery GPS coordinates",
      del_item_cart: "Active cart items, favorites, and vehicle garage profiles",
      del_item_tokens: "Device push tokens and advertising identifiers (AD_ID)",

      del_box_retained_title: "Data Retained & Justification",
      del_item_tax: "Invoices and transaction receipts (retained for tax, accounting, and anti-fraud statutory compliance as required by applicable laws)",
      del_item_legal: "Dispute and warranty settlement records (retained until legal limitation periods expire)",
      del_item_anon: "Fully anonymized telemetry and aggregated analytics without personal identifiers",

      del_card3_title: "Method 1: Direct In-App Button (Mobile App)",
      del_step1_title: "Open Menu Screen",
      del_step1_desc: "Launch the Car25 mobile app and select the 'Menu' screen from the navigation options.",
      del_step2_title: "Tap 'Delete Account' Button",
      del_step2_desc: "Locate and tap the red 'Delete Account' button (with the trash icon) in the menu list.",
      del_step3_title: "Confirm Deletion",
      del_step3_desc: "Confirm your deletion request in the confirmation popup dialog to submit your request directly.",

      del_card4_title: "Method 2: Submit a Web Deletion Request",
      del_card4_desc: "If you uninstalled the application or cannot access your phone, submit the official form below. Our privacy desk will process your request directly.",
      
      form_name_label: "Your Full Name",
      form_name_placeholder: "Enter full registered name",
      form_email_label: "Registered Email Address *",
      form_email_placeholder: "e.g. user@example.com",
      form_phone_label: "Registered Phone Number",
      form_phone_placeholder: "e.g. +966 / +20 ...",
      form_reason_label: "Reason for Account Deletion (Optional)",
      form_reason_placeholder: "Tell us why you are leaving (e.g., no longer need parts, sold car, duplicate account...)",
      form_confirm_checkbox: "I understand that this action is irreversible and will permanently delete my account and associated data per the retention policy.",
      form_btn_submit: "Generate Deletion Ticket & Email",
      form_btn_copy: "Copy Request to Clipboard",
      form_success_msg: "Deletion request generated successfully! A reference ticket has been created. Please click below to send via your email client or paste it to mh.data2020@gmail.com.",

      del_faq_title: "Frequently Asked Questions",
      faq1_q: "How long does account deletion take?",
      faq1_a: "Once submitted and verified, your profile and credentials are deactivated immediately, and all associated personal data is permanently scrubbed within 14 to 30 days.",
      faq2_q: "Can I undo this request?",
      faq2_a: "No. Once deletion is executed, it cannot be reversed. You may create a fresh account later with the same email if you wish to shop with us again.",
      faq3_q: "What if I have an active order or pending delivery?",
      faq3_a: "Pending shipments must be delivered or canceled before the account can be purged. Our team will contact you if an active order is in progress.",

      // Privacy Policy Section Content
      priv_sec1_title: "1. Introduction & Who We Are",
      priv_sec1_p: "This Privacy Policy describes how <strong>Car25</strong> (\"the App\", \"we\", \"our\", or \"us\"), an automotive spare parts e-commerce platform operated by CodeB, collects, uses, and safeguards information about our users.",
      priv_sec1_callout: "By installing, accessing, or using Car25, you acknowledge that you have read and agreed to the practices outlined in this policy.",

      priv_sec2_title: "2. Information We Collect",
      priv_sec2_p: "We collect only the minimum personal data required to fulfill automotive spare parts purchases, deliver goods, and enhance application performance.",
      th_category: "Data Category",
      th_examples: "Specific Examples",
      th_purpose: "Purpose of Collection",
      td_cat1: "Personal Identification",
      td_ex1: "Full Name, Email Address, Phone Number, Encrypted Password",
      td_pur1: "Account creation, login authentication, OTP verification, order communications",
      td_cat2: "Shipping & Location",
      td_ex2: "Delivery Address, City, Postal Code, Map Pin (Latitude/Longitude)",
      td_pur2: "Accurate physical delivery of auto spare parts and mechanical supplies",
      td_cat3: "Financial & Transactions",
      td_ex3: "Order history, purchase amounts, invoice records (Card details are tokenized securely by Stripe)",
      td_pur3: "Order processing, checkout completion, fraud prevention, and refund management",
      td_cat4: "Device & Technical",
      td_ex4: "Device model, OS version, IP address, Google Advertising ID (AD_ID), crash logs",
      td_pur4: "App stability, diagnostics, push notifications, and relevant advertising",

      priv_sec3_title: "3. How We Use Your Information",
      priv_sec3_li1: "<strong>Order Fulfillment:</strong> Sourcing, packaging, and dispatching selected automotive components to your specified address.",
      priv_sec3_li2: "<strong>Account Services:</strong> Managing authentication tokens, password recovery via OTP, and customer preference profiles.",
      priv_sec3_li3: "<strong>Customer Support:</strong> Assisting with vehicle part compatibility checks, order inquiries, returns, and warranty claims.",
      priv_sec3_li4: "<strong>Legal & Security:</strong> Preventing fraud, verifying payment authenticity, and complying with consumer protection standards.",

      priv_sec4_title: "4. Third-Party Services & Integrations",
      priv_sec4_p: "We collaborate with trusted service providers who adhere to rigorous data protection standards:",
      priv_sec4_li1: "<strong>Payment Processing (Stripe):</strong> Your credit card data is transmitted directly to Stripe over TLS encryption; we do not store raw card numbers on our servers.",
      priv_sec4_li2: "<strong>Google Play Services & Advertising ID (AD_ID):</strong> Used for analytics, app updates, and ad delivery conforming to Google Play Developer policies.",
      priv_sec4_li3: "<strong>Mapping & Geolocation:</strong> Used strictly to pinpoint parts delivery drop-off points.",
      priv_sec4_li4: "<strong>Hosting Infrastructure (apxprime.io):</strong> Encrypted cloud servers hosting our REST APIs and catalog services.",

      priv_sec5_title: "5. Data Security & Storage",
      priv_sec5_p: "We deploy industry-standard technical and organizational security measures, including HTTPS/TLS 1.3 encryption in transit, salted password hashing, and role-based database access controls to safeguard your data against unauthorized access, loss, or misuse.",

      priv_sec6_title: "6. Data Retention Period",
      priv_sec6_p: "We retain personal data as long as your account remains active. If you request account closure or data deletion, records are purged in accordance with our deletion timeline, except records mandated by commercial accounting and tax laws.",

      priv_sec7_title: "7. User Rights & Data Deletion",
      priv_sec7_p: "Under international privacy standards (GDPR, Google Play Guidelines, regional data protection laws), you have the right to access, rectify, port, or erase your personal information. You can delete your account directly inside the Car25 mobile application under the Menu screen, or visit our <a href=\"?mode=delete_account\" class=\"inline-link\">Account Deletion Portal</a>.",

      priv_sec8_title: "8. Children's Privacy",
      priv_sec8_p: "Car25 does not sell automotive products to or knowingly collect personal information from individuals under the age of 18 (or 13 depending on jurisdiction). If you believe a minor has registered an account, contact us immediately for prompt deletion.",

      priv_sec9_title: "9. Contact Us & Data Protection Officer",
      priv_sec9_p: "If you have questions, inquiries, or feedback regarding our privacy practices or data rights, please reach out to us:",
      priv_contact_email: "Email: mh.data2020@gmail.com",
      priv_contact_app: "Application: Car25 for Android (Google Play Store)",
      priv_contact_dev: "Developer: CodeB Team",

      // Terms Section Content
      terms_sec1_title: "1. Acceptance of Terms",
      terms_sec1_p: "By using the Car25 mobile application, you agree to comply with and be bound by these terms. If you do not agree, please do not use the application.",
      terms_sec2_title: "2. Automotive Parts Catalog & Purchases",
      terms_sec2_p: "All spare parts, specifications, and prices listed in Car25 are subject to availability. While we strive for maximum accuracy, users should verify compatibility with their vehicle model before finalizing orders.",
      terms_sec3_title: "3. Account Responsibility",
      terms_sec3_p: "You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.",

      // Footer
      footer_desc: "Car25 is your trusted mobile marketplace for automotive spare parts, tools, and accessories.",
      footer_links_title: "Legal & Compliance",
      footer_contact_title: "Support",
      footer_rights: "© 2026 Car25 (CodeB). All rights reserved.",
      footer_compliant_badge: "Built for Google Play Store Data Safety Compliance"
    },

    ar: {
      site_title_privacy: "سياسة الخصوصية — تطبيق Car25",
      site_title_delete: "طلب حذف الحساب والبيانات — تطبيق Car25",
      site_title_terms: "شروط الاستخدام — تطبيق Car25",
      nav_privacy: "سياسة الخصوصية",
      nav_delete: "حذف الحساب والبيانات",
      nav_terms: "شروط الاستخدام",
      lang_name: "English",
      app_package: "حزمة التطبيق: com.codeb.car25",
      badge_play_compliant: "معتمد لمتطلبات Google Play",
      badge_last_updated: "آخر تحديث: أكتوبر 2026",
      badge_app_version: "Car25 الإصدار 1.1.5",

      // Hero - Privacy
      hero_title_privacy: "سياسة الخصوصية لتطبيق Car25",
      hero_desc_privacy: "نوضح لك في تطبيق Car25 (المشار إليه بـ \"التطبيق\" أو \"نحن\") كيفية جمع وحماية واستخدام ومشاركة بياناتك الشخصية عند استخدامك لتطبيق قطع غيار السيارات وخدماتنا الرقمية.",

      // Hero - Delete Account
      hero_title_delete: "طلب حذف الحساب والبيانات المرتبطة",
      hero_desc_delete: "وفقاً لسياسات متجر Google Play الخاصة بسلامة بيانات المستخدم وحذف الحسابات، نمنحك التحكم الكامل في بياناتك الشخصية وإمكانية تقديم طلب حذف دائم لحسابك في أي وقت.",

      // Hero - Terms
      hero_title_terms: "الشروط والأحكام الخاصة بالتطبيق",
      hero_desc_terms: "يرجى قراءة هذه الشروط بعناية قبل استخدام تطبيق Car25 للهواتف الذكية ومنصتنا لتجارة قطع غيار السيارات.",

      // Sidebar
      sidebar_title: "فهرس الصفحة",
      sidebar_sec_overview: "1. نظرة عامة وهوية التطبيق",
      sidebar_sec_data_collected: "2. البيانات التي نجمعها",
      sidebar_sec_usage: "3. كيفية استخدام البيانات",
      sidebar_sec_third_party: "4. الأطراف والخدمات الخارجية",
      sidebar_sec_security: "5. حماية وأمن البيانات",
      sidebar_sec_retention: "6. مدة الاحتفاظ بالبيانات",
      sidebar_sec_user_rights: "7. حقوق المستخدم (الوصول والحذف)",
      sidebar_sec_children: "8. خصوصية الأطفال",
      sidebar_sec_contact: "9. التواصل وفريق الدعم",

      sidebar_del_overview: "1. الامتثال لسياسة المتجر",
      sidebar_del_what: "2. ما يتم حذفه مقابل ما يُحتفظ به",
      sidebar_del_app_steps: "3. خطوات الحذف من داخل التطبيق",
      sidebar_del_web_form: "4. نموذج طلب الحذف الإلكتروني",
      sidebar_del_faq: "5. الأسئلة الشائعة والجدول الزمني",

      sidebar_support_title: "هل تحتاج لمساعدة فورية؟",
      sidebar_support_desc: "فريق الدعم الفني متواجد لمساعدتك في إتمام طلباتك.",
      sidebar_support_email: "mh.data2020@gmail.com",

      // Delete Account Section Content
      del_card1_title: "الالتزام بسياسة حذف الحسابات في Google Play",
      del_card1_p1: "في تطبيق <strong>Car25</strong> (المطور بواسطة CodeB)، نتيح للمستخدمين حذف حساباتهم مباشرة من داخل التطبيق عبر الزر المخصص لذلك، كما نوفر هذا الرابط المباشر للويب لتمكين أي مستخدم مسجل من طلب حذف حسابه وبياناته حتى وإن لم يكن التطبيق مثبتاً لديه، وذلك التزاماً بسياسات متجر Google Play.",
      del_card1_callout: "إشعار سياسة Google Play: تُحذف جميع البيانات التعريفية والشخصية وبيانات تسجيل الدخول نهائياً في غضون 14 إلى 30 يوماً من التحقق من الطلب.",

      del_card2_title: "ماذا يحدث لبياناتك عند طلب الحذف؟",
      del_box_deleted_title: "بيانات يتم حذفها نهائياً وفوراً",
      del_item_account: "بيانات الحساب الشخصية (الاسم، البريد الإلكتروني، كلمة المرور المشفرة)",
      del_item_contacts: "أرقام الهواتف المسجلة ومعلومات الاتصال",
      del_item_addresses: "عناوين التوصيل المسجلة وإحداثيات الموقع الجغرافي (GPS)",
      del_item_cart: "عناصر سلة المشتريات، المفضلة، وسجل السيارات المحفوظة في مرآبك",
      del_item_tokens: "رموز الإشعارات (Push Tokens) ومعرف الإعلانات (AD_ID)",

      del_box_retained_title: "بيانات يُحتفظ بها وأسباب ذلك",
      del_item_tax: "فواتير وسجلات العمليات المالية المكتملة (يتم الاحتفاظ بها للامتثال للقوانين الضريبية والمحاسبية الرسمية ومكافحة الاحتيال)",
      del_item_legal: "سجلات الضمان والنزاعات السابقة (تُحفظ حتى انقضاء المدة القانونية المقررة نظاماً)",
      del_item_anon: "البيانات الإحصائية العامة غير المحددة للهوية والمجمعة لتحسين أداء النظام",

      del_card3_title: "الطريقة الأولى: الحذف المباشر عبر الزر داخل تطبيق Car25",
      del_step1_title: "فتح شاشة القائمة (Menu)",
      del_step1_desc: "افتح تطبيق Car25 على هاتفك وانتقل إلى شاشة 'القائمة' (Menu) من شريط التنقل السفلي.",
      del_step2_title: "الضغط على زر 'حذف الحساب'",
      del_step2_desc: "انزل لأسفل القائمة واضغط على زر 'حذف الحساب' (Delete account) المميز باللون الأحمر وأيقونة سلة المحذوفات.",
      del_step3_title: "تأكيد الحذف",
      del_step3_desc: "اقرأ رسالة التحذير واضغط على زر التأكيد وسيتم رفع طلب حذف الحساب فوراً إلى النظام.",

      del_card4_title: "الطريقة الثانية: تقديم طلب حذف الحساب عبر هذا الموقع",
      del_card4_desc: "في حال قمت بإلغاء تثبيت التطبيق أو واجهت صعوبة في الدخول، يمكنك تعبئة النموذج الرسمي أدناه لمعالجة طلبك فوراً من قبل فريق الخصوصية:",
      
      form_name_label: "الاسم الكامل المسجل",
      form_name_placeholder: "أدخل اسمك المسجل في التطبيق",
      form_email_label: "البريد الإلكتروني المسجل في الحساب *",
      form_email_placeholder: "مثال: user@example.com",
      form_phone_label: "رقم الهاتف المسجل",
      form_phone_placeholder: "مثال: +966 / +20 ...",
      form_reason_label: "سبب طلب حذف الحساب (اختياري)",
      form_reason_placeholder: "أخبرنا بالسبب (مثل: بيع السيارة، عدم الحاجة لقطع غيار، تكرار الحساب...)",
      form_confirm_checkbox: "أقر بأنني على علم بأن هذا الإجراء نهائي ولا يمكن التراجع عنه وسيترتب عليه حذف حسابي وبياناتي الشخصية وفق سياسة الاحتفاظ الموضحة.",
      form_btn_submit: "إنشاء تذكرة الحذف وإرسالها عبر البريد",
      form_btn_copy: "نسخ نص الطلب للحافظة",
      form_success_msg: "تم إنشاء طلب وتذكرة الحذف بنجاح! اضغط أدناه لإرسال الطلب تلقائياً عبر تطبيق بريدك أو إرساله إلى mh.data2020@gmail.com.",

      del_faq_title: "الأسئلة الشائعة حول حذف الحساب",
      faq1_q: "كم يستغرق تنفيذ حذف الحساب؟",
      faq1_a: "يتم إيقاف الحساب فور تأكيد الطلب، وتُحذف كافة البيانات الشخصية والتعريفية بشكل كامل خلال مدة أقصاها 14 إلى 30 يوماً.",
      faq2_q: "هل يمكنني التراجع عن حذف الحساب بعد تنفيذه؟",
      faq2_a: "لا، عملية الحذف نهائية وغير قابلة للاسترجاع. يمكنك دائماً إنشاء حساب جديد بنفس البريد في حال رغبت بالشراء منا مجدداً.",
      faq3_q: "ماذا لو كان لدي طلب شراء قيد الشحن أو التوصيل؟",
      faq3_a: "يجب اكتمال تسليم الطلبات الجارية أو إلغاؤها قبل إتمام حذف الحساب، وسيتواصل معك فريق خدمة العملاء للتأكد من ذلك.",

      // Privacy Policy Section Content
      priv_sec1_title: "1. نظرة عامة وهوية التطبيق",
      priv_sec1_p: "تحدد سياسة الخصوصية هذه كيفية قيام تطبيق <strong>Car25</strong> (المشار إليه بـ \"التطبيق\" أو \"نحن\")، وهي منصة تجارة إلكترونية متخصصة في بيع قطع غيار السيارات ومستلزماتها تابعة لفريق CodeB، بجمع البيانات الشخصية واستخدامها وحمايتها.",
      priv_sec1_callout: "باستخدامك أو تثبيتك لتطبيق Car25، فإنك تقر وتوافق على الممارسات والشروط الموضحة في سياسة الخصوصية هذه.",

      priv_sec2_title: "2. البيانات والمعلومات التي نقوم بجمعها",
      priv_sec2_p: "نقوم بجمع الحد الأدنى من البيانات الضرورية لمعالجة طلبات شراء وتوصيل قطع غيار السيارات وتقديم خدمات موثوقة:",
      th_category: "فئة البيانات",
      th_examples: "أمثلة على البيانات",
      th_purpose: "الغرض من الجمع",
      td_cat1: "البيانات الشخصية والتعريفية",
      td_ex1: "الاسم الكامل، عنوان البريد الإلكتروني، رقم الهاتف، كلمة المرور المشفرة",
      td_pur1: "إنشاء الحساب، تسجيل الدخول، التحقق عبر رمز OTP، والتواصل بخصوص الطلبات",
      td_cat2: "بيانات التوصيل والعناوين",
      td_ex2: "عنوان الشحن، المدينة، الرمز البريدي، إحداثيات الخريطة (GPS)",
      td_pur2: "توصيل قطع الغيار بدقة وسرعة إلى موقع العميل عبر شركات الشحن",
      td_cat3: "البيانات المالية والمدفوعات",
      td_ex3: "سجل المشتريات، قيم الطلبات، الفواتير (تتم معالجة البطاقات بأمان عبر بوابة Stripe المعتمدة دون حفظ أرقام البطاقات لدينا)",
      td_pur3: "إتمام عملية الدفع والشراء، الفواتير، ومكافحة الاحتيال المالي",
      td_cat4: "بيانات الجهاز والتقنية",
      td_ex4: "طراز الهاتف، إصدار نظام التشغيل، عنوان IP، معرّف الإعلانات من Google (AD_ID)، سجلات الأخطاء",
      td_pur4: "استقرار التطبيق، إرسال إشعارات حالة الطلبات، والتحليلات الإحصائية",

      priv_sec3_title: "3. كيف نستخدم معلوماتك وبياناتك",
      priv_sec3_li1: "<strong>إتمام وتجهيز الطلبات:</strong> تجهيز قطع الغيار المطلوبة، وإصدار الفواتير، وإرسالها مع المناديب وشركات النقل.",
      priv_sec3_li2: "<strong>إدارة الحسابات:</strong> إدارة صلاحيات الدخول، وتأكيد الحسابات عبر OTP، وحفظ تفضيلات مركبات المستخدم.",
      priv_sec3_li3: "<strong>خدمة العملاء والدعم الفني:</strong> الرد على استفسارات توافق القطع مع موديل السيارة ومعالجة المرتجعات.",
      priv_sec3_li4: "<strong>الأمان والامتثال القانوني:</strong> حماية الحسابات من أي دخول مشبوه والالتزام بالأنظمة التجارية وحماية المستهلك.",

      priv_sec4_title: "4. الخدمات والأطراف الخارجية الشريكة",
      priv_sec4_p: "نتعامل مع مزودي خدمات موثوقين يلتزمون بأعلى معايير حماية البيانات:",
      priv_sec4_li1: "<strong>بوابة الدفع (Stripe):</strong> تُشفر وتُعالج بيانات الدفع مباشرة عبر معايير PCI-DSS دون تخزين بيانات بطاقاتك على خوادمنا.",
      priv_sec4_li2: "<strong>خدمات Google Play ومعرف الإعلانات (AD_ID):</strong> لتقديم تحديثات التطبيق، والإشعارات، والإعلانات المخصصة وفق سياسات Google.",
      priv_sec4_li3: "<strong>خدمات الخرائط وتحديد المواقع:</strong> لتحديد عنوان التسليم وتوجيه مندوب التوصيل.",
      priv_sec4_li4: "<strong>خوادم الاستضافة (apxprime.io):</strong> خوادم سحابية مؤمنة ومشفرة تستضيف واجهات برمجة التطبيقات وقاعدة بيانات المنتجات.",

      priv_sec5_title: "5. أمان وحماية البيانات",
      priv_sec5_p: "نطبق تدابير تقنية وتنظيمية متطورة، بما في ذلك التشفير الكامل لنقل البيانات (HTTPS / TLS)، وتشفير كلمات المرور (Salted Hashing)، والتحكم الصارم في صلاحيات الوصول للخوادم لحماية بياناتك من أي اختراق أو تسريب.",

      priv_sec6_title: "6. مدة الاحتفاظ بالبيانات",
      priv_sec6_p: "نحتفظ ببياناتك طالما كان حسابك نشطاً. عند طلبك حذف الحساب، يتم تطهير وحذف البيانات الشخصية وفق جدول الحذف الموضح، مع الاحتفاظ بالسجلات الضريبية والمحاسبية للفترات القانونية المفروضة نظاماً.",

      priv_sec7_title: "7. حقوق المستخدم وحذف البيانات",
      priv_sec7_p: "يحق لك في أي وقت الوصول إلى بياناتك الشخصية، أو تصحيحها، أو تصديرها، أو طلب حذفها نهائياً. يمكنك حذف حسابك مباشرة من داخل تطبيق Car25 عبر زر 'حذف الحساب' في شاشة القائمة، أو زيارة <a href=\"?mode=delete_account\" class=\"inline-link\">بوابة طلب حذف الحساب</a>.",

      priv_sec8_title: "8. خصوصية الأطفال والقُصّر",
      priv_sec8_p: "تطبيق Car25 مخصص للأشخاص البالغين المؤهلين قانوناً لشراء وتداول قطع غيار المركبات، ولا نجمع بيانات شخصية عن عمد من أي شخص يقل عمره عن 18 عاماً.",

      priv_sec9_title: "9. قنوات التواصل ومسؤول حماية البيانات",
      priv_sec9_p: "إذا كانت لديك أي استفسارات أو ملاحظات حول خصوصية بياناتك أو ترغب بممارسة حقوقك، تواصل معنا عبر:",
      priv_contact_email: "البريد الإلكتروني: mh.data2020@gmail.com",
      priv_contact_app: "التطبيق: Car25 لنظام Android (متجر Google Play)",
      priv_contact_dev: "المطور: فريق CodeB",

      // Terms Section Content
      terms_sec1_title: "1. الموافقة على الشروط",
      terms_sec1_p: "باستخدامك لتطبيق Car25، فإنك توافق على الالتزام بكافة الشروط والأحكام الموضحة هنا. إذا كنت لا توافق على هذه الشروط، يرجى التوقف عن استخدام التطبيق.",
      terms_sec2_title: "2. كتالوج قطع الغيار والطلبات",
      terms_sec2_p: "تخضع جميع قطع الغيار والأسعار المعروضة لمدى توافر المخزون. يرجى التأكد من مطابقة رقم القطعة ونوع وموديل سيارتك قبل إتمام عملية الدفع.",
      terms_sec3_title: "3. مسؤولية الحساب",
      terms_sec3_p: "أنت مسؤول عن الحفاظ على سرية بيانات حسابك وكلمة المرور وكافة الأنشطة التي تتم من خلاله.",

      // Footer
      footer_desc: "تطبيق Car25 هو وجهتك الموثوقة لشراء وتوصيل قطع غيار السيارات ومستلزماتها الأصلية والبديلة.",
      footer_links_title: "الشؤون القانونية",
      footer_contact_title: "المساعدة والدعم",
      footer_rights: "© 2026 Car25 (CodeB). جميع الحقوق محفوظة.",
      footer_compliant_badge: "مُصمم بالامتثال الكامل لسياسات أمان بيانات متجر Google Play"
    }
  };

  // State
  let currentLang = 'ar';
  let currentMode = 'privacy';
  let currentTheme = 'light';

  // DOM Elements
  const htmlEl = document.documentElement;
  const btnPrivacy = document.getElementById('btn-mode-privacy');
  const btnDelete = document.getElementById('btn-mode-delete');
  const btnTerms = document.getElementById('btn-mode-terms');
  const btnLang = document.getElementById('btn-lang-switch');
  const btnTheme = document.getElementById('btn-theme-switch');
  const btnPrint = document.getElementById('btn-print');
  const btnBackToTop = document.getElementById('btn-back-to-top');

  const secPrivacy = document.getElementById('section-privacy');
  const secDelete = document.getElementById('section-delete-account');
  const secTerms = document.getElementById('section-terms');

  const heroTitle = document.getElementById('hero-title');
  const heroDesc = document.getElementById('hero-desc');
  const heroBadgeMode = document.getElementById('hero-badge-mode');

  const sidebarPrivacy = document.getElementById('sidebar-nav-privacy');
  const sidebarDelete = document.getElementById('sidebar-nav-delete');

  // Deletion form elements
  const deleteForm = document.getElementById('delete-request-form');
  const formFeedback = document.getElementById('form-feedback');
  const btnCopyRequest = document.getElementById('btn-copy-request');

  /**
   * Parse query parameters from URL
   */
  function parseQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const modeParam = params.get('mode');
    const langParam = params.get('lang');

    if (langParam === 'en' || langParam === 'ar') {
      currentLang = langParam;
    } else {
      // Default to Arabic for this app, but if browser is English and no param, can fallback
      currentLang = 'ar';
    }

    if (modeParam === 'delete_account' || modeParam === 'delete' || modeParam === 'account_deletion') {
      currentMode = 'delete_account';
    } else if (modeParam === 'terms') {
      currentMode = 'terms';
    } else {
      currentMode = 'privacy';
    }
  }

  /**
   * Sync URL without page reload
   */
  function syncUrl() {
    const params = new URLSearchParams();
    params.set('mode', currentMode);
    params.set('lang', currentLang);
    const newUrl = window.location.pathname + '?' + params.toString();
    window.history.replaceState({ mode: currentMode, lang: currentLang }, '', newUrl);
  }

  /**
   * Apply Theme
   */
  function applyTheme(theme) {
    currentTheme = theme;
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('car25_policy_theme', theme);
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
      if (theme === 'dark') {
        themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />`;
      } else {
        themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />`;
      }
    }
  }

  /**
   * Apply Language
   */
  function applyLanguage(lang) {
    currentLang = lang;
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const dict = i18n[lang];

    // Document Title
    if (currentMode === 'delete_account') {
      document.title = dict.site_title_delete;
    } else if (currentMode === 'terms') {
      document.title = dict.site_title_terms;
    } else {
      document.title = dict.site_title_privacy;
    }

    // Translate elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.setAttribute('placeholder', dict[key]);
        } else {
          el.innerHTML = dict[key];
        }
      }
    });

    // Update Lang button text
    if (btnLang) {
      btnLang.textContent = dict.lang_name;
    }

    // Refresh Hero text based on active mode
    updateHeroText();
  }

  /**
   * Update Hero Text according to current mode & language
   */
  function updateHeroText() {
    const dict = i18n[currentLang];
    if (currentMode === 'delete_account') {
      heroTitle.textContent = dict.hero_title_delete;
      heroDesc.textContent = dict.hero_desc_delete;
      heroBadgeMode.textContent = dict.nav_delete;
      heroBadgeMode.className = 'hero-badge badge-play';
    } else if (currentMode === 'terms') {
      heroTitle.textContent = dict.hero_title_terms;
      heroDesc.textContent = dict.hero_desc_terms;
      heroBadgeMode.textContent = dict.nav_terms;
      heroBadgeMode.className = 'hero-badge badge-version';
    } else {
      heroTitle.textContent = dict.hero_title_privacy;
      heroDesc.textContent = dict.hero_desc_privacy;
      heroBadgeMode.textContent = dict.nav_privacy;
      heroBadgeMode.className = 'hero-badge badge-play';
    }
  }

  /**
   * Switch Active Mode
   */
  function switchMode(mode) {
    currentMode = mode;

    // Nav button active styles
    btnPrivacy.classList.toggle('active', mode === 'privacy');
    btnDelete.classList.toggle('active', mode === 'delete_account');
    if (btnTerms) btnTerms.classList.toggle('active', mode === 'terms');

    // Show/hide sections
    secPrivacy.style.display = mode === 'privacy' ? 'block' : 'none';
    secDelete.style.display = mode === 'delete_account' ? 'block' : 'none';
    if (secTerms) secTerms.style.display = mode === 'terms' ? 'block' : 'none';

    // Show/hide sidebar navigation
    if (sidebarPrivacy) sidebarPrivacy.style.display = mode === 'privacy' ? 'flex' : 'none';
    if (sidebarDelete) sidebarDelete.style.display = mode === 'delete_account' ? 'flex' : 'none';

    updateHeroText();
    syncUrl();

    // Scroll to top of content
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Handle Delete Request Generation
   */
  function handleFormSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('req-name').value.trim();
    const email = document.getElementById('req-email').value.trim();
    const phone = document.getElementById('req-phone').value.trim();
    const reason = document.getElementById('req-reason').value.trim();
    const confirmed = document.getElementById('req-confirm').checked;

    if (!email) {
      alert(currentLang === 'ar' ? 'يرجى إدخال البريد الإلكتروني المسجل' : 'Please provide your registered email address');
      return;
    }

    if (!confirmed) {
      alert(currentLang === 'ar' ? 'يرجى الموافقة على شروط الحذف' : 'Please check the confirmation box');
      return;
    }

    const ticketId = 'CAR25-DEL-' + Math.floor(100000 + Math.random() * 900000);
    const dateStr = new Date().toISOString().split('T')[0];

    const subject = encodeURIComponent(`[Account Deletion Request] - ${ticketId} - ${email}`);
    const bodyText = `ACCOUNT AND DATA DELETION REQUEST
----------------------------------------
Ticket Reference: ${ticketId}
Date: ${dateStr}
Application: Car25 (com.codeb.car25)
Registered Email: ${email}
Name: ${name || 'N/A'}
Phone: ${phone || 'N/A'}
Reason: ${reason || 'User Request'}
Confirmed Irreversible: YES
----------------------------------------
Please proceed with deleting my Car25 account and scrubbing my associated personal data in accordance with Google Play Store User Data & Account Deletion policies.`;

    const mailtoUrl = `mailto:mh.data2020@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;

    // Show feedback
    formFeedback.className = 'form-feedback success';
    const dict = i18n[currentLang];
    formFeedback.innerHTML = `
      <strong>${dict.form_success_msg}</strong>
      <div style="margin: 12px 0; font-family: monospace; background: var(--bg-card); padding: 10px; border-radius: var(--radius-sm); border: 1px dashed var(--border-color);">
        <strong>Ticket:</strong> ${ticketId}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Status:</strong> Generated &amp; Pending Dispatch
      </div>
      <div style="display: flex; gap: 10px; margin-top: 10px; flex-wrap: wrap;">
        <a href="${mailtoUrl}" class="btn btn-danger" style="padding: 8px 16px; font-size: 0.88rem;">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          ${currentLang === 'ar' ? 'فتح تطبيق البريد والإرسال' : 'Open Email Client & Send'}
        </a>
      </div>
    `;

    // Save payload for clipboard button
    window.__lastDeletionPayload = bodyText;
    btnCopyRequest.style.display = 'inline-flex';
  }

  function handleCopyPayload() {
    if (!window.__lastDeletionPayload) return;
    navigator.clipboard.writeText(window.__lastDeletionPayload).then(() => {
      alert(currentLang === 'ar' ? 'تم نسخ تفاصيل الطلب إلى الحافظة بنجاح!' : 'Deletion request copied to clipboard!');
    }).catch(() => {
      alert('Unable to copy to clipboard.');
    });
  }

  // Event Listeners
  btnPrivacy.addEventListener('click', () => switchMode('privacy'));
  btnDelete.addEventListener('click', () => switchMode('delete_account'));
  if (btnTerms) btnTerms.addEventListener('click', () => switchMode('terms'));

  btnLang.addEventListener('click', () => {
    const nextLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLanguage(nextLang);
    syncUrl();
  });

  btnTheme.addEventListener('click', () => {
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
  });

  if (btnPrint) {
    btnPrint.addEventListener('click', () => window.print());
  }

  if (deleteForm) {
    deleteForm.addEventListener('submit', handleFormSubmit);
  }

  if (btnCopyRequest) {
    btnCopyRequest.addEventListener('click', handleCopyPayload);
  }

  // Back to top scroll listener
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnBackToTop.classList.add('visible');
    } else {
      btnBackToTop.classList.remove('visible');
    }
  });

  btnBackToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', (e) => {
    parseQueryParams();
    applyLanguage(currentLang);
    switchMode(currentMode);
  });

  // Inline links with ?mode=
  document.addEventListener('click', (e) => {
    const target = e.target.closest('a[href*="mode="]');
    if (target) {
      const url = new URL(target.href, window.location.origin);
      const mode = url.searchParams.get('mode');
      if (mode) {
        e.preventDefault();
        switchMode(mode);
      }
    }
  });

  // Initialization
  function init() {
    // 1. Theme init
    const savedTheme = localStorage.getItem('car25_policy_theme');
    if (savedTheme) {
      applyTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      applyTheme('dark');
    } else {
      applyTheme('light');
    }

    // 2. Query param init
    parseQueryParams();

    // 3. Apply Language
    applyLanguage(currentLang);

    // 4. Apply Mode
    switchMode(currentMode);
  }

  init();
})();
