
/******************** تنويه *************************/

/*الغرض من ذكر الكلمات أدناه هو
 *  لمحاولة فلترة ومنع التعليقات المسيئة التي يقوم
 *  بعض المستخدمون بكتابتها في المدونات أو المواقع المختلفة
 * يُرجى المعذرة مسبقا
 */

 /**
  * أيضًا. تم تجاهل كتابة الكلمات أدناه بالطريقة الإملائية الصحيحة
  * كون الذين يكتبونها أصلا يتجاهلون هذه القواعد الإملائية
  */

/*
*****
هنا قائمة الكلمات النابية
والمسبات والألفاظ الخارجة المحتملة
لا تتردد في إضافة أي منها إلى القائمة أدناه
*****
*/

var words = ["👉👌",
"🖕",
" احا",
" احه",
" اير ",
" لعين",
" واطي",
"ابن ال",
"ابن المرا",
"ابن المرة",
"ابن النيك",
"ابن عاهر",
"ابن كلب",
"ابو شخة",
"ابو شخه",
"ابو فص",
"اجا معي",
"اجري فيك",
"احلي كث",
"احيه",
"اخو ال",
"اخو القحبه",
"افسخك",
"اقلب وجهك",
"الخرائ",
"الزب",
"السافل",
"الساقط",
"العايب",
"العربان",
"العرص",
"العمى",
"القحبة",
"الكحبة",
"الكحبه",
"الكس",
"الكلب",
"الله ياخ",
"انت عبيط",
"انت غبي",
"انذال",
"انذل",
"انعل ابو",
"انكح",
"انيك",
"انيكك",
"اهبل",
"اونطة",
"اونطه",
"اونطي",
"ايري ب",
"ايري ف",
"ايري",
"ايور",
"بزاز",
"بعبص",
"بعص",
"بغاي",
"بندوق",
"بهيمة",
"تافه",
"تجليخ",
"ترهيط",
"تزغيب",
"تسد بوزك",
"تفو",
"جلخ",
"جلق",
"حرامي",
"حقير",
"حلبتها",
"حلبتو",
"حلمات",
"حمير",
"حيوان",
"خرا",
"خراء",
"خراي عل",
"خراي",
"خرة",
"خرى",
"خري",
"خسيس",
"خنيث",
"خوازيق",
"خول",
"داشر",
"داعر",
"دعارة",
"دلخ",
"ديوث",
"ديود",
"زامل",
" زب",
"زبار",
"زبالة",
"زباله",
"زبر",
"زبه",
"زبي",
"زراط",
"زق",
"زناة",
"زناطير",
"ساذج",
"سارموتا",
"سافل",
"سربوط",
"سرموتا",
"سفالة",
"سكس",
"سكسي",
"سيكس",
"سيكسي",
"شرمها",
"شرموط",
"شرموطة",
"شرموطه",
"شلقة",
"شلكة",
"صايع",
"صياعة",
"ضرب عشرة",
"طز في",
"طيز",
"عاهر",
"عاهرة",
"عايبة",
"عبيط",
"عديم الشرف",
"عرص",
"عكروت",
"عيال الحرام",
"غبي",
"غتصب",
"فاجر",
"فاسق",
"فجور",
"فسختها",
"قحاب",
"قحب",
"قحبة",
"قذر",
"قضيب كبير",
"قضيبي",
"كحبة",
"كذاب",
"كس ",
"كس اختك",
"كس امك",
"كس عرضك",
"كسا",
"كسمك",
"كسمكم",
"كسها",
"كل خرا",
"كل خرة",
"كل زق",
"كلاب",
"كلب",
"كلخر",
"كلكم اولاد",
"كلكم ولاد",
"كول خر",
"لحس",
"لعنه",
"لقحاب",
"لوطي",
"مأجور",
"مبعوص",
"متخوزق",
"متناك",
"مجنون",
"مخانيث",
"مخنث",
"مدلس",
"معوهر",
"مفسوخ",
"مكسكس",
"مكوتها",
"ملعون",
"ممحون",
"منايك",
"منيك",
"منيوك",
"ناكك",
"نجس",
"نذل",
"نفضك",
"نفظك",
"نكت اخته",
"نكت امه",
"نياكة",
"نياكه",
"هاذي اختك",
"هاذي امك",
"هذي اختك",
"هذي امك",
"واحد اهبل",
"وسخ",
"ولد القحبة",
"ولد القحبه",
"يا ابن ال",
"يا اخوات ال",
"يا خوات ال",
"يا رخيص",
"يا زنديق",
"يا غبي",
"يا كافر",
"يا هبيلة",
"يا ولاد ال",
"يتناك",
"يجيب ضهرو",
"يخلع نيعك",
"يسود وجه",
"يزغب",
"يفضح",
"يفظح",
"يولاد ال",
"يلعن"];

/**
 * 
 * @param {*} words 
 * @param {*} text 
 * هذه الدالة لفحص إذا ما كان النص يحتوي على كلمات نابية أم لا
 */
function isDirty (text){

    /**
     * إزالة الهمزات
     * والتشكيل
     */
    text = text.replace ("أ","ا")
    .replace ("إ","ا")
    .replace ("ٌ","")
    .replace ("ُ","")
    .replace ("ً","")
    .replace ("َ","")
    .replace ("ٍ","")
    .replace ("ْ","")
    .replace ("ّ","")
    .replace ("ِ","");

    var x;
    for(x = 0; x < words.length; x++){
        if(text.indexOf(words[x]) > -1){
            return true;
        }
    }
    return false;
}
