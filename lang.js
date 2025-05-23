// lang.js - Updated multilingual support
const translations = {
  ru: {
    home: "Главная",
    services: "Услуги",
    contact: "Контакты",
    slogan: "СОВЕРШЕНСТВО ДОСТУПНО",
    heroTitle: "Ваш гид в мире медицины Грузии",
    heroSub: "Организация лечения, трансфера и проживания \u00abпод ключ\u00bb",
    ourServices: "Наши услуги",
    travel: "Логистика",
    travelDesc: "Бронирование билетов и отелей",
    rhino: "Медицинские услуги",
    rhinoDesc: "Медицина Европейского уровня",
    care: "Реабилитация",
    careDesc: "Послеоперационный уход и поддержка",
    contactUs: "Свяжитесь с нами",
    namePlaceholder: "Имя",
    emailPlaceholder: "Email",
    messagePlaceholder: "Сообщение",
    send: "Отправить"
  },
  en: {
    home: "Home",
    services: "Services",
    contact: "Contact",
    slogan: "PERFECTION IS ACCESSIBLE",
    heroTitle: "Your Guide to Medical Services in Georgia",
    heroSub: "End-to-End Treatment Planning and Accommodation",
    ourServices: "Our Services",
    travel: "Travel Logistics",
    travelDesc: "Flight and Hotel Booking",
    rhino: "Medical Services",
    rhinoDesc: "European-level Medicine",
    care: "Rehabilitation",
    careDesc: "Postoperative Care and Support",
    contactUs: "Contact Us",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Message",
    send: "Send"
  },
  de: {
    home: "Startseite",
    services: "Dienstleistungen",
    contact: "Kontakt",
    slogan: "VOLLKOMMENHEIT IST ERREICHBAR",
    heroTitle: "Ihr F\u00fchrer in der georgischen Medizin",
    heroSub: "Komplette Organisation von Behandlung und Unterkunft",
    ourServices: "Unsere Leistungen",
    travel: "Reiselogistik",
    travelDesc: "Flug- und Hotelbuchung",
    rhino: "Medizinische Dienstleistungen",
    rhinoDesc: "Medizin auf europ\u00e4ischem Niveau",
    care: "Rehabilitation",
    careDesc: "Postoperative Betreuung und Unterst\u00fctzung",
    contactUs: "Kontaktieren Sie uns",
    namePlaceholder: "Name",
    emailPlaceholder: "E-Mail",
    messagePlaceholder: "Nachricht",
    send: "Senden"
  }
};

document.addEventListener('DOMContentLoaded', () => changeLanguage('ru'));

function changeLanguage(lang) {
  if (!translations[lang]) return;

  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    const translation = translations[lang][key];

    if (translation) {
      if (element.placeholder !== undefined) {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    }
  });
}
