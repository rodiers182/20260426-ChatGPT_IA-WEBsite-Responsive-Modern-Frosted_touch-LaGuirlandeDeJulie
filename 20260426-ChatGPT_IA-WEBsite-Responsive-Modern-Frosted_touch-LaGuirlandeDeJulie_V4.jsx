import React from "react";
import { motion } from "framer-motion";

/*
  SITE VITRINE — LA GUIRLANDE DE JULIE
  Date : 26/05/2026
  Version : V4 premium claire
  Auteurs : Sylvain RD + ChatGPT 5.2
  Objectif : site vitrine moderne, minimaliste, responsive et orienté client local.

  Technologies utilisées :
  - React : structure du site en composants
  - Tailwind CSS : classes de style directement dans le HTML/JSX
  - Framer Motion : petites animations modernes au chargement et au scroll
*/

/* -------------------------------------------------------------------------- */
/* ANIMATIONS                                                                 */
/* -------------------------------------------------------------------------- */
// Animation générique utilisée sur plusieurs blocs : apparition douce vers le haut.
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

/* -------------------------------------------------------------------------- */
/* DONNÉES MODIFIABLES                                                        */
/* -------------------------------------------------------------------------- */
// Galerie d'images.
// Pour modifier les photos : remplacer les URLs ci-dessous par d'autres URLs d'images.
// Plus tard, dans un vrai projet Vite/React, tu pourras aussi utiliser des fichiers locaux placés dans /public/images.
const gallery = [
  "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80",
];

// Horaires d'ouverture affichés dans la section "Infos pratiques".
// Pour modifier un horaire, changer simplement le texte à droite du jour concerné.
const hours = [
  ["Lundi", "Fermé"],
  ["Mardi", "09h30 – 19h30"],
  ["Mercredi", "09h30 – 19h30"],
  ["Jeudi", "09h30 – 19h30"],
  ["Vendredi", "09h30 – 19h30"],
  ["Samedi", "09h30 – 19h30"],
  ["Dimanche", "09h30 – 13h00"],
];

