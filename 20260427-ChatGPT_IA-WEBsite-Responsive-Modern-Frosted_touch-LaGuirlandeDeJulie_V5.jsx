import React from "react";
import { motion } from "framer-motion";

/*
  SITE VITRINE — LA GUIRLANDE DE JULIE
  Version : V5 premium claire
  Date : 27/04/2026
  Version : V4 premium claire
  Auteurs : Sylvain RD + ChatGPT 5.2
  Objectif : site vitrine moderne, minimaliste, responsive, local et plus professionnel.

  Nouveautés V5 :
  - Intégration du logo fourni par l'utilisateur.
  - Ajout d'une section formulaire de contact.
  - Ajout d'une mention RGPD simple sous le formulaire.
  - Conservation du design clair, premium et sobre de la V4.
  - Code commenté section par section pour faciliter la maintenance.

  Technologies utilisées :
  - React : structure du site en composants.
  - Tailwind CSS : classes de style directement dans le JSX.
  - Framer Motion : animations légères et modernes.

  IMPORTANT — LOGO :
  Dans un vrai projet Vite/React, placer le fichier logo ici :
  public/images/logo-la-guirlande-de-julie.png

  Puis le chemin utilisé dans le code sera :
  /images/logo-la-guirlande-de-julie.png
*/

/* -------------------------------------------------------------------------- */
/* ANIMATIONS                                                                 */
/* -------------------------------------------------------------------------- */
// Animation générique : apparition douce vers le haut.
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

/* -------------------------------------------------------------------------- */
/* DONNÉES MODIFIABLES                                                        */
/* -------------------------------------------------------------------------- */
// Chemin du logo.
// Pour que ça fonctionne dans le projet final :
// 1. Créer le dossier public/images
// 2. Y placer le logo sous le nom logo-la-guirlande-de-julie.png
const logoPath = "/images/logo-la-guirlande-de-julie.png";

// Galerie d'images.
// Les images actuelles sont des visuels d'inspiration.
// Recommandation : remplacer plus tard par des photos réelles de bouquets, compositions et intérieur de boutique.
const gallery = [
  "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80",
];

// Horaires d'ouverture affichés dans la section "Infos pratiques".
const hours = [
  ["Lundi", "Fermé"],
  ["Mardi", "09h30 – 19h30"],
  ["Mercredi", "09h30 – 19h30"],
  ["Jeudi", "09h30 – 19h30"],
  ["Vendredi", "09h30 – 19h30"],
  ["Samedi", "09h30 – 19h30"],
  ["Dimanche", "09h30 – 13h00"],
];

// Coordonnées de la boutique.
// Centraliser ces informations permet de les modifier facilement plus tard.
const shop = {
  name: "La Guirlande de Julie",
  city: "Brétigny-sur-Orge",
  address: "16 Rue Anatole France, 91220 Brétigny-sur-Orge",
  phone: "01 60 84 48 39",
  phoneHref: "tel:0160844839",
  mapsUrl: "https://maps.google.com/?q=16 Rue Anatole France, 91220 Brétigny-sur-Orge",
};

