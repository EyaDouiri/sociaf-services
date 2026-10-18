const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`
const local = (name) => `/images/services/${name}`

export const serviceImages = {
  // -- Keep Unsplash --
  'Solutions informatiques': img('photo-1551434678-e076c223a692'),
  'Transport & mobilité':   local('transport-mobilite.png'),
  // -- Local images --
  'Sécurité électronique':   local('surveillance.webp'),
  'Télécommunications':     local('telecom.jpg'),
  'Marketing digital':       local('digital-marketing.jpg'),
  'Services hôteliers':     local('services-hotelliers.jpg'),
  'Tourisme saharien':      local('tourisme-saharien.jpg'),
  'Commerce & importation': local('commerce-importation.jpg'),
  'Construction & Génie Civil': local('construction.webp'),
  'Réhabilitation & Rénovation': local('Réhabilitation.jpg'),
  'Finition & Aménagement': local('Finition.jpg'),
  'Fourniture de Matériels & Équipements': local('Fourniture.png'),
  // -- English keys (same files) --
  'Information Technology Solutions': img('photo-1551434678-e076c223a692'),
  'Transport & Mobility':   local('transport-mobilite.png'),
  'Electronic Security':   local('surveillance.webp'),
  'Telecommunications':     local('telecom.jpg'),
  'Digital Marketing':       local('digital-marketing.jpg'),
  'Hotel Services':     local('services-hotelliers.jpg'),
  'Saharan Tourism':      local('tourisme-saharien.jpg'),
  'Trade & Importation': local('commerce-importation.jpg'),
  'Construction & Civil Engineering': local('construction.webp'),
  'Rehabilitation & Renovation': local('Réhabilitation.jpg'),
  'Finishing & Fit-Out': local('Finition.jpg'),
  'Supply of Materials & Equipment': local('Fourniture.png'),
  // -- Arabic keys (same files) --
  'حلول تقنية':         img('photo-1551434678-e076c223a692'),
  'النقل والتنقل':      local('transport-mobilite.png'),
  'الأمن الإلكتروني':   local('surveillance.webp'),
  'الاتصالات':          local('telecom.jpg'),
  'التسويق الرقمي':     local('digital-marketing.jpg'),
  'الخدمات الفندقية':   local('services-hotelliers.jpg'),
  'السياحة الصحراوية':  local('tourisme-saharien.jpg'),
  'التجارة والاستيراد': local('commerce-importation.jpg'),
  'البناء والهندسة المدنية': local('construction.webp'),
  'إعادة التأهيل والتجديد': local('Réhabilitation.jpg'),
  'التشطيبات والتجهيز': local('Finition.jpg'),
  'توريد المواد والمعدات': local('Fourniture.png'),
}