/* -------------------------------------------------------------------------- */
/* COMPOSANT PRINCIPAL                                                        */
/* -------------------------------------------------------------------------- */
export default function LaGuirlandeDeJulieV4() {
  return (
    <main className="min-h-screen bg-[#f7f1ea] text-[#2b211d]">
      {/* ------------------------------------------------------------------ */}
      {/* HEADER / NAVIGATION                                                */}
      {/* ------------------------------------------------------------------ */}
      {/* Barre de navigation fixe en haut du site. */}
      {/* Elle contient le nom de la boutique, les liens vers les sections et le bouton d'appel. */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/70 px-5 py-3 shadow-sm backdrop-blur-xl">
          <a href="#accueil" className="font-semibold tracking-tight">La Guirlande de Julie</a>

          {/* Menu affiché sur tablette/ordinateur. Caché sur mobile pour garder un rendu propre. */}
          <div className="hidden gap-7 text-sm text-[#6f625b] md:flex">
            <a href="#savoir-faire" className="hover:text-[#2b211d]">Savoir-faire</a>
            <a href="#creations" className="hover:text-[#2b211d]">Créations</a>
            <a href="#infos" className="hover:text-[#2b211d]">Infos pratiques</a>
          </div>

          {/* Bouton d'appel direct. Sur mobile, c'est très important pour un commerce local. */}
          <a href="tel:0160844839" className="rounded-full bg-[#2b211d] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#4b3a33]">
            Appeler
          </a>
        </nav>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* HERO / PREMIÈRE SECTION                                            */}
      {/* ------------------------------------------------------------------ */}
      {/* Section la plus importante du site : elle doit expliquer en 5 secondes qui est la boutique et quoi faire ensuite. */}
      <section id="accueil" className="px-6 pb-20 pt-36 md:px-10">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Colonne gauche : texte principal + boutons d'action. */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.65 }}>
            <p className="mb-5 inline-flex rounded-full bg-[#ead8cf] px-4 py-2 text-sm font-medium text-[#6f4035]">
              Fleuriste à Brétigny-sur-Orge
            </p>

            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Des bouquets élégants pour les moments qui comptent.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f625b]">
              Bouquets sur mesure, compositions florales, mariages, hommages et attentions du quotidien — préparés avec soin au 16 Rue Anatole France.
            </p>

            {/* Appels à l'action principaux. */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="tel:0160844839" className="rounded-full bg-[#2b211d] px-7 py-3 text-center font-semibold text-white transition hover:bg-[#4b3a33]">
                Appeler la boutique
              </a>
              <a href="https://maps.google.com/?q=16 Rue Anatole France, 91220 Brétigny-sur-Orge" target="_blank" rel="noreferrer" className="rounded-full border border-[#d8c9bf] bg-white/60 px-7 py-3 text-center font-semibold transition hover:bg-white">
                Voir l’itinéraire
              </a>
            </div>
          </motion.div>

          {/* Colonne droite : grande image d'ambiance. */}
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75 }} className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[#ead8cf] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1400&q=80"
                alt="Bouquet de fleurs"
                className="h-[520px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SAVOIR-FAIRE                                                       */}
      {/* ------------------------------------------------------------------ */}
      {/* Présente les trois offres principales. Trois cartes suffisent : c'est clair, lisible et non surchargé. */}
      <section id="savoir-faire" className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9b6f63]">Savoir-faire</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Une composition juste, pour la bonne occasion.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Bouquets sur mesure", "Pour offrir, remercier, célébrer ou simplement faire plaisir."],
              ["Mariages & événements", "Des compositions harmonieuses pour sublimer les temps forts."],
              ["Deuil & hommages", "Des créations sobres et respectueuses pour accompagner l’essentiel."],
            ].map(([title, text]) => (
              <motion.div key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-[1.5rem] border border-[#e1d5cc] bg-white/65 p-7 shadow-sm backdrop-blur-xl">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-[#6f625b]">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* GALERIE / CRÉATIONS                                                */}
      {/* ------------------------------------------------------------------ */}
      {/* Galerie simple. Les images actuelles sont des images d'inspiration. */}
      {/* Pour un vrai site, il faudra idéalement utiliser les vraies photos de la boutique. */}
      <section id="creations" className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9b6f63]">Créations</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Aperçu floral</h2>
            </div>
            <p className="max-w-md text-[#6f625b]">Des visuels d’inspiration à remplacer ensuite par les vraies créations de la boutique.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((img, i) => (
              <motion.img
                key={img}
                src={img}
                alt={`Création florale ${i + 1}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="h-80 w-full rounded-[1.5rem] object-cover shadow-sm"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* INFOS PRATIQUES / CONTACT / HORAIRES                               */}
      {/* ------------------------------------------------------------------ */}
      {/* Section conversion : adresse, téléphone, boutons utiles et horaires. */}
      <section id="infos" className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_0.9fr]">
          {/* Bloc contact principal. */}
          <div className="rounded-[2rem] bg-[#2b211d] p-8 text-white shadow-xl md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#ead8cf]">Infos pratiques</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">La boutique</h2>

            <div className="mt-8 space-y-4 text-white/78">
              <p>📍 16 Rue Anatole France, 91220 Brétigny-sur-Orge</p>
              <p>📞 01 60 84 48 39</p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="tel:0160844839" className="rounded-full bg-white px-6 py-3 text-center font-semibold text-[#2b211d] transition hover:bg-[#f7f1ea]">Appeler</a>
              <a href="https://maps.google.com/?q=16 Rue Anatole France, 91220 Brétigny-sur-Orge" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-6 py-3 text-center font-semibold transition hover:bg-white/10">Itinéraire</a>
            </div>
          </div>

          {/* Bloc horaires. Les données viennent du tableau hours défini en haut du fichier. */}
          <div className="rounded-[2rem] border border-[#e1d5cc] bg-white/65 p-8 shadow-sm backdrop-blur-xl md:p-10">
            <h3 className="text-2xl font-semibold">Heures d’ouverture</h3>

            <div className="mt-6 divide-y divide-[#e1d5cc]">
              {hours.map(([day, time]) => (
                <div key={day} className="flex justify-between gap-6 py-3 text-sm">
                  <span className="font-medium">{day}</span>
                  <span className="text-[#6f625b]">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FOOTER                                                             */}
      {/* ------------------------------------------------------------------ */}
      {/* Pied de page simple. Ajouter ici les mentions légales quand le site sera mis en ligne. */}
      <footer className="border-t border-[#e1d5cc] px-6 py-8 text-center text-sm text-[#6f625b]">
        © 2026 La Guirlande de Julie — Fleuriste à Brétigny-sur-Orge
      </footer>
    </main>
  );
}
