import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          "header": {
            "home": 'home',
            "about": 'about',
            "works": 'works',
            "contact": 'contact',
          },
          "index": {
            "greeting": '👋Hi Folks!',
            "name": "I'm Muhammed Erdem",
            "profession": 'Front-end Engineer',
            "intro": "Specialized in front-end development but also like trying out other technologies in order to become more flexible",
            "button": 'know me',
            "web": "web development",
            "front": "frontend development",
            "design": "interaction design",
            "desktop": "desktop development"
          },
          "about": {
            "header1": 'Know me',
            "header2": 'About',
            "about": {
              "paragraph1": "I'm a Front-End Developer located in Turkey. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.",
              "paragraph2": "My main experience is in front-end development but I also have a passion for design. Given that producing a modern website requires the combination of design, server technology, and the layer that users interacts with. I believe having experience in both design and development allows for making the most optimal user experiences.",
              "paragraph3": "I've built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.",
              "paragraph4": "I'm a <1>CodePen</1> advocate and share attention-catching demos over on <1>Twitter</1>."
            },
            "hobbies": {
              "reading": "reading",
              "swimming": "swimming",
              "photography": "photography",
              "loves snow": "love snow",
              "flying": "flying",
              "sleeping": "sleeping",
              "biking": "biking"
            },
            "bestSkills": "best skills"
          },
          "works": {
            "header1": 'fantastic',
            "header2": "selected works"
          },
          "contact": {
            "quote": "Be who you needed when you were younger",
            "question": "Do you have a project?",
            "ready": "I'm ready for new projects",
            "talk": "Let's talk",
            "header1": "Let's talk",
            "header2": "contact",
            "form": {
              "name": "name",
              "email": "email",
              "message": "message"
            },
            "sendButton": "send message",
            "copied": "copied"
          }
        }
      },
      tr: {
        translation: {
          "header": {
            "home": 'Ev',
            "about": 'hakkımda',
            "works": 'İşler',
            "contact": 'temas',
          },
          "index": {
            "greeting": '👋Merhaba millet!',
            "name": 'ben muhammed erdem',
            "profession": 'Ön Uç Mühendisi',
            "intro": 'ön uç geliştirmede uzman ama ayni zamanda daha esnek olmak için diğer teknolojileri denemeyi seviyor.',
            "button": 'beni tanımıyorsun',
            "web": "web geliştirme",
            "front": "ön uç geliştirme",
            "design": "etkileşim dizayni",
            "desktop": "masaüstü geliştirme"
          },
          "about": {
            "header1": 'beni tanımıyorsun',
            "header2": 'hakkımda',
            "about": {
              "paragraph1": "Türkiye'de ikamet eden bir Front-End Developer'ım. Kullanıcı arabirimi efektleri, animasyonlar ve sezgisel, dinamik kullanıcı deneyimleri yaratma konusunda ciddi bir tutkum var.",
              "paragraph2": "Ana deneyimim ön uç geliştirmede ama aynı zamanda tasarım tutkum var. Modern bir web sitesi oluşturmanın tasarım, sunucu teknolojisi ve kullanıcıların etkileşime girdiği katmanın birleşimini gerektirdiği göz önüne alındığında. Hem tasarım hem de geliştirme konusunda deneyime sahip olmanın, en uygun kullanıcı deneyimlerini oluşturmaya izin verdiğine inanıyorum.",
              "paragraph3": "Hızlı, zarif ve erişilebilir kullanıcı deneyimlerine odaklanan pazarlama web sitelerinden karmaşık çözümlere ve kurumsal uygulamalara kadar dünyanın dört bir yanındaki şirketler ve işletmeler için ürünler geliştirdim.",
              "paragraph4": "Ben bir <1>CodePen</1> savunucusuyum ve <1>Twitter'da</1> dikkat çekici demolar paylaşıyorum."
            },
            "hobbies": {
              "reading": "okuma",
              "swimming": "yüzme",
              "photography": "fotoğrafçilik",
              "loves snow": "aşk kar",
              "flying": "uçan",
              "sleeping": "uyku",
              "biking": "bisiklet"
            },
            "bestSkills": "en iyi beceriler"
          },
          "works": {
            "header1": 'fantastik',
            "header2": "seçilmiş işler"
          },
          contact: {
            "quote": "Gençken ihtiyacın olan kişi ol",
            "question": "Bir projen var mı?",
            "ready": "Yeni projeler için hazırım",
            "talk": "Hadi Konuşalım",
            "header1": "Hadi Konuşalım",
            "header2": "temas",
            "form": {
              "name": "isim",
              "email": "e-posta",
              "message": "ileti"
            },
            "sendButton": "mesaj gönder",
            "copied": "kopyalanmis"
          }
        }
      }
    }
  });

export default i18n;
