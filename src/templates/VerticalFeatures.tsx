import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Vends ton produit en un quelques secondes!⏱️"
    description="L'avantage de cette app, c'est qu'elle est simple à utiliser, meme grand'ma peut vendre sur ca 😼"
  >
    <VerticalFeatureRow
      title="Creer ton compte DeelZ"
      description="Inscris toi avec un nom d'utilsateur, ton email et ajoute un mot de passe securisé pour rejoindre la grande famille . Tu peut ajouter d'autres détails dans l'onglet profile"
      image="/assets/images/login.png"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Publie ton produit"
      description="Dans l'onglet vendre, ajoutes tous les details de ton produits y compris les images, le prix et ton contact. et click sur publier pour mettre en ligne ton produit."
      image="/assets/images/vendre.png"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Verifie ta publication"
      description={
        "Tu peux trouver tous tes produits publiés dans l'onglet 'Mes annonces' Tu peux y les supprimer aussitot  tu as vendu le produit. Bien-sur que tu vas les  vendre plus vite que tu ne le crois🤞🏽!"
      }
      image="/assets/images/mess.png"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