/* -------------------------------------------------------------------------- */
/* COMPOSANT PRINCIPAL                                                        */
/* -------------------------------------------------------------------------- */
export default function LaGuirlandeDeJulieV5() {
  return (
    <main className="min-h-screen bg-[#f7f1ea] text-[#2b211d]">
      {/* ------------------------------------------------------------------ */}
      {/* HEADER / NAVIGATION                                                */}
      {/* ------------------------------------------------------------------ */}
      {/* Barre de navigation fixe en haut du site. */}
      {/* Elle intègre maintenant le logo de la boutique en version compacte. */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/75 px-4 py-3 shadow-sm backdrop-blur-xl md:px-5">
          <a href="#accueil" className="flex items-center gap-3">
            {/* Logo compact dans le header. */}
            <img
              src={logoPath}
              alt="Logo La Guirlande de Julie"
              className="h-10 w-auto object-contain md:h-12"
            />
            <span className="hidden font-semibold tracking-tight sm:inline">{shop.name}</span>
          </a>

          {/* Menu affiché sur tablette/ordinateur. Caché sur mobile pour garder un rendu propre. */}
          <div className="hidden gap-7 text-sm text-[#6f625b] md:flex">
            <a href="#savoir-faire" className="hover:text-[#2b211d]">Savoir-faire</a>
            <a href="#creations" className="hover:text-[#2b211d]">Créations</a>
            <a href="#infos" className="hover:text-[#2b211d]">Infos pratiques</a>
            <a href="#contact" className="hover:text-[#2b211d]">Contact</a>
          </div>

          {/* Bouton d'appel direct. Très utile sur mobile pour un commerce local. */}
          <a href={shop.phoneHref} className="rounded-full bg-[#2b211d] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#4b3a33]">
            Appeler
          </a>
        </nav>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* HERO / PREMIÈRE SECTION                                            */}
      {/* ------------------------------------------------------------------ */}
      {/* Section principale : identité, promesse claire, actions principales. */}
      <section id="accueil" className="px-6 pb-20 pt-36 md:px-10">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Colonne gauche : logo principal + texte + boutons. */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.65 }}>
            {/* Logo principal. */}
            <img
              src={logoPath}
              alt="Logo La Guirlande de Julie"
              className="mb-8 h-auto w-64 max-w-full object-contain md:w-80"
            />

            <p className="mb-5 inline-flex rounded-full bg-[#ead8cf] px-4 py-2 text-sm font-medium text-[#6f4035]">
              Fleuriste à {shop.city}
            </p>

            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Des bouquets élégants pour les moments qui comptent.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f625b]">
              Bouquets sur mesure, compositions florales, mariages, hommages et attentions du quotidien — préparés avec soin au 16 Rue Anatole France.
            </p>

            {/* Appels à l'action principaux. */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={shop.phoneHref} className="rounded-full bg-[#2b211d] px-7 py-3 text-center font-semibold text-white transition hover:bg-[#4b3a33]">
                Appeler la boutique
              </a>
              <a href={shop.mapsUrl} target="_blank" rel="noreferrer" className="rounded-full border border-[#d8c9bf] bg-white/60 px-7 py-3 text-center font-semibold transition hover:bg-white">
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
      {/* Trois offres principales : clair, lisible, non surchargé. */}
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
      {/* Galerie simple. À remplacer idéalement par de vraies photos de la boutique. */}
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
      {/* INFOS PRATIQUES / HORAIRES                                         */}
      {/* ------------------------------------------------------------------ */}
      {/* Section conversion : adresse, téléphone, boutons utiles et horaires. */}
      <section id="infos" className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_0.9fr]">
          {/* Bloc contact principal. */}
          <div className="rounded-[2rem] bg-[#2b211d] p-8 text-white shadow-xl md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#ead8cf]">Infos pratiques</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">La boutique</h2>

            <div className="mt-8 space-y-4 text-white/78">
              <p>📍 {shop.address}</p>
              <p>📞 {shop.phone}</p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={shop.phoneHref} className="rounded-full bg-white px-6 py-3 text-center font-semibold text-[#2b211d] transition hover:bg-[#f7f1ea]">Appeler</a>
              <a href={shop.mapsUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-6 py-3 text-center font-semibold transition hover:bg-white/10">Itinéraire</a>
            </div>
          </div>

          {/* Bloc horaires. */}
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
      {/* FORMULAIRE DE CONTACT + MENTION RGPD                               */}
      {/* ------------------------------------------------------------------ */}
      {/*
        Formulaire volontairement simple et sobre.
        Important : dans cette version front-end, le formulaire n'envoie pas encore d'email.
        Pour le rendre fonctionnel, il faudra brancher un service comme Formspree, Netlify Forms,
        EmailJS, Resend, ou une API backend.

        Bonnes pratiques RGPD :
        - Ne demander que les informations nécessaires.
        - Rendre obligatoire uniquement ce qui est indispensable.
        - Indiquer clairement la finalité de collecte.
        - Indiquer la durée indicative de conservation.
        - Indiquer comment exercer ses droits.
        - Ajouter une case de consentement explicite.
      */}
      <section id="contact" className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Texte d'introduction du formulaire. */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9b6f63]">Contact</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Préparer une demande</h2>
            <p className="mt-6 leading-8 text-[#6f625b]">
              Pour une commande personnalisée, une composition particulière ou une demande événementielle, vous pouvez envoyer quelques informations à la boutique.
            </p>
            <p className="mt-4 leading-8 text-[#6f625b]">
              Pour une demande urgente, l’appel téléphonique reste le plus efficace.
            </p>
            <a href={shop.phoneHref} className="mt-7 inline-flex rounded-full bg-[#2b211d] px-7 py-3 font-semibold text-white transition hover:bg-[#4b3a33]">
              Appeler directement
            </a>
          </motion.div>

          {/* Formulaire visuel. */}
          <motion.form initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-[2rem] border border-[#e1d5cc] bg-white/70 p-6 shadow-sm backdrop-blur-xl md:p-8">
            <div className="grid gap-5">
              {/* Champ optionnel : le nom n'est pas strictement nécessaire, donc on le laisse optionnel. */}
              <label className="grid gap-2 text-sm font-medium">
                Nom ou prénom <span className="font-normal text-[#8a7b73]">optionnel</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Votre nom"
                  className="rounded-2xl border border-[#e1d5cc] bg-[#fdfaf6] px-5 py-4 font-normal outline-none transition placeholder:text-[#a99b92] focus:border-[#9b6f63]"
                />
              </label>

              {/* Champ obligatoire : nécessaire pour répondre si la personne ne donne pas son téléphone. */}
              <label className="grid gap-2 text-sm font-medium">
                Email <span className="text-[#9b6f63]">obligatoire</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="votre@email.fr"
                  className="rounded-2xl border border-[#e1d5cc] bg-[#fdfaf6] px-5 py-4 font-normal outline-none transition placeholder:text-[#a99b92] focus:border-[#9b6f63]"
                />
              </label>

              {/* Champ optionnel : utile pour un commerce local, surtout pour confirmer une commande. */}
              <label className="grid gap-2 text-sm font-medium">
                Téléphone <span className="font-normal text-[#8a7b73]">optionnel</span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="06 00 00 00 00"
                  className="rounded-2xl border border-[#e1d5cc] bg-[#fdfaf6] px-5 py-4 font-normal outline-none transition placeholder:text-[#a99b92] focus:border-[#9b6f63]"
                />
              </label>

              {/* Champ utile pour qualifier la demande. */}
              <label className="grid gap-2 text-sm font-medium">
                Type de demande <span className="font-normal text-[#8a7b73]">optionnel</span>
                <select
                  name="requestType"
                  className="rounded-2xl border border-[#e1d5cc] bg-[#fdfaf6] px-5 py-4 font-normal outline-none transition focus:border-[#9b6f63]"
                  defaultValue=""
                >
                  <option value="" disabled>Choisir une occasion</option>
                  <option value="bouquet">Bouquet sur mesure</option>
                  <option value="mariage">Mariage ou événement</option>
                  <option value="deuil">Deuil ou hommage</option>
                  <option value="autre">Autre demande</option>
                </select>
              </label>

              {/* Champ obligatoire : c'est le cœur de la demande. */}
              <label className="grid gap-2 text-sm font-medium">
                Message <span className="text-[#9b6f63]">obligatoire</span>
                <textarea
                  name="message"
                  required
                  placeholder="Décrivez votre besoin, la date souhaitée, les couleurs, le budget approximatif ou l’occasion."
                  className="min-h-36 rounded-2xl border border-[#e1d5cc] bg-[#fdfaf6] px-5 py-4 font-normal outline-none transition placeholder:text-[#a99b92] focus:border-[#9b6f63]"
                />
              </label>

              {/* Consentement RGPD. */}
              <label className="flex gap-3 rounded-2xl bg-[#f7f1ea] p-4 text-sm leading-6 text-[#6f625b]">
                <input type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-[#6f4035]" />
                <span>
                  J’accepte que les informations envoyées via ce formulaire soient utilisées uniquement pour répondre à ma demande.
                </span>
              </label>

              {/* Bouton d'envoi. Dans cette V5, il est visuel tant qu'aucun service d'envoi n'est branché. */}
              <button type="submit" className="rounded-full bg-[#2b211d] px-7 py-4 font-semibold text-white transition hover:bg-[#4b3a33]">
                Envoyer la demande
              </button>

              {/* Mention RGPD courte directement sous le formulaire. */}
              <p className="text-xs leading-6 text-[#7b6d65]">
                Les informations collectées via ce formulaire sont utilisées uniquement pour répondre à votre demande. Elles ne sont pas revendues ni transmises à des tiers. Elles sont conservées pendant une durée maximale indicative de 12 mois, sauf obligation légale contraire. Vous pouvez demander l’accès, la rectification ou la suppression de vos données en contactant directement la boutique.
              </p>
            </div>
          </motion.form>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FOOTER                                                             */}
      {/* ------------------------------------------------------------------ */}
      {/* Pied de page simple. Ajouter ici les liens Mentions légales et Politique de confidentialité quand les pages seront créées. */}
      <footer className="border-t border-[#e1d5cc] px-6 py-8 text-center text-sm text-[#6f625b]">
        © 2026 {shop.name} — Fleuriste à {shop.city}
        <span className="mx-2 hidden sm:inline">•</span>
        <span className="block sm:inline">Mentions légales & politique de confidentialité à ajouter avant mise en ligne publique.</span>
      </footer>
    </main>
  );
}
