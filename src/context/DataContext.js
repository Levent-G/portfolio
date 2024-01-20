import React, { useContext, createContext } from "react";
import react from "../assets/img/react.png";
import todoapp from "../assets/img/todoapp.PNG";
import notpad from "../assets/img/notpad.PNG";
import chat from "../assets/img/chat.PNG";
import stock from "../assets/img/stock.PNG";
import sepet from "../assets/img/sepet.PNG";
import gibteknoloji from "../assets/img/gibteknoloji.PNG";
import sosyalmedya from "../assets/img/sosyalmedya.PNG";
const Context = createContext();
export function DataContext({ children }) {
  const educationCardData = [
    {
      name: "PROJECT",
      value: "20",
    },
    {
      name: "lIVE",
      value: "5",
    },
    {
      name: "CERT",
      value: "25",
    },
  ];
  const myProjectData = [
    {
      imageURL: { react },
      title: "Social Media",
      title2: "Detail",
      title3: "React.js",
      title4:
        "It is a project that covers all the features of known social media projects.",
    },
    {
      imageURL: { react },
      title: "Chat",
      title2: "Detail",
      title3: "React.js",
      title4:
        "It is a chat application made using Firebase that allows chatting and has user login and logout.",
    },
    {
      imageURL: { react },
      title: "NotePad",
      title2: "Detail",
      title3: "React.js",
      title4:
        "It is an application with user input and output where you can add and delete notes.",
    },
    {
      imageURL: { react },
      title: "gibteknoloji",
      title2: "Detail",
      title3: "React.js",
      title4:
        "I converted the design of https://teknoloji.gib.gov.tr/teknoloji/ to react.js without changing it.",
    },
    {
      imageURL: { react },
      title: "todoapp",
      title2: "Detail",
      title3: "React.js",
      title4:
        "It is a Todo app application. Listing, adding and subtracting is an application.",
    },
    {
      imageURL: { react },
      title: "cart application",
      title2: "Detail",
      title3: "React.js",
      title4:
        "It is an application with user login and logout, where products are listed and we can add products to the cart.",
    },
    {
      imageURL: { react },
      title: "stock tracking",
      title2: "Detail",
      title3: "React.js",
      title4: "It is a stock tracking application",
    },
  ];

  const portfolioData = [
    {
      img: gibteknoloji,
      title:
        "I converted the design of https://teknoloji.gib.gov.tr/teknoloji/ to react.js without changing it.",
    },
    {
      img: sosyalmedya,
      title:
        "It is a project that covers all the features of known social media projects.",
    },
    {
      img: todoapp,
      title:
        "It is a Todo app application. Listing, adding and subtracting is an application.",
    },
    {
      img: notpad,
      title:
        "It is an application with user input and output where you can add and delete notes.",
    },
    {
      img: chat,
      title:
        "It is a chat application made using Firebase that allows chatting and has user login and logout.",
    },
    {
      img: stock,
      title: "It is a stock tracking application",
    },
    {
      img: sepet,
      title:
        "It is an application with user login and logout, where products are listed and we can add products to the cart.",
    },
  ];

  const skilssData = [
    {
      name: "HTML",
      value: 90,
    },
    {
      name: "CSS",
      value: 80,
    },
    {
      name: "JAVASCRIPT",
      value: 75,
    },
    {
      name: "REACT.JS",
      value: 85,
    },
    {
      name: "NEXT.JS",
      value: 10,
    },
    {
      name: "PHP",
      value: 25,
    },
    {
      name: "LARAVEL",
      value: 28,
    },
    {
      name: "JAVA",
      value: 40,
    },
    {
      name: "C#",
      value: 43,
    },
  ];

  const blogData = [
    {
      id: "1",
      blogBaslik: "Javascript Nedir",
      yazarName: " Levent ",
      blogTarihi: "26.11.2023",
      starts: 2.5,
      category: "react",
      blogIcerik:
        " __→__ Hem istemci hem sunucu tarafında geliştirme yapmak için kullanılan betik bir dildir. Web sayfalarını dinamik hale getirir ve animasyonlar click işlemlerini gerçekleştirmemizi sağlar.\r\n\r\n**NOT: BETİK DİL NEDİR ? Diğer programlama dilleri yazılan kodlar makine koduna çevrilip çıkan program doğrudan çalıştırılır (Compiler). Betik dillerinde interpreter ile doğrudan okunur ve yorumlanarak işlemler yorumlayıcı tarafından yapılır.** \r\n\r\n  __→__ Single-threaded (tek iş parçacığı) ile çalışır. \r\n\r\n **NOT: SİNGLE THREADED NEDİR ? Tek iş parçacığı anlamına gelir, javascriptte işlemler bellekte tutulur. Belleğimiz call stack ,heap ve querydir. Call stack işlemlerin alınıp işleme koyulduğu bellektir. Call stackta sadece 1 tane iş alınır yapılan işler stackten atılır. Her zaman tek iş call stackte tutulur. Bazı durumlarda heapte geçici olarak tutulup query ile sıraya alınıp tekrar tek iş olunca call stacke alınır.**\r\n \r\n\r\n\r\n\r\n __→__ Senkron yapıdadır. asenkron çalışır kodlar yukardan aşağı doğru okunur.*",
    },

    {
      id: "2",
      blogBaslik: "Veri Tipleri",
      yazarName: " Levent ",
      blogTarihi: "16.10.2023",
      category: "react",
      starts: 1.5,
      blogIcerik:
        " __→__ 	Primetive Veri Tipleri: Number, string , boolean, undefined, Null \r\n\r\n __→__ 	Referans Tipleri: Object , array, function. \r\n\r\n **Veri Tipleri Arasındaki Farklar**  \r\n\r\n __→__ 	En önemli farkları bellekte tutulma biçimleridir. \r\n\r\n __→__ 	Primetive tipler call stackte tutulurken, referans tiplerin referansı stackte değeri heapte tutulur. \r\n\r\n __→__ 	Primetive tiplerin değerleri stackte tututlurken, referans tiplerin referansı stackte tutulur. \r\n\r\n **Örnek: Bir arrayimiz ve bir değişkenimiz olsun. Arrayimiz bellekte arrayin ismi ile tutulurken, değişkenimiz değeri ile stackte tutulur.** ",
    },

    {
      id: "3",
      blogBaslik: "Call Stack ve Heap Nedir",
      yazarName: " Levent ",
      blogTarihi: "16.10.2023",
      starts: 3.5,
      category: "react",
      blogIcerik:
        " __→__ 	Bellekte bulunan mantıksal yapılardır. \r\n\r\n __→__ 	Stackte tutulan primitif (value type) çalışma zamanında önce (runtime) değerlerin bilinmesi gerekir. \r\n\r\n __→__ Stackte veriler üst üste tutulur (LIFO) ve sıra ile yapılır aradaki işlemler yapılmaz. \r\n\r\n __→__ Aralarındaki en büyük fark, heapte veriler karmaşık şekilde tutulurken, stackte artan ya da azalan adres mantığında (big and little endian) çalışır. \r\n\r\n __→__ Farklardan diğeri stackte veri hemen silirken heapte Garbage Collector (Çöp Toplayıcı) algoritmasına bağlıdır.  __→__ 	İki obje tanımlayıp bu iki objeyi birbirine eşitlersek eğer, heapte tek bir değer tutulur, yani iki obje tek obje gibi davranmaya çalışır.",
    },

    {
      id: "4",
      blogBaslik: "Event Loop Nedir",
      yazarName: " Levent ",
      blogTarihi: "16.10.2023",
      category: "react",
      starts: 2.5,
      blogIcerik:
        "__→__ 	Event loop, JavaScript’in birden fazla işlem şeklinde programlamasının arkasındaki sırdır. JS, tüm işlemleri tek bir iş parçacığı üzerinde yürütür, ancak birkaç akıllı veri yapısı kullanarak bize çoklu iş parçacığı **yanılsaması** verir. \r\n\r\n __→__ **Callback Queue:** Bir JavaScript uygulamasında, event loop tarafından işlenmesi bekleyen olayların saklandığı kuyruktur. Event loop, callback queue’yu kontrol eder ve işlenmesi gereken olayları işler",
    },

    {
      id: "5",
      blogBaslik: "Undefined ve Null Kavramları Nedir",
      yazarName: " Levent ",
      blogTarihi: "16.10.2023",
      category: "react",
      starts: 1.5,
      blogIcerik:
        "__→__ Undefined: Bir değişken tanımlanır fakat değer atanmaz ise değeri undefined olur. \r\n\r\n __→__ Null: Bir değişkene null değerini verirsek primetive tip olarak değil referans tiplerinden object olarak davranır. Bellekte de obje olarak tutulur. Tipi olmayan bir obje olarak. ",
    },

    {
      id: "6",
      blogBaslik: "Scope Kavramı Nedir",
      yazarName: " Levent ",
      blogTarihi: "16.10.2023",
      category: "javascript",
      starts: 3.5,
      blogIcerik:
        "__→__ Değişkenlerin ve fonksiyonların nerede erişebilir nerede erişilemez olduklarını belirler. \r\n\r\n __→__ **Global Scope:** Fonksiyon dışında tanımlanan bir değişkeninde fonksiyon içerisinde erişebilir durumudur.\r\n\r\n __→__ **Function Scope:** Fonksiyon içerisinde tanımlanan değişken sadece fonksiyon içerisinde erişilebilir. \r\n\r\n __→__ **Block Scope:** İf blokları gibi bloklar içerisinde tanımlanan bir değişken sadece o bloklar içerisinde erişilebilir.",
    },

    {
      id: "7",
      blogBaslik: "Var Let Const Kavramları Nedir",
      yazarName: " Levent ",
      blogTarihi: "16.10.2023",
      category: "javascript",
      starts: 2.5,
      blogIcerik:
        " **Variable Declaration:** Değer atamadan sadece değişken oluşturma işlemine Variable Declaration denilmektedir. \r\n\r\n **Variable Initialization:** Bir değişkene ilk değeri atama işlemine Variable Initialization denmektedir. \r\n\r\n **VAR VS LET** \r\n\r\n __→__ Var function scope özelliği taşırken let block scope özelliği taşımaktadır.(Süslü parantezler içerisinde erişilebilir)\r\n\r\n __→__ Var ile bir değişken tekrardan tanımlanabilir ve tekrardan değer ataması yapılabilir. Let ile tekrardan tanımlama yapılmaz fakat değer ataması yapılabilir. \r\n\r\n __→__  **Hoisting Durumu:** Js de kodlar yukardan aşağı doğru okunur fakat bir değişkeni önce kullanıp sonra tanımlayabiliriz. Kod derlenmeden önce değişken ve fonksiyon tanımlamaları scope’un başına alınır bu duruma denir. Var ile bu durum var let ile yoktur. \r\n\r\n **LET VS CONST** \r\n\r\n __→__ Const ile oluşturulan bir değişkene tekrardan değer ataması yapılamaz(Immutable) \r\n\r\n **NOT: Immutable durumu oluşturulan nesneye tekrardan değer atanmamasıdır. Bir nesne içerisindeki değerlere ekleme veya güncelleme yapılması bu duruma dahil değildir.**",
    },

    {
      id: "8",
      blogBaslik: "Gerçek Değerleri Kopyalamak",
      yazarName: " Levent ",
      blogTarihi: "16.10.2023",
      category: "javascript",
      starts: 1.5,
      blogIcerik:
        "__→__ **‘slice() metodu’** \r\n\r\n `Var hobbies =[‘sports’,’Cooking’];`\r\n\r\n `Var copiedHobbies = hobbies.slice();` \r\n\r\n __→__ **‘Spread Operator’** \r\n\r\n `Var hobbies =[‘sports’,’Cooking’];`\r\n\r\n `Var copiedHobbies= […hobbies];` \r\n\r\n __→__ **‘‘Object assign{}’’** \r\n\r\n `Var person ={name:’Gürol’};`\r\n\r\n `Var copiedPerson = Object.assign({},person);` ",
    },
    {
      id: "9",
      blogBaslik: "Arrow Function",
      yazarName: " Levent ",
      blogTarihi: "16.10.2023",
      category: "javascript",
      starts: 2.5,
      blogIcerik:
        "__→__ ES6 ile sunulan özelliktir. Fonksiyonları tanımlama yöntemini kısaltmaktır temel amacı.\r\n\r\n __→__ ES6 ile sunulan özelliktir. Fonksiyonları tanımlama yöntemini kısaltmaktır temel amacı.\r\n\r\n __→__ ()=>{} şeklinde gösterilir.\r\n\r\n __→__ Normal fonksiyonlar gibi geriye değer döndürmek için return kullanılır. Eğer tek satır ve süslü parantez kullanılmazsa return yazmadan yazılan değeri döndürür.\r\n\r\n  __→__ arguments Nesnesine ulaşamaz. \r\n\r\n **NOT:Arguments: bir fonksiyona parametre olarak gelen değerleri obje olarak gösterir.**",
      codeExample: `//Geleneksel fonksiyon tanımı
      function gelenekselFonksiyon(parametre) {
        return parametre * 2;
      }
      
      // Arrow fonksiyonu
      const arrowFonksiyon = (parametre) => parametre * 2; `,
    },
    {
      id: "10",
      blogBaslik: "Call Back Function",
      yazarName: " Levent ",
      blogTarihi: "16.10.2023",
      category: "javascript",
      starts: 3.5,
      blogIcerik:
        "__→__ En basit olarak herhangi bir  fonksiyona parametre olarak verdiğimiz ve sonra geri çağıracağımız fonksiyonlara denir.\r\n\r\n __→__ Elimizde iki fonksiyon olsun biri diğer fonksiyonu parametre olarak alıyor ve fonksiyon içerisinde bu callback fonksiyonu çağırıyoruz. \r\n\r\n __→__ Örnek olarak diziye elaman ekle fonksiyonu ve diziyi yazdır fonksiyonlarını düşünebiliriz. Ekle fonksiyonunu çağırıp parametre olarak yazdır fonksiyonu eklersek önce ekleme işlemi daha sonra yazdırma işlemi yapılmış olur.",
      codeExample: `
      // Callback fonksiyonu tanımı
      function hesapla(a, b, islemTamamlandiginda) {
        console.log("Hesaplanacak sayılar: $.{a} ve $.{b}");
        const sonuc = a + b;
        islemTamamlandiginda(sonuc);
      }

       // Callback fonksiyonunun kullanımı
      function islemTamamlandigindaCallback(sonuc) {
        console.log("İşlem tamamlandı. Sonuç: $.{sonuc}");
      }

      // Callback fonksiyonuyla hesaplama işlemi
        hesapla(3, 5, islemTamamlandigindaCallback);
      `,
    },
    {
      id: "11",
      blogBaslik: "Promise Function",
      yazarName: " Levent ",
      blogTarihi: "16.10.2023",
      category: "javascript",
      starts: 4.5,
      blogIcerik:
        "__→__ Bu fonksiyonlar, fonksiyonun sonucu olarak resolve(başarılı) ve rejected (başarısız) döndürür.\r\n\r\n __→__ 	Bir promise üç durumda olabilir, pending:ilk durum başarılı başarısız belli olmayan, fullfilled başarılı olarak bitmiş ve rejected başarısız olarak bitmiş.\r\n\r\n **NOT: Promise Chaining: Art artda yazılması gereken fonksiyonlarda kullanır. İlk fonkisyonun sonucu döndürüldükten sonra .then(result) dediğimizde ilk fonksiyonun döndürdüğü sonuç ile işlem yapabiliriz bu böyle devam edebilir.**",
      codeExample: `
      // Asenkron bir işlemi simüle eden bir fonksiyon
      function asenkronIslem() {
        return new Promise((resolve, reject) => {
      // Rasgele bir sayı üretelim
        const rasgeleSayi = Math.random();

      // Sayı 0.5'ten büyükse işlem başarılı kabul edilecek, aksi halde hata olacak
        if (rasgeleSayi > 0.5) {
          resolve("İşlem başarıyla tamamlandı.");
        } else {
         reject("İşlem başarısız oldu. Hata oluştu.");
        }
      });
    }

     // Promise'yi kullanma
     asenkronIslem()
      .then((sonuc) => {
       console.log("Başarı:", sonuc);
     })
     .catch((hata) => {
      console.error("Hata:", hata);
     });
      `,
    },
    {
      id: "12",
      blogBaslik: "Async-Await",
      yazarName: " Levent ",
      blogTarihi: "16.10.2023",
      category: "javascript",
      starts: 3.5,
      blogIcerik:
        "__→__ Async anahtar kelimesi fonksiyon sonucunun bir promise olduğunu belirtir. Await ise sonucu promise olan fonksiyonun bitmesini bekler.\r\n\r\n __→__ 	Yani async fonksiyonu promise yaparak asenkron yapı kullanmamızı sağlıyor. Await başka fonksiyonlarda olmaz sadece asenkron fonksiyonlarda çalışır.",
      codeExample: `
      // Asenkron bir işlemi simüle eden bir fonksiyon
function asenkronIslem() {
  return new Promise((resolve, reject) => {
    // Rasgele bir sayı üretelim
    const rasgeleSayi = Math.random();

    // Sayı 0.5'ten büyükse işlem başarılı kabul edilecek, aksi halde hata olacak
    setTimeout(() => {
      if (rasgeleSayi > 0.5) {
        resolve("İşlem başarıyla tamamlandı.");
      } else {
        reject("İşlem başarısız oldu. Hata oluştu.");
      }
    }, 1000); // 1 saniye sonra işlem sonuçlanacak
  });
}

// async fonksiyon tanımı
async function anaFonksiyon() {
  try {
    console.log("İşlem başlıyor...");

    // await ifadesi, bir promise'in tamamlanmasını bekler
    const sonuc = await asenkronIslem();
    console.log("Başarı:", sonuc);

    console.log("İşlem tamamlandı.");
  } catch (hata) {
    console.error("Hata:", hata);
  }
}

// async fonksiyonu çağırma
anaFonksiyon();
      `,
    },
    {
      id: "13",
      blogBaslik: "Ajax Ve JSON",
      yazarName: " Levent ",
      blogTarihi: "16.10.2023",
      category: "javascript",
      starts: 1.5,
      blogIcerik:
        "__→__ Ajax bir web sayfası içerisinde js kodu kullanarak arka planda veri alıp göndermemizi sağlar ve sayfa yenilenmeden veri güncelleştirmesini mümkün kılar.\r\n\r\n __→__ XHR objesini kullanarak arka planda  http istekleri yapmamızı sağlar.\r\n\r\n __→__ JSON veriyi düzenli bir şekilde dizgi olarak depolamak için kullanılır js nesneleri kolayca okunabilir ve kullanabilir.\r\n\r\n __→__ 	Bir JSON verisini JSON.parse() fonksiyonu ile kullabiliriz. \r\n\r\n __→__ XML verileri html formatına benzer şekilde yazar ve tutar fakat json daha okunabilir şekilde tutar.",
    },
    {
      id: "14",
      blogBaslik: "== Ve === Arasındaki Fark",
      yazarName: " Levent ",
      blogTarihi: "16.10.2023",
      category: "javascript",
      starts: 0.5,
      blogIcerik:
        "__→__ == ile iki değişken karşılaştırıldığında, değişkenlerin türleri farklı ya da aynı fakat değerleri aynı anlamına gelir. \r\n\r\n __→__ === ile iki değişken karşılaştırıldığında, değişkenlerin hem türü hem değeri aynı anlamına gelir.",
      codeExample: `
      let sayiDegeri = 5;
let stringDegeri = "5";

console.log(sayiDegeri == stringDegeri); // true
console.log(sayiDegeri === stringDegeri); // false

      `,
    },
    {
      id: "15",
      blogBaslik: "JSX Nedir",
      yazarName: " Levent ",
      blogTarihi: "16.10.2023",
      category: "javascript",
      starts: 1.5,
      blogIcerik:
        "__→__ JSX html yazımına benzer bir şekilde yazılır böylece html kodu yazar gibi yazarız fakat js kodu olarak işlenir.",
    },
    {
      id: "16",
      blogBaslik: "Object Ve Array Destructuring",
      yazarName: " Levent ",
      blogTarihi: "16.10.2023",
      category: "javascript",
      starts: 3.5,
      blogIcerik:
        "__→__ Destructuring obje ve array içinden her bir elemanın alınıp bir değişken içine kaydedilmesidir.",
      codeExample: `
      
Object ve Array destructuring, JavaScript'te veri yapısındaki öğeleri daha kolay bir şekilde çıkarmak ve kullanmak için kullanılan bir tekniktir. İşte hem Object hem de Array destructuring içeren bir örnek:

Object Destructuring Örneği:

// Bir obje tanımlayalım
const kullanici = {
  ad: 'John',
  soyad: 'Doe',
  yas: 30,
  eposta: 'john.doe@example.com'
};

// Object destructuring kullanarak obje öğelerini çıkaralım
const { ad, soyad, yas, eposta } = kullanici;

// Çıkarılan değerleri kullanalım
console.log("Ad: $.{ad}");
console.log("Soyad: $.{soyad}");
console.log("Yaş: $.{yas}");
console.log("E-posta: $.{eposta}");


//ARRAY DESTRUCTING
// Bir dizi tanımlayalım
const renkler = ['kırmızı', 'yeşil', 'mavi'];

// Array destructuring kullanarak dizi öğelerini çıkaralım
const [ilkRenk, ikinciRenk, ucuncuRenk] = renkler;

// Çıkarılan değerleri kullanalım
console.log("İlk Renk: $.{ilkRenk}");
console.log("İkinci Renk: $.{ikinciRenk}");
console.log("Üçüncü Renk: $.{ucuncuRenk}");
      `,
    },
    {
      id: "17",
      blogBaslik: "Rest Parametresi",
      yazarName: " Levent ",
      blogTarihi: "16.10.2023",
      category: "javascript",
      starts: 1.5,
      blogIcerik:
        "__→__ Destructuring gibi çalışır örneğin bir ’1,2,3,4,5,6’ dizisini parametre olarak bir fonksiyona verelim fonksiyonumuz parametreleri (a,b,...diğerleri) şeklinde alırsa a = 1 b = 2 ve diğerleri = 3 4 5 6 olur. Burada ki diğerleri bizim rest parametremiz .rest parametreleri sınırsız sayıda verilen parametrelerden istediğimiz, almamıza olanak sağlar.\r\n\r\n __→__	Dikkat edilmesi gereken 2 konu var biri rest parametre fonksiyonda son parametre olarak verilmeli örneğimizde (a,…diğerleri,b) şeklinde verilemez.\r\n\r\n __→__ İkinicisi ise bir tane rest parametresi olabilir (rest1, rest2) şeklinde olamaz.",
      codeExample:`
      // Rest parametresi kullanarak fonksiyon tanımı
function toplam(...sayilar) {
  let toplamDeger = 0;

  // Rest parametresi ile gelen sayıları topla
  for (let sayi of sayilar) {
    toplamDeger += sayi;
  }

  return toplamDeger;
}

// Rest parametresi ile fonksiyonu çağırma
const sonuc1 = toplam(1, 2, 3, 4, 5);
const sonuc2 = toplam(10, 20, 30);

console.log(sonuc1); // 15
console.log(sonuc2); // 60

      `
      },
    {
      id: "18",
      blogBaslik: "Higher Order Function",
      yazarName: " Levent ",
      blogTarihi: "16.10.2023",
      category: "javascript",
      starts: 4.5,
      blogIcerik:
        "__→__ Bir yada daha fazla fonksiyonu argüman olarak alan veya sonucu olarak bir fonksiyon döndüren fonksiyonlardır.",
      codeExample:`
      // Higher-order fonksiyon örneği
function toplamaFonksiyonu(x) {
  return function(y) {
    return x + y;
  };
}

// Higher-order fonksiyonu kullanma
const toplamaUc = toplamaFonksiyonu(3);

// Dönen fonksiyonu kullanma
const sonuc = toplamaUc(5);

console.log(sonuc); // 8

      `
      },
    {
      id: "19",
      blogBaslik: "Data Fetching Yöntemleri",
      yazarName: " Levent ",
      blogTarihi: "16.10.2023",
      category: "javascript",
      starts: 3.5,
      blogIcerik:
        "__→__ XMLHttpRequest veya fetch API kullanarak AJAK istekleri yapmak \r\n\r\n __→__ JSONP ile veri çekmek. \r\n\r\n __→__ node.js gibi server-side Js kullanarak veritabanından sorgu yapmak.",
    },
    {
      id: "20",
      blogBaslik: "Babel Nedir",
      yazarName: " Levent ",
      blogTarihi: "16.10.2023",
      category: "javascript",
      starts: 1.5,
      blogIcerik:
        "__→__ Eski tarayıcılar veya platformlar tarafından desteklenmeyen yeni js özelliklerini bu platform ve eski tarayıcılara anlaşılabilir hale getirmek için bir araç.",
    },
    {
      id:"21",
      blogBaslik:"useCallback Nedir",
      yazarName:"Levent",
      blogTarihi:"20.01.2024",
      category:"react",
      starts:3.5,
      blogIcerik:"__→__ Bir fonkisyonu belirli bir zaman aralığı içinde tekrar çalıştırmamak için kullanılan bir React hook'tur.\r\n\r\n __→__ Performansı arttırmak için kullanılır çünkü fonksiyon sadece değişen değişkenlerle birlikte terkrar çalıştırılır.\r\n\r\n __→__ Belirtilen fonksiyon çağırılmaz döndürülür. \r\n\r\n __→__ Belirtilen fonksiyon belirtilen değişkenler değişirse döndürülür. ",
      codeExample:`
      import React, { useState, useCallback } from 'react';

const App = () => {
  // State tanımlamaları
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // useCallback kullanarak bir fonksiyonu memoize etme
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]); // count bağımlılığı, handleIncrement fonksiyonunun sadece count değiştiğinde güncellenmesini sağlar

  // useCallback kullanarak bir fonksiyonu memoize etme
  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []); // Bağımlılık olmadan, bu fonksiyonun yalnızca ilk render sırasında tanımlanmasını sağlar

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>

      <br />

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
    </div>
  );
};

export default App;

      `
    },
    {
      id:"22",
      blogBaslik:"useMemo Nedir",
      yazarName:"Levent",
      blogTarihi:"20.01.2024",
      category:"react",
      starts:3.0,
      blogIcerik:"__→__ Belirli bir değerin sadece gerektiğinde tekrar çalıştırmak için kullanılan React hook'tur.\r\n\r\n __→__ Performansı arttırmak için kullanılır çünkü hesaplancak değer sadece gerektiğinde tekrar hesaplanır.\r\n\r\n __→__ useCallbackten farkı useCallback bir fonksiyon döndürürken useMemo bir değer döndürür. \r\n\r\n __→__ Belirtilen değişkenler değiştiğinde değişen değişkenlerle birlikte döndürülen değer tekrardan hesaplanıp değer döndürülür.",
      codeExample:`
      import React, { useState, useMemo } from 'react';

const App = () => {
  // State tanımlamaları
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  // useMemo kullanarak iki sayıyı toplama işlemi memoize etme
  const sum = useMemo(() => {
    console.log('Toplama işlemi hesaplanıyor...');
    return number1 + number2;
  }, [number1, number2]); // number1 veya number2 değiştiğinde, sum değeri güncellenir

  return (
    <div>
      <h1>Toplam: {sum}</h1>

      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(Number(e.target.value))}
      />

      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(Number(e.target.value))}
      />
    </div>
  );
};

export default App;

      `,
    },
    {
      id:"23",
      blogBaslik:"Promise ve Callback farkları Nedir",
      yazarName:"Levent",
      blogTarihi:"20.01.2024",
      category:"react",
      starts:4.0,
      blogIcerik:"**Callback fonksiyonun sorunları:**\r\n\r\n__→__ Callback'in beklenenden erken çağırılması\r\n\r\n __→__ Callback'in hiç çağırılmaması.\r\n\r\n__→__ Callback'in beklenenden az veya çok çağrılması.\r\n\r\n__→__ Gerekli parametreleri doğru bir şekilde almaması.\r\n\r\n__→__ Hataların yutulması.\r\n\r\n __→__ Promise, callbacklerin sıkıntılı yönlerini düzeltmek amacıyla önerilmiş bir yapıdır.\r\n\r\n **Promise fonksiyonlarının faydaları: ** \r\n\r\n __→__ Promise istenilen görevi yerine getirdiğinde değeri değişmez. **(immutable)** \r\n\r\n __→__ Sadece bir kere başarıya veya başarısıza ulaşır. \r\n\r\n __→__ Öngürülmeyen hatalar direkt başarısız sonucuna götürür. Hataları daha iyi kontrol edilir. \r\n\r\n __→__ Yapısı gereği gelcekteki bir değerin göstergesi olduğundan daha güvenilirdir. "
    },
    {
      id:"24",
      blogBaslik:"Promise Zincileri Nedir",
      yazarName:"Levent",
      blogTarihi:"20.01.2024",
      category:"react",
      starts:4.3,
      blogIcerik:"__→__ Zincir promiseler, biri diğerini bekleyen asenkron işlemlerin arka arkaya çalıştırılmasıdır. \r\n\r\n __→__ Promise yapısı gereği asenkrondur ve uygulamadaki bekleyen diğer kodların çalışmasını bekletmez. Bu nedenler zincir promiselerde sıralı asenkron işlemlerin birbirini beklemesi için kullanılır. ",
      codeExample:`
      // Asenkron bir işlemi simüle eden bir fonksiyon
function asenkronIslem1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Asenkron İşlem 1 Tamamlandı");
      resolve(1);
    }, 1000);
  });
}

// Asenkron bir işlemi simüle eden bir fonksiyon
function asenkronIslem2(deger) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Asenkron İşlem 2 Tamamlandı");
      resolve(deger + 2);
    }, 1000);
  });
}

// Asenkron bir işlemi simüle eden bir fonksiyon
function asenkronIslem3(deger) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Asenkron İşlem 3 Tamamlandı");
      resolve(deger * 2);
    }, 1000);
  });
}

// Promise zinciri örneği
asenkronIslem1()
  .then((sonuc1) => asenkronIslem2(sonuc1))
  .then((sonuc2) => asenkronIslem3(sonuc2))
  .then((sonuc3) => {
    console.log("Sonuç:", sonuc3);
  })
  .catch((hata) => {
    console.error("Hata:", hata);
  });

      `,
    },
    {
      id:"25",
      blogBaslik:"Promise Metodları Nedir",
      yazarName:"Levent",
      blogTarihi:"20.01.2024",
      category:"react",
      starts:2.2,
      blogIcerik:"__→__ **Promise.resolve():** Verilen değeri,başarılı sonuçlanmış promise haline getirir. \r\n\r\n __→__ **Promise.reject():** Verilen değer, hata mesajı olacak şekilde başarısız olmuş bir promise nesnesi döndürür. \r\n\r\n __→__ **Promise.all():** Paralel olarak gerçekleştirilen asenkron işlemlerin hepsinin bitip,bitmediği anlamak olarak denebilir.em bekleyen tüm işlemlerin bittiğinden emin olmak hem de bunu promise kullanarak yapabilmek Promise.all() ile mümkün. Dizideki tüm promise’ler başarılı(resolved) olduğunda tuttukları değerler de dizi halinde kullanıcıya döner. Eğer dizideki herhangi bir promise başarısız(rejected) olursa, Promise.all() sonucu oluşan promise de başarısız(rejected) olur. \r\n\r\n __→__ **Promise.race():** Bu metod ise promiselerden en hızlı sonuca ulaşanın sonucunu döndürür. ",
      codeExample:`
      // Anında başarıya ulaşan(resolve) promise nesnesi
const basarili = Promise.resolve(42);

// Anında başarısız olan(reject) promise nesnesi
const basarisiz = Promise.reject('Tüh ya');

// Promise'lerden oluşan bir dizinin gelecekteki değerlerinin 
// hepsinin başarılı sonuçlanması için oluşturulan promise nesnesi 
const tumIslerBitti = Promise.all([promise1, promise2, ...]);

// Promise dizisi içinden en hızlı başarılı/başarısız 
// olan değeri tutan promise nesnesi
const enHizliYapan = Promise.race(promiseDizisi)
      `,
    },
  ];
  const categories = [
    {
      name: "Javascript Nedir",
    },
    {
      name: "Veri Tipleri",
    },
    {
      name: "Call Stack ve Heap Nedir",
    },
    {
      name: "Event Loop Nedir",
    },
    {
      name: "Undefined ve Null Kavramları Nedir",
    },
    {
      name: "Scope Kavramı Nedir",
    },
    {
      name: "Var Let Const Kavramları Nedir",
    },
    {
      name: "Gerçek Değerleri Kopyalamak",
    },
    {
      name: "Arrow Function",
    },
    {
      name: "Call Back Function",
    },
    {
      name: "Promise Function",
    },
    {
      name: "Async-Await",
    },
    {
      name: "== Ve === Arasındaki Fark",
    },
    {
      name: "JSX Nedir",
    },
    {
      name: "Object Ve Array Destructuring",
    },
    {
      name: "Rest Parametresi",
    },
    {
      name: "Higher Order Function",
    },
    {
      name: "Data Fetching Yöntemleri",
    },
    {
      name: "Babel Nedir",
    },
    {
      name:"useCallback Nedir",
    },
    {
      name:"useMemo Nedir",
    },
    {
      name:"Promise Zincileri Nedir",
    },
    {
      name:"Promise Metodları Nedir",
    },
  ];

  return (
    <Context.Provider
      value={{
        educationCardData,
        myProjectData,
        skilssData,
        portfolioData,
        blogData,
        categories,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useData() {
  return useContext(Context);
}